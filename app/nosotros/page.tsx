"use client"

import {
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  Award,
  Users,
  Clock,
  Target,
  BookOpen,
  CheckCircle,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const teamMembers = [
  {
    name: "Dra. María González",
    title: "Psicóloga Clínica",
    specialization: "Terapia Cognitivo-Conductual",
    experience: "15 años de experiencia",
    description:
      "Especialista en trastornos de ansiedad y depresión. Comprometida con el bienestar integral de sus pacientes.",
    image: "/woman-therapist-in-office-setting.png",
  },
  {
    name: "Dr. Carlos Ruiz",
    title: "Psicólogo Clínico",
    specialization: "Terapia de Pareja",
    experience: "12 años de experiencia",
    description: "Experto en relaciones interpersonales y terapia familiar. Enfoque humanista y empático.",
    image: "/professional-healthcare-worker-in-office.png",
  },
  {
    name: "Lic. Ana López",
    title: "Psicóloga",
    specialization: "Mindfulness y Relajación",
    experience: "8 años de experiencia",
    description: "Especializada en técnicas de relajación y manejo del estrés. Certificada en mindfulness.",
    image: "/woman-therapist-in-office-setting.png",
  },
]

const values = [
  {
    icon: Heart,
    title: "Empatía",
    description: "Comprendemos y acompañamos cada proceso con calidez humana y profesionalismo.",
  },
  {
    icon: CheckCircle,
    title: "Confidencialidad",
    description: "Garantizamos un espacio seguro donde puedas expresarte con total confianza.",
  },
  {
    icon: Star,
    title: "Excelencia",
    description: "Nos comprometemos con la calidad y la mejora continua en nuestros servicios.",
  },
  {
    icon: Users,
    title: "Respeto",
    description: "Valoramos la diversidad y tratamos a cada persona con dignidad y respeto.",
  },
]

export default function NosotrosPage() {
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
              style={{ backgroundColor: "#D4FFF0" }}
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
              <a href="/nosotros" className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg bg-white">
                Nosotros
              </a>
              <a href="/servicios" className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg">
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif" style={{ color: "#8FBAC8" }}>
                Conoce nuestro equipo
              </h1>
              <p className="text-xl text-gray-700 font-sans leading-relaxed mb-8">
                Somos un grupo de profesionales comprometidos con tu bienestar emocional y crecimiento personal. Cada
                miembro de nuestro equipo aporta experiencia, calidez humana y dedicación para acompañarte en tu camino
                hacia una vida más plena.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold font-serif mb-2" style={{ color: "#8FBAC8" }}>
                    15+
                  </div>
                  <p className="text-gray-700 font-sans">Años de experiencia</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-serif mb-2" style={{ color: "#8FBAC8" }}>
                    500+
                  </div>
                  <p className="text-gray-700 font-sans">Pacientes atendidos</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/therapy-session-with-two-women-talking.png"
                  alt="Sesión de terapia"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-80"
                style={{ backgroundColor: "#FFAB65" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="rounded-3xl p-8 shadow-sm" style={{ backgroundColor: "#B8E0D2" }}>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#8FBAC8" }}
                >
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold font-serif" style={{ color: "#8FBAC8" }}>
                  Nuestra Misión
                </h2>
              </div>
              <p className="text-gray-800 font-sans text-lg leading-relaxed">
                Brindar servicios de psicología clínica de alta calidad, ofreciendo un espacio seguro y confidencial
                donde las personas puedan explorar sus emociones, superar desafíos y desarrollar herramientas para una
                vida más plena y equilibrada.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl p-8 shadow-sm" style={{ backgroundColor: "#C5E4F3" }}>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#8FBAC8" }}
                >
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold font-serif" style={{ color: "#8FBAC8" }}>
                  Nuestra Visión
                </h2>
              </div>
              <p className="text-gray-800 font-sans text-lg leading-relaxed">
                Ser reconocidos como un centro de referencia en salud mental, contribuyendo al bienestar de nuestra
                comunidad a través de la excelencia profesional, la innovación en tratamientos y el compromiso genuino
                con cada persona que confía en nosotros.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: "#8FBAC8" }}>
              Nuestros Valores
            </h2>
            <p className="text-gray-700 font-sans text-lg max-w-3xl mx-auto leading-relaxed">
              Los principios que guían nuestro trabajo y definen la calidad de nuestros servicios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#B8E0D2" }}
                >
                  <value.icon className="w-8 h-8" style={{ color: "#8FBAC8" }} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif" style={{ color: "#8FBAC8" }}>
                  {value.title}
                </h3>
                <p className="text-gray-700 font-sans text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: "#8FBAC8" }}>
              Nuestro Equipo Profesional
            </h2>
            <p className="text-gray-700 font-sans text-lg max-w-3xl mx-auto leading-relaxed">
              Profesionales especializados comprometidos con tu bienestar y crecimiento personal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-100"
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-serif" style={{ color: "#8FBAC8" }}>
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-sans font-medium mb-1">{member.title}</p>
                  <p className="text-sm text-gray-500 font-sans mb-2">{member.specialization}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 font-sans">{member.experience}</span>
                  </div>
                  <p className="text-gray-700 font-sans text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 py-16" style={{ backgroundColor: "#C5E4F3" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif" style={{ color: "#8FBAC8" }}>
            ¿Listo para comenzar tu camino hacia el bienestar?
          </h2>
          <p className="text-gray-700 font-sans text-lg mb-8 leading-relaxed">
            Nuestro equipo está aquí para acompañarte en cada paso. Agenda tu primera consulta y descubre cómo podemos
            ayudarte a alcanzar tus objetivos de bienestar emocional.
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
              Conocer Servicios
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
