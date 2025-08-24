"use client"

import type React from "react"

import {
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  BookOpen,
  MessageCircle,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    details: [
      "Condominios Los Girasoles",
      "Tercera Etapa, Comas - Lima",
      "Perú",
    ],
    color: "#B8E0D2",
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+51 927 455 359", "WhatsApp disponible", "RUC: 20614573873"],
    color: "#8FBAC8",
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "lynchpalominomarialuisa@gmail.com",
      "Respuesta en menos de 24 horas",
      "Página oficial: caminohaciaelbienestar.online",
    ],
    color: "#C5E4F3",
  },
  {
    icon: Clock,
    title: "Horarios",
    details: [
      "Lun - Vie: 9:00 AM - 6:00 PM",
      "Sáb: 9:00 AM - 2:00 PM",
      "Domingo: Citas especiales",
    ],
    color: "#FFAB65",
  },
];

const faqs = [
  {
    question: "¿Cómo puedo agendar una cita?",
    answer:
      "Puedes agendar tu cita escribiéndonos por WhatsApp al +51 927 455 359, llamando directamente, o completando el formulario en nuestra página web. Confirmamos disponibilidad en menos de 24 horas.",
  },
  {
    question: "¿Ofrecen consultas virtuales?",
    answer:
      "Sí, realizamos consultas psicológicas online a través de videollamada segura. Ideal si prefieres la comodidad de tu hogar o vives fuera de Lima.",
  },
  {
    question: "¿Cuál es el costo de las sesiones?",
    answer:
      "La consulta psicológica individual cuesta S/ 50 por sesión. También tenemos terapia de pareja y familiar con precios accesibles. Pregunta por nuestros paquetes y promociones.",
  },
  {
    question: "¿Manejan seguros médicos?",
    answer:
      "Por el momento no trabajamos con seguros médicos, pero ofrecemos precios accesibles y facilidades de pago.",
  },
  {
    question: "¿Qué debo esperar en la primera sesión?",
    answer:
      "En la primera sesión haremos una evaluación integral para conocer tu situación, establecer objetivos y diseñar un plan adaptado a tus necesidades.",
  },
];


export default function ContactoPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    setFormData({ nombre: "", email: "", telefono: "", servicio: "", mensaje: "" })
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
              <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
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
              style={{ backgroundColor: "#D4FFF0" }}
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
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg">
                Inicio
              </a>
              <a href="/blog" className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg">
                Blog
              </a>
              <a href="/nosotros" className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg">
                Nosotros
              </a>
              <a href="/servicios" className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg">
                Servicios
              </a>
              <a href="/contacto" className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg bg-white">
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="px-4 py-16" style={{ backgroundColor: "#C5E4F3" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif" style={{ color: "#8FBAC8" }}>
            Contáctanos
          </h1>
          <p className="text-xl text-gray-700 font-sans max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para apoyarte. Ponte en contacto con nosotros para agendar tu consulta o resolver cualquier
            duda que tengas
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-gray-100"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: info.color }}
                >
                  <info.icon className="w-8 h-8" style={{ color: "#8FBAC8" }} />
                </div>
                <h3 className="text-lg font-bold mb-3 font-serif" style={{ color: "#8FBAC8" }}>
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700 font-sans text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 font-serif" style={{ color: "#8FBAC8" }}>
                  Envíanos un mensaje
                </h2>
                <p className="text-gray-700 font-sans leading-relaxed">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible para agendar tu consulta.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-sans font-medium mb-2">Nombre completo</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#8FBAC8] focus:outline-none font-sans"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-sans font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#8FBAC8] focus:outline-none font-sans"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-sans font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#8FBAC8] focus:outline-none font-sans"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-sans font-medium mb-2">Servicio de interés</label>
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#8FBAC8] focus:outline-none font-sans"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="individual">Terapia Individual</option>
                      <option value="pareja">Terapia de Pareja</option>
                      <option value="familiar">Terapia Familiar</option>
                      <option value="cognitivo">Terapia Cognitivo-Conductual</option>
                      <option value="mindfulness">Mindfulness y Relajación</option>
                      <option value="online">Consulta Online</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-sans font-medium mb-2">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#8FBAC8] focus:outline-none font-sans resize-none"
                    placeholder="Cuéntanos brevemente sobre tu situación o qué te gustaría trabajar en terapia..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full text-white py-4 rounded-lg font-sans font-medium transition-all duration-300 hover:scale-105 text-base shadow-lg"
                  style={{ backgroundColor: "#FFAB65" }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 font-serif" style={{ color: "#8FBAC8" }}>
                  Nuestra ubicación
                </h2>
                <p className="text-gray-700 font-sans leading-relaxed">
                  Nos encontramos en una ubicación céntrica y de fácil acceso, con parqueadero disponible y transporte
                  público cercano.
                </p>
              </div>

              {/* Mapa interactivo */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <iframe
                  title="Ubicación Consultorio"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.851895734794!2d-77.05877862500002!3d-11.949883241477215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce3bb3a7db8f%3A0x3b6b8f87b39a8c1a!2sCondominios%20Los%20Girasoles%2C%20Comas%2C%20Lima!5e0!3m2!1ses-419!2spe!4v1692457600000!5m2!1ses-419!2spe"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: "#B8E0D2" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#8FBAC8" }}
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold font-serif" style={{ color: "#8FBAC8" }}>
                      WhatsApp
                    </h4>
                    <p className="text-gray-700 font-sans text-sm">Respuesta inmediata</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: "#C5E4F3" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#8FBAC8" }}
                  >
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold font-serif" style={{ color: "#8FBAC8" }}>
                      Citas de emergencia
                    </h4>
                    <p className="text-gray-700 font-sans text-sm">Disponibles 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: "#8FBAC8" }}>
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-700 font-sans text-lg leading-relaxed">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <h3 className="font-bold font-serif text-lg" style={{ color: "#8FBAC8" }}>
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                      expandedFaq === index ? "rotate-45" : ""
                    }`}
                    style={{ backgroundColor: "#B8E0D2" }}
                  >
                    <span className="text-xl font-bold" style={{ color: "#8FBAC8" }}>
                      +
                    </span>
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 font-sans leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 py-16" style={{ backgroundColor: "#C5E4F3" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif" style={{ color: "#8FBAC8" }}>
            ¿Listo para comenzar tu proceso de bienestar?
          </h2>
          <p className="text-gray-700 font-sans text-lg mb-8 leading-relaxed">
            No esperes más para cuidar tu salud mental. Contáctanos hoy y da el primer paso hacia una vida más plena y
            equilibrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="text-white px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 text-base shadow-lg"
              style={{ backgroundColor: "#FFAB65" }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar ahora
            </Button>
            <Button
              className="text-white px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 text-base shadow-lg"
              style={{ backgroundColor: "#8FBAC8" }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>

      <footer className="px-4 py-6" style={{ backgroundColor: "#FFAB65" }}>
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-4 md:hidden">
            {/* Social Media Icons */}
            <div className="flex gap-3 justify-center">
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
              <p className="text-white font-serif text-base font-medium">Copyright © 2024 Camino hacia el bienestar</p>
            </div>

            {/* Book Logo and Text */}
            <div className="flex items-center justify-center gap-3">
              <div className="text-center">
                <p className="text-white font-serif text-sm font-medium leading-tight">
                  LIBRO DE
                  <br />
                  RECOMENDACIONES
                </p>
              </div>
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center">
                <BookOpen className="w-8 h-8" style={{ color: "#FFAB65" }} />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Social Media Icons - Left */}
            <div className="flex gap-3">
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
            <div className="flex-1 text-center">
              <p className="text-white font-serif text-lg font-medium">Copyright © 2024 Camino hacia el bienestar</p>
            </div>

            {/* Book Logo and Text - Right */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-white font-serif text-sm font-medium leading-tight">
                  LIBRO DE
                  <br />
                  RECOMENDACIONES
                </p>
              </div>
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center">
                <BookOpen className="w-8 h-8" style={{ color: "#FFAB65" }} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
