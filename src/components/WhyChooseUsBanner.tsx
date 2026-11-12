import React from 'react';

interface WhyChooseUsBannerProps {
  onQuoteClick: () => void;
}

export const WhyChooseUsBanner: React.FC<WhyChooseUsBannerProps> = ({ onQuoteClick }) => {
  const pillars = [
    {
      icon: 'local_shipping',
      title: 'Taller Móvil a Pie de Obra',
      description:
        'Desplazamos nuestro vehículo taller equipado con perfiladora automática directa desde bobina, extrusionando las piezas en una sola tirada in situ.',
    },
    {
      icon: 'engineering',
      title: 'Instaladores Propios Asegurados',
      description:
        'Sin subcontratas opacas. Personal cualificado con homologación en trabajos en altura, líneas de vida y seguro de Responsabilidad Civil integral.',
    },
    {
      icon: 'map',
      title: 'Cobertura Regional Completa',
      description:
        'Atendemos las 9 provincias de Castilla y León: Valladolid, Palencia, Burgos, León, Zamora, Salamanca, Segovia, Soria y Ávila, con logística ágil.',
    },
    {
      icon: 'handshake',
      title: 'Presupuesto Cerrado y Transparente',
      description:
        'Valoración clara sin sorpresas de última hora. Desglose detallado por metro lineal, bajantes y remates, con garantía por escrito de estanqueidad.',
    },
  ];

  return (
    <section id="ventajas" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container in M3 Style */}
        <div className="rounded-3xl bg-gradient-to-br from-[#155A96] via-[#104879] to-[#082947] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          
          {/* Subtle architectural water-flow background elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-[#4792D4]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-[#D5E4F8] inline-block mb-3 backdrop-blur-sm">
              Compromiso de Calidad Directa
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              ¿Por qué confiar tu tejado a Canalones Carrión?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl mx-auto">
              Más de 15 años protegiendo cubiertas en Castilla y León. Combinamos maquinaria móvil de última 
              generación con un trato directo y cercano.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/15 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#D5E4F8] text-[#155A96] flex items-center justify-center mb-5 shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">
                      {pillar.icon}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg font-heading text-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#D5E4F8] font-medium">
                  <span className="material-symbols-outlined text-[15px]">check</span>
                  <span>Garantía Carrión</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner Action */}
          <div className="relative z-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-lg font-bold font-heading text-white">
                ¿Tienes dudas sobre la inclinación o el caudal de tu cubierta?
              </h4>
              <p className="text-xs sm:text-sm text-white/75 mt-0.5">
                Te enviamos un técnico para medir y presupuestar sin compromiso alguno.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+34676000000"
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>676 00 00 00</span>
              </a>

              <button
                onClick={onQuoteClick}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#062544] bg-[#D5E4F8] hover:bg-white active:scale-95 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Pedir Presupuesto</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
