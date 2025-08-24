"use client"

import {
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  Users,
  User,
  Clock,
  CheckCircle,
  Star,
  BookOpen,
  Brain,
  Shield,
  Zap,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const services = [
  {
    title: "Terapia Individual",
    description:
      "Sesiones personalizadas para abordar tus emociones y mejorar tu bienestar psicológico.",
    features: [
      "Evaluación psicológica inicial",
      "Plan de tratamiento adaptado a tus necesidades",
      "Técnicas prácticas para manejar emociones",
      "Seguimiento personalizado",
    ],
    duration: "50 minutos",
    price: "S/ 50 por sesión",
    icon: User,
    color: "#B8E0D2",
  },
  {
    title: "Terapia de Pareja",
    description:
      "Fortalece la relación, mejora la comunicación y resuelve conflictos en pareja.",
    features: [
      "Mejora de la comunicación",
      "Resolución de problemas recurrentes",
      "Reconstrucción de confianza",
      "Estrategias para fortalecer el vínculo",
    ],
    duration: "60 minutos",
    price: "S/ 90 por sesión",
    icon: Users,
    color: "#8FBAC8",
  },
  {
    title: "Terapia Familiar",
    description:
      "Sesiones orientadas a mejorar la convivencia y fortalecer la dinámica familiar.",
    features: [
      "Fomento de la comunicación positiva",
      "Resolución de conflictos familiares",
      "Dinámicas para fortalecer vínculos",
      "Orientación para padres",
    ],
    duration: "60 minutos",
    price: "S/ 120 por sesión",
    icon: Heart,
    color: "#C5E4F3",
  },
  {
    title: "Terapia Cognitivo-Conductual",
    description:
      "Enfoque práctico y eficaz para cambiar pensamientos y conductas que generan malestar.",
    features: [
      "Identificación de pensamientos negativos",
      "Técnicas de reestructuración cognitiva",
      "Entrenamiento en habilidades sociales",
      "Prevención de recaídas",
    ],
    duration: "50 minutos",
    price: "S/ 60 por sesión",
    icon: Brain,
    color: "#B8E0D2",
  },
  {
    title: "Mindfulness y Relajación",
    description:
      "Aprende a reducir el estrés y la ansiedad con técnicas efectivas de respiración y meditación.",
    features: [
      "Ejercicios de respiración consciente",
      "Meditación guiada",
      "Técnicas de relajación profunda",
      "Estrategias para reducir el estrés",
    ],
    duration: "45 minutos",
    price: "S/ 50 por sesión",
    icon: Target,
    color: "#8FBAC8",
  },
  {
    title: "Consulta Psicológica Online",
    description:
      "Sesiones por videollamada seguras y confidenciales desde cualquier lugar del Perú.",
    features: [
      "Plataforma segura y fácil de usar",
      "Flexibilidad de horarios",
      "Atención personalizada a distancia",
      "Misma calidad que presencial",
    ],
    duration: "50 minutos",
    price: "S/ 50 por sesión",
    icon: Shield,
    color: "#C5E4F3",
  },
];

const specializations = [
  {
    title: "Trastornos de Ansiedad",
    description:
      "Tratamiento especializado para ansiedad generalizada, ataques de pánico y fobias.",
    icon: Zap,
  },
  {
    title: "Depresión",
    description:
      "Acompañamiento profesional para superar la depresión y recuperar tu bienestar emocional.",
    icon: Heart,
  },
  {
    title: "Estrés Laboral",
    description:
      "Aprende estrategias efectivas para reducir el estrés y prevenir el agotamiento laboral.",
    icon: Target,
  },
  {
    title: "Problemas de Pareja",
    description:
      "Fortalece la comunicación y resuelve conflictos con apoyo profesional.",
    icon: Users,
  },
  {
    title: "Autoestima",
    description:
      "Recupera la confianza en ti mismo y mejora tu autovaloración personal.",
    icon: Star,
  },
  {
    title: "Duelo y Pérdida",
    description:
      "Acompañamiento psicológico en procesos de duelo y adaptación a cambios importantes.",
    icon: Shield,
  },
];


export default function ServiciosPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
              style={{ backgroundColor: "#D4FFF0" }}
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
              <a href="/servicios" className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg bg-white">
                Servicios
              </a>
              <a href="/contacto" className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg">
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
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-700 font-sans max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios psicológicos diseñados para apoyarte en tu camino hacia el bienestar
            emocional y el crecimiento personal
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="w-8 h-8" style={{ color: "#8FBAC8" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-serif" style={{ color: "#8FBAC8" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-700 font-sans text-sm leading-relaxed mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: "#8FBAC8" }} />
                        <span className="text-gray-700 font-sans text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 font-sans mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                      <span className="font-bold" style={{ color: "#8FBAC8" }}>
                        {service.price}
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full text-white py-3 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: "#FFAB65" }}
                  >
                    Agendar Cita
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specializations Section */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: "#8FBAC8" }}>
              Nuestras Especialidades
            </h2>
            <p className="text-gray-700 font-sans text-lg max-w-3xl mx-auto leading-relaxed">
              Contamos con experiencia especializada en diversas áreas de la salud mental
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#B8E0D2" }}
                >
                  <spec.icon className="w-6 h-6" style={{ color: "#8FBAC8" }} />
                </div>
                <h3 className="text-lg font-bold mb-2 font-serif" style={{ color: "#8FBAC8" }}>
                  {spec.title}
                </h3>
                <p className="text-gray-700 font-sans text-sm leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: "#8FBAC8" }}>
              Nuestro Proceso
            </h2>
            <p className="text-gray-700 font-sans text-lg max-w-3xl mx-auto leading-relaxed">
              Un enfoque estructurado para garantizar los mejores resultados en tu proceso terapéutico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#B8E0D2" }}
              >
                <span className="text-2xl font-bold font-serif" style={{ color: "#8FBAC8" }}>
                  1
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 font-serif" style={{ color: "#8FBAC8" }}>
                Evaluación Inicial
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Conocemos tu situación actual y establecemos objetivos claros para el tratamiento.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#8FBAC8" }}
              >
                <span className="text-2xl font-bold font-serif text-white">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2 font-serif" style={{ color: "#8FBAC8" }}>
                Plan Personalizado
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Diseñamos un plan de tratamiento específico adaptado a tus necesidades únicas.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#C5E4F3" }}
              >
                <span className="text-2xl font-bold font-serif" style={{ color: "#8FBAC8" }}>
                  3
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 font-serif" style={{ color: "#8FBAC8" }}>
                Sesiones Terapéuticas
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Trabajamos juntos aplicando técnicas especializadas para alcanzar tus objetivos.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#FFAB65" }}
              >
                <span className="text-2xl font-bold font-serif text-white">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2 font-serif" style={{ color: "#8FBAC8" }}>
                Seguimiento
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Monitoreamos tu progreso y ajustamos el tratamiento según sea necesario.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 py-16" style={{ backgroundColor: "#C5E4F3" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif" style={{ color: "#8FBAC8" }}>
            ¿Listo para dar el primer paso?
          </h2>
          <p className="text-gray-700 font-sans text-lg mb-8 leading-relaxed">
            Contáctanos hoy mismo para agendar tu primera consulta. Estamos aquí para acompañarte en tu camino hacia el
            bienestar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="text-white px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 text-base shadow-lg"
              style={{ backgroundColor: "#FFAB65" }}
            >
              Agendar Consulta
            </Button>
            <Button
              className="text-gray-700 px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 text-base shadow-lg bg-white border-2"
              style={{ borderColor: "#8FBAC8" }}
            >
              Más Información
            </Button>
          </div>
        </div>
      </div>

      {/* Improved Footer Responsivity */}
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
