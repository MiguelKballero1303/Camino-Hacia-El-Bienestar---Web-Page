import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Teachers } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const teachers = Teachers({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-teachers",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Camino hacia el bienestar - Consultorio Psicológico Terapéutico",
  description: "Un paso a la vez hacia tu mejor versión. Escucha, orientación y apoyo profesional.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${teachers.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
