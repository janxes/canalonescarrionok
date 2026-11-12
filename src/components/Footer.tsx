import React, { useState } from 'react';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateBlog: () => void;
  onSelectAnchor: (anchorId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateBlog,
  onSelectAnchor,
}) => {
  const [legalModal, setLegalModal] = useState<'aviso' | 'privacidad' | 'cookies' | null>(null);

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
    <>
      <footer className="bg-[#FAFBFD] border-t border-[#EAEEF4] text-[#41484D] pt-16 pb-24 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
            
            {/* Col 1: Brand & SEO Summary (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <button
                onClick={() => {
                  onNavigateHome();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-block focus:outline-none"
                aria-label="Canalones Carrión Inicio"
              >
                <img
                  src="/assets/aistudio/LogocanalonesCarrion_ancho_y_debajo_e0c3e84a.jpg"
                  alt="Canalones Carrión"
                  className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm"
                />
              </button>

              <p className="text-base text-[#41484D] leading-relaxed max-w-md">
                <strong>Canalones Carrión</strong> es la empresa de referencia en la fabricación a 
                medida, instalación, reparación y limpieza de <em>canalones de aluminio continuo sin juntas</em>, 
                zinc y cobre en toda la comunidad autónoma de <strong>Castilla y León</strong>. 
                Tecnología in situ a pie de obra con furgón taller propio y garantía por escrito.
              </p>

              <div className="flex items-center gap-2 text-sm text-[#155A96] font-semibold">
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span>Instalaciones aseguradas con cumplimiento estricto de PRL</span>
              </div>
            </div>

            {/* Col 2: Servicios & Soluciones (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#191C20] font-heading">
                Servicios
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => {
                      onNavigateHome();
                      setTimeout(() => onSelectAnchor('servicios'), 100);
                    }}
                    className="hover:text-[#155A96] transition-colors"
                  >
                    Chalets y Unifamiliares
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigateHome();
                      setTimeout(() => onSelectAnchor('servicios'), 100);
                    }}
                    className="hover:text-[#155A96] transition-colors"
                  >
                    Comunidades de Propietarios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigateHome();
                      setTimeout(() => onSelectAnchor('servicios'), 100);
                    }}
                    className="hover:text-[#155A96] transition-colors"
                  >
                    Naves Industriales
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigateHome();
                      setTimeout(() => onSelectAnchor('complementarios'), 100);
                    }}
                    className="hover:text-[#155A96] transition-colors"
                  >
                    Limpieza y Desatasco
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigateHome();
                      setTimeout(() => onSelectAnchor('complementarios'), 100);
                    }}
                    className="hover:text-[#155A96] transition-colors"
                  >
                    Rejillas Salvahojas
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Enlaces Rápidos y Blog (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#191C20] font-heading">
                Navegación
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => {
                      onNavigateHome();
                      setTimeout(() => onSelectAnchor('materiales'), 100);
                    }}
                    className="hover:text-[#155A96] transition-colors"
                  >
                    Materiales (Aluminio/Zinc/Cobre)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigateHome();
                      setTimeout(() => onSelectAnchor('ventajas'), 100);
                    }}
                    className="hover:text-[#155A96] transition-colors"
                  >
                    Por qué elegirnos
                  </button>
                </li>
                <li>
                  <button
                    onClick={onNavigateBlog}
                    className="hover:text-[#155A96] transition-colors font-medium text-[#155A96]"
                  >
                    Blog y Artículos Técnicos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigateHome();
                      setTimeout(() => onSelectAnchor('presupuesto'), 100);
                    }}
                    className="hover:text-[#155A96] transition-colors"
                  >
                    Pedir Presupuesto
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Contacto & Provincias (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#191C20] font-heading">
                Contacto Directo
              </h4>
              <div className="space-y-2 text-sm sm:text-base">
                <a
                  href="tel:+34676000000"
                  className="flex items-center gap-2 hover:text-[#155A96] font-semibold text-[#191C20]"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#155A96]">call</span>
                  <span>676 00 00 00</span>
                </a>
                <a
                  href="mailto:info@canalonescarrion.com"
                  className="flex items-center gap-2 hover:text-[#155A96]"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#155A96]">mail</span>
                  <span>info@canalonescarrion.com</span>
                </a>
                <div className="flex items-start gap-2 pt-1 text-sm text-[#58606B]">
                  <span className="material-symbols-outlined text-[18px] text-[#155A96] shrink-0 mt-0.5">
                    location_on
                  </span>
                  <span>Sede central y taller móvil con servicio en toda Castilla y León</span>
                </div>
              </div>

              {/* Provincias chips */}
              <div className="pt-3">
                <span className="block text-xs font-bold text-[#191C20] uppercase tracking-wider mb-2">
                  Provincias atendidas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {provinces.map((p) => (
                    <span
                      key={p}
                      className="text-xs bg-[#EAEEF4] px-2.5 py-1 rounded-full text-[#41484D] font-medium"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Subfooter: Copyright and Legal */}
          <div className="pt-8 border-t border-[#EAEEF4] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#58606B]">
            <p>
              © {new Date().getFullYear()} <strong>Canalones Carrión</strong>. Todos los derechos reservados.
              Fabricación in situ de canalones en Castilla y León.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={() => setLegalModal('aviso')}
                className="hover:text-[#155A96] underline"
              >
                Aviso Legal
              </button>
              <button
                onClick={() => setLegalModal('privacidad')}
                className="hover:text-[#155A96] underline"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => setLegalModal('cookies')}
                className="hover:text-[#155A96] underline"
              >
                Cookies
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-[#EAEEF4] shadow-2xl max-h-[85vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAEEF4]">
              <h3 className="font-bold text-lg font-heading text-[#191C20]">
                {legalModal === 'aviso' && 'Aviso Legal'}
                {legalModal === 'privacidad' && 'Política de Privacidad y RGPD'}
                {legalModal === 'cookies' && 'Política de Cookies'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-full text-[#58606B] hover:bg-[#EAEEF4]"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#41484D] space-y-3 leading-relaxed">
              {legalModal === 'aviso' && (
                <>
                  <p>
                    En cumplimiento con el artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de 
                    la Información y Comercio Electrónico (LSSI), se informa que este sitio web pertenece 
                    a <strong>Canalones Carrión</strong>, especializada en fabricación e instalación de 
                    sistemas de evacuación pluvial en Castilla y León.
                  </p>
                  <p>
                    Para cualquier consulta técnica o comercial, puede dirigirse al correo electrónico 
                    <strong className="text-[#155A96]"> info@canalonescarrion.com</strong> o al 
                    teléfono <strong className="text-[#155A96]">676 00 00 00</strong>.
                  </p>
                </>
              )}

              {legalModal === 'privacidad' && (
                <>
                  <p>
                    De acuerdo con el Reglamento General de Protección de Datos (RGPD UE 2016/679) y la 
                    LOPDGDD 3/2018, le informamos de que los datos personales aportados a través del 
                    formulario de solicitud de presupuesto serán tratados por Canalones Carrión con la 
                    única y exclusiva finalidad de gestionar y responder a su solicitud técnica o presupuesto.
                  </p>
                  <p>
                    No se cederán datos a terceros salvo obligación legal expresa. Puede ejercitar sus 
                    derechos de acceso, rectificación, supresión y limitación escribiendo a info@canalonescarrion.com.
                  </p>
                </>
              )}

              {legalModal === 'cookies' && (
                <>
                  <p>
                    Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para el 
                    correcto funcionamiento y navegación del sitio web, así como almacenamiento local 
                    para preferencias de navegación del usuario.
                  </p>
                  <p>
                    No empleamos cookies publicitarias invasivas ni rastreadores de terceros sin su consentimiento.
                  </p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-[#EAEEF4] text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#155A96]"
              >
                Entendido y Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
