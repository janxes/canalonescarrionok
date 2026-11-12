import React from 'react';

interface ComplementaryServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ComplementaryServicesSection: React.FC<ComplementaryServicesSectionProps> = ({
  onSelectService,
}) => {
  const complementaryServices = [
    {
      id: 'limpieza',
      title: 'Limpieza de Canalones y Bajantes',
      icon: 'cleaning_services',
      tonalBg: 'bg-[#F1F4F9]',
      borderBorder: 'border-[#E2E7EE]',
      accentColor: 'text-[#155A96]',
      badgeBg: 'bg-[#D5E4F8]',
      description:
        'Retirada exhaustiva de lodos, musgo, nidos de pájaros y hojas acumuladas. Desatasco a presión de bajantes para evitar desbordamientos y filtraciones en la cornisa.',
      highlight: 'Recomendado al menos 1 vez al año antes del invierno.',
    },
    {
      id: 'reparacion',
      title: 'Reparación de Fugas y Nivelación',
      icon: 'plumbing',
      tonalBg: 'bg-[#E0F2FE]/40',
      borderBorder: 'border-[#BAE6FD]',
      accentColor: 'text-[#0284C7]',
      badgeBg: 'bg-[#E0F2FE]',
      description:
        'Sellado profesional con masillas poliméricas de alta resistencia a rayos UV, recolocación de ganchos desprendidos y corrección de contrapendientes que causan estancamientos de agua y hielo.',
      highlight: 'Eliminamos charcos interiores que acaban congelándose.',
    },
    {
      id: 'rejillas',
      title: 'Rejillas Salvahojas y Antipájaros',
      icon: 'shield',
      tonalBg: 'bg-[#F1F4F9]',
      borderBorder: 'border-[#E2E7EE]',
      accentColor: 'text-[#155A96]',
      badgeBg: 'bg-[#D5E4F8]',
      description:
        'Instalación de mallas microperforadas de aluminio y peines de protección en aleros. Permiten el paso fluido del 100% del caudal de agua bloqueando hojas de pinos, chopos y anidamientos de aves.',
      highlight: 'Reduce la necesidad de limpiezas periódicas en un 80%.',
    },
    {
      id: 'remates',
      title: 'Remates de Chapa y Albardillas a Medida',
      icon: 'architecture',
      tonalBg: 'bg-[#E0F2FE]/40',
      borderBorder: 'border-[#BAE6FD]',
      accentColor: 'text-[#0284C7]',
      badgeBg: 'bg-[#E0F2FE]',
      description:
        'Fabricación y plegado a medida de baberos de protección, cumbreras, limahoyas, goterones y remates perimetrales para coronación de muros y chimeneas con el mismo tono que tus canalones.',
      highlight: 'Protección integral y remates herméticos sin holguras.',
    },
  ];

  return (
    <section id="complementarios" className="py-16 sm:py-20 bg-white scroll-mt-16 border-t border-[#EAEEF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-[#E0F2FE] text-[#034E7B] inline-block mb-3">
              Mantenimiento y Reparación Técnica
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191C20] tracking-tight font-heading">
              Servicios complementarios para alargar la vida de tu tejado
            </h2>
            <p className="mt-3 text-lg text-[#41484D] leading-relaxed">
              No solo instalamos sistemas nuevos: diagnosticamos problemas existentes, limpiamos y protegemos 
              instalaciones pluviales en cualquier municipio de Castilla y León.
            </p>
          </div>

          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#F1F4F9] text-sm font-semibold text-[#58606B]">
              <span className="material-symbols-outlined text-[20px] text-[#155A96]">
                schedule
              </span>
              <span>Intervenciones rápidas y seguras</span>
            </div>
          </div>
        </div>

        {/* 4 Tonal Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {complementaryServices.map((service) => (
            <div
              key={service.id}
              className={`${service.tonalBg} border ${service.borderBorder} rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all duration-200 group`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${service.badgeBg} flex items-center justify-center mb-5 ${service.accentColor}`}>
                  <span className="material-symbols-outlined text-[28px]">
                    {service.icon}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-[#191C20] font-heading mb-3 group-hover:text-[#155A96] transition-colors">
                  {service.title}
                </h3>

                <p className="text-base text-[#41484D] leading-relaxed mb-5 font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 space-y-3.5">
                <div className="flex items-start gap-2 text-sm font-medium text-[#58606B]">
                  <span className="material-symbols-outlined text-[18px] text-[#155A96] shrink-0 mt-0.5">
                    lightbulb
                  </span>
                  <span className="leading-snug">{service.highlight}</span>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 px-4 rounded-full text-sm font-bold text-[#155A96] bg-white border border-[#C2C7D0]/60 hover:bg-[#155A96] hover:text-white hover:border-[#155A96] transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Pedir presupuesto</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
