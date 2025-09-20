"use client"
type SVGProps = React.SVGProps<SVGSVGElement>
import type React from "react"

import {
  Heart,
  Facebook,
  Instagram,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Zap,
  User,
  CheckCircle,
  Star,
  BookOpen,
  MessageCircle,
  Mic,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef, useMemo } from "react"
import Link from "next/link"
import { v4 as uuidv4 } from "uuid"
import ChatbotIntro from "@/components/ChatbotIntro"

const TikTokIcon = (props: SVGProps) => {
  const { className, ...rest } = props
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest} // <--- aquí se forwardean style, onClick, aria, etc.
    >
      {/* usa fill="currentColor" en el path para que herede `color` */}
      <path
        fill="currentColor"
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.20 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
      />
    </svg>
  )
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentContentSlide, setCurrentContentSlide] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentPublicationSlide, setCurrentPublicationSlide] = useState(0)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [messages, setMessages] = useState<{ type: "user" | "bot"; text: string }[]>([
    { type: "bot", text: "¡Hola! ¿En qué puedo ayudarte hoy?" },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [recognizing, setRecognizing] = useState(false)
  const recognitionRef = useRef<any>(null)
  const messagesRef = useRef<HTMLDivElement>(null)
  const userId = useMemo(() => uuidv4(), [])
  const carouselData = [
    {
      title: "BIENESTAR MENTAL",
      image: "/nature1.jpg",
    },
    {
      title: "APOYO PROFESIONAL",
      image: "/nature2.jpg",
    },
    {
      title: "CRECIMIENTO PERSONAL",
      image: "/nature3.jpg",
    },
  ]

  const contentSlides = [
    {
      title: "Recupera tu bienestar emocional",
      description:
        "Tienes Ansiedad, depresión o problemas de pareja. No estás solo, estamos aquí para ayudarte de nuevo!!",
      images: ["/woman-therapist-in-office-setting.png", "/therapy-session-with-two-women-talking.png"],
    },
    {
      title: "Terapia de pareja especializada",
      description:
        "Fortalece tu relación con herramientas profesionales. Comunicación efectiva y resolución de conflictos.",
      images: [
        "/comfortable-therapy-room-with-plants-and-soft-ligh.png",
        "/peaceful-meditation-space-with-natural-elements.png",
      ],
    },
    {
      title: "Apoyo en crisis emocionales",
      description:
        "Acompañamiento profesional en momentos difíciles. Estrategias para superar la ansiedad y depresión.",
      images: ["/psychology-therapy-office-with-warm-lighting.png", "/woman-therapist-in-office-setting.png"],
    },
  ]

  const publications = [
    {
      title: "5 Hábitos para reducir el estrés",
      image: "/image1.jpg",
      description: "Descubre técnicas efectivas para manejar el estrés diario",
    },
    {
      title: "3 señales de que tu cuerpo necesita un descanso",
      image: "/image2.jpg",
      description: "Aprende a reconocer cuando tu cuerpo te pide parar",
    },
    {
      title: "TÉCNICA 4-7-8",
      image: "/image3.jpg",
      description: "Thécnica de respiración para la relajación y el sueño",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [carouselData.length])

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      recognitionRef.current = new (window as any).webkitSpeechRecognition()
      recognitionRef.current.lang = "es-PE"
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false

      recognitionRef.current.onstart = () => {
        setRecognizing(true)
      }

      recognitionRef.current.onresult = (event: any) => {
        const texto = event.results[0][0].transcript.trim()
        if (texto) {
          setInputValue(texto)
          sendMessage()
        }
      }

      recognitionRef.current.onerror = (event: any) => {
        console.warn("❌ Error en reconocimiento:", event.error)
      }

      recognitionRef.current.onend = () => {
        setRecognizing(false)
      }
    } else {
      console.warn("⚠️ Este navegador no soporta reconocimiento de voz.")
    }
  }, [])

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const nextContentSlide = () => {
    setCurrentContentSlide((prev) => (prev + 1) % contentSlides.length)
  }

  const prevContentSlide = () => {
    setCurrentContentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length)
  }

  const nextPublicationSlide = () => {
    setCurrentPublicationSlide((prev) => (prev + 1) % publications.length)
  }

  const prevPublicationSlide = () => {
    setCurrentPublicationSlide((prev) => (prev - 1 + publications.length) % publications.length)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleMic = () => {
    if (recognitionRef.current) {
      if (!recognizing) {
        try {
          recognitionRef.current.start()
        } catch (err) {
          console.error("Error al iniciar reconocimiento:", err)
          setRecognizing(false)
        }
      } else {
        recognitionRef.current.stop()
      }
    }
  }

  const sendMessage = async () => {
    const mensaje = inputValue.trim()
    if (!mensaje) return

    setMessages((prev) => [...prev, { type: "user", text: mensaje }])
    setInputValue("")
    setIsTyping(true)

    try {
      const res = await fetch("https://chatbot-ug3i.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, mensaje }),
      })

      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: data.respuesta || "Lo siento, no pude procesar tu mensaje." },
      ])
    } catch (error) {
      setMessages((prev) => [...prev, { type: "bot", text: "Error de conexión con el servidor." }])
    } finally {
      setIsTyping(false)
    }
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="text-white text-center py-3 px-4" style={{ backgroundColor: "#FFAB65" }}>
        <p className="text-sm font-medium font-sans">"Un paso a la vez hacia tu mejor versión"</p>
      </div>

      {/* Logo and Social Section */}
      <div className="bg-gray-50 px-4 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
            {/* Heart-Brain Logo */}
            <div className="relative flex-shrink-0">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h1 className="text-lg sm:text-2xl font-bold font-serif leading-tight" style={{ color: "#B8E0D2" }}>
                Camino hacia el bienestar
              </h1>
              <p className="text-xs sm:text-sm text-gray-700 font-medium font-sans">
                CONSULTORIO PSICOLÓGICO TERAPÉUTICO
              </p>
            </div>
          </div>
          <div className="flex gap-1 sm:gap-2 flex-shrink-0 justify-center">
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FFAB65" }}
            >
              <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FFAB65" }}
            >
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FFAB65" }}
            >
              <TikTokIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      <nav className="px-4 py-3" style={{ backgroundColor: "#B8E0D2" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <a
              href="/"
              className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md transform"
              style={{
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#D4FFF0"
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "none"
              }}
            >
              Inicio
            </a>
            <a
              href="/blog"
              className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md transform"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#D4FFF0"
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "none"
              }}
            >
              Blog
            </a>
            <a
              href="/nosotros"
              className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md transform"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#D4FFF0"
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "none"
              }}
            >
              Nosotros
            </a>
            <a
              href="/servicios"
              className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md transform"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#D4FFF0"
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "none"
              }}
            >
              Servicios
            </a>
            <a
              href="/contacto"
              className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md transform"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#D4FFF0"
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "none"
              }}
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ backgroundColor: "#D4FFF0" }}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
          </button>

          {/* Login Button - Responsive */}
          <Button
            className="text-gray-700 rounded-full px-3 sm:px-6 py-2 flex items-center gap-1 sm:gap-2 font-sans transition-all duration-300 hover:scale-105 transform text-sm sm:text-base focus:outline-none focus:ring-0"
            style={{
              backgroundColor: "#D4FFF0",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.backgroundColor = "#FFAB65"
              target.style.color = "white"
              target.style.transform = "translateY(-2px) scale(1.05)"
              target.style.boxShadow = "0 6px 20px rgba(255, 171, 101, 0.3)"
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.backgroundColor = "#D4FFF0"
              target.style.color = "#374151"
              target.style.transform = "translateY(0) scale(1)"
              target.style.boxShadow = "none"
            }}
            onClick={() => (window.location.href = "https://sistema-salud-frontend.onrender.com/")}
          >
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Iniciar Sesión</span>
            <span className="sm:hidden">Login</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-300">
            <div className="flex flex-col gap-2 pt-4">
              <a
                href="/"
                className="text-gray-700 font-medium font-sans px-4 py-3 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ backgroundColor: "#D4FFF0" }}
              >
                Inicio
              </a>
              <a
                href="/blog"
                className="text-gray-700 font-medium font-sans px-4 py-3 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ backgroundColor: "#D4FFF0" }}
              >
                Blog
              </a>
              <a
                href="/nosotros"
                className="text-gray-700 font-medium font-sans px-4 py-3 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ backgroundColor: "#D4FFF0" }}
              >
                Nosotros
              </a>
              <a
                href="/servicios"
                className="text-gray-700 font-medium font-sans px-4 py-3 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ backgroundColor: "#D4FFF0" }}
              >
                Servicios
              </a>
              <a
                href="/contacto"
                className="text-gray-700 font-medium font-sans px-4 py-3 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ backgroundColor: "#D4FFF0" }}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>
      <ChatbotIntro />
      <div className="relative h-96 overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={carouselData[currentSlide].image || "/placeholder.svg"}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover transition-opacity duration-1000"
          />

          {/* Navigation dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? "scale-125" : "hover:scale-110"
                  }`}
                style={{
                  backgroundColor: index === currentSlide ? "white" : "rgba(255,255,255,0.5)",
                  boxShadow: index === currentSlide ? "0 0 10px rgba(255,255,255,0.5)" : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-4 py-8 md:py-16 bg-white relative overflow-hidden">
        <div
          className="absolute top-16 md:top-32 left-4 md:left-32 w-24 h-20 md:w-72 md:h-56 rounded-full opacity-30"
          style={{ backgroundColor: "#8FBAC8" }}
        ></div>
        <div
          className="absolute top-20 md:top-40 right-4 md:right-96 w-32 h-24 md:w-80 md:h-64 rounded-full opacity-25"
          style={{ backgroundColor: "#B8E0D2" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <button
              onClick={prevContentSlide}
              className="hidden lg:flex w-12 h-12 rounded-full items-center justify-center transition-all duration-300 flex-shrink-0 hover:scale-110 hover:shadow-lg"
              style={{ backgroundColor: "#B8E0D2" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#D4FFF0")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#B8E0D2")}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-md xl:w-[500px] h-48 sm:h-56 lg:h-[280px] flex items-center justify-center gap-2 sm:gap-4">
              {/* First image - responsive sizing */}
              <div className="w-28 sm:w-32 lg:w-40 xl:w-48 h-36 sm:h-40 lg:h-48 xl:h-56 bg-gray-200 rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={contentSlides[currentContentSlide].images[0] || "/placeholder.svg"}
                  alt="Therapist in office"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Second image - responsive sizing */}
              <div className="w-36 sm:w-40 lg:w-52 xl:w-72 h-40 sm:h-44 lg:h-52 xl:h-64 bg-gray-200 rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={contentSlides[currentContentSlide].images[1] || "/placeholder.svg"}
                  alt="Therapy session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 w-full lg:ml-12 mt-6 lg:mt-0">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 font-serif text-center lg:text-left"
                style={{ color: "#8FBAC8" }}
              >
                {contentSlides[currentContentSlide].title}
              </h3>

              <div
                className="rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm relative"
                style={{ backgroundColor: "#C5E4F3" }}
              >
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-sans mb-4 lg:mb-6 text-center lg:text-justify">
                  {contentSlides[currentContentSlide].description}
                </p>

                <div className="flex justify-center">
                  <Button
                    onClick={() => (window.location.href = "/servicios")}
                    className="text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-sans hover:opacity-90 transition-opacity font-medium shadow-md text-sm sm:text-base"
                    style={{ backgroundColor: "#FFAB65" }}
                  >
                    Ver más
                  </Button>
                </div>
              </div>
            </div>

            <button
              onClick={nextContentSlide}
              className="hidden lg:flex w-12 h-12 rounded-full items-center justify-center transition-all duration-300 flex-shrink-0 hover:scale-110 hover:shadow-lg"
              style={{ backgroundColor: "#B8E0D2" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#D4FFF0")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#B8E0D2")}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="flex lg:hidden justify-center mt-6 gap-2">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentContentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentContentSlide ? "scale-125" : "hover:scale-110"
                  }`}
                style={{
                  backgroundColor: index === currentContentSlide ? "#8FBAC8" : "rgba(143,186,200,0.3)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 order-2 lg:order-1">
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-2 font-serif text-center lg:text-left"
                  style={{ color: "#FFAB65" }}
                >
                  Un poco sobre nosotros
                </h2>
                <h3
                  className="text-3xl sm:text-4xl font-bold mb-4 font-serif text-center lg:text-left"
                  style={{ color: "#B8E0D2" }}
                >
                  Camino hacia el bienestar
                </h3>
                <h4 className="text-lg font-bold mb-6 text-black font-sans tracking-wide text-center lg:text-left">
                  CONSULTORIO PSICOLÓGICO TERAPÉUTICO
                </h4>

                <div className="space-y-4 text-gray-700 font-sans leading-relaxed text-justify">
                  <p>
                    Somos un espacio dedicado a promover la salud emocional y mental, ofreciendo acompañamiento profesional para el manejo del estrés, la ansiedad, la depresión y otros retos psicológicos. Nuestro enfoque integral combina técnicas terapéuticas modernas —como la terapia cognitivo-conductual, humanística y sistémica— con un ambiente cálido y acogedor, adaptando cada proceso a las necesidades específicas de cada persona, su ritmo y sus circunstancias.
                  </p>
                  <p>
                    Además de la atención individual, de pareja y familiar, compartimos publicaciones, talleres y asesorías que brindan consejos prácticos, estrategias de autocuidado y orientación para reconocer señales que requieren apoyo. Creemos que la salud mental es clave para una vida plena, por lo que nos comprometemos a guiar a cada persona hacia un camino de equilibrio, resiliencia y bienestar integral.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center order-1 lg:order-2">
                <img src="/logo.png" alt="Logo" className="w-32 h-32 sm:w-40 sm:h-40 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Symptoms Identification Section */}
      <div className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: "#8FBAC8" }}>
              ¿Te identificas con alguno de estos síntomas?
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "#8FBAC8" }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Symptom Card 1 */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 pt-8 pb-2 flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#B8E0D2" }}
                >
                  <div className="relative">
                    <User className="w-10 h-10" style={{ color: "#8FBAC8" }} />
                    <Zap className="w-4 h-4 absolute -top-1 -right-1" style={{ color: "#8FBAC8" }} />
                    <Zap className="w-4 h-4 absolute -top-1 -left-1" style={{ color: "#8FBAC8" }} />
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#B8E0D2" }}>
                  <p className="text-gray-800 font-medium font-sans text-sm leading-relaxed">
                    Sientes que nada tiene sentido y te cuesta levantarte
                  </p>
                </div>
              </div>
            </div>

            {/* Symptom Card 2 */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 pt-8 pb-2 flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#B8E0D2" }}
                >
                  <Heart className="w-12 h-12 fill-current" style={{ color: "#8FBAC8" }} />
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#B8E0D2" }}>
                  <p className="text-gray-800 font-medium font-sans text-sm leading-relaxed">
                    Te domina la ansiedad, el miedo o la irritabilidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Symptom Card 3 */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 pt-8 pb-2 flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#B8E0D2" }}
                >
                  <div className="relative">
                    <User className="w-10 h-10" style={{ color: "#8FBAC8" }} />
                    <div
                      className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#8FBAC8" }}
                    >
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#B8E0D2" }}>
                  <p className="text-gray-800 font-medium font-sans text-sm leading-relaxed">
                    Estás en una relación que ya no fluye y no sabes qué hacer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: "#8FBAC8" }}>
              Beneficios de nuestros servicios psicoterapéuticos
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "#8FBAC8" }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 pt-8 pb-2 flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#B8E0D2" }}
                >
                  <User className="w-12 h-12" style={{ color: "#8FBAC8" }} />
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#B8E0D2" }}>
                  <p className="text-gray-800 font-medium font-sans text-sm leading-relaxed">
                    Especialistas capacitados
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 pt-8 pb-2 flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#B8E0D2" }}
                >
                  <CheckCircle className="w-12 h-12" style={{ color: "#8FBAC8" }} />
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#B8E0D2" }}>
                  <p className="text-gray-800 font-medium font-sans text-sm leading-relaxed">Costos accesibles</p>
                </div>
              </div>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 pt-8 pb-2 flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#B8E0D2" }}
                >
                  <Star className="w-12 h-12" style={{ color: "#8FBAC8" }} />
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#B8E0D2" }}>
                  <p className="text-gray-800 font-medium font-sans text-sm leading-relaxed">
                    Atención presencial y virtual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Publications Section */}
      <div className="px-4 py-16" style={{ backgroundColor: "#C5E4F3" }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Vertical stacked layout for header elements */}
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              <div className="inline-block px-10 py-5 rounded-full" style={{ backgroundColor: "#B8E0D2" }}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif">
                  Algunas de nuestras publicaciones
                </h2>
              </div>

              <div className="inline-block px-8 py-3 rounded-full" style={{ backgroundColor: "#8FBAC8" }}>
                <p className="text-white font-sans text-base md:text-lg">
                  Te invitamos a un espacio para ayudar tu mente y tu bienestar
                </p>
              </div>
            </div>

            <p className="text-gray-800 font-sans text-lg md:text-xl max-w-5xl mx-auto leading-relaxed">
              Encontrarás publicaciones con consejos, tips y síntomas que puedes reconocer y aprender a manejar para
              sentirte mejor cada día
            </p>
          </div>

          {/* Publications Carousel */}
          <div className="relative">
            <div className="flex items-center justify-center gap-6 md:gap-12">
              {/* Left Arrow */}
              <button
                onClick={prevPublicationSlide}
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg flex-shrink-0 z-10"
                style={{ backgroundColor: "#8FBAC8" }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#B8E0D2")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#8FBAC8")}
              >
                <ChevronLeft className="w-7 h-7 text-white" />
              </button>

              {/* Publications Cards */}
              <div className="flex gap-6 md:gap-10 overflow-visible">
                {/* Show 3 cards on desktop with center prominence, 1 on mobile */}
                <div className="hidden md:flex items-center gap-10 max-w-none">
                  {/* Left card - much larger size */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 border-4 border-white w-96 h-[28rem] hover:scale-105 hover:shadow-xl mb-6">
                      <div className="h-full bg-gray-100 relative rounded-3xl overflow-hidden">
                        <img
                          src={
                            publications[(currentPublicationSlide - 1 + publications.length) % publications.length]
                              .image || "/placeholder.svg"
                          }
                          alt={
                            publications[(currentPublicationSlide - 1 + publications.length) % publications.length]
                              .title
                          }
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => (window.location.href = "/blog")}
                      className="text-white px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 text-base shadow-lg"
                      style={{ backgroundColor: "#FFAB65" }}
                    >
                      Ver más
                    </Button>
                  </div>

                  {/* Center card - largest and most prominent */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 border-4 border-white w-[28rem] h-[32rem] transform scale-110 hover:scale-115 hover:shadow-2xl mb-8">
                      <div className="h-full bg-gray-100 relative rounded-3xl overflow-hidden">
                        <img
                          src={publications[currentPublicationSlide].image || "/placeholder.svg"}
                          alt={publications[currentPublicationSlide].title}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => (window.location.href = "/blog")}
                      className="text-white px-10 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 text-lg shadow-lg"
                      style={{ backgroundColor: "#FFAB65" }}
                    >
                      Ver más
                    </Button>
                  </div>

                  {/* Right card - much larger size */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 border-4 border-white w-96 h-[28rem] hover:scale-105 hover:shadow-xl mb-6">
                      <div className="h-full bg-gray-100 relative rounded-3xl overflow-hidden">
                        <img
                          src={
                            publications[(currentPublicationSlide + 1) % publications.length].image ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg"
                          }
                          alt={publications[(currentPublicationSlide + 1) % publications.length].title}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => (window.location.href = "/blog")}
                      className="text-white px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 text-base shadow-lg"
                      style={{ backgroundColor: "#FFAB65" }}
                    >
                      Ver más
                    </Button>
                  </div>
                </div>

                {/* Mobile view - single much larger card */}
                <div className="md:hidden w-full max-w-sm mx-auto">
                  <div className="flex flex-col items-center">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 border-4 border-white hover:scale-105 hover:shadow-xl mb-6">
                      <div className="h-80 bg-gray-100 relative rounded-3xl overflow-hidden">
                        <img
                          src={publications[currentPublicationSlide].image || "/placeholder.svg"}
                          alt={publications[currentPublicationSlide].title}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => (window.location.href = "/blog")}
                      className="text-white px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 text-lg shadow-lg"
                      style={{ backgroundColor: "#FFAB65" }}
                    >
                      Ver más
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextPublicationSlide}
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg flex-shrink-0 z-10"
                style={{ backgroundColor: "#8FBAC8" }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#B8E0D2")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#8FBAC8")}
              >
                <ChevronRight className="w-7 h-7 text-white" />
              </button>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex md:hidden justify-center mt-12 gap-3">
              {publications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPublicationSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentPublicationSlide ? "scale-125" : "hover:scale-110"
                    }`}
                  style={{
                    backgroundColor: index === currentPublicationSlide ? "#8FBAC8" : "rgba(143,186,200,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
            style={{ backgroundColor: "#FFAB65" }}
          >
            <div className="flex-shrink-0 order-1 sm:order-1">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-2xl overflow-hidden shadow-lg mx-auto">
                <img
                  src="/woman-therapist-in-office-setting.png"
                  alt="María López testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 order-2 sm:order-2 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-serif mb-4">
                Algunos de nuestros Testimonios
              </h2>
              <div className="space-y-3">
                <p className="text-white font-sans">
                  <strong>María López:</strong> “El servicio fue excelente, me sentí escuchada y comprendida en todo
                  momento. Recomiendo totalmente sus sesiones.”
                </p>
                <div className="flex gap-1 justify-center sm:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-white fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 order-3 sm:order-3">
              <Button
                className="px-6 py-2 rounded-full font-sans font-medium text-gray-700 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#C5E4F3" }}
              >
                Ir a sitio
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Promotions Section */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: "#8FBAC8" }}>
              Conoce un poco nuestras promociones
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "#8FBAC8" }}></div>
          </div>

          <div className="space-y-6">
            {/* Large horizontal promotion card */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-8">
                  <h3 className="text-2xl font-bold text-gray-800 font-serif mb-4">
                    Terapia Individual para tu Bienestar Emocional
                  </h3>
                  <p className="text-gray-600 font-sans mb-6 leading-relaxed">
                    Descubre un espacio seguro y profesional donde podrás trabajar en tu crecimiento personal y mejorar tu calidad de vida. 
                    La terapia individual está pensada para acompañarte en el manejo de la ansiedad, el estrés, la depresión y otros retos 
                    emocionales que pueden afectar tu día a día. En cada sesión tendrás la oportunidad de explorar tus pensamientos y 
                    emociones en un ambiente de confianza, guiado por un profesional que te brindará orientación y herramientas prácticas.
                    <br /><br />
                    Nuestro objetivo es ayudarte a comprender mejor lo que estás viviendo, fortalecer tu autoestima y construir nuevas 
                    formas de afrontar las dificultades. A través de un enfoque empático y adaptado a tus necesidades, podrás identificar 
                    patrones que limitan tu bienestar y aprender estrategias que promuevan cambios positivos. La terapia no solo busca 
                    aliviar síntomas, sino también impulsar tu desarrollo personal, para que logres una vida más equilibrada, plena y 
                    resiliente.
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/servicios")}
                    className="text-white px-8 py-3 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: "#FFAB65" }}
                  >
                    Ver más
                  </Button>
                </div>
                <div className="md:w-80 h-48 md:h-auto">
                  <img
                    src="/therapy-session-with-two-women-talking.png"
                    alt="Sesión de terapia individual"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Grid of smaller promotion cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left card with therapist image */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48">
                  <img
                    src="/woman-therapist-in-office-setting.png"
                    alt="Psicóloga en consulta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 font-serif mb-2">
                    Conoce a Nuestro Equipo Profesional
                  </h3>
                  <p className="text-gray-600 font-sans mb-4">
                    Psicólogos especializados comprometidos con tu bienestar emocional y crecimiento personal.
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/nosotros")}
                    className="w-full text-gray-700 py-3 rounded-full font-sans font-medium border-2 transition-all duration-300 hover:scale-105"
                    style={{ borderColor: "#8FBAC8", backgroundColor: "transparent" }}
                  >
                    Ver más
                  </Button>
                </div>
              </div>
              {/* Center column with two stacked cards */}
              <div className="space-y-6">
                {/* 2x1 promotion card */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 text-center" style={{ backgroundColor: "#C5E4F3" }}>
                    <h3 className="text-4xl font-bold mb-2" style={{ color: "#8FBAC8" }}>
                      2x1
                    </h3>
                    <p className="text-gray-800 font-serif font-bold mb-4">
                      ¡Aprovecha nuestra promoción en terapia de pareja!
                    </p>
                    <Button
                      onClick={() => (window.location.href = "/servicios")}
                      className="w-full text-gray-700 py-3 rounded-full font-sans font-medium border-2 transition-all duration-300 hover:scale-105"
                      style={{ borderColor: "#8FBAC8", backgroundColor: "white" }}
                    >
                      Ver más
                    </Button>
                  </div>
                </div>

                {/* Bottom center card */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 text-center" style={{ backgroundColor: "#C5E4F3" }}>
                    <h3 className="text-lg font-bold text-gray-800 font-serif mb-4">Taller de Manejo del Estrés</h3>
                    <p className="text-gray-600 font-sans mb-4">
                      Aprende técnicas efectivas para reducir el estrés y mejorar tu bienestar emocional.
                    </p>
                    <Button
                      onClick={() => (window.location.href = "/servicios")}
                      className="w-full text-gray-700 py-3 rounded-full font-sans font-medium border-2 transition-all duration-300 hover:scale-105"
                      style={{ borderColor: "#8FBAC8", backgroundColor: "white" }}
                    >
                      Ver más
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right column with two stacked cards */}
              <div className="space-y-6">
                {/* Top right card */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 text-center" style={{ backgroundColor: "#C5E4F3" }}>
                    <h3 className="text-lg font-bold text-gray-800 font-serif mb-2">
                      Taller de Inteligencia Emocional
                    </h3>
                    <p className="text-gray-600 font-sans mb-4">
                      Desarrolla habilidades para reconocer y gestionar tus emociones de manera efectiva.
                    </p>
                    <Button
                      onClick={() => (window.location.href = "/servicios")}
                      className="w-full text-gray-700 py-3 rounded-full font-sans font-medium border-2 transition-all duration-300 hover:scale-105"
                      style={{ borderColor: "#8FBAC8", backgroundColor: "white" }}
                    >
                      Ver más
                    </Button>
                  </div>
                </div>

                {/* Bottom right card */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 text-center" style={{ backgroundColor: "#C5E4F3" }}>
                    <h3 className="text-lg font-bold text-gray-800 font-serif mb-2">
                      Programa de Acompañamiento Familiar
                    </h3>
                    <p className="text-gray-600 font-sans mb-4">
                      Fortalece la comunicación y el vínculo entre los miembros de tu familia.
                    </p>
                    <Button
                      onClick={() => (window.location.href = "/servicios")}
                      className="w-full text-gray-700 py-3 rounded-full font-sans font-medium border-2 transition-all duration-300 hover:scale-105"
                      style={{ borderColor: "#8FBAC8", backgroundColor: "white" }}
                    >
                      Ver más
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orange Section with Professional Image */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
            style={{ backgroundColor: "#FFAB65" }}
          >
            {/* Texto principal */}
            <div className="flex-1 order-2 sm:order-1 text-center sm:text-left">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif leading-relaxed mb-4">
                  Tu bienestar emocional es nuestra prioridad
                </h2>
                <p className="text-white font-sans text-lg">
                  Conoce a nuestros profesionales y descubre cómo podemos acompañarte en cada etapa de tu vida.
                </p>
              </div>
            </div>

            {/* Imagen y botón */}
            <div className="flex-shrink-0 relative order-1 sm:order-2">
              <div className="w-40 h-28 sm:w-48 sm:h-32 bg-gray-200 rounded-2xl overflow-hidden shadow-lg mx-auto">
                <img
                  src="/professional-healthcare-worker-in-office.png"
                  alt="Psicóloga profesional en su consultorio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 sm:mt-6 flex justify-center">
                <Button
                  onClick={() => (window.location.href = "/nosotros")}
                  className="px-6 py-2 rounded-full font-sans font-medium text-gray-700 transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#C5E4F3" }}
                >
                  Conócenos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 py-6" style={{ backgroundColor: "#FFAB65" }}>
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-4 md:hidden">
            {/* Social Media Icons */}
            <div className="flex justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Facebook className="w-6 h-6" style={{ color: "#FFAB65" }} />
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="w-6 h-6" style={{ color: "#FFAB65" }} />
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <TikTokIcon className="w-6 h-6" style={{ color: "#FFAB65" }} />
              </div>
            </div>

            {/* Copyright Text */}
            <div className="text-center">
              <p className="text-white font-serif text-base font-medium">Copyright © 2024</p>
              <p className="text-white font-serif text-sm">Camino hacia el bienestar</p>
            </div>

            {/* Book Link */}
            <Link
              href="/reclamaciones"
              className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="text-center">
                <p className="text-white font-serif text-sm font-medium leading-tight">LIBRO DE RECLAMACIONES</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6" style={{ color: "#FFAB65" }} />
              </div>
            </Link>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Social Media Icons - Left */}
            <div className="flex gap-3 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Facebook className="w-6 h-6" style={{ color: "#FFAB65" }} />
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="w-6 h-6" style={{ color: "#FFAB65" }} />
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <TikTokIcon className="w-6 h-6" style={{ color: "#FFAB65" }} />
              </div>
            </div>

            {/* Copyright Text - Center */}
            <div className="flex-1 text-center px-4">
              <p className="text-white font-serif text-lg font-medium">Copyright © 2024 Camino hacia el bienestar</p>
            </div>

            {/* Book Logo and Text - Right */}
            <Link
              href="/reclamaciones"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <div className="text-right">
                <p className="text-white font-serif text-sm font-medium leading-tight">
                  LIBRO DE
                  <br />
                  RECLAMACIONES
                </p>
              </div>
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center">
                <BookOpen className="w-8 h-8" style={{ color: "#FFAB65" }} />
              </div>
            </Link>
          </div>
        </div>
      </footer>

      {isChatbotOpen && (
        <div
          className="fixed bottom-20 right-4 z-50 w-80 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200"
          style={{ height: "400px" }}
        >
          <div className="p-3 text-white font-bold text-center" style={{ backgroundColor: "#8FBAC8" }}>
            CaminoBot
          </div>
          <div ref={messagesRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[80%] ${msg.type === "user" ? "bg-blue-100 text-gray-800 ml-auto" : "bg-gray-200 text-gray-800 mr-auto"
                  }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="p-3 rounded-lg max-w-[80%] bg-gray-200 text-gray-800 mr-auto">
                <span className="dot-typing">...</span>
              </div>
            )}
          </div>
          <div className="flex items-center p-2 border-t border-gray-200 bg-white">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={recognizing ? "🎙️ Escuchando..." : "Escribe tu mensaje..."}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 mr-2"
              disabled={isTyping}
            />
            <button
              onClick={handleMic}
              className={`p-2 rounded-full transition-colors ${recognizing ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-gray-300 mr-1`}
              title="Hablar"
              style={{ display: "webkitSpeechRecognition" in window ? "flex" : "none" }}
            >
              <Mic className="w-5 h-5" />
            </button>
            <button
              onClick={sendMessage}
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              title="Enviar"
              disabled={isTyping || !inputValue.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
