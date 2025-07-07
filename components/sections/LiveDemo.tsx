'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface LiveDemoProps {}

const LiveDemo: React.FC<LiveDemoProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  // Estados para el efecto de máquina de escribir
  const [displayText, setDisplayText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Datos del enlace
  const link = {
    url: 'https://2000k.dev/',
    displayText: 'HTTPS://2000K.DEV'
  };

  // Efecto para el texto que se escribe
  useEffect(() => {
    if (!isInView) {
      setDisplayText('');
      setCurrentCharIndex(0);
      setAnimationComplete(false);
      return;
    }

    if (currentCharIndex < link.displayText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(link.displayText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      // Marcar la animación como completa
      setAnimationComplete(true);
    }
  }, [isInView, currentCharIndex]);

  // Variantes de animación
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div ref={ref} className="w-full h-full flex flex-col justify-center items-center p-8" style={{ minHeight: '80vh' }}>
      {/* Espacio para el código QR */}
      <div className="flex-1 flex items-center justify-center">
        {/* Aquí puedes agregar tu código QR */}
        <Image 
          src="/qrcode.png"
          alt="QR Code"
          width={500}
          height={500}
        />
      </div>
      
      {/* Texto posicionado en la parte inferior */}
      <motion.div
        className="w-full text-center pb-16"
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div 
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight whitespace-nowrap"
          style={{ fontFamily: 'var(--font-press-start)' }}
          variants={item}
        >
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400"
          >
            {displayText}
          </a>
          <motion.span
            className="text-yellow-500"
            animate={{ opacity: [0, 1] }}
            transition={{ 
              duration: 0.5, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }}
          >
            {(currentCharIndex < link.displayText.length || animationComplete) ? '|' : ''}
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LiveDemo;