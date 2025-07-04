'use client';

import React, { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: (isDarkMode: boolean) => React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Modo oscuro por defecto
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Manejar la animación de entrada y salida
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Pequeño delay para permitir que el componente se monte antes de la animación
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      // Esperar a que termine la animación antes de desmontar
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!shouldRender) return null;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 p-4 pt-32 pb-20 transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'bg-black bg-opacity-80' 
          : 'bg-black bg-opacity-0'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`p-4 sm:p-6 pt-6 sm:pt-8 max-w-2xl w-full mx-4 rounded-2xl transition-all duration-300 ease-in-out transform max-h-[85vh] overflow-y-auto ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
        } ${
          isDarkMode 
            ? 'bg-[#1E1E1E] text-slate-200' 
            : 'bg-gray-200 text-gray-900'
        }`}
        style={{
          boxShadow: isDarkMode 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
            : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className={`text-lg sm:text-xl font-bold font-sans ${
            isDarkMode ? 'text-slate-200' : 'text-gray-900'
          }`}>
            ¿Te parece interesante mi trabajo?
          </h3>
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Botón de cambio de tema */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'hover:bg-gray-700 text-slate-200' 
                  : 'hover:bg-gray-300 text-gray-900'
              }`}
              aria-label="Cambiar tema"
            >
              {isDarkMode ? (
                // Icono de sol para modo oscuro
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
              ) : (
                // Icono de luna para modo claro
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-13.66-6.4-8.32-14.96z"/>
                </svg>
              )}
            </button>
            
            {/* Botón de cerrar */}
            <button 
              onClick={handleClose}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'hover:bg-gray-700 text-slate-200' 
                  : 'hover:bg-gray-300 text-gray-900'
              }`}
              aria-label="Cerrar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {children(isDarkMode)}
        </div>
      </div>
    </div>
  );
};

interface CollaborationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CollaborationModal({ isOpen, onClose }: CollaborationModalProps) {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/56965215906', '_blank');
  };

  const handleEmailContact = async () => {
    try {
      await navigator.clipboard.writeText('tu@email.com');
      setEmailCopied(true);
      // Reset the copied state after 2 seconds
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {(isDarkMode) => (
        <div className="space-y-4 font-sans">
          <div className="space-y-3">
            <p className="leading-relaxed text-xs sm:text-sm">
              Estoy buscando colaborar con otros creativos. Si eres diseñador, desarrollador o manejas proyectos, podríamos hacer algo interesante juntos.
            </p>
            
            <p className="leading-relaxed text-xs sm:text-sm">
              Busco creativos que manejen la parte visual y de cliente. Si eres diseñador o tienes ojo comercial, podríamos ser buen equipo.
            </p>
            
            <div>
              <h4 className="font-semibold mt-3 mb-2 text-sm sm:text-base">
                ¿Qué tipo de colaboración busco?
              </h4>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm">
                <li className="leading-relaxed">
                  Diseñadores que creen las interfaces que yo desarrollo
                </li>
                <li className="leading-relaxed">
                  Creativos que manejen la relación con clientes
                </li>
                <li className="leading-relaxed">
                  Partners que traigan proyectos y yo me encargue del desarrollo
                </li>
              </ul>
            </div>
            
            <p className="leading-relaxed text-xs sm:text-sm">
              Como diseñador/desarrollador frontend, me especializo en la parte técnica, por eso busco creativos con quienes complementemos nuestro trabajo.
            </p>
            
            <p className="leading-relaxed text-xs sm:text-sm">
              Si tienes proyectos, clientes, o simplemente quieres crear algo juntos, hablemos. Me adapto a diferentes tipos de colaboración.
            </p>
          </div>

          {/* Botones de contacto */}
          <div className={`pt-4 border-t border-opacity-20 ${
            isDarkMode ? 'border-slate-600' : 'border-gray-400'
          }`}>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppContact}
                className={`flex-1 px-4 py-3 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-2 ${
                  isDarkMode 
                    ? 'bg-slate-200 hover:bg-white text-gray-900 hover:text-black' 
                    : 'bg-gray-900 hover:bg-black text-slate-200 hover:text-white'
                }`}
              >
                Contactar por WhatsApp
              </button>
              
              <button
                onClick={handleEmailContact}
                className={`flex-1 px-4 py-3 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-2 ${
                  isDarkMode 
                    ? 'bg-slate-200 hover:bg-white text-gray-900 hover:text-black' 
                    : 'bg-gray-900 hover:bg-black text-slate-200 hover:text-white'
                }`}
              >
                
{emailCopied ? '¡Email copiado!' : 'Copiar Email'}
              </button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}