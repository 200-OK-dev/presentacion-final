"use client"
import { useState, useEffect } from "react"
import { FileText, Target, User, GraduationCap, Code, Eye, Heart } from "lucide-react"
import Navigation from "../components/Navigation"
import Introduccion from "../components/Introduccion"
import TextAnimation1 from "../components/sections/TextAnimation1"
import TextAnimation2 from "../components/sections/TextAnimation2"
import LiveDemo from "../components/sections/LiveDemo"
import Cierre from "../components/sections/Cierre"
import Http200Animation from "../components/sections/Http200Animation"
import TimelineSlide1_1 from "@/components/sections/timeline/TimelineSlide1_1"
import TimelineSlide1_2 from "@/components/sections/timeline/TimelineSlide1_2"
import TimelineSlide1_3 from "@/components/sections/timeline/TimelineSlide1_3"
import TimelineSlide1_4 from "@/components/sections/timeline/TimelineSlide1_4"
import TimelineSlide1_5 from "@/components/sections/timeline/TimelineSlide1_5"
import TimelineSlide1_6 from "@/components/sections/timeline/TimelineSlide1_6"
import TimelineSlide1_7 from "@/components/sections/timeline/TimelineSlide1_7"
import TimelineSlide1_8 from "@/components/sections/timeline/TimelineSlide1_8"
import TimelineSlide1_9 from "@/components/sections/timeline/TimelineSlide1_9"
import TimelineSlide1_10 from "@/components/sections/timeline/TimelineSlide1_10"
import TimelineSlide1_11 from "@/components/sections/timeline/TimelineSlide1_11"
import TimelineSlide1_12 from "@/components/sections/timeline/TimelineSlide1_12"
import TimelineSlide1_13 from "@/components/sections/timeline/TimelineSlide1_13"
import TimelineSlide1_14 from "@/components/sections/timeline/TimelineSlide1_14"


export default function PortfolioReport() {
  const [activeSection, setActiveSection] = useState("")
  const [isCollaborationModalOpen, setIsCollaborationModalOpen] = useState(false)

  const sections = [
    { id: "introduccion", title: "Portada", icon: FileText },
    { id: "http200", title: "2000k_dev?", icon: Target },
    { id: "hito1-1", title: "Inicio del Viaje", icon: Target },
    { id: "hito1-2", title: "Aprendizajes Iniciales", icon: Target },
    { id: "text-1", title: "Text Animation 1", icon: Target },
    { id: "text-2", title: "Text Animation 2", icon: Target },
    { id: "hito1-3", title: "Primeros Proyectos", icon: Target },
    { id: "hito1-4", title: "Consolidación", icon: Target },
    { id: "hito1-5", title: "Proceso1", icon: Target },
    { id: "hito1-6", title: "Proceso2", icon: Target },
    { id: "hito1-7", title: "Proceso3", icon: Target },
    { id: "hito1-8", title: "Proceso4", icon: Target },
    { id: "hito1-9", title: "Proceso5", icon: Target },
    { id: "hito1-10", title: "Proceso6", icon: Target },
    { id: "hito1-11", title: "Proceso7", icon: Target },
    { id: "hito1-12", title: "Proceso8", icon: Target },
    { id: "hito1-13", title: "Proceso9", icon: Target },
    { id: "hito1-14", title: "Proceso10", icon: Target },
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
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Changed from +100 to 1/3 of viewport

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id);
            break;
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
<section id="introduccion" className="relative w-full overflow-hidden">
  <Introduccion />
</section>

        
        {/* Http200 Animation */}
        <section id="http200" className="section-container">
          <div className="w-full max-w-4xl mx-auto px-6">
            <Http200Animation />
          </div>
        </section>

        {/* Hito 1.1 */}
        <section id="hito1-1" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_1 />
          </div>
        </section>


        {/* Hito 1.2 */}
        <section id="hito1-2" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_2 />
          </div>
        </section>


        <section id="text-1" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TextAnimation1 />
          </div>
        </section>

        <section id="text-2" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TextAnimation2 />
          </div>
        </section>

        {/* Hito 1.3 */}
        <section id="hito1-3" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_3 />
          </div>
        </section>

        {/* Hito 1.4 */}
        <section id="hito1-4" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_4 />
          </div>
        </section>

        {/* Hito 1.5 */}
        <section id="hito1-5" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_5 />
          </div>
        </section>

        {/* Hito 1.6 */}
        <section id="hito1-6" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_6 />
          </div>
        </section>
        
        <section id="hito1-7" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_7 />
          </div>
        </section>
        
        <section id="hito1-8" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_8 />
          </div>
        </section>
        
        <section id="hito1-9" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_9 />
          </div>
        </section>
        
        <section id="hito1-10" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_10 />
          </div>
        </section>
        
        <section id="hito1-11" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_11 />
          </div>
        </section>
        
        <section id="hito1-12" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_12 />
          </div>
        </section>
        
        <section id="hito1-13" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_13 />
          </div>
        </section>
        
        <section id="hito1-14" className="py-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <TimelineSlide1_14 />
          </div>
        </section>

       
        
       

       

        {/* Demostración en Vivo */}
        <section id="demostracion" className="section-container">
          <div className="w-full max-w-7xl mx-auto px-6">
            <LiveDemo />
          </div>
        </section>

        {/* Cierre */}
        <section id="cierre" className="section-container">
          <div className="w-full max-w-7xl mx-auto px-6">
            <Cierre />
          </div>
        </section>
      </main>
    </div>
  )
}