'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function TimelineSlide1_10() {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="relative">
          {/* Línea de tiempo vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-amber-400 to-green-400 opacity-50"></div>
          
          {/* Punto central de la línea de tiempo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-amber-400 to-green-400 rounded-full shadow-lg"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 xl:gap-40">
            {/* Lado Izquierdo - Imagen */}
            <motion.div 
              className="relative w-full max-w-6xl mx-auto"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <div className="relative w-full aspect-[16/10] transform scale-110">
                <Image
                  src="/process/captura11.png"
                  alt="ADB"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1536px) 100vw, 90vw"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Lado Derecho - Contenido */}
            <motion.div
              className="relative w-full max-w-6xl mx-auto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: "easeOut"
              }}
            >
              <div className="relative w-full aspect-[16/10] transform scale-110">
                <Image
                  src="/process/captura12.png"
                  alt="ADB"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1536px) 100vw, 90vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
