import { useState, useEffect, useRef } from 'react';

interface NavigationCallbacks {
  onToggleVisibility?: (isVisible: boolean) => void;
  onNextSection?: () => void;
  onPreviousSection?: () => void;
}

interface NavigationKeys {
  toggleKey?: string;
  nextKey?: string;
  previousKey?: string;
}

const usePresentationNavigation = (
  callbacks: NavigationCallbacks = {},
  keys: NavigationKeys = {}
) => {
  // Inicializar como false para mantener oculto al inicio
  const [isVisible, setIsVisible] = useState(false);
  
  // CAMBIO 2: Usar refs para mantener las referencias actualizadas
  const callbacksRef = useRef(callbacks);
  const isInitialized = useRef(false);

  // Actualizar las referencias cuando cambien los callbacks
  useEffect(() => {
    callbacksRef.current = callbacks;
  }, [callbacks]);

  // Teclas por defecto
  const {
    toggleKey = 'h',
    nextKey = 'ArrowRight',
    previousKey = 'ArrowLeft'
  } = keys;

  // Manejador de teclado simplificado
  const keyDownHandler = (event: KeyboardEvent) => {
    const key = event.key;
    
    // Manejar tecla de toggle de visibilidad
    if (key === toggleKey || key === toggleKey.toUpperCase()) {
      event.preventDefault();
      setIsVisible(prev => !prev);
      return;
    }

    // Navegación siempre disponible (incluso cuando la UI está oculta)
    if (key === nextKey || key === previousKey) {
      event.preventDefault();
      
      if (key === nextKey && callbacksRef.current.onNextSection) {
        callbacksRef.current.onNextSection();
      } else if (key === previousKey && callbacksRef.current.onPreviousSection) {
        callbacksRef.current.onPreviousSection();
      }
      return;
    }
  };

  // Effect para manejar los event listeners de teclado
  useEffect(() => {
    // Función para manejar el evento keydown
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      
      // Manejar tecla de toggle de visibilidad
      if (key === toggleKey || key === toggleKey.toUpperCase()) {
        event.preventDefault();
        event.stopPropagation(); // Prevenir propagación
        setIsVisible(prev => !prev);
        return;
      }

      // Navegación siempre disponible (incluso cuando la UI está oculta)
      if (key === nextKey || key === previousKey) {
        event.preventDefault();
        event.stopPropagation(); // Prevenir propagación
        
        if (key === nextKey && callbacksRef.current.onNextSection) {
          callbacksRef.current.onNextSection();
        } else if (key === previousKey && callbacksRef.current.onPreviousSection) {
          callbacksRef.current.onPreviousSection();
        }
        return;
      }
    };

    // Agregar event listener con capture para asegurar que se ejecute primero
    document.addEventListener('keydown', handleKeyDown, { capture: true });
    
    // Forzar el foco en el documento si es necesario
    const handleFocus = () => {
      if (document.activeElement === document.body) return;
      document.body.tabIndex = -1;
      document.body.focus();
    };

    if (document.readyState === 'complete') {
      handleFocus();
    } else {
      window.addEventListener('load', handleFocus);
    }
    
    // También forzar foco después de un pequeño retraso para asegurar
    const focusTimer = setTimeout(handleFocus, 500);
    
    // Limpiar el event listener al desmontar
    return () => {
      document.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('load', handleFocus);
      clearTimeout(focusTimer);
    };
  }, [toggleKey, nextKey, previousKey]);
  
  // Effect para manejar la visibilidad
  useEffect(() => {
    if (callbacksRef.current.onToggleVisibility) {
      callbacksRef.current.onToggleVisibility(isVisible);
    }
  }, [isVisible]);

  return {
    isVisible,
    setIsVisible
  };
};

export default usePresentationNavigation;