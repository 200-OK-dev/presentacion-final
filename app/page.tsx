"use client"
import { useState, useEffect } from "react"
import { FileText, Target, User, GraduationCap, Code, Eye, Heart } from "lucide-react"
import Navigation from "../components/Navigation"
import Introduccion from "../components/Introduccion"
import { DeveloperProfileCard } from "@/components/DeveloperProfileCard"
import { CollaborationModal } from "@/components/CollaborationModal"
import PerfilProfesional from "../components/sections/PerfilProfesional"
import AprendizajesClave from "../components/sections/AprendizajesClave"
import ProcesoDesarrollo from "../components/sections/ProcesoDesarrollo"
import DemostracionVivo from "../components/sections/DemostracionVivo"
import Cierre from "../components/sections/Cierre"

export default function PortfolioReport() {
  const [activeSection, setActiveSection] = useState("")
  const [isCollaborationModalOpen, setIsCollaborationModalOpen] = useState(false)

  const sections = [
    { id: "introduccion", title: "Portada", icon: FileText },
    { id: "info", title: "Info", icon: Target },
    { id: "perfil", title: "Perfil Profesional", icon: User },
    { id: "aprendizajes", title: "Aprendizajes Clave", icon: GraduationCap },
    { id: "proceso", title: "Proceso de Desarrollo", icon: Code },
    { id: "demostracion", title: "Demostración en Vivo", icon: Eye },
    { id: "cierre", title: "Cierre", icon: Heart },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Efecto para manejar el scroll y actualizar la sección activa
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  // Efecto para desplazarse al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-slate-100">
      <Navigation 
        sections={sections} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />

      {/* Content */}
      <main className="pt-32 lg:pt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Portada/Introducción */}
          <Introduccion />

          {/* Info */}
          <section id="info" className="mb-16">
            <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
              <span className="text-slate-100 mr-3">1.</span>
              Info
            </h2>
            <DeveloperProfileCard
              onCollaborationClick={() => setIsCollaborationModalOpen(true)}
            />
            <CollaborationModal 
              isOpen={isCollaborationModalOpen} 
              onClose={() => setIsCollaborationModalOpen(false)}
            />
          </section>

          {/* Perfil Profesional */}
          <PerfilProfesional 
            onCollaborationClick={() => setIsCollaborationModalOpen(true)} 
          />

          {/* Aprendizajes Clave */}
          <AprendizajesClave />

          {/* Proceso de Desarrollo */}
          <ProcesoDesarrollo />

          {/* Demostración en Vivo */}
          <DemostracionVivo />

          {/* Cierre */}
          <Cierre />
        </div>
      </main>
    </div>
  )
}