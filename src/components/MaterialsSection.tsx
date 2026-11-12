import React, { useState } from 'react';

interface MaterialsSectionProps {
  onQuoteClick: () => void;
}

export const MaterialsSection: React.FC<MaterialsSectionProps> = ({ onQuoteClick }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<'aluminio' | 'zinc' | 'cobre'>('aluminio');

  const materialsData = {
    aluminio: {
      id: 'aluminio',
      name: 'Aluminio Lacado Continuo',
      tag: 'El Más Demandado',
      badgeClass: 'bg-[#D5E4F8] text-[#062544]',
      icon: 'architecture',
      headline: '0 Juntas, ligereza estructural y resistencia absoluta a la corrosión',
      description:
        'El aluminio continuo lacado es el estándar de oro en la edificación actual en Castilla y León. Fabricado in situ a partir de bobinas de aleación de primera calidad (series 3005 y 3105) con lacado termoendurecible de poliamida al horno a 220 ºC.',
      benefits: [
        'Perfilado continuo de una sola pieza: sin empalmes en aleros de hasta 35 metros.',
        'Resistencia inalterable a la oxidación: el aluminio no se sulfata ni produce óxido ferroso.',
        'Carta RAL con más de 20 acabados (blanco, antracita, marrón teja, verde carruaje, negro forja, etc.).',
        'Ganchos interiores ocultos que resisten el peso de heladas severas y carámbanos sin descolgarse.',
      ],
      durability: '30 - 40 años',
      frostResistance: 'Excelente (sin juntas que estallen)',
      maintenance: 'Mínimo (limpieza ocasional de hojas)',
      aesthetics: 'Líneas limpias y modernas o clásicas según cornisa',
    },
    zinc: {
      id: 'zinc',
      name: 'Zinc Natural y Titanio-Zinc',
      tag: 'Material Noble y Tradición',
      badgeClass: 'bg-[#E1E5EB] text-[#161D24]',
      icon: 'layers',
      headline: 'Autoprotección natural con una pátina protectora que dura más de un siglo',
      description:
        'El zinc es el material noble por excelencia en la arquitectura tradicional castellana y en cubiertas singulares. Al oxidarse superficialmente de forma controlada genera una película protectora de carbonato de zinc que repara pequeños arañazos de manera natural.',
      benefits: [
        'Soldadura química y estaño al 50%: uniones sólidas ejecutadas por maestros caldereros.',
        'Longevidad superior a los 70-100 años sin necesidad de pintura ni tratamientos periódicos.',
        'Comportamiento térmico sobresaliente ante amplitudes de temperatura extremas (-15 ºC en invierno a +40 ºC en verano).',
        'Armonía total con tejados de pizarra en León o Segovia y teja árabe tradicional en Valladolid y Palencia.',
      ],
      durability: '70 - 100+ años',
      frostResistance: 'Extraordinaria',
      maintenance: 'Nulo (se autoprotege)',
      aesthetics: 'Pátina gris cuarzo / antracita con encanto atemporal',
    },
    cobre: {
      id: 'cobre',
      name: 'Cobre Natural y Acero Galvanizado',
      tag: 'Máxima Solidez Mecánica',
      badgeClass: 'bg-amber-100 text-amber-900',
      icon: 'shield_locked',
      headline: 'Imbatible resistencia contra aludes de nieve y choques térmicos severos',
      description:
        'Indicado para zonas de alta montaña (Cordillera Cantábrica, Sistema Central, Sierra de la Demanda) y edificios históricos donde la carga de nieve acumulada y los carámbanos de hielo exigen la máxima resistencia a la tracción.',
      benefits: [
        'Gran densidad y rigidez mecánica: no se deforma bajo grandes bloques de nieve helada.',
        'Propiedades biocidas naturales del cobre que impiden la proliferación de musgos y líquenes.',
        'Evolución tonal noble: desde el brillo rojizo inicial hasta la característica pátina verde cardenillo.',
        'Opciones en acero galvanizado prelacado para naves industriales con gran luz entre apoyos.',
      ],
      durability: '80 - 120 años',
      frostResistance: 'Máxima (soporta sobrecargas extremas)',
      maintenance: 'Nulo',
      aesthetics: 'Prestigio señorial y acabado rústico / montañés',
    },
  };

  const current = materialsData[selectedMaterial];

  const ralColors = [
    { name: 'Blanco Nieve', hex: '#FFFFFF', ral: 'RAL 9010', border: 'border-gray-300' },
    { name: 'Gris Antracita', hex: '#293133', ral: 'RAL 7016' },
    { name: 'Marrón Teja', hex: '#633A34', ral: 'RAL 8004' },
    { name: 'Negro Forja', hex: '#1E232A', ral: 'RAL 9005' },
    { name: 'Cobre Lacado', hex: '#A85138', ral: 'RAL 8029' },
    { name: 'Gris Plata', hex: '#8A8D8F', ral: 'RAL 9006' },
    { name: 'Verde Carruaje', hex: '#1B4D3E', ral: 'RAL 6005' },
    { name: 'Rojo Burdeos', hex: '#581825', ral: 'RAL 3005' },
  ];

  return (
    <section id="materiales" className="py-16 sm:py-24 bg-[#FAFBFD] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-[#D5E4F8] text-[#062544] inline-block mb-3">
            Guía Técnica de Materiales
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191C20] tracking-tight font-heading">
            Materiales resistentes al clima de Castilla y León
          </h2>
          <p className="mt-4 text-lg text-[#41484D] leading-relaxed">
            Las continuas heladas invernales, el granizo y la radiación solar estival exigen aleaciones 
            de primera fundición que mantengan la ductilidad y la estanqueidad durante décadas.
          </p>
        </div>

        {/* Material Selector Tabs (M3 Segmented Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-xl mx-auto p-1.5 bg-[#EAEEF4] rounded-full">
          {(['aluminio', 'zinc', 'cobre'] as const).map((matKey) => {
            const isSelected = selectedMaterial === matKey;
            return (
              <button
                key={matKey}
                onClick={() => setSelectedMaterial(matKey)}
                className={`flex-1 min-w-[140px] py-3.5 px-5 rounded-full text-sm sm:text-base font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSelected
                    ? 'bg-[#155A96] text-white shadow-sm'
                    : 'text-[#41484D] hover:text-[#155A96] hover:bg-white/60'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {materialsData[matKey].icon}
                </span>
                <span>{materialsData[matKey].name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Material Card Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAEEF4] shadow-md transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Detail Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-3.5 py-1.5 rounded-full text-sm font-bold ${current.badgeClass}`}>
                  {current.tag}
                </span>
                <span className="text-sm text-[#58606B] font-medium">
                  Aleaciones certificadas según norma UNE-EN
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191C20] font-heading mb-2">
                  {current.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-[#155A96]">
                  {current.headline}
                </p>
              </div>

              <p className="text-base text-[#41484D] leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Benefits list */}
              <div className="space-y-3.5 pt-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#191C20]">
                  Ventajas destacadas para tejados castellanos:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {current.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#F1F4F9] border border-[#EAEEF4] flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-[20px] text-[#155A96] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="text-sm sm:text-base text-[#191C20] font-medium leading-snug">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color swatch demonstration (only for aluminium, but noted for all) */}
              {selectedMaterial === 'aluminio' && (
                <div className="pt-4 border-t border-[#EAEEF4]">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#191C20] mb-3">
                    Muestra de colores RAL más solicitados:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {ralColors.map((c) => (
                      <div
                        key={c.ral}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAFBFD] border border-[#EAEEF4]"
                      >
                        <span
                          className={`w-7 h-7 rounded-full shrink-0 shadow-inner ${c.border || ''}`}
                          style={{ backgroundColor: c.hex }}
                        />
                        <div className="overflow-hidden">
                          <span className="block text-sm font-bold text-[#191C20] truncate">
                            {c.name}
                          </span>
                          <span className="block text-xs text-[#58606B] truncate">{c.ral}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Technical Spec Column (M3 Tonal Container) */}
            <div className="lg:col-span-5 bg-[#F1F4F9] rounded-3xl p-6 sm:p-8 border border-[#E2E7EE] space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-[#E2E7EE]">
                <div className="w-11 h-11 rounded-2xl bg-[#155A96] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">tune</span>
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#191C20] font-heading">
                    Ficha Técnica Resumida
                  </h4>
                  <p className="text-sm text-[#58606B]">Datos de rendimiento para Castilla y León</p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                
                <div className="flex items-center justify-between py-2 border-b border-[#E2E7EE]/60">
                  <span className="text-[#58606B] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">hourglass_empty</span>
                    Vida útil estimada
                  </span>
                  <span className="font-bold text-[#191C20]">{current.durability}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#E2E7EE]/60">
                  <span className="text-[#58606B] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">ac_unit</span>
                    Resistencia a heladas
                  </span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-sm">
                    {current.frostResistance}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#E2E7EE]/60">
                  <span className="text-[#58606B] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">build</span>
                    Mantenimiento
                  </span>
                  <span className="font-bold text-[#191C20]">{current.maintenance}</span>
                </div>

                <div className="flex items-start justify-between py-2">
                  <span className="text-[#58606B] flex items-center gap-2 shrink-0">
                    <span className="material-symbols-outlined text-[18px]">palette</span>
                    Acabado visual
                  </span>
                  <span className="font-semibold text-[#191C20] text-right ml-4">
                    {current.aesthetics}
                  </span>
                </div>

              </div>

              {/* Callout box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E7EE] text-sm space-y-2">
                <span className="font-bold text-[#155A96] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  Asesoramiento in situ gratuito
                </span>
                <p className="text-[#58606B] leading-relaxed">
                  ¿No tienes claro cuál es el más conveniente para tu cubierta? En nuestra visita técnica 
                  revisamos la inclinación, tejas y fachada para recomendarte la opción óptima.
                </p>
              </div>

              {/* Button */}
              <button
                onClick={onQuoteClick}
                className="w-full py-4 px-6 rounded-full text-sm sm:text-base font-bold text-white bg-[#155A96] hover:bg-[#0e4475] shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Pedir presupuesto en {current.name.split(' ')[0]}</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
