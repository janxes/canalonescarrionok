import React from 'react';

interface ServicesClientsSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesClientsSection: React.FC<ServicesClientsSectionProps> = ({
  onSelectService,
}) => {
  const clientServices = [
    {
      id: 'viviendas',
      title: 'Viviendas Particulares y Chalets',
      badge: 'Chalets y Unifamiliares',
      icon: 'home',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      description:
        'Solución estética y funcional para viviendas unifamiliares, casas de pueblo y chalets en toda la meseta castellana.',
      features: [
        'Fabricación in situ de una sola pieza a la medida exacta del alero.',
        'Integración cromática perfecta con más de 20 colores de la carta normalizada RAL.',
        'Fijación oculta de aluminio extrusionado que no rompe la estética de la fachada.',
        'Instalación rápida y limpia en el mismo día, sin obras ni residuos.',
      ],
      tagline: 'Garantía de estanqueidad sin filtraciones ni humedades en aleros.',
    },
    {
      id: 'comunidades',
      title: 'Comunidades de Propietarios',
      badge: 'Edificios y Fincas Residenciales',
      icon: 'apartment',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      description:
        'Especialistas en rehabilitación y sustitución de bajantes y canalizaciones pluviales para comunidades de vecinos y administradores de fincas.',
      features: [
        'Sustitución de canalones viejos de zinc oxidado, fibrocemento o PVC agrietado.',
        'Coordinación directa con administradores de fincas y juntas de vecinos.',
        'Medios propios de elevación: trabajos verticales y plataformas sin andamios molestos.',
        'Planes de mantenimiento preventivo y limpieza periódica con informes fotográficos.',
      ],
      tagline: 'Tratamiento preferente y presupuestos desglosados para aprobación en junta.',
    },
    {
      id: 'industriales',
      title: 'Empresas y Naves Industriales',
      badge: 'Naves y Polígonos Industriales',
      icon: 'factory',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      description:
        'Sistemas de evacuación de alto caudal para cubiertas de gran superficie en polígonos industriales y centros logísticos.',
      features: [
        'Canalones de gran desarrollo (380 mm y 450 mm) para desalojo de aguaceros torrenciales.',
        'Estructura calculada para sobrecargas extremas de nieve y granizo.',
        'Cumplimiento riguroso de Prevención de Riesgos Laborales (PRL) y líneas de vida.',
        'Mínimo impacto en la actividad productiva de la fábrica o almacén.',
      ],
      tagline: 'Documentación técnica completa, certificados de homologación y seguros de R.C.',
    },
  ];

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-[#FAFBFD] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D5E4F8] text-[#062544] inline-block mb-3">
            Especialización a Medida
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191C20] tracking-tight font-heading">
            Soluciones adaptadas a cada tipo de cubierta
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#41484D]">
            Fabricamos e instalamos con los más altos estándares de calidad, adaptando las dimensiones, 
            el espesor y los anclajes al uso específico de cada edificación en Castilla y León.
          </p>
        </div>

        {/* 3 M3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EAEEF4] hover:border-[#155A96]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image with Badge */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-[#155A96] shadow-sm">
                    {service.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <div className="w-9 h-9 rounded-full bg-[#155A96] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px] text-white">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg font-heading leading-snug drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-sm text-[#41484D] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#155A96]">
                      Puntos Clave del Servicio:
                    </span>
                    <ul className="space-y-2.5">
                      {service.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#191C20]">
                          <span className="material-symbols-outlined text-[18px] text-[#155A96] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer of Card with CTA */}
                <div className="pt-4 border-t border-[#F1F4F9]">
                  <p className="text-xs text-[#58606B] italic mb-4">
                    {service.tagline}
                  </p>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 px-5 rounded-full text-xs sm:text-sm font-bold text-[#155A96] bg-[#D5E4F8]/70 hover:bg-[#155A96] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Consultar para {service.badge}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
