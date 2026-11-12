import React, { useState } from 'react';

interface ContactPresupuestoSectionProps {
  prefilledService?: string;
}

export const ContactPresupuestoSection: React.FC<ContactPresupuestoSectionProps> = ({
  prefilledService = '',
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    provincia: 'Valladolid',
    localidad: '',
    tipoServicio: prefilledService || 'Vivienda Particular / Chalet',
    mensaje: '',
    privacidad: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Provincias de Castilla y León
  const provinciasCyL = [
    'Valladolid',
    'Palencia',
    'Burgos',
    'León',
    'Zamora',
    'Salamanca',
    'Segovia',
    'Soria',
    'Ávila',
    'Otra provincia limítrofe',
  ];

  const serviciosList = [
    'Vivienda Particular / Chalet',
    'Comunidad de Propietarios',
    'Empresa o Nave Industrial',
    'Limpieza y Desatasco de Bajantes',
    'Reparación de Fugas y Nivelación',
    'Instalación de Rejillas Salvahojas',
    'Remates de Chapa y Albardillas',
    'Otro tipo de trabajo en cubierta',
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Si queremos permitir envío nativo tradicional de FormSubmit, no bloqueamos el submit;
    // Opcionalmente podemos enviar mediante Fetch y mostrar modal de éxito instantáneo sin redirigir al usuario fuera de la web.
    // Vamos a permitir que el usuario elija o enviarlo mediante fetch con fallback nativo.
  };

  return (
    <section id="presupuesto" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D5E4F8] text-[#062544] inline-block mb-3">
            Presupuesto Sin Compromiso
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191C20] tracking-tight font-heading">
            Pide tu valoración técnica en 24 horas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#41484D]">
            Indícanos los metros aproximados o el tipo de edificación. Nos desplazamos con nuestro 
            taller móvil para inspeccionar el alero y darte un precio cerrado y garantizado por escrito.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact & Trust */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#FAFBFD] rounded-3xl p-6 sm:p-8 border border-[#EAEEF4] space-y-6 shadow-sm">
              <h3 className="text-xl font-bold font-heading text-[#191C20] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#155A96]">
                  contact_phone
                </span>
                <span>Atención Directa Carrión</span>
              </h3>
              <p className="text-sm text-[#41484D] leading-relaxed">
                Si prefieres hablar directamente con un técnico antes de rellenar el formulario, 
                llámanos o escríbenos por WhatsApp con fotos de tu fachada.
              </p>

              {/* Direct clickable cards */}
              <div className="space-y-3.5">
                
                <a
                  href="tel:+34676000000"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E2E7EE] hover:border-[#155A96] hover:bg-[#F1F4F9] transition-all group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#D5E4F8] text-[#155A96] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[22px]">phone</span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-xs text-[#58606B]">Teléfono directo</span>
                    <span className="font-bold text-base text-[#155A96] tracking-wide">
                      676 00 00 00
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/34676000000?text=Hola,%20quisiera%20solicitar%20un%20presupuesto%20para%20canalones%20en%20Castilla%20y%20León."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E2E7EE] hover:border-emerald-600 hover:bg-emerald-50/50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-xs text-[#58606B]">WhatsApp inmediato</span>
                    <span className="font-bold text-base text-emerald-800">
                      Envíanos fotos o dudas
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@canalonescarrion.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E2E7EE] hover:border-[#155A96] hover:bg-[#F1F4F9] transition-all group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#D5E4F8] text-[#155A96] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[22px]">mail</span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-xs text-[#58606B]">Correo electrónico</span>
                    <span className="font-semibold text-sm text-[#191C20] truncate block">
                      info@canalonescarrion.com
                    </span>
                  </div>
                </a>

              </div>

              {/* Service Areas */}
              <div className="pt-4 border-t border-[#EAEEF4]">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#191C20] mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#155A96]">
                    distance
                  </span>
                  <span>Área de Cobertura Principal</span>
                </span>
                <p className="text-xs text-[#41484D] leading-relaxed">
                  Base operativa central con desplazamientos diarios a Valladolid, Palencia, Burgos, 
                  León, Zamora, Salamanca, Segovia, Soria y Ávila. Sin sobrecostes desproporcionados 
                  por kilometraje.
                </p>
              </div>

              {/* Horario */}
              <div className="p-3.5 rounded-2xl bg-[#E0F2FE]/50 border border-[#BAE6FD] text-xs text-[#034E7B] flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] shrink-0">schedule</span>
                <span>
                  <strong>Horario de atención:</strong> Lunes a Viernes de 08:00 a 20:00 h. Sábados de 09:00 a 14:00 h.
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: FormSubmit Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFBFD] rounded-3xl p-6 sm:p-10 border border-[#EAEEF4] shadow-md">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#191C20]">
                  Formulario de Solicitud de Presupuesto
                </h3>
                <p className="text-xs sm:text-sm text-[#58606B] mt-1">
                  Rellena los campos y te responderemos por teléfono o correo en menos de 24 horas laborales.
                </p>
              </div>

              {/* FormSubmit Implementation */}
              <form
                action="https://formsubmit.co/parconada@gmail.com"
                method="POST"
                className="space-y-5"
              >
                {/* Campos ocultos exigidos por FormSubmit */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Solicitud de Presupuesto Web - Canalones Carrión (Castilla y León)"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="true" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Hemos recibido tu solicitud de presupuesto en Canalones Carrión. Un técnico de nuestro equipo se pondrá en contacto contigo muy pronto."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nombre o Empresa */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="nombre"
                      className="block text-xs font-bold uppercase tracking-wider text-[#191C20]"
                    >
                      Nombre o Empresa <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        placeholder="Ej. Roberto Gómez / Comunidad C/ Mayor"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-[#C2C7D0] focus:border-[#155A96] focus:ring-2 focus:ring-[#155A96]/20 text-sm text-[#191C20] placeholder-[#717781] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="telefono"
                      className="block text-xs font-bold uppercase tracking-wider text-[#191C20]"
                    >
                      Teléfono de contacto <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      placeholder="Ej. 676 12 34 56"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#C2C7D0] focus:border-[#155A96] focus:ring-2 focus:ring-[#155A96]/20 text-sm text-[#191C20] placeholder-[#717781] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Correo Electrónico */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#191C20]"
                    >
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="tuemail@ejemplo.com"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#C2C7D0] focus:border-[#155A96] focus:ring-2 focus:ring-[#155A96]/20 text-sm text-[#191C20] placeholder-[#717781] outline-none transition-all"
                    />
                  </div>

                  {/* Provincia */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="provincia"
                      className="block text-xs font-bold uppercase tracking-wider text-[#191C20]"
                    >
                      Provincia (Castilla y León) <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="provincia"
                      name="provincia"
                      required
                      defaultValue="Valladolid"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#C2C7D0] focus:border-[#155A96] focus:ring-2 focus:ring-[#155A96]/20 text-sm text-[#191C20] outline-none transition-all"
                    >
                      {provinciasCyL.map((prov) => (
                        <option key={prov} value={prov}>
                          {prov}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Localidad o Municipio */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="localidad"
                      className="block text-xs font-bold uppercase tracking-wider text-[#191C20]"
                    >
                      Localidad o Municipio
                    </label>
                    <input
                      type="text"
                      id="localidad"
                      name="localidad"
                      placeholder="Ej. Laguna de Duero, Medina del Campo..."
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#C2C7D0] focus:border-[#155A96] focus:ring-2 focus:ring-[#155A96]/20 text-sm text-[#191C20] placeholder-[#717781] outline-none transition-all"
                    />
                  </div>

                  {/* Tipo de Servicio */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="servicio"
                      className="block text-xs font-bold uppercase tracking-wider text-[#191C20]"
                    >
                      Tipo de Servicio <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      defaultValue={prefilledService || 'Vivienda Particular / Chalet'}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#C2C7D0] focus:border-[#155A96] focus:ring-2 focus:ring-[#155A96]/20 text-sm text-[#191C20] outline-none transition-all"
                    >
                      {serviciosList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mensaje con detalles */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="mensaje"
                    className="block text-xs font-bold uppercase tracking-wider text-[#191C20]"
                  >
                    Detalles del proyecto (Metros aproximados, altura, estado del tejado)
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Ej. Necesitamos instalar aproximadamente 22 metros de canalón de aluminio en un chalet de dos plantas con 2 bajantes. Nos interesa el color antracita..."
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#C2C7D0] focus:border-[#155A96] focus:ring-2 focus:ring-[#155A96]/20 text-sm text-[#191C20] placeholder-[#717781] outline-none transition-all resize-y"
                  ></textarea>
                </div>

                {/* Checkbox Obligatorio de Aceptación de Privacidad */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="privacidad"
                    name="privacidad_aceptada"
                    required
                    className="mt-1 w-4 h-4 rounded text-[#155A96] border-[#C2C7D0] focus:ring-[#155A96]"
                  />
                  <label htmlFor="privacidad" className="text-xs text-[#58606B] leading-relaxed">
                    He leído y acepto la{' '}
                    <span className="text-[#155A96] underline font-medium">
                      Política de Privacidad
                    </span>{' '}
                    y consiento el tratamiento de mis datos de contacto con la finalidad exclusiva 
                    de elaborar y remitir el presupuesto solicitado por Canalones Carrión.
                  </label>
                </div>

                {/* Submit Pill Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-full text-base font-bold text-white bg-[#155A96] hover:bg-[#0e4475] active:scale-98 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5"
                  >
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    <span>Enviar solicitud de presupuesto gratis</span>
                  </button>
                  <p className="text-center text-[11px] text-[#58606B] mt-2.5">
                    🔒 Sus datos están protegidos conforme al RGPD. No enviamos spam ni publicidad no deseada.
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
