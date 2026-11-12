import React, { useState, useEffect } from 'react';
import { WordPressPost } from '../types/wordpress';
import { fetchWordPressPosts, WP_API_URL } from '../config/wordpress';

interface BlogArchiveViewProps {
  onNavigateHome: () => void;
  initialPost?: WordPressPost | null;
  customWpUrl?: string;
  onUpdateWpUrl?: (newUrl: string) => void;
}

export const BlogArchiveView: React.FC<BlogArchiveViewProps> = ({
  onNavigateHome,
  initialPost = null,
  customWpUrl,
  onUpdateWpUrl,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPost, setSelectedPost] = useState<WordPressPost | null>(initialPost);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [isFallback, setIsFallback] = useState<boolean>(false);
  const [showConfigModal, setShowConfigModal] = useState<boolean>(false);
  const [urlInput, setUrlInput] = useState<string>(customWpUrl || WP_API_URL);

  useEffect(() => {
    let isMounted = true;
    async function loadPosts() {
      setLoading(true);
      try {
        const result = await fetchWordPressPosts(currentPage, 6, customWpUrl);
        if (isMounted) {
          setPosts(result.posts);
          setTotalPages(result.totalPages);
          setIsFallback(result.isFallback);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPosts();
    return () => {
      isMounted = false;
    };
  }, [currentPage, customWpUrl]);

  // Si cambia el post seleccionado desde el exterior
  useEffect(() => {
    if (initialPost) {
      setSelectedPost(initialPost);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialPost]);

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return new Intl.DateTimeFormat('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(d);
    } catch {
      return dateStr;
    }
  };

  const cleanExcerpt = (rawHtml: string) => {
    const text = rawHtml.replace(/<[^>]+>/g, '').trim();
    if (text.length > 140) {
      return text.slice(0, 140) + '...';
    }
    return text;
  };

  // Filtrado local adicional para búsqueda y categoría
  const filteredPosts = posts.filter((p) => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.rendered.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'Todas' ||
      (p.categoryName && p.categoryName.toLowerCase() === selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const categories = ['Todas', 'Clima y Mantenimiento', 'Guía de Materiales', 'Comunidades de Vecinos', 'Industria y Naves'];

  return (
    <div className="min-h-screen bg-[#FAFBFD] pb-24">
      
      {/* Blog Top Breadcrumb Bar */}
      <div className="bg-white border-b border-[#EAEEF4] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs text-[#58606B]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#155A96] flex items-center gap-1 font-medium"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Inicio</span>
            </button>
            <span>/</span>
            <button
              onClick={() => setSelectedPost(null)}
              className={`hover:text-[#155A96] ${!selectedPost ? 'font-bold text-[#155A96]' : ''}`}
            >
              Blog
            </button>
            {selectedPost && (
              <>
                <span>/</span>
                <span className="text-[#191C20] font-bold truncate max-w-xs sm:max-w-md">
                  {selectedPost.title.rendered}
                </span>
              </>
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowConfigModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#155A96] bg-[#D5E4F8]/60 hover:bg-[#D5E4F8] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">api</span>
              <span>Conexión WordPress</span>
            </button>

            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#41484D] hover:text-[#155A96]"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>Volver a la Web Principal</span>
            </button>
          </div>
        </div>
      </div>

      {/* SINGLE POST READER VIEW */}
      {selectedPost ? (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#155A96] bg-white border border-[#C2C7D0] hover:bg-[#F1F4F9] transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Volver al listado del blog</span>
          </button>

          {/* Article Header Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAEEF4] shadow-sm mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#D5E4F8] text-[#062544]">
                {selectedPost.categoryName || 'Guía Especializada'}
              </span>
              <span className="text-xs text-[#58606B] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#155A96]">
                  calendar_today
                </span>
                {formatDate(selectedPost.date)}
              </span>
              <span className="text-xs text-[#58606B] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#155A96]">
                  schedule
                </span>
                {selectedPost.readTimeMinutes || 5} min de lectura
              </span>
              <span className="text-xs text-[#58606B] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#155A96]">person</span>
                {selectedPost.authorName || 'Canalones Carrión'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#191C20] font-heading leading-tight tracking-tight mb-6">
              {selectedPost.title.rendered}
            </h1>

            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8 h-64 sm:h-96 shadow-inner">
              <img
                src={
                  selectedPost.featuredImageUrl ||
                  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
                }
                alt={selectedPost.title.rendered}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rendered HTML Post Content */}
            <div
              className="article-body-html prose prose-blue max-w-none text-[#191C20] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }}
            />

            {/* Author box & Call to action */}
            <div className="mt-12 pt-8 border-t border-[#EAEEF4] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#FAFBFD] p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#155A96] text-white flex items-center justify-center font-bold font-heading text-lg">
                  CC
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#191C20]">Equipo Técnico Canalones Carrión</h4>
                  <p className="text-xs text-[#58606B]">Especialistas en canalones continuos en Castilla y León</p>
                </div>
              </div>

              <button
                onClick={onNavigateHome}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#155A96] hover:bg-[#0e4475] shadow-sm transition-all flex items-center gap-2 shrink-0"
              >
                <span>Solicitar presupuesto para tu caso</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>

          </div>

        </article>
      ) : (
        /* ARCHIVE LISTING VIEW */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D5E4F8] text-[#062544] inline-block mb-3">
              Archivo del Blog
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#191C20] tracking-tight font-heading">
              Artículos Técnicos y Consejos de Canalones
            </h1>
            <p className="mt-4 text-base text-[#41484D]">
              Aprende a elegir el material idóneo, prevenir humedades y cumplir con las normativas 
              de conservación en Castilla y León.
            </p>
          </div>

          {/* Search and Category Filters */}
          <div className="bg-white rounded-3xl p-6 border border-[#EAEEF4] shadow-sm mb-10 space-y-5">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              
              {/* Search input */}
              <div className="relative w-full sm:max-w-md">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-[#58606B]">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Buscar artículos (nieve, comunidades, aluminio...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-[#FAFBFD] border border-[#C2C7D0] focus:border-[#155A96] focus:ring-2 focus:ring-[#155A96]/20 text-xs sm:text-sm text-[#191C20] outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#58606B] hover:text-[#191C20]"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                )}
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-xs text-[#58606B]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>
                  {isFallback
                    ? 'Modo Artículos Locales de Demostración'
                    : `Conectado a ${customWpUrl || WP_API_URL}`}
                </span>
              </div>

            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#EAEEF4]">
              <span className="text-xs font-bold text-[#58606B] mr-2">Categorías:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#155A96] text-white font-bold'
                      : 'bg-[#F1F4F9] text-[#41484D] hover:bg-[#EAEEF4]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className="bg-white rounded-3xl overflow-hidden border border-[#EAEEF4] p-5 space-y-4 animate-pulse"
                >
                  <div className="h-48 bg-[#EAEEF4] rounded-2xl w-full" />
                  <div className="h-4 bg-[#EAEEF4] rounded-full w-1/3" />
                  <div className="h-6 bg-[#EAEEF4] rounded-full w-4/5" />
                  <div className="h-14 bg-[#F1F4F9] rounded-2xl w-full" />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#EAEEF4] max-w-md mx-auto">
              <span className="material-symbols-outlined text-[48px] text-[#C2C7D0] mb-3">
                search_off
              </span>
              <h3 className="font-bold text-lg text-[#191C20] mb-1">No se encontraron artículos</h3>
              <p className="text-xs text-[#58606B] mb-5">
                Prueba con otro término de búsqueda o selecciona todas las categorías.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Todas');
                }}
                className="px-5 py-2 rounded-full text-xs font-bold text-[#155A96] bg-[#D5E4F8]"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => {
                    setSelectedPost(post);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white rounded-3xl overflow-hidden border border-[#EAEEF4] hover:border-[#155A96]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-[#EAEEF4]">
                      <img
                        src={
                          post.featuredImageUrl ||
                          'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
                        }
                        alt={post.title.rendered}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#155A96] shadow-sm">
                          {post.categoryName || 'Guía Técnica'}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-[#58606B] mb-3">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-[#155A96]">
                            calendar_today
                          </span>
                          {formatDate(post.date)}
                        </span>
                        <span>•</span>
                        <span>{post.readTimeMinutes || 4} min</span>
                      </div>

                      <h3 className="font-bold text-lg text-[#191C20] font-heading group-hover:text-[#155A96] transition-colors leading-snug mb-3 line-clamp-2">
                        {post.title.rendered}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#41484D] line-clamp-3 leading-relaxed">
                        {cleanExcerpt(post.excerpt.rendered)}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-[#F1F4F9] flex items-center justify-between text-xs font-bold text-[#155A96]">
                    <span className="group-hover:underline">Leer artículo completo</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* M3 Pagination Navigation */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-3">
              <button
                disabled={currentPage <= 1}
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className={`flex items-center gap-1 px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                  currentPage <= 1
                    ? 'opacity-40 cursor-not-allowed bg-[#EAEEF4] text-[#58606B]'
                    : 'bg-white border border-[#C2C7D0] text-[#155A96] hover:bg-[#F1F4F9]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                <span>Anterior</span>
              </button>

              <div className="flex items-center gap-1.5 px-3">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => {
                      setCurrentPage(pageNumber);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className={`w-9 h-9 rounded-full text-xs font-bold transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-[#155A96] text-white shadow-sm'
                        : 'bg-white border border-[#E2E7EE] text-[#41484D] hover:bg-[#F1F4F9]'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage >= totalPages}
                onClick={() => {
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className={`flex items-center gap-1 px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                  currentPage >= totalPages
                    ? 'opacity-40 cursor-not-allowed bg-[#EAEEF4] text-[#58606B]'
                    : 'bg-white border border-[#C2C7D0] text-[#155A96] hover:bg-[#F1F4F9]'
                }`}
              >
                <span>Siguiente</span>
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          )}

        </div>
      )}

      {/* WordPress API Endpoint Settings Modal */}
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
                  <p className="text-xs text-[#58606B]">Arquitectura Headless WordPress</p>
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
              En el archivo <code className="bg-[#EAEEF4] px-1.5 py-0.5 rounded text-[#155A96] font-mono text-xs">/src/config/wordpress.ts</code> tienes la constante <code className="bg-[#EAEEF4] px-1.5 py-0.5 rounded text-[#155A96] font-mono text-xs">WP_API_URL</code> configurada. 
              También puedes introducir aquí tu dominio para probar en vivo la conexión con tus posts reales:
            </p>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#191C20]">
                URL de tu WordPress:
              </label>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://tu-dominio-wordpress.com"
                className="w-full px-4 py-3 rounded-2xl bg-[#FAFBFD] border border-[#C2C7D0] focus:border-[#155A96] text-xs sm:text-sm text-[#191C20] outline-none"
              />
              <span className="block text-[11px] text-[#58606B]">
                Endpoint consultado: <code className="font-mono text-[10px]">{urlInput}/wp-json/wp/v2/posts?_embed</code>
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#D5E4F8]/40 border border-[#D5E4F8] text-xs text-[#062544] space-y-1">
              <span className="font-bold block">💡 Respaldo Automático (Fallback):</span>
              <p>
                Si la URL es la plantilla por defecto o falla por CORS/red, la aplicación muestra automáticamente los artículos técnicos de demostración para que el blog nunca quede vacío.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                onClick={() => {
                  setUrlInput(WP_API_URL);
                  if (onUpdateWpUrl) onUpdateWpUrl(WP_API_URL);
                  setShowConfigModal(false);
                }}
                className="px-4 py-2.5 rounded-full text-xs font-semibold text-[#58606B] hover:bg-[#EAEEF4]"
              >
                Restablecer valor inicial
              </button>
              <button
                onClick={() => {
                  if (onUpdateWpUrl) onUpdateWpUrl(urlInput.trim());
                  setShowConfigModal(false);
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#155A96] hover:bg-[#0e4475] shadow-sm"
              >
                Guardar y Conectar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
