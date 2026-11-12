import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesClientsSection } from './components/ServicesClientsSection';
import { ComplementaryServicesSection } from './components/ComplementaryServicesSection';
import { MaterialsSection } from './components/MaterialsSection';
import { WhyChooseUsBanner } from './components/WhyChooseUsBanner';
import { BlogFeaturedSection } from './components/BlogFeaturedSection';
import { ContactPresupuestoSection } from './components/ContactPresupuestoSection';
import { BlogArchiveView } from './components/BlogArchiveView';
import { Footer } from './components/Footer';
import { FloatingCallBar } from './components/FloatingCallBar';
import { WordPressPost } from './types/wordpress';
import { WP_API_URL } from './config/wordpress';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'post'>('home');
  const [selectedPost, setSelectedPost] = useState<WordPressPost | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [customWpUrl, setCustomWpUrl] = useState<string>(WP_API_URL);
  const [showConfigModal, setShowConfigModal] = useState<boolean>(false);
  const [tempUrlInput, setTempUrlInput] = useState<string>(WP_API_URL);

  // Sync view with URL Hash for seamless navigation & history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#blog' || hash.startsWith('#blog/')) {
        setCurrentView('blog');
      } else if (hash.startsWith('#')) {
        setCurrentView('home');
        const elementId = hash.replace('#', '');
        const elem = document.getElementById(elementId);
        if (elem) {
          setTimeout(() => {
            elem.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSelectedPost(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateBlog = () => {
    setCurrentView('blog');
    setSelectedPost(null);
    window.location.hash = '#blog';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (post: WordPressPost) => {
    setSelectedPost(post);
    setCurrentView('blog');
    window.location.hash = `#blog/${post.slug || post.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAnchor = (anchorId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setSelectedPost(null);
      window.location.hash = `#${anchorId}`;
    }
    setTimeout(() => {
      const elem = document.getElementById(anchorId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    setPrefilledService(serviceName);
    scrollToAnchor('presupuesto');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-[#191C20] selection:bg-[#D5E4F8] selection:text-[#062544]">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onNavigateBlog={handleNavigateBlog}
        onSelectAnchor={scrollToAnchor}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            {/* 1. Hero Section */}
            <HeroSection
              onQuoteClick={() => scrollToAnchor('presupuesto')}
              onServicesClick={() => scrollToAnchor('servicios')}
            />

            {/* 2. Servicios por Tipo de Cliente (3 Tarjetas M3) */}
            <ServicesClientsSection
              onSelectService={handleSelectServiceFromCard}
            />

            {/* 3. Servicios Complementarios (Grid de 4 bloques tonales) */}
            <ComplementaryServicesSection
              onSelectService={handleSelectServiceFromCard}
            />

            {/* 4. Materiales de Alta Resistencia (Aluminio, Zinc, Cobre) */}
            <MaterialsSection
              onQuoteClick={() => scrollToAnchor('presupuesto')}
            />

            {/* 5. Por qué elegir Canalones Carrión (Banner destacado M3) */}
            <WhyChooseUsBanner
              onQuoteClick={() => scrollToAnchor('presupuesto')}
            />

            {/* 6. Sección Blog Destacado (Headless WordPress + Fallbacks) */}
            <BlogFeaturedSection
              onNavigateBlog={handleNavigateBlog}
              onSelectPost={handleSelectPost}
              customWpUrl={customWpUrl}
              onOpenSettings={() => setShowConfigModal(true)}
            />

            {/* 7. Sección de Contacto y Presupuesto (FormSubmit) */}
            <ContactPresupuestoSection
              prefilledService={prefilledService}
            />
          </>
        ) : (
          /* Dedicated Blog Archive View (/blog) */
          <BlogArchiveView
            onNavigateHome={handleNavigateHome}
            initialPost={selectedPost}
            customWpUrl={customWpUrl}
            onUpdateWpUrl={(newUrl) => setCustomWpUrl(newUrl)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateHome={handleNavigateHome}
        onNavigateBlog={handleNavigateBlog}
        onSelectAnchor={scrollToAnchor}
      />

      {/* Quick Action Floating Bar for mobile and desktop back-to-top */}
      <FloatingCallBar
        onQuoteClick={() => scrollToAnchor('presupuesto')}
      />

      {/* WordPress Endpoint Quick Configuration Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#EAEEF4] shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAEEF4]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-[#D5E4F8] text-[#155A96] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">api</span>
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#191C20] font-heading">
                    Configuración WordPress REST API
                  </h3>
                  <p className="text-xs text-[#58606B]">Canalones Carrión Headless</p>
                </div>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="p-1 rounded-full text-[#58606B] hover:bg-[#EAEEF4]"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#41484D] leading-relaxed">
              Introduce la URL de tu instalación real de WordPress. Los artículos se descargarán 
              automáticamente de <code className="bg-[#EAEEF4] px-1.5 py-0.5 rounded text-[#155A96] font-mono text-xs">/wp-json/wp/v2/posts?_embed</code>:
            </p>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#191C20]">
                URL de tu dominio WordPress:
              </label>
              <input
                type="url"
                value={tempUrlInput}
                onChange={(e) => setTempUrlInput(e.target.value)}
                placeholder="https://tu-dominio-wordpress.com"
                className="w-full px-4 py-3 rounded-2xl bg-[#FAFBFD] border border-[#C2C7D0] focus:border-[#155A96] text-xs sm:text-sm text-[#191C20] outline-none"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-[#D5E4F8]/40 border border-[#D5E4F8] text-xs text-[#062544] space-y-1">
              <span className="font-bold block">💡 Respaldo Automático (Fallback):</span>
              <p>
                Si no se especifica una URL o la conexión no responde, la app muestra automáticamente 
                los artículos técnicos especializados en canalones para Castilla y León.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                onClick={() => {
                  setTempUrlInput(WP_API_URL);
                  setCustomWpUrl(WP_API_URL);
                  setShowConfigModal(false);
                }}
                className="px-4 py-2.5 rounded-full text-xs font-semibold text-[#58606B] hover:bg-[#EAEEF4]"
              >
                Restablecer inicial
              </button>
              <button
                onClick={() => {
                  setCustomWpUrl(tempUrlInput.trim());
                  setShowConfigModal(false);
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#155A96] hover:bg-[#0e4475] shadow-sm"
              >
                Guardar y Aplicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
