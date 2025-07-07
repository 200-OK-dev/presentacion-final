'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface DeveloperProfileCardProps {
  onCollaborationClick?: () => void;
  className?: string;
}

export const DeveloperProfileCard: React.FC<DeveloperProfileCardProps> = ({
  onCollaborationClick,
  className = ""
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <div className={`w-full max-w-4xl bg-black border-2 border-green-500 shadow-lg shadow-green-500/20 ${className}`}>
      
      {/* Header de la Card */}
      <div className="border-b border-green-500 bg-green-500/10 px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-4 bg-green-500 animate-pulse"></div>
            <span className="text-amber-400 text-sm font-bold tracking-wider">
              INFO
            </span>
          </div>
          <div className="text-green-400 text-xs">
            STATUS: ACTIVE
          </div>
        </div>
      </div>

      {/* Contenido Principal de la Card */}
      <div className="p-8">
        
        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl text-amber-400 font-bold tracking-wider mb-2">
            DEVELOPER PROFILE
          </h1>
          <h2 className="text-lg md:text-xl text-amber-400 font-bold tracking-wider">
            INFORMATION
          </h2>
        </div>

        {/* Card de información central con imagen */}
        <div className="bg-green-300/50 text-black p-6 mb-8 mx-auto max-w-2xl border border-green-500">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* Imagen de perfil */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-48 md:h-48 border-2 border-black bg-black overflow-hidden">
                <Image
                  src="/info.jpg"
                  alt="Felipe Cornejo Rodriguez - Profile Picture"
                  fill
                  className="object-cover"
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
                <div className="text-green-600 text-sm md:text-base mb-2">
                  A.K.A. 2000K_DEV
                </div>
                <div className="text-base md:text-lg font-semibold">
                  DISEÑADOR / DESARROLLADOR
                </div>
              </div>
              <div className="border-t border-black pt-4">
                <p className="text-sm md:text-base leading-relaxed">
                  Diseñador y desarrollador frontend Actualmente desarrollando en Next.js. Enfocado en crear soluciones que equilibren 
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
            ID: DEV_001 | TYPE: FRONTEND
          </div>
        </div>
      </div>

    </div>
  );
};