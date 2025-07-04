'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Introduccion = () => {
  // Animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  } as const;

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Usando cubic-bezier en lugar de string
      }
    }
  } as const;

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1] as const // Asegurando el tipo de array
      }
    }
  } as const;

  return (
    <motion.section 
      id="introduccion" 
      className="mb-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="text-center mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-slate-100 mb-4"
          variants={item}
        >
          Presentación de título
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl text-slate-100 mb-4"
          variants={item}
        >
          Portafolio Web Felipe Cornejo Rodríguez
        </motion.h2>

        <motion.h3 
          className="text-xl md:text-2xl text-slate-100/80 max-w-2xl mx-auto mb-24"
          variants={item}
        >
          Diseñador y Desarrollador Web
        </motion.h3>
      </div>
      
      <motion.div 
        className="flex justify-center"
        variants={imageAnimation}
      >
        <Image
          src="/portada.png"
          alt="Logo"
          width={600}
          height={600}
          className="shadow-lg rounded-lg"
          priority
        />
      </motion.div>
    </motion.section>
  );
};

export default Introduccion;
