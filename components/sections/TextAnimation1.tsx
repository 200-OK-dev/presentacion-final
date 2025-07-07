'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const TextAnimation1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  // Textos para el efecto de máquina de escribir
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const texts = [
    'HTTP/LOCALHOST/WORDPRESS - ERROR - 500',
    'NPX CREATE-NEXT-APP@LATEST',
    'NEXT.JS FRAMEWORK'
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

  // Función para renderizar el texto con colores
  const renderColoredText = (text: string) => {
    if (currentTextIndex === 0) {
      // Para el mensaje de error
      return (
        <span className="text-red-500 font-sans text-xs sm:text-sm md:text-base lg:text-4xl xl:text-4xl" style={{ fontFamily: 'var(--font-press-start)' }}>
          {text}
        </span>
      );
    } else if (currentTextIndex === 1) {
      // Para el comando npx
      return (
        <span className="text-green-400 font-sans text-xs sm:text-sm md:text-base lg:text-4xl xl:text-4xl" style={{ fontFamily: 'var(--font-press-start)' }}>
          {text}
        </span>
      );
    } else {
      // Para el texto NEXT.JS FRAMEWORK
      return (
        <span className="text-yellow-400 font-sans text-xs sm:text-sm md:text-base lg:text-5xl xl:text-5xl" style={{ fontFamily: 'var(--font-press-start)' }}>
          {text}
        </span>
      );
    }
  };

  return (
    <div ref={ref} className="w-full h-full flex items-center justify-center p-8" style={{ minHeight: '80vh' }}>
      <motion.div
        className="text-center w-full mx-auto"
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Texto que se escribe */}
        <motion.div 
          className="text-4xl md:text-5xl lg:text-7xl mb-8 min-h-[4rem] tracking-tight whitespace-nowrap"
          style={{ fontFamily: 'var(--font-anta)' }}
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

export default TextAnimation1;
