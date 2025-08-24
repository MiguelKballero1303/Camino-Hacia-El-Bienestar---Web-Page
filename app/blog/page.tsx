"use client"

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
  Calendar,
  Clock,
  Tag,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const blogPosts = [
  {
    id: 1,
    title: "Cómo manejar la ansiedad en el día a día",
    excerpt: "Descubre técnicas efectivas para controlar la ansiedad y encontrar calma en momentos de estrés.",
    author: "Dra. María González",
    date: "15 de Marzo, 2024",
    readTime: "5 min",
    category: "Ansiedad",
    image: "/stress-reduction-habits-infographic.png",
    featured: true,
  },
  {
    id: 2,
    title: "Señales de que tu cuerpo necesita descanso",
    excerpt: "Aprende a reconocer las señales que tu cuerpo te envía cuando necesita un descanso mental y físico.",
    author: "Lic. Carlos Ruiz",
    date: "12 de Marzo, 2024",
    readTime: "4 min",
    category: "Bienestar",
    image: "/body-rest-signals-infographic.png",
    featured: false,
  },
  {
    id: 3,
    title: "Técnicas de respiración para la relajación",
    excerpt: "Ejercicios simples de respiración que puedes practicar en cualquier momento para reducir el estrés.",
    author: "Dra. Ana López",
    date: "10 de Marzo, 2024",
    readTime: "6 min",
    category: "Técnicas",
    image: "/breathing-technique-infographic.png",
    featured: false,
  },
  {
    id: 4,
    title: "La importancia de la terapia psicológica",
    excerpt: "Por qué buscar ayuda profesional es un acto de valentía y cuidado personal.",
    author: "Dr. Roberto Silva",
    date: "8 de Marzo, 2024",
    readTime: "7 min",
    category: "Terapia",
    image: "/therapy-session-with-two-women-talking.png",
    featured: false,
  },
  {
    id: 5,
    title: "Construyendo relaciones saludables",
    excerpt: "Claves para establecer y mantener relaciones interpersonales equilibradas y satisfactorias.",
    author: "Lic. Patricia Morales",
    date: "5 de Marzo, 2024",
    readTime: "5 min",
    category: "Relaciones",
    image: "/comfortable-therapy-room-with-plants-and-soft-ligh.png",
    featured: false,
  },
  {
    id: 6,
    title: "Mindfulness: vivir el presente",
    excerpt: "Introducción a la práctica del mindfulness y cómo puede transformar tu bienestar emocional.",
    author: "Dra. Elena Vásquez",
    date: "2 de Marzo, 2024",
    readTime: "8 min",
    category: "Mindfulness",
    image: "/peaceful-meditation-space-with-natural-elements.png",
    featured: false,
  },
]

const categories = ["Todos", "Ansiedad", "Bienestar", "Técnicas", "Terapia", "Relaciones", "Mindfulness"]

export default function BlogPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredPosts =
    selectedCategory === "Todos" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
              style={{ backgroundColor: "#D4FFF0" }}
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
              <a href="/blog" className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg bg-white">
                Blog
              </a>
              <a href="/nosotros" className="text-gray-700 font-medium font-sans px-4 py-2 rounded-lg">
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
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif" style={{ color: "#8FBAC8" }}>
            Blog de Bienestar
          </h1>
          <p className="text-xl text-gray-700 font-sans max-w-3xl mx-auto leading-relaxed">
            Descubre artículos, consejos y recursos para tu crecimiento personal y bienestar emocional
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="px-4 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 ${selectedCategory === category ? "text-white shadow-lg" : "text-gray-700 bg-white hover:shadow-md"
                  }`}
                style={{
                  backgroundColor: selectedCategory === category ? "#8FBAC8" : "white",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "Todos" && (
        <div className="px-4 py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span
                className="inline-block px-4 py-2 rounded-full text-white font-sans font-medium text-sm"
                style={{ backgroundColor: "#FFAB65" }}
              >
                Artículo Destacado
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium font-sans"
                    style={{ backgroundColor: "#B8E0D2", color: "#8FBAC8" }}
                  >
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: "#8FBAC8" }}>
                  {featuredPost.title}
                </h2>
                <p className="text-gray-700 font-sans text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 mb-8 text-sm text-gray-600 font-sans">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button
                  className="text-white px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 text-base shadow-lg"
                  style={{ backgroundColor: "#FFAB65" }}
                >
                  Leer artículo completo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium font-sans"
                        style={{ backgroundColor: "#B8E0D2", color: "#8FBAC8" }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-serif" style={{ color: "#8FBAC8" }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-700 font-sans text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-600 font-sans mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>
                    <Button
                      className="w-full text-white py-3 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#8FBAC8" }}
                    >
                      Leer más
                    </Button>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="px-4 py-16" style={{ backgroundColor: "#C5E4F3" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif" style={{ color: "#8FBAC8" }}>
            Mantente al día con nuestros artículos
          </h2>
          <p className="text-gray-700 font-sans text-lg mb-8 leading-relaxed">
            Suscríbete a nuestro boletín y recibe los últimos consejos de bienestar directamente en tu correo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#8FBAC8] focus:outline-none font-sans"
            />
            <Button
              className="text-white px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#FFAB65" }}
            >
              Suscribirse
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