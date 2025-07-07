'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const TextAnimation1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Textos para la conclusión de la presentación
  const [displayTexts, setDisplayTexts] = useState<string[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const texts = [
    'CONCLUSIÓN DE LA PRESENTACIÓN',
    'NEXT.JS REVOLUCIONA EL DESARROLLO WEB',
    'PERFORMANCE Y SEO OPTIMIZADOS',
    'EXPERIENCIA DE DESARROLLO SUPERIOR',
    'ESCALABILIDAD EMPRESARIAL GARANTIZADA',
    'EL FUTURO DEL DESARROLLO FRONTEND',
    'GRACIAS POR SU ATENCIÓN'
  ];

  const textColors = [
    'text-cyan-400',      // Título principal
    'text-green-400',     // Next.js
    'text-green-400',      // Performance
    'text-green-400',    // Experiencia
    'text-green-400',    // Escalabilidad
    'text-green-400',      // Futuro
    'text-amber-400'     // Gracias
  ];

  // Efecto para el texto que se escribe acumulativamente
  useEffect(() => {
    if (!isInView) {
      setDisplayTexts([]);
      setCurrentTextIndex(0);
      setCurrentCharIndex(0);
      setIsAnimating(false);
      return;
    }

    if (currentTextIndex >= texts.length) {
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);
    const currentText = texts[currentTextIndex];
    
    if (currentCharIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayTexts(prev => {
          const newTexts = [...prev];
          newTexts[currentTextIndex] = currentText.substring(0, currentCharIndex + 1);
          return newTexts;
        });
        setCurrentCharIndex(currentCharIndex + 1);
      }, 80); // Velocidad de escritura más fluida
      
      return () => clearTimeout(timeout);
    } else if (currentTextIndex < texts.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1);
        setCurrentCharIndex(0);
      }, 800); // Pausa entre líneas
      
      return () => clearTimeout(timeout);
    } else {
      setIsAnimating(false);
    }
  }, [isInView, currentTextIndex, currentCharIndex]);

  // Variantes de animación mejoradas
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const cursorVariants: Variants = {
    blink: {
      opacity: [1, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  };

  // Función para renderizar cada línea con su color correspondiente
  const renderColoredLine = (text: string, index: number) => {
    const isTitle = index === 0;
    const isLastLine = index === texts.length - 1;
    const colorClass = textColors[index] || 'text-white';
    const showCursor = index === currentTextIndex && isAnimating;
    const showFinalCursor = index === texts.length - 1 && !isAnimating && currentTextIndex >= texts.length - 1;
    
    return (
      <motion.div
        key={index}
        className={`${colorClass} font-anta tracking-tight ${
          isTitle 
            ? 'text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl font-bold mb-8' 
            : isLastLine
            ? 'text-sm sm:text-base md:text-lg lg:text-2xl xl:text-4xl mt-8'
            : 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4'
        }`}
        style={{ fontFamily: 'var(--font-press-start)' }}
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Título principal sin bullet */}
        {isTitle ? (
          <div className="text-center">
            {text}
            {showCursor && (
              <motion.span
                className="text-yellow-500 ml-1"
                variants={cursorVariants}
                animate="blink"
              >
                |
              </motion.span>
            )}
          </div>
        ) : isLastLine ? (
          // Línea final sin bullet, centrada
          <div className="text-center">
            {text}
            {(showCursor || showFinalCursor) && (
              <motion.span
                className="text-yellow-500 ml-1"
                variants={cursorVariants}
                animate="blink"
              >
                |
              </motion.span>
            )}
          </div>
        ) : (
          // Bullet points para el contenido
          <div className="flex items-start justify-start text-left max-w-4xl mx-auto">
            <span className="text-yellow-500 mr-4 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl flex-shrink-0">
              •
            </span>
            <span className="flex-1">
              {text}
              {showCursor && (
                <motion.span
                  className="text-yellow-500 ml-1"
                  variants={cursorVariants}
                  animate="blink"
                >
                  |
                </motion.span>
              )}
            </span>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div 
      ref={ref} 
      className="w-full h-full flex items-center justify-center p-8" 
      style={{ minHeight: '90vh' }}
    >
      <motion.div
        className="text-center w-full max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Contenedor de todas las líneas */}
        <div className="space-y-2 min-h-[400px] flex flex-col justify-center">
          {displayTexts.map((text, index) => 
            text ? renderColoredLine(text, index) : null
          )}
        </div>

        {/* Mensaje final cuando termina la animación */}
        {!isAnimating && currentTextIndex >= texts.length - 1 && (
          <motion.div
            className="mt-8 text-gray-400 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
          
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TextAnimation1;