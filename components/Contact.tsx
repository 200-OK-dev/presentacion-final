'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactOptions = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'Contáctame directamente para discutir tu proyecto',
      detail: '+56 9 6521 5906',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      href: 'https://wa.me/+56965215906',
      role: 'CHAT',
      color: 'text-green-400'
    },
    {
      id: 'email',
      title: 'Correo',
      description: 'Escríbeme para propuestas profesionales',
      detail: '200_ok_dev@proton.me',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
        </svg>
      ),
      href: 'mailto:200_ok_dev@proton.me',
      role: 'EMAIL',
      color: 'text-blue-400'
    },
    {
      id: 'github',
      title: 'GitHub',
      description: 'Explora mis proyectos y código',
      detail: '200-OK-dev',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      href: 'https://github.com/200-OK-dev',
      role: 'CODE',
      color: 'text-purple-400'
    }
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    copyToClipboard('200_ok_dev@proton.me');
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-black/50 border-2 border-green-500 shadow-lg shadow-green-500/20 backdrop-blur-sm">
      {/* Header de la Card */}
      <div className="border-b border-green-500 bg-green-500/10 px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 animate-pulse"></div>
            <span className="text-amber-400 text-sm font-bold tracking-wider">
              DATABASE CONTACTO
            </span>
          </div>
          <div className="text-green-400 text-xs">
            COMMUNICATION CHANNELS: ACTIVE
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="p-8">
        {/* Texto de introducción */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl text-amber-400 font-bold tracking-wider mb-4">
            ¿Tienes un proyecto interesante? ¿Necesitas una página web moderna?
          </h1>
          <p className="text-base md:text-lg text-green-400">
            Estos son los canales directos para contactarme. Normalmente respondo en menos de 24 horas.
          </p>
        </div>

        {/* Grid de Cards de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contactOptions.map((option) => (
            <div key={option.id} className="group">
              {option.id === 'email' ? (
                <button
                  onClick={handleEmailClick}
                  className="w-full h-full border border-green-500 bg-green-500/5 hover:bg-green-500/10 transition-all duration-300 hover:border-amber-400 hover:scale-105"
                >
                  <div className="p-6 h-full flex flex-col justify-between min-h-[200px]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-amber-400 text-xs font-bold">
                        MAIN
                      </div>
                      <div className="text-amber-400 text-xs">
                        プログラマー
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                      <div className={`${option.color} mb-3`}>
                        {option.icon}
                      </div>
                      <div className="text-green-400 text-sm mb-2">
                        {option.description}
                      </div>
                      <div className="text-white text-xs font-mono break-all">
                        {option.detail}
                      </div>
                      {copiedEmail && option.id === 'email' && (
                        <div className="text-amber-400 text-xs mt-2 animate-pulse">
                          ¡Copiado!
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-end pt-4">
                      <div className="text-green-400 text-sm font-bold">
                        {option.title}
                      </div>
                      <div className="text-green-400 text-xs">
                        {option.role}
                      </div>
                    </div>
                  </div>
                </button>
              ) : (
                <Link
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full border border-green-500 bg-green-500/5 hover:bg-green-500/10 transition-all duration-300 hover:border-amber-400 hover:scale-105"
                >
                  <div className="p-6 h-full flex flex-col justify-between min-h-[200px]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-amber-400 text-xs font-bold">
                        MAIN
                      </div>
                      <div className="text-amber-400 text-xs">
                        プログラマー
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                      <div className={`${option.color} mb-3`}>
                        {option.icon}
                      </div>
                      <div className="text-green-400 text-sm mb-2">
                        {option.description}
                      </div>
                      <div className="text-white text-xs font-mono">
                        {option.detail}
                      </div>
                    </div>
                    <div className="flex justify-between items-end pt-4">
                      <div className="text-green-400 text-sm font-bold">
                        {option.title}
                      </div>
                      <div className="text-green-400 text-xs">
                        {option.role}
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Sección explicativa */}
        <div className="border-t border-green-500 pt-8">
          <div className="text-center">
            <h2 className="text-lg text-amber-400 font-bold mb-4">
              ¿Por qué no hay un formulario de contacto?
            </h2>
            <p className="text-green-400 text-base max-w-2xl mx-auto">
              Los canales aca presentes me permiten responder más rápido y tener mejores conversaciones.
            </p>
          </div>
        </div>
      </div>

      {/* Footer de la Card */}
      <div className="border-t border-green-500 bg-green-500/5 px-6 py-2">
        <div className="flex justify-between items-center text-xs">
          <div className="text-green-400">
            <span className="text-amber-400">›</span> RESPONSE_TIME: &lt;24H
          </div>
          <div className="text-green-400">
            | STATUS: MONITORING
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
