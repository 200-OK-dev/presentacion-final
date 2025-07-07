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
    'CONCLUSIÓN DEL PROCESO',
    'LA IA FUE FUNDAMENTAL EN MI PROCESO DE APRENDIZAJE',
    'CONOCI TECNOLOGIAS QUE FACILITARON MI TRABAJO',
    'DESCUBRI EL OFICIO QUE ME PERMITIRA TENER LIBERTAD GEOGRAFICA',
    
    'MIS PROXIMOS PASOS:',
    'CONECTAR CON OTROS CREATIVOS CON QUIENES COLABORAR',
    'EXPLORAR EL DESARROLLO DE WEB APPS',
    'GRACIAS'
  ];

  const textColors = [
    'text-cyan-400',      // CONCLUSIÓN DEL PROCESO (título)
    'text-green-400',     // LA IA FUE FUNDAMENTAL...
    'text-green-400',     // CONOCI TECNOLOGIAS...
    'text-green-400',     // DESCUBRI EL OFICIO...
    'text-cyan-400',      // MIS PROXIMOS PASOS: (título)
    'text-green-400',     // CONECTAR CON OTROS...
    'text-green-400',     // CREAR WEB APPS...
    'text-amber-400'      // GRACIAS POR SU ATENCIÓN
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
      }, 80); // Velocidad de escritura más rápida
      
      return () => clearTimeout(timeout);
    } else if (currentTextIndex < texts.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1);
        setCurrentCharIndex(0);
      }, 800); // Pausa más corta entre líneas
      
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
    const isTitle = index === 0 || index === 4; // Títulos en índices 0 y 4
    const isLastLine = index === texts.length - 1;
    const colorClass = textColors[index] || 'text-white';
    const showCursor = index === currentTextIndex && isAnimating;
    const showFinalCursor = index === texts.length - 1 && !isAnimating && currentTextIndex >= texts.length - 1;
    
    // Determinamos el espaciado extra
    const getSpacingClass = () => {
      if (index === 0) return 'mb-12'; // Primer título - MISMO espacio que tienes funcionando
      if (index === 3) return 'mb-12'; // Última línea antes del segundo título (más espacio)
      if (index === 4) return 'mb-12'; // Segundo título (MIS PROXIMOS PASOS) - MISMO espacio
      if (index === 6) return 'mb-12'; // Última línea antes de GRACIAS (más espacio)
      if (isLastLine) return ''; // Última línea (GRACIAS) sin margen extra
      return 'mb-6'; // Líneas normales con bullet points
    };
    
    return (
      <motion.div
        key={index}
        className={`${colorClass} font-anta tracking-tight ${
          isTitle 
            ? 'text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl font-bold' 
            : isLastLine
            ? 'text-sm sm:text-base md:text-lg lg:text-2xl xl:text-4xl'
            : 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'
        } ${getSpacingClass()}`}
        style={{ fontFamily: 'var(--font-press-start)' }}
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Títulos principales sin bullet */}
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
        <div className="min-h-[400px] flex flex-col justify-center">
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