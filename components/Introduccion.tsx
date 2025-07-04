'use client';

import React from 'react';
import Image from 'next/image';

const Introduccion = () => {
  return (
    <section id="introduccion" className="mb-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Documentación del Proceso
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-slate-100 mb-12">
          Portafolio Web Felipe Cornejo Rodríguez
        </h2>
        
        <p className="text-lg text-slate-100/80 max-w-2xl mx-auto mb-24">
          Este documento presenta el proceso completo de desarrollo de mi portafolio web, desde la investigación
          inicial hasta la implementación final, demostrando mis habilidades como diseñador/desarrollador web.
        </p>
      </div>
      
      <div className="flex justify-center">
        <Image
          src="/qrcode.png"
          alt="Logo"
          width={500}
          height={500}
          className="shadow-lg rounded-lg"
        />
      </div>
    </section>
  );
};

export default Introduccion;
