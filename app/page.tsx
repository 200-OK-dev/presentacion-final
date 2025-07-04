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

      {/* Contenido principal */}
      <main>
        {/* Portada/Introducción */}
        <section id="introduccion" className="section-container">
          <div className="w-full max-w-4xl mx-auto px-6">
            <Introduccion />
          </div>
        </section>
        
        {/* Info */}
        <section id="info" className="section-container">
          <div className="w-full max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
              <span className="text-slate-100 mr-3">1.</span>
              Info
            </h2>
            <div className="flex justify-center">
              <DeveloperProfileCard
                onCollaborationClick={() => setIsCollaborationModalOpen(true)}
              />
            </div>
            <CollaborationModal 
              isOpen={isCollaborationModalOpen} 
              onClose={() => setIsCollaborationModalOpen(false)}
            />
          </div>
        </section>

        {/* Perfil Profesional */}
        <section id="perfil" className="section-container">
          <div className="w-full max-w-4xl mx-auto px-6">
            <PerfilProfesional 
              onCollaborationClick={() => setIsCollaborationModalOpen(true)} 
            />
          </div>
        </section>

        {/* Aprendizajes Clave */}
        <section id="aprendizajes" className="section-container">
          <div className="w-full max-w-4xl mx-auto px-6">
            <AprendizajesClave />
          </div>
        </section>

        {/* Proceso de Desarrollo */}
        <section id="proceso" className="section-container">
          <div className="w-full max-w-4xl mx-auto px-6">
            <ProcesoDesarrollo />
          </div>
        </section>

        {/* Demostración en Vivo */}
        <section id="demostracion" className="section-container">
          <div className="w-full max-w-4xl mx-auto px-6">
            <DemostracionVivo />
          </div>
        </section>

        {/* Cierre */}
        <section id="cierre" className="section-container">
          <div className="w-full max-w-4xl mx-auto px-6">
            <Cierre />
          </div>
        </section>
      </main>
    </div>
  )
}