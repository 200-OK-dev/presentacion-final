import { CheckCircle, Rocket, Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Cierre() {
  return (
    <section id="cierre" className="mb-16">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-slate-100 mr-3">6.</span>
        Cierre
      </h2>

      <div className="space-y-8">
        {/* Conclusiones */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            Conclusiones
          </h3>
          <p className="text-slate-100 leading-relaxed">
            Este portafolio representa mi viaje de aprendizaje y crecimiento como desarrollador web. Cada proyecto y experiencia ha contribuido a mi conjunto de habilidades y me ha preparado para enfrentar nuevos desafíos en el mundo del desarrollo de software.
          </p>
        </div>

        {/* Próximos pasos */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <Rocket className="w-5 h-5 mr-2" />
            Próximos pasos
          </h3>
          <p className="text-slate-100 leading-relaxed mb-4">
            Mis objetivos profesionales incluyen:
          </p>
          <ul className="space-y-3 text-slate-100 mb-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Profundizar en tecnologías avanzadas de frontend y backend</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Explorar desarrollo de aplicaciones móviles</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Contribuir a proyectos de código abierto</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-100 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Mentorar a otros desarrolladores en formación</span>
            </li>
          </ul>
          <p className="text-slate-100 leading-relaxed">
            Estoy emocionado por las oportunidades que el futuro me depare y por seguir creciendo como profesional en este campo en constante evolución.
          </p>
        </div>

        {/* Agradecimientos y contacto */}
        <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
          <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            Agradecimientos y contacto
          </h3>
          <p className="text-slate-100 leading-relaxed mb-4">
            Agradezco la oportunidad de compartir mi trabajo con ustedes. Si desean contactarme para oportunidades de colaboración o tienen alguna pregunta, no duden en hacerlo a través de los siguientes medios:
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="mailto:tu@email.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
           
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              <Github className="w-6 h-6" />
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
}
