import type React from "react"
import type { Metadata } from "next"
import { Inter, Anta, Press_Start_2P } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
})

const anta = Anta({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anta',
  display: 'swap'
})

const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Presentacion de titulo",
  description: "Presentacion de titulo y presentacon de portafolio web",
    generator: '2000k.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${anta.variable} ${pressStart2P.variable}`}>
        {children}
      </body>
    </html>
  )
}
