import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import usePresentationNavigation from '../hooks/usePresentationNavigation';

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavigationProps {
  sections: Section[];
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navigation({ sections, activeSection, scrollToSection }: NavigationProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMouseOverNav, setIsMouseOverNav] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Función para obtener el índice de la sección actual
  const getCurrentSectionIndex = () => {
    return sections.findIndex(section => section.id === activeSection);
  };

  // Función para navegar a la siguiente sección
  const navigateToNextSection = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      scrollToSection(nextSection.id);
    }
  };

  // Función para navegar a la sección anterior
  const navigateToPreviousSection = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex > 0) {
      const previousSection = sections[currentIndex - 1];
      scrollToSection(previousSection.id);
    }
  };

  // Hook de navegación
  const { isVisible } = usePresentationNavigation(
    {
      onToggleVisibility: (isVisible) => {
        if (!isVisible) {
          setShowMobileMenu(false);
        }
        console.log(`Navegación ${isVisible ? 'mostrada' : 'ocultada'}`);
      },
      onNextSection: navigateToNextSection,
      onPreviousSection: navigateToPreviousSection
    },
    {
      toggleKey: 'h',
      nextKey: 'ArrowRight',
      previousKey: 'ArrowLeft'
    }
  );

  // Función para verificar si se puede hacer scroll
  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Función para hacer scroll horizontal
  const scrollHorizontal = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Funciones para detectar cuando el mouse entra y sale del nav
  const handleMouseEnterNav = () => {
    setIsMouseOverNav(true);
  };

  const handleMouseLeaveNav = () => {
    setIsMouseOverNav(false);
  };

  // Effect para verificar scrollability en resize y manejar eventos globales
  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    
    // Agregar event listener global para capturar wheel events
    const handleGlobalWheel = (e: WheelEvent) => {
      if (isMouseOverNav) {
        e.preventDefault();
        e.stopImmediatePropagation();
        
        if (scrollContainerRef.current) {
          const scrollAmount = e.deltaY > 0 ? 150 : -150;
          scrollContainerRef.current.scrollTo({
            left: scrollContainerRef.current.scrollLeft + scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('wheel', handleGlobalWheel, { passive: false, capture: true });
    
    return () => {
      window.removeEventListener('resize', checkScrollability);
      document.removeEventListener('wheel', handleGlobalWheel, { capture: true });
    };
  }, [isMouseOverNav]);

  // CAMBIO 3: Si la navegación no es visible, solo mostrar indicador
  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-[10000] bg-black/80 text-white px-4 py-3 rounded-lg text-xs space-y-1 pointer-events-none backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <kbd className="bg-white/20 px-2 py-1 rounded">H</kbd>
          <span>Mostrar navegación</span>
        </div>
        <div className="flex items-center space-x-2">
          <kbd className="bg-white/20 px-2 py-1 rounded">←</kbd>
          <span>Sección anterior</span>
        </div>
        <div className="flex items-center space-x-2">
          <kbd className="bg-white/20 px-2 py-1 rounded">→</kbd>
          <span>Siguiente sección</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Navigation con animación de entrada */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[9999] bg-transparent border-b border-slate-100/20 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        onMouseEnter={handleMouseEnterNav}
        onMouseLeave={handleMouseLeaveNav}
        style={{ isolation: 'isolate' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo/Title más compacto */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('introduccion')}
                className="text-base lg:text-lg font-semibold text-slate-100 hover:text-slate-100/80 transition-colors text-left"
              >
                <h1 className="lg:max-w-none">
                  Presentación de Título
                </h1>
              </button>
            </div>
            
            {/* Desktop Navigation con scroll horizontal */}
            <div className="hidden lg:flex items-center flex-1 justify-end">
              <div className="relative flex items-center max-w-4xl">
                {/* Botón scroll izquierda */}
                {canScrollLeft && (
                  <button
                    onClick={() => scrollHorizontal('left')}
                    className="absolute left-0 z-10 p-1 bg-[#363636] text-slate-100/70 hover:text-slate-100 rounded-full shadow-lg"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                )}
                
                {/* Container con scroll horizontal */}
                <div 
                  ref={scrollContainerRef}
                  onScroll={checkScrollability}
                  className={`flex items-center space-x-1 overflow-x-auto scrollbar-hide px-8 max-w-full transition-all duration-200 ${
                    isMouseOverNav ? 'cursor-grab active:cursor-grabbing' : ''
                  }`}
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    const currentIndex = getCurrentSectionIndex();
                    
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`flex items-center space-x-2 px-2 xl:px-3 py-2 rounded-md text-xs whitespace-nowrap transition-all duration-200 flex-shrink-0 relative ${
                          isActive
                            ? "bg-slate-100 text-[#1E1E1E]"
                            : "text-slate-100/70 hover:text-slate-100 hover:bg-slate-100/10"
                        }`}
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="hidden xl:inline">{section.title}</span>
                        <span className="xl:hidden text-[10px]">{section.title.split(' ')[0]}</span>
                        
                        {/* Indicadores de navegación */}
                        {isActive && (
                          <>
                            {index > 0 && (
                              <span className="absolute -left-4 text-slate-400 text-xs">←</span>
                            )}
                            {index < sections.length - 1 && (
                              <span className="absolute -right-4 text-slate-400 text-xs">→</span>
                            )}
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
                
                {/* Botón scroll derecha */}
                {canScrollRight && (
                  <button
                    onClick={() => scrollHorizontal('right')}
                    className="absolute right-0 z-10 p-1 bg-[#363636] text-slate-100/70 hover:text-slate-100 rounded-full shadow-lg"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 text-slate-100/70 hover:text-slate-100"
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {showMobileMenu && (
        <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-[#1E1E1E] border-b border-slate-100/20 max-h-80 overflow-y-auto">
          <div className="grid grid-cols-2 gap-1 p-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    scrollToSection(section.id);
                    setShowMobileMenu(false);
                  }}
                  className={`flex items-center space-x-2 p-3 rounded-md text-xs transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-slate-100 text-[#1E1E1E]"
                      : "text-slate-100/70 hover:text-slate-100 hover:bg-slate-100/10"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-left leading-tight">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Overlay para cerrar menu mobile */}
      {showMobileMenu && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 z-30 top-16"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      {/* CAMBIO 4: Indicadores de teclas mejorados */}
      <div className="fixed bottom-4 right-4 z-[10000] bg-black/80 text-white px-4 py-3 rounded-lg text-xs space-y-1 pointer-events-none backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <kbd className="bg-white/20 px-2 py-1 rounded">H</kbd>
          <span>Ocultar navegación</span>
        </div>
        <div className="flex items-center space-x-2">
          <kbd className="bg-white/20 px-2 py-1 rounded">←</kbd>
          <span>Sección anterior</span>
        </div>
        <div className="flex items-center space-x-2">
          <kbd className="bg-white/20 px-2 py-1 rounded">→</kbd>
          <span>Siguiente sección</span>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}