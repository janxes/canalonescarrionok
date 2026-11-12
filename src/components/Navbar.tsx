import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentView: 'home' | 'blog' | 'post';
  onNavigateHome: () => void;
  onNavigateBlog: () => void;
  onSelectAnchor: (anchorId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateBlog,
  onSelectAnchor,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchorId: string) => {
    setIsMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        onSelectAnchor(anchorId);
      }, 100);
    } else {
      onSelectAnchor(anchorId);
    }
  };

  const handleBlogClick = () => {
    setIsMobileMenuOpen(false);
    onNavigateBlog();
  };

  return (
    <>
      {/* Top Banner de Atención Rápida */}
      <div className="bg-[#155A96] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-[#D5E4F8]">
              local_shipping
            </span>
            <span className="font-medium">
              Furgoneta Taller Móvil in situ en las 9 provincias de Castilla y León
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[17px] text-[#D5E4F8]">
                verified
              </span>
              Garantía por escrito
            </span>
            <span className="text-white/40">|</span>
            <a
              href="tel:+34676000000"
              className="font-bold hover:underline flex items-center gap-1.5 text-[#D5E4F8]"
            >
              <span className="material-symbols-outlined text-[17px]">call</span>
              Tel: 676 00 00 00
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Top App Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EAEEF4] py-2'
            : 'bg-white border-b border-[#F1F4F9] py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo de Canalones Carrión al doble de tamaño */}
            <button
              onClick={() => {
                onNavigateHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#155A96] rounded-2xl p-1 -m-1 transition-transform active:scale-95"
              aria-label="Canalones Carrión - Inicio"
            >
              <img
                src="/assets/aistudio/LogocanalonesCarrion_ancho_y_debajo_e0c3e84a.jpg"
                alt="Logotipo Canalones Carrión"
                className="h-22 sm:h-26 md:h-28 w-auto object-contain drop-shadow-sm"
              />
              <div className="hidden lg:block border-l border-[#C2C7D0] pl-3">
                <span className="block text-xs font-bold text-[#155A96] uppercase tracking-wider">
                  Castilla y León
                </span>
                <span className="block text-xs text-[#58606B]">
                  Fabricación continua in situ
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              <button
                onClick={() => handleNavClick('servicios')}
                className="px-4 py-2 rounded-full text-base font-medium text-[#41484D] hover:text-[#155A96] hover:bg-[#F1F4F9] transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => handleNavClick('materiales')}
                className="px-4 py-2 rounded-full text-base font-medium text-[#41484D] hover:text-[#155A96] hover:bg-[#F1F4F9] transition-colors"
              >
                Materiales
              </button>
              <button
                onClick={() => handleNavClick('ventajas')}
                className="px-4 py-2 rounded-full text-base font-medium text-[#41484D] hover:text-[#155A96] hover:bg-[#F1F4F9] transition-colors"
              >
                Por qué elegirnos
              </button>
              <button
                onClick={handleBlogClick}
                className={`px-4 py-2 rounded-full text-base font-medium transition-colors ${
                  currentView === 'blog' || currentView === 'post'
                    ? 'bg-[#D5E4F8] text-[#062544] font-bold'
                    : 'text-[#41484D] hover:text-[#155A96] hover:bg-[#F1F4F9]'
                }`}
              >
                Blog
              </button>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+34676000000"
                className="hidden xl:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-[#155A96] bg-[#D5E4F8]/60 hover:bg-[#D5E4F8] transition-colors"
                title="Llámanos directamente"
              >
                <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
                <span>676 00 00 00</span>
              </a>

              <button
                onClick={() => handleNavClick('presupuesto')}
                className="inline-flex items-center px-6 py-3 rounded-full text-base font-bold text-white bg-[#155A96] hover:bg-[#0e4475] active:scale-98 shadow-sm hover:shadow transition-all"
              >
                Pedir Presupuesto
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => handleNavClick('presupuesto')}
                className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#155A96]"
              >
                Presupuesto
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full text-[#41484D] hover:bg-[#EAEEF4] focus:outline-none"
                aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                <span className="material-symbols-outlined text-[26px]">
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#EAEEF4] bg-[#FAFBFD] px-4 pt-3 pb-6 animate-fadeIn">
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick('servicios')}
                className="w-full text-left px-4 py-3 rounded-2xl text-base font-medium text-[#191C20] hover:bg-[#EAEEF4] flex items-center justify-between"
              >
                <span>Servicios por Cliente</span>
                <span className="material-symbols-outlined text-[20px] text-[#58606B]">
                  chevron_right
                </span>
              </button>
              <button
                onClick={() => handleNavClick('materiales')}
                className="w-full text-left px-4 py-3 rounded-2xl text-base font-medium text-[#191C20] hover:bg-[#EAEEF4] flex items-center justify-between"
              >
                <span>Materiales de Alta Resistencia</span>
                <span className="material-symbols-outlined text-[20px] text-[#58606B]">
                  chevron_right
                </span>
              </button>
              <button
                onClick={() => handleNavClick('ventajas')}
                className="w-full text-left px-4 py-3 rounded-2xl text-base font-medium text-[#191C20] hover:bg-[#EAEEF4] flex items-center justify-between"
              >
                <span>Por qué Canalones Carrión</span>
                <span className="material-symbols-outlined text-[20px] text-[#58606B]">
                  chevron_right
                </span>
              </button>
              <button
                onClick={handleBlogClick}
                className="w-full text-left px-4 py-3 rounded-2xl text-base font-medium text-[#155A96] bg-[#D5E4F8]/40 hover:bg-[#D5E4F8] flex items-center justify-between"
              >
                <span>Blog Técnico y Consejos</span>
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>

            <div className="mt-5 pt-4 border-t border-[#EAEEF4] space-y-3">
              <a
                href="tel:+34676000000"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-[#155A96] bg-[#D5E4F8] hover:bg-[#b9d5f5] text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                Llamar al 676 00 00 00
              </a>
              <button
                onClick={() => handleNavClick('presupuesto')}
                className="w-full flex items-center justify-center py-3 px-4 rounded-full font-bold text-white bg-[#155A96] hover:bg-[#0e4475] text-sm"
              >
                Pedir Presupuesto sin Compromiso
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
