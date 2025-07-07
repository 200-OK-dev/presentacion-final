'use client';

import React from 'react';
import Image from 'next/image';

interface IntroduccionProps {
  className?: string;
}

const Introduccion = ({ className = '' }: IntroduccionProps) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video_editado.webm" type="video/webm" />
          Tu navegador no soporta el elemento de video.
        </video>
        {/* Overlay para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenedor principal centrado */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 font-anta">
        <div className={`w-full max-w-4xl bg-black border-2 border-green-500 shadow-lg shadow-green-500/20 ${className}`}>
          {/* Header de la Card */}
          <div className="border-b border-green-500 bg-green-500/10 px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-4 bg-green-500 animate-pulse"></div>
                <span className="text-amber-400 text-sm font-bold tracking-wider">
                  FINAL PROJECT
                </span>
              </div>
              <div className="text-green-400 text-xs">
                DUOC UC
              </div>
            </div>
          </div>

          {/* Contenido Principal de la Card */}
          <div className="p-8">
            {/* Título */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl text-amber-400 font-bold tracking-wider mb-2">
                Portafolio de Titulo
              </h1>
              <h2 className="text-lg md:text-xl text-amber-400 font-bold tracking-wider">
                Desarrollo y Diseño Web
              </h2>
            </div>

            {/* Card de información central con imagen */}
            <div className="bg-green-300/50 max-w-2xl mx-auto text-black p-6 mb-8 border border-green-500">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Imagen de perfil */}
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 md:w-48 md:h-48 border-2 border-black bg-black overflow-hidden">
                    <Image
                      src="/info.jpg"
                      alt="Felipe Cornejo Rodriguez - Profile Picture"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="text-center mt-2">
                    <div className="text-xs font-bold">ID: DEV_001</div>
                    <div className="text-xs">STATUS: ACTIVE</div>
                  </div>
                </div>

                {/* Información textual */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <div className="text-xl md:text-2xl font-bold mb-1 tracking-wide">
                      FELIPE CORNEJO RODRÍGUEZ
                    </div>
                    <div className="text-green-400 text-sm md:text-base mb-2">
                      A.K.A. 2000K_DEV
                    </div>
                    <div className="text-base md:text-lg font-semibold">
                      DISEÑADOR / DESARROLLADOR
                    </div>
                  </div>
                  <div className="border-t border-black pt-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      Diseñador y desarrollador frontend. Actualmente desarrollando en Next.js.
                      Me enfoco en crear soluciones digitales que equilibren 
                      funcionalidad y diseño visual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer de la Card */}
          <div className="border-t border-green-500 bg-green-500/5 px-6 py-2">
            <div className="flex justify-between items-center text-xs">
              <div className="text-green-400">
                <span className="text-amber-400">›</span> DATA.LOADED
              </div>
              <div className="text-green-400">
                ID: JULIO_07 | YEAR: 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduccion;