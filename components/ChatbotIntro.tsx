"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { X, Sparkles, Send } from "lucide-react"
import Image from "next/image"

const mensajesIntro = [
  "👋 ¡Hola! Soy CaminoBot, tu asistente virtual.",
  "Estoy aquí para apoyarte si estás pasando por un momento difícil.",
  "¿Quieres que te cuente cómo funciona nuestro consultorio?",
]

function TypingEffect({ text, onComplete }: { text: string; onComplete: () => void }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 40)
      return () => clearTimeout(timer)
    } else {
      setTimeout(onComplete, 600)
    }
  }, [currentIndex, text, onComplete])

  return <span>{displayText}</span>
}

export default function ChatbotIntro() {
  const [step, setStep] = useState<"intro" | "bienvenida" | "preguntas" | "chat">("intro")
  const [indice, setIndice] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showButtons, setShowButtons] = useState(false)
  const [visible, setVisible] = useState(true)

  const [motivo, setMotivo] = useState("")
  const [nivel, setNivel] = useState("3")
  const [modalidad, setModalidad] = useState("virtual")

  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleTypingComplete = () => {
    setIsTyping(false)
    if (indice < mensajesIntro.length - 1) {
      setTimeout(() => {
        setIndice((prev) => prev + 1)
        setIsTyping(true)
      }, 800)
    } else {
      setTimeout(() => setShowButtons(true), 500)
    }
  }

  const handleSend = async (text?: string) => {
    const content = text || input.trim()
    if (!content) return
    setInput("")
    setMessages((prev) => [...prev, { sender: "user", text: content }])
    setLoading(true)

    try {
      const resp = await fetch("https://chatbot-ug3i.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: "demo_user", mensaje: content }),
      })
      const data = await resp.json()
      setMessages((prev) => [...prev, { sender: "bot", text: data.respuesta }])
    } catch (err) {
      console.error("❌ Error enviando mensaje:", err)
      setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ Hubo un problema al conectar." }])
    } finally {
      setLoading(false)
    }
  }

  const handlePreguntasSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const respuestas = { motivo, nivel, modalidad }
    localStorage.setItem("respuestas_iniciales", JSON.stringify(respuestas))

    try {
      const resp = await fetch("https://chatbot-ug3i.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: "demo_user",
          mensaje: JSON.stringify({
            tipo: "datos_iniciales",
            motivo,
            nivel,
            modalidad,
          }),
        }),
      })
      const data = await resp.json()
      setMessages([{ sender: "bot", text: data.respuesta }])
      setStep("chat")
    } catch (err) {
      console.error("❌ Error enviando datos iniciales:", err)
      setMessages([{ sender: "bot", text: "⚠️ Hubo un problema al conectar." }])
      setStep("chat")
    }
  }

  useEffect(() => {
    if (step === "chat" && messages.length === 0) {
      const saludo = `Gracias por confiar en mí 💙. 
  Estoy aquí para escucharte y acompañarte. 
  Cuéntame un poco más, ¿cómo te sientes hoy?`
      setMessages([{ sender: "bot", text: saludo }])
    }
  }, [step, messages])

  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl mx-4 p-8 overflow-hidden"
        >
          {/* Cerrar */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-red-100"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Paso Intro */}
          {step === "intro" && (
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                {mensajesIntro.slice(0, indice + 1).map((msg, i) => (
                  <div key={i} className="bg-gray-100 px-4 py-3 rounded-xl shadow-sm text-gray-800">
                    {i === indice && isTyping ? (
                      <TypingEffect text={msg} onComplete={handleTypingComplete} />
                    ) : (
                      msg
                    )}
                  </div>
                ))}
                {showButtons && (
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => setStep("bienvenida")}
                      className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-700"
                    >
                      <Sparkles className="w-4 h-4 inline mr-2" />
                      ¡Empezar!
                    </button>
                    <button
                      onClick={() => setVisible(false)}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300"
                    >
                      Más tarde
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center">
                <Image src="/robot.png" alt="CaminoBot" width={160} height={160} priority />
                <p className="mt-2 font-semibold text-blue-600">CaminoBot 🤖</p>
              </div>
            </div>
          )}

          {/* Paso Bienvenida */}
          {step === "bienvenida" && (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Bienvenido a Camino hacia el Bienestar 🌿</h1>
              <p className="text-gray-600 mb-4">
                Nuestra misión es acompañarte con un espacio seguro, confidencial y humano.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestra visión es ayudarte a encontrar las herramientas emocionales que necesitas
                para avanzar hacia tu bienestar.
              </p>
              <p className="text-gray-700 mb-6">
                Antes de empezar, responde unas preguntas rápidas para adaptar mejor mi apoyo.
              </p>
              <button
                onClick={() => setStep("preguntas")}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700"
              >
                Responder preguntas
              </button>
            </div>
          )}

          {/* Paso Preguntas */}
          {step === "preguntas" && (
            <form onSubmit={handlePreguntasSubmit} className="space-y-6">
              <div>
                <label className="block font-semibold mb-2">
                  ¿Cuál es el motivo principal por el que buscas ayuda?
                </label>
                <textarea
                  className="w-full p-3 border rounded-lg"
                  rows={3}
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">
                  En una escala del 1 al 5, ¿cómo describirías tu nivel de malestar?
                </label>
                <select
                  className="w-full p-3 border rounded-lg"
                  value={nivel}
                  onChange={(e) => setNivel(e.target.value)}
                >
                  <option value="1">1 - Muy bajo</option>
                  <option value="2">2 - Bajo</option>
                  <option value="3">3 - Medio</option>
                  <option value="4">4 - Alto</option>
                  <option value="5">5 - Muy alto</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-2">
                  ¿Prefieres atención virtual o presencial?
                </label>
                <select
                  className="w-full p-3 border rounded-lg"
                  value={modalidad}
                  onChange={(e) => setModalidad(e.target.value)}
                >
                  <option value="virtual">Virtual</option>
                  <option value="presencial">Presencial</option>
                </select>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700"
              >
                Continuar al chat
              </button>
            </form>
          )}

          {/* Paso Chat */}
          {step === "chat" && (
            <div className="flex flex-col h-[500px]">
              <div className="flex-1 overflow-y-auto space-y-3 p-4 border rounded-lg bg-gray-50">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`px-4 py-3 rounded-2xl shadow max-w-[75%] ${
                      m.sender === "user"
                        ? "ml-auto bg-blue-500 text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
                {loading && (
                  <div className="flex gap-2 items-center text-gray-400 text-sm px-4 py-2">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce delay-150">●</span>
                    <span className="animate-bounce delay-300">●</span>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              <div className="flex items-center gap-2 mt-4">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 border rounded-full px-4 py-3 bg-white shadow-sm"
                />
                <button
                  onClick={() => handleSend()}
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
