import React, { useState, useEffect } from 'react';
import { WordPressPost } from '../types/wordpress';
import { fetchWordPressPosts, WP_API_URL } from '../config/wordpress';

interface BlogFeaturedSectionProps {
  onNavigateBlog: () => void;
  onSelectPost: (post: WordPressPost) => void;
  customWpUrl?: string;
  onOpenSettings?: () => void;
}

export const BlogFeaturedSection: React.FC<BlogFeaturedSectionProps> = ({
  onNavigateBlog,
  onSelectPost,
  customWpUrl,
  onOpenSettings,
}) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFallback, setIsFallback] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    async function loadFeaturedPosts() {
      setLoading(true);
      try {
        const result = await fetchWordPressPosts(1, 3, customWpUrl);
        if (isMounted) {
          setPosts(result.posts.slice(0, 3));
          setIsFallback(result.isFallback);
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadFeaturedPosts();
    return () => {
      isMounted = false;
    };
  }, [customWpUrl]);

  // Formato amigable en español de la fecha
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

  // Limpiar HTML del extracto
  const cleanExcerpt = (rawHtml: string) => {
    const text = rawHtml.replace(/<[^>]+>/g, '').trim();
    if (text.length > 130) {
      return text.slice(0, 130) + '...';
    }
    return text;
  };

  return (
    <section id="blog-destacado" className="py-16 sm:py-24 bg-[#FAFBFD] scroll-mt-16 border-t border-[#EAEEF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-[#D5E4F8] text-[#062544]">
                Blog Técnico y Consejos
              </span>
              {isFallback && (
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#F1F4F9] text-[#58606B] border border-[#E2E7EE]" title="Mostrando artículos de guía técnica de respaldo">
                  Modo Fallback / Local
                </span>
              )}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191C20] tracking-tight font-heading">
              Actualidad, normativa y cuidado de cubiertas
            </h2>
            <p className="mt-3 text-lg text-[#41484D] leading-relaxed">
              Artículos elaborados por nuestros técnicos instaladores con recomendaciones prácticas 
              para mantener canalones, bajantes y limahoyas en perfecto estado.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                className="p-2.5 rounded-full text-[#58606B] hover:text-[#155A96] hover:bg-[#EAEEF4] border border-[#C2C7D0]/60 transition-colors"
                title="Configurar URL de WordPress REST API"
                aria-label="Configurar WordPress"
              >
                <span className="material-symbols-outlined text-[20px]">settings</span>
              </button>
            )}

            <button
              onClick={onNavigateBlog}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-bold text-[#155A96] bg-[#D5E4F8]/70 hover:bg-[#155A96] hover:text-white transition-all shadow-2xs"
            >
              <span>Ver todos los artículos</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Loading State: M3 Skeleton Loaders */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAEEF4] p-5 space-y-4 animate-pulse"
              >
                <div className="h-48 bg-[#EAEEF4] rounded-2xl w-full" />
                <div className="h-4 bg-[#EAEEF4] rounded-full w-1/3" />
                <div className="h-6 bg-[#EAEEF4] rounded-full w-4/5" />
                <div className="h-14 bg-[#F1F4F9] rounded-2xl w-full" />
                <div className="h-8 bg-[#EAEEF4] rounded-full w-1/2 pt-2" />
              </div>
            ))}
          </div>
        ) : (
          /* Grid of 3 Recent Posts */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAEEF4] hover:border-[#155A96]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Featured Image */}
                  <div className="relative h-56 overflow-hidden bg-[#EAEEF4]">
                    <img
                      src={post.featuredImageUrl || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'}
                      alt={post.title.rendered}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-sm font-bold bg-white/95 backdrop-blur-md text-[#155A96] shadow-sm">
                        {post.categoryName || 'Guía Técnica'}
                      </span>
                    </div>
                  </div>

                  {/* Post Content Details */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3 text-sm text-[#58606B] mb-3">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px] text-[#155A96]">
                          calendar_today
                        </span>
                        {formatDate(post.date)}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px] text-[#155A96]">
                          schedule
                        </span>
                        {post.readTimeMinutes || 4} min de lectura
                      </span>
                    </div>

                    <h3 className="font-bold text-xl text-[#191C20] font-heading group-hover:text-[#155A96] transition-colors leading-snug mb-3 line-clamp-2">
                      {post.title.rendered}
                    </h3>

                    <p className="text-base text-[#41484D] line-clamp-3 leading-relaxed">
                      {cleanExcerpt(post.excerpt.rendered)}
                    </p>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#F1F4F9] flex items-center justify-between text-sm font-bold text-[#155A96]">
                  <span className="group-hover:underline">Leer artículo completo</span>
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
