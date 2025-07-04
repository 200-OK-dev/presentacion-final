import { Settings, Clock, Palette, Rocket } from 'lucide-react';

export default function ProcesoDesarrollo() {
  return (
    <section id="proceso" className="mb-16">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-slate-100 mr-3">4.</span>
        Proceso de Desarrollo
      </h2>

      <div className="space-y-8">
        {/* Metodología */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Metodología
          </h3>
          <p className="text-slate-100 leading-relaxed">
            Sigo una metodología ágil que me permite ser flexible y adaptarme a los cambios. Trabajo en sprints cortos, con entregables frecuentes que permiten obtener retroalimentación temprana y realizar ajustes según sea necesario.
          </p>
        </div>

        {/* Evolución */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Evolución
          </h3>
          <ul className="space-y-3 text-slate-100">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Análisis de requisitos y planificación inicial</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Diseño de la arquitectura y la interfaz de usuario</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Desarrollo incremental con pruebas continuas</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Revisión de código y optimización</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Despliegue y monitoreo</span>
            </li>
          </ul>
        </div>

        {/* Decisiones de diseño */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <Palette className="w-5 h-5 mr-2" />
            Decisiones de diseño
          </h3>
          <p className="text-slate-100 leading-relaxed mb-4">
            Para este portafolio, he tomado decisiones de diseño enfocadas en la experiencia del usuario y la usabilidad:
          </p>
          <ul className="space-y-3 text-slate-100">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Diseño minimalista y limpio que destaca el contenido</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Paleta de colores oscura para reducir la fatiga visual</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Navegación clara y accesible en todo momento</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Diseño responsivo que se adapta a cualquier dispositivo</span>
            </li>
          </ul>
        </div>

        {/* Casos destacados */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <Rocket className="w-5 h-5 mr-2" />
            Casos destacados
          </h3>
          <p className="text-slate-100 leading-relaxed">
            A lo largo de mi trayectoria, he trabajado en diversos proyectos que han contribuido a mi crecimiento profesional. Cada uno de ellos ha representado un desafío único y una oportunidad para aplicar y expandir mis habilidades.
          </p>
        </div>
      </div>
    </section>
  );
}
