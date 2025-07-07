'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Http200Animation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  // Textos para el efecto de máquina de escribir
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const texts = [
    'API CONNECTION ... 200 OK',
    'HTTPS/2000K.DEV - CONNECTION OK',
    '2000K_DEV'
  ];

  // Efecto para el texto que se escribe
  useEffect(() => {
    if (!isInView) {
      setDisplayText('');
      setCurrentTextIndex(0);
      setCurrentCharIndex(0);
      return;
    }

    const currentText = texts[currentTextIndex];
    
    if (currentCharIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else if (currentTextIndex < texts.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1);
        setCurrentCharIndex(0);
        setDisplayText('');
      }, 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [isInView, currentTextIndex, currentCharIndex]);

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

  // Función para renderizar el texto con colores - CORREGIDA
  const renderColoredText = (text: string) => {
    if (currentTextIndex === 0) {
      // Para "API CONNECTION ... 200 OK"
      const fullText = 'API CONNECTION ... 200 OK';
      const splitPoint = fullText.indexOf('200 OK');
      
      if (text.length <= splitPoint) {
        // Aún no llegamos a "200 OK", mostrar todo en verde
        return (
          <span className="text-green-400 font-sans text-xs sm:text-sm md:text-base lg:text-4xl xl:text-4xl" style={{ fontFamily: 'var(--font-press-start)' }}>
            {text}
          </span>
        );
      } else {
        // Ya llegamos a "200 OK", mostrar las dos partes
        const beforePart = text.substring(0, splitPoint);
        const afterPart = text.substring(splitPoint);
        return (
          <>
            <span className="text-green-400 font-sans text-xs sm:text-sm md:text-base lg:text-4xl xl:text-4xl" style={{ fontFamily: 'var(--font-press-start)' }}>
              {beforePart}
            </span>
            <span className="text-yellow-400 font-sans text-xs sm:text-sm md:text-base lg:text-4xl xl:text-4xl" style={{ fontFamily: 'var(--font-press-start)' }}>
              {afterPart}
            </span>
          </>
        );
      }
    } else if (currentTextIndex === 1) {
      // Para "HTTPS/2000K.DEV - SUCCESSFULL"
      const fullText = 'HTTPS/2000K.DEV - SUCCESSFULL';
      const splitPoint = fullText.indexOf(' - ') + 3; // +3 para incluir " - "
      
      if (text.length <= splitPoint) {
        // Aún no llegamos a "SUCCESSFULL", mostrar todo en verde
        return (
          <span className="text-green-400 font-sans text-xs sm:text-sm md:text-base lg:text-4xl xl:text-4xl" style={{ fontFamily: 'var(--font-press-start)' }}>
            {text}
          </span>
        );
      } else {
        // Ya llegamos a "SUCCESSFULL", mostrar las dos partes
        const beforePart = text.substring(0, splitPoint);
        const afterPart = text.substring(splitPoint);
        return (
          <>
            <span className="text-green-400 font-sans text-xs sm:text-sm md:text-base lg:text-4xl xl:text-4xl" style={{ fontFamily: 'var(--font-press-start)' }}>
              {beforePart}
            </span>
            <span className="text-yellow-400 font-sans text-xs sm:text-sm md:text-base lg:text-4xl xl:text-4xl" style={{ fontFamily: 'var(--font-press-start)' }}>
              {afterPart}
            </span>
          </>
        );
      }
    } else {
      // Para "2000K_DEV" con efecto neón ámbar
      return <span className="neon-text-amber-low text-8xl font-anta font-bold">{text}</span>;
    }
  };

  return (
    <div ref={ref} className="w-full h-full flex items-center justify-center p-8 bg-black" style={{ minHeight: '80vh' }}>
      <motion.div
        className="text-center w-full mx-auto"
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Texto que se escribe */}
        <motion.div 
          className="text-4xl md:text-5xl lg:text-7xl mb-8 min-h-[4rem] tracking-tight whitespace-nowrap"
          variants={item}
        >
          {renderColoredText(displayText)}
          <motion.span
            className="text-yellow-500"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            {currentCharIndex < texts[currentTextIndex]?.length ? '|' : ''}
          </motion.span>
        </motion.div>
      </motion.div>
      
     
    </div>
  );
};

export default Http200Animation;