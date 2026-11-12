import React, { useState, useEffect } from 'react';

interface FloatingCallBarProps {
  onQuoteClick: () => void;
}

export const FloatingCallBar: React.FC<FloatingCallBarProps> = ({ onQuoteClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30 w-11 h-11 rounded-full bg-white text-[#155A96] border border-[#C2C7D0] shadow-md hover:shadow-lg hover:bg-[#F1F4F9] flex items-center justify-center transition-all animate-fadeIn"
          aria-label="Volver arriba"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
        </button>
      )}

      {/* Mobile Sticky Quick Action Bar (Only visible on small devices) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#EAEEF4] px-3 py-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:+34676000000"
          className="flex-1 py-3 px-3 rounded-full text-sm font-bold text-white bg-[#155A96] active:bg-[#0e4475] flex items-center justify-center gap-1.5 shadow-sm"
        >
          <span className="material-symbols-outlined text-[19px]">call</span>
          <span>Llamar Ahora</span>
        </a>

        <a
          href="https://wa.me/34676000000?text=Hola,%20me%20gustaría%20solicitar%20presupuesto%20para%20canalones%20en%20Castilla%20y%20León."
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-4 rounded-full text-sm font-bold text-emerald-800 bg-emerald-100 active:bg-emerald-200 flex items-center justify-center gap-1"
          aria-label="WhatsApp"
        >
          <span className="material-symbols-outlined text-[19px] text-emerald-700">chat</span>
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onQuoteClick}
          className="py-3 px-4 rounded-full text-sm font-bold text-[#062544] bg-[#D5E4F8] active:bg-[#b9d5f5] flex items-center justify-center gap-1"
        >
          <span>Presupuesto</span>
        </button>
      </div>
    </>
  );
};
