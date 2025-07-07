'use client';
import { motion } from "framer-motion";
import { Calendar, Sparkles, MessageSquare } from "lucide-react";
import { FaWordpress } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

export default function TimelineSlide1_1() {
  return (
    <div className="w-full">
      <div className="w-full">
        {/* Título centrado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            El Inicio del Aprendizaje
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-green-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Línea de tiempo vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-amber-400 to-green-400 opacity-50"></div>
          
          {/* Punto central de la línea de tiempo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-amber-400 to-green-400 rounded-full shadow-lg"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 xl:gap-40">
            {/* Lado Izquierdo - Más alejado del centro */}
            <div className="relative lg:pr-12">
              <motion.div
                className="space-y-4 bg-[#1E1E1E]/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-colors ml-0 lg:ml-16 xl:ml-24"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }}
              >
                <div className="flex items-center">
                  <FaWordpress className="w-16 h-16 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-100">WordPress: La Confusión</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-300">
                    <Calendar className="w-5 h-5 mr-2 text-green-400" />
                    <span>Junio 2024</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Mi viaje comenzó con WordPress, pero al principio me costó comprender que la página operaba desde 
                    distintos archivos conectados entre sí. No entendía cómo funcionaba internamente.
                  </p>
                  <div className="bg-green-900/50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center text-slate-400">
                      <svg className="w-5 h-5 mr-2 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z"/>
                      </svg>
                      <span className="text-lg text-slate-300">Primeros pasos en desarrollo web</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Conector hacia la línea de tiempo */}
              <div className="hidden lg:block absolute top-1/2 right-0 w-12 xl:w-16 h-px bg-gradient-to-r from-amber-400 to-green-400 transform -translate-y-1/2"></div>
            </div>
            
            {/* Lado Derecho - Más alejado del centro */}
            <div className="relative lg:pl-12">
              <motion.div
                className="space-y-4 bg-[#1E1E1E]/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500/50 transition-colors mr-0 lg:mr-16 xl:mr-24"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: "easeOut"
                }}
              >
                <div className="flex items-center">
                  <SiOpenai className="w-16 h-16 text-slate-100  mr-3" />
                  <h3 className="text-2xl font-bold text-slate-100">ChatGPT: El Punto de Inflexión</h3>
                </div>
                <div className="space-y-4">
                <div className="flex items-center text-slate-300">
                    <Calendar className="w-5 h-5 mr-2 text-green-400" />
                    <span>Julio 2024</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Investigando con ChatGPT las cosas cambiaron. Empecé a leer sobre temas personalizados de WordPress y entendí la arquitectura de componentes. La IA me mostró que existían múltiples caminos para resolver un mismo problema.
                  </p>
                  <div className="bg-green-900/50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center text-slate-400">
                      <svg className="w-5 h-5 mr-2 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L20 8l-10 9z"/>
                      </svg>
                      <span className="text-lg text-slate-300">Comprensión de la arquitectura de componentes</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Conector hacia la línea de tiempo */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-12 xl:w-16 h-px bg-gradient-to-l from-amber-400 to-green-400 transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}