import { Wrench, Brain, MessageSquare } from 'lucide-react';

export default function AprendizajesClave() {
  return (
    <section id="aprendizajes" className="mb-16">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-slate-100 mr-3">3.</span>
        Aprendizajes Clave
      </h2>

      <div className="space-y-8">
        {/* Competencias técnicas */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <Wrench className="w-5 h-5 mr-2" />
            Competencias técnicas
          </h3>
          <ul className="space-y-3 text-slate-100">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Desarrollo frontend con React y Next.js</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Diseño responsivo con Tailwind CSS</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Gestión de estado con Context API y Redux</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Integración con APIs REST y GraphQL</span>
            </li>
          </ul>
        </div>

        {/* Habilidades blandas */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <Brain className="w-5 h-5 mr-2" />
            Habilidades blandas
          </h3>
          <ul className="space-y-3 text-slate-100">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Comunicación efectiva en equipo</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Gestión del tiempo y priorización</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Resolución creativa de problemas</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Aprendizaje continuo y adaptabilidad</span>
            </li>
          </ul>
        </div>

        {/* Reflexión del proceso */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Reflexión del proceso
          </h3>
          <p className="text-slate-100 leading-relaxed">
            A lo largo de mi formación, he aprendido que el desarrollo web va más allá de escribir código. Es importante entender las necesidades del usuario final, trabajar en equipo y estar en constante aprendizaje. Cada proyecto es una oportunidad para mejorar y aplicar nuevas técnicas y tecnologías.
          </p>
        </div>
      </div>
    </section>
  );
}
