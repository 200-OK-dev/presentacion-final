import { Code, Zap, Smartphone, Cpu, GitBranch } from 'lucide-react';
import Image from 'next/image';

export default function DemostracionVivo() {
  return (
    <section id="demostracion" className="mb-16 mt-12">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-slate-100 mr-3">5.</span>
        Demostración en Vivo
      </h2>

      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md py-8">
          <Image
            src="/qrcode.png"
            alt="Demostración en Vivo"
            width={1000}
            height={1000}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="bg-[#1E1E1E] rounded-lg p-6 border border-slate-100/20">
        <h3 className="text-xl font-semibold text-slate-100 mb-4">Elementos clave a mostrar</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-lg mr-4">
              <Code className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="font-medium text-slate-100">Código fuente</h4>
              <p className="text-slate-300 text-sm">Revisión de la estructura del proyecto y componentes principales</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-lg mr-4">
              <Zap className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <h4 className="font-medium text-slate-100">Funcionalidades clave</h4>
              <p className="text-slate-300 text-sm">Demostración de las características principales en acción</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-lg mr-4">
              <Smartphone className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h4 className="font-medium text-slate-100">Diseño responsivo</h4>
              <p className="text-slate-300 text-sm">Adaptación a diferentes tamaños de pantalla</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-lg mr-4">
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h4 className="font-medium text-slate-100">Rendimiento</h4>
              <p className="text-slate-300 text-sm">Optimizaciones implementadas para mejorar la velocidad</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-lg mr-4">
              <GitBranch className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h4 className="font-medium text-slate-100">Control de versiones</h4>
              <p className="text-slate-300 text-sm">Flujo de trabajo con Git y GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
