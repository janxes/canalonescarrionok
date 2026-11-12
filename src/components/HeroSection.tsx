import React from 'react';

interface HeroSectionProps {
  onQuoteClick: () => void;
  onServicesClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onQuoteClick,
  onServicesClick,
}) => {
  const provinces = [
    'Valladolid',
    'Palencia',
    'Burgos',
    'León',
    'Zamora',
    'Salamanca',
    'Segovia',
    'Soria',
    'Ávila',
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FAFBFD] via-[#F1F4F9]/70 to-[#FAFBFD]">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#D5E4F8]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-[#E0F2FE]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Left column) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tonal M3 Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D5E4F8] text-[#062544] text-xs sm:text-sm font-semibold tracking-wide">
              <span className="material-symbols-outlined text-[18px] text-[#155A96]">
                handyman
              </span>
              <span>Fabricación continua sin juntas in situ a pie de obra</span>
            </div>

            {/* Main SEO Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#191C20] tracking-tight leading-[1.15] font-heading">
              Instalación y fabricación de{' '}
              <span className="text-[#155A96] underline decoration-[#4792D4]/50 decoration-wavy decoration-2">
                canalones a medida
              </span>{' '}
              en Castilla y León
            </h1>

            {/* Subtitle with Local SEO Keywords */}
            <p className="text-base sm:text-lg text-[#41484D] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              En <strong>Canalones Carrión</strong> perfilamos el canalón de aluminio continuo 
              directamente en tu propiedad, eliminando juntas y garantizando la estanqueidad total. 
              Protegemos tu vivienda, comunidad o nave industrial contra las heladas, lluvias torrenciales y nieves de nuestra región.
            </p>

            {/* Dual Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onQuoteClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-[#155A96] hover:bg-[#0e4475] active:scale-95 shadow-md hover:shadow-lg transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  calculate
                </span>
                <span>Solicitar presupuesto gratis</span>
              </button>

              <button
                onClick={onServicesClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-[#155A96] bg-white border border-[#C2C7D0] hover:bg-[#F1F4F9] active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  visibility
                </span>
                <span>Ver servicios</span>
              </button>
            </div>

            {/* Regional Coverage Indicator */}
            <div className="pt-4 border-t border-[#EAEEF4] text-xs text-[#58606B]">
              <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-2 font-medium text-[#191C20]">
                <span className="material-symbols-outlined text-[16px] text-[#155A96]">
                  location_on
                </span>
                <span>Taller móvil con cobertura en las 9 provincias:</span>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
                {provinces.map((prov) => (
                  <span
                    key={prov}
                    className="px-2.5 py-1 rounded-full bg-white border border-[#E2E7EE] text-[11px] font-medium text-[#41484D]"
                  >
                    {prov}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Hero Visual Card (Right column) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main M3 Container Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-[#EAEEF4] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0F2FE]/60 rounded-bl-full pointer-events-none" />

                {/* Header of the card */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-[#155A96] uppercase tracking-wider">
                      Tecnología Sin Juntas
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#EAEEF4] font-medium text-[#58606B]">
                    In Situ
                  </span>
                </div>

                {/* Representative technical visual of seamless gutter profile */}
                <div className="rounded-2xl bg-gradient-to-br from-[#155A96] to-[#0A3760] p-6 text-white mb-6 shadow-inner relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 opacity-15">
                    <span className="material-symbols-outlined text-[160px]">
                      water_damage
                    </span>
                  </div>
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[24px] text-[#D5E4F8]">
                          precision_manufacturing
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-base font-heading">Perfil Cornisa & Trapecio</h4>
                        <p className="text-xs text-white/80">Aluminio de 0,7 mm de espesor</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/15 grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="block text-white/70 text-[11px]">Capacidad pluvial</span>
                        <span className="font-bold text-sm">Alto Caudal</span>
                      </div>
                      <div>
                        <span className="block text-white/70 text-[11px]">Uniones rectas</span>
                        <span className="font-bold text-sm text-[#7ec3f3]">0 Empalmes</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4 Quick Trust Badges in M3 Tonal format */}
                <div className="grid grid-cols-2 gap-3">
                  
                  <div className="p-3.5 rounded-2xl bg-[#F1F4F9] border border-[#E2E7EE]/80">
                    <div className="w-8 h-8 rounded-full bg-[#D5E4F8] flex items-center justify-center mb-2 text-[#155A96]">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                    </div>
                    <h5 className="font-bold text-xs text-[#191C20]">0 Juntas</h5>
                    <p className="text-[11px] text-[#58606B] leading-tight mt-0.5">
                      100% estanco, adiós a las goteras
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F1F4F9] border border-[#E2E7EE]/80">
                    <div className="w-8 h-8 rounded-full bg-[#D5E4F8] flex items-center justify-center mb-2 text-[#155A96]">
                      <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                    </div>
                    <h5 className="font-bold text-xs text-[#191C20]">Garantía Escrita</h5>
                    <p className="text-[11px] text-[#58606B] leading-tight mt-0.5">
                      Certificado de instalación y durabilidad
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F1F4F9] border border-[#E2E7EE]/80">
                    <div className="w-8 h-8 rounded-full bg-[#D5E4F8] flex items-center justify-center mb-2 text-[#155A96]">
                      <span className="material-symbols-outlined text-[18px]">timer</span>
                    </div>
                    <h5 className="font-bold text-xs text-[#191C20]">Respuesta &lt; 24h</h5>
                    <p className="text-[11px] text-[#58606B] leading-tight mt-0.5">
                      Presupuesto cerrado sin sorpresas
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F1F4F9] border border-[#E2E7EE]/80">
                    <div className="w-8 h-8 rounded-full bg-[#D5E4F8] flex items-center justify-center mb-2 text-[#155A96]">
                      <span className="material-symbols-outlined text-[18px]">ac_unit</span>
                    </div>
                    <h5 className="font-bold text-xs text-[#191C20]">Anti-Heladas</h5>
                    <p className="text-[11px] text-[#58606B] leading-tight mt-0.5">
                      Soporte reforzado para peso de nieve
                    </p>
                  </div>

                </div>

                {/* Floating pill badge */}
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#155A96] font-semibold">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    Instaladores autorizados y asegurados
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
