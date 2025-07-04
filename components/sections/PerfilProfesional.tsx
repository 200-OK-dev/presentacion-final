import { Briefcase, Target, Lightbulb } from 'lucide-react';

interface PerfilProfesionalProps {
  onCollaborationClick: () => void;
}

export default function PerfilProfesional({ onCollaborationClick }: PerfilProfesionalProps) {
  return (
    <section id="perfil" className="mb-16">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-slate-100 mr-3">2.</span>
        Perfil Profesional
      </h2>

      <div className="space-y-8">
        {/* Mi visión */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Mi visión
          </h3>
          <p className="text-slate-100 leading-relaxed">
            Aspiro a desarrollarme de manera independiente, colaborando con otros creativos o creando una agencia como sociedad. Mi objetivo es vender proyectos de diseño y soluciones digitales, enfocándome en la página web como punto central de un negocio. En el futuro, busco desarrollar soluciones web más amplias que resuelvan problemas complejos mediante software web alojado en la nube.
          </p>
        </div>

        {/* Competencias clave */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <Briefcase className="w-5 h-5 mr-2" />
            Competencias clave
          </h3>
          <ul className="space-y-3 text-slate-100">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Desarrollo web con tecnologías modernas (Next.js, React)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Diseño de interfaces de usuario atractivas y funcionales</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Resolución creativa de problemas</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Comunicación efectiva y trabajo colaborativo</span>
            </li>
          </ul>
        </div>

        {/* Propuesta de valor */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <Lightbulb className="w-5 h-5 mr-2" />
            Propuesta de valor
          </h3>
          <p className="text-slate-100 leading-relaxed">
            Ofrezco soluciones web personalizadas que combinan diseño atractivo con funcionalidad óptima. Mi enfoque se centra en entender las necesidades específicas de cada proyecto para ofrecer resultados que superen las expectativas.
          </p>
        </div>
      </div>
    </section>
  );
}
