import React, { useState, useEffect } from 'react';

interface AnimatedTitleProps {
  className?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    // Secuencia de animaciones
    const timer1 = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setShowQR(true);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Título principal con animación */}
      <div className={`text-center transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
          <span className="inline-block animate-pulse">Documentación</span>
          <br />
          <span className="inline-block bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            del Proceso
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 font-light tracking-wide">
          Portafolio Web Felipe Cornejo Rodríguez
        </h2>
        
        <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Este documento presenta el proceso completo de desarrollo de mi portafolio web, 
          desde la investigación inicial hasta la implementación final, demostrando mis 
          habilidades como diseñador/desarrollador web.
        </p>
      </div>

      {/* QR Code con animación */}
      <div className={`mt-12 flex justify-center transition-all duration-1000 ease-out delay-500 ${
        showQR 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}>
        <div className="relative group">
          {/* Efecto de glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          {/* QR Container */}
          <div className="relative bg-white p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1">
            <img 
              src="/qrcode.png" 
              alt="QR Code del Portafolio" 
              className="w-48 h-48 object-contain"
            />
          </div>
          
          {/* Texto debajo del QR */}
          <p className="text-center text-slate-300 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Escanea para ver el portafolio
          </p>
        </div>
      </div>

      {/* Efectos de partículas cyberpunk */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-slate-400 rounded-full animate-pulse ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Líneas de conexión animadas */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-2000 ${
        isVisible ? 'opacity-20' : 'opacity-0'
      }`}>
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(148 163 184)" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="rgb(148 163 184)" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <path
            d="M10,20 Q50,10 90,30 T90,70"
            stroke="url(#lineGradient)"
            strokeWidth="0.2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M20,80 Q30,50 60,60 T80,20"
            stroke="url(#lineGradient)"
            strokeWidth="0.2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>
    </div>
  );
};