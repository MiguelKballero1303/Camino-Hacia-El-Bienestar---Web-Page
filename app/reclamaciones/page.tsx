import { ArrowLeft, BookOpen, Send, AlertCircle, FileText, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function ReclamacionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-sans">Volver al inicio</span>
          </Link>
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8" style={{ color: "#FFAB65" }} />
            <h1 className="text-2xl font-serif font-bold text-gray-800">Libro de Reclamaciones</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div
            className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ backgroundColor: "#FFAB65" }}
          >
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Tu opinión nos importa</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Este espacio está dedicado a recibir tus comentarios, sugerencias y reclamaciones. Nos comprometemos a
            revisar cada mensaje y responder en un plazo máximo de 48 horas.
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div
              className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
              style={{ backgroundColor: "#B8E0D2" }}
            >
              <AlertCircle className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-gray-800 mb-2">Reclamaciones</h3>
            <p className="text-gray-600 text-sm">
              Reporta cualquier inconveniente con nuestros servicios o atención recibida.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div
              className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
              style={{ backgroundColor: "#8FBAC8" }}
            >
              <User className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-gray-800 mb-2">Sugerencias</h3>
            <p className="text-gray-600 text-sm">
              Comparte ideas para mejorar nuestros servicios y experiencia del paciente.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div
              className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
              style={{ backgroundColor: "#C5E4F3" }}
            >
              <Calendar className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-gray-800 mb-2">Respuesta Rápida</h3>
            <p className="text-gray-600 text-sm">
              Te contactaremos en un máximo de 48 horas para dar seguimiento a tu caso.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 text-center">Formulario de Reclamaciones</h3>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-colors"
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de consulta *</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-colors"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="reclamacion">Reclamación</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="consulta">Consulta general</option>
                  <option value="felicitacion">Felicitación</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha del incidente (si aplica)</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Describe tu consulta *</label>
              <textarea
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-colors resize-none"
                placeholder="Describe detalladamente tu reclamación, sugerencia o consulta..."
              ></textarea>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                required
                className="mt-1 w-4 h-4 text-orange-400 border-gray-300 rounded focus:ring-orange-200"
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                Acepto que mis datos sean procesados para dar seguimiento a mi consulta y acepto la
                <Link href="/privacidad" className="text-orange-500 hover:text-orange-600 underline ml-1">
                  política de privacidad
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#FFAB65" }}
            >
              <Send className="w-5 h-5" />
              Enviar consulta
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-serif font-semibold text-lg text-gray-800 mb-3">Otros medios de contacto</h4>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <span>reclamaciones@caminohaciaelbienestar.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Teléfono:</span>
                <span>+51 999 888 777</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Horario:</span>
                <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 py-6 mt-16" style={{ backgroundColor: "#FFAB65" }}>
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-4 md:hidden">
            {/* Social Media Icons */}
            <div className="flex gap-3 justify-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-xl font-bold" style={{ color: "#FFAB65" }}>
                  f
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-xl font-bold" style={{ color: "#FFAB65" }}>
                  @
                </span>
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
                  RECLAMACIONES
                </p>
              </div>
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center">
                <BookOpen className="w-8 h-8" style={{ color: "#FFAB65" }} />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-xl font-bold" style={{ color: "#FFAB65" }}>
                  f
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-xl font-bold" style={{ color: "#FFAB65" }}>
                  @
                </span>
              </div>
            </div>
            <div className="flex-1 text-center">
              <p className="text-white font-serif text-lg font-medium">Copyright © 2024 Camino hacia el bienestar</p>
            </div>
            <div className="flex items-center gap-3">
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
