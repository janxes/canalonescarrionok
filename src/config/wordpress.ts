/**
 * CONFIGURACIÓN DE LA API REST DE WORDPRESS
 * ==========================================
 * Para conectar el blog de Canalones Carrión con tu instalación real de WordPress,
 * simplemente sustituye la URL de abajo por la dirección de tu web WordPress:
 * (ejemplo: 'https://miwebdecanalones.com' o 'https://blog.canalonescarrion.es')
 */
export const WP_API_URL = 'https://tu-dominio-wordpress.com';

import { WordPressPost, WordPressFetchResult } from '../types/wordpress';

/**
 * Artículos técnicos realistas de respaldo (Fallback).
 * Se muestran de forma instantánea si la URL de WordPress aún no ha sido configurada
 * o si se produce un fallo temporal de conexión a la API.
 */
export const FALLBACK_POSTS: WordPressPost[] = [
  {
    id: 101,
    date: '2025-02-18T10:30:00',
    slug: 'como-proteger-canalones-heladas-nevadas-castilla-y-leon',
    title: {
      rendered: '¿Cómo proteger los canalones de las heladas y nevadas en Castilla y León?',
    },
    excerpt: {
      rendered:
        '<p>El clima continental de Castilla y León somete los tejados a temperaturas bajo cero y cargas severas de nieve. Descubre los sistemas de fijación reforzada, pendientes idóneas y cables calefactores autorregulables para evitar atascos de hielo y roturas.</p>',
    },
    content: {
      rendered: `
        <div class="prose max-w-none text-[#191C20] space-y-5">
          <p class="text-lg leading-relaxed text-[#41484D] font-medium">
            Durante los meses invernales en provincias como Palencia, Burgos, León, Soria o Segovia, las precipitaciones en forma de nieve y las intensas heladas nocturnas pueden convertirse en el peor enemigo de un tejado mal protegido.
          </p>

          <h3 class="text-2xl font-bold text-[#155A96] mt-8 mb-4 font-heading">1. El problema del hielo en canalones tradicionales con empalmes</h3>
          <p>
            Cuando la nieve acumulada en la cubierta comienza a derretirse durante las horas centrales del día y se congela bruscamente al caer la noche, el agua atrapada en el canalón se expande con una fuerza colosal. En canalones tradicionales ensamblados mediante piezas unidas con silicona o soldadura por puntos, esta expansión revienta las uniones, provocando goteos continuos y humedades en aleros y fachadas.
          </p>
          <p>
            Por el contrario, el <strong>aluminio continuo lacado sin juntas</strong> fabricado a pie de obra por <em>Canalones Carrión</em> absorbe las tensiones térmicas homogéneamente sin fisurarse ni perder estanqueidad.
          </p>

          <h3 class="text-2xl font-bold text-[#155A96] mt-8 mb-4 font-heading">2. Gancho interior oculto de alta resistencia mecánica</h3>
          <p>
            El peso de la nieve acumulada en el alero puede superar fácilmente los 40 kg por metro lineal. Para contrarrestar esta sobrecarga, en <em>Canalones Carrión</em> instalamos fijaciones interiores de aluminio extrusionado con una separación máxima de 50 a 60 centímetros (frente a los 90 cm habituales en el sector), ancladas con tornillería cincada a la estructura portante del tejado.
          </p>

          <h3 class="text-2xl font-bold text-[#155A96] mt-8 mb-4 font-heading">3. Nivelación y pendiente constante</h3>
          <p>
            Un canalón con pendiente deficiente o con 'bolsas' acumula agua residual que inevitablemente se congelará. Una inclinación técnica de entre el 0,5% y el 1% hacia cada bajante garantiza una evacuación fluida antes de que caiga la noche.
          </p>

          <div class="p-6 my-6 bg-[#D5E4F8]/40 border-l-4 border-[#155A96] rounded-2xl">
            <h4 class="font-bold text-[#062544] text-lg mb-2">Consejo experto de Canalones Carrión:</h4>
            <p class="text-[#062544]/90 text-sm">
              Realiza una revisión e inspección preventiva en otoño antes de las primeras heladas. Retirar nidos de pájaros y hojas caídas evita que el agua forme presas que terminen en pesados bloques de hielo colgantes.
            </p>
          </div>
        </div>
      `,
    },
    featuredImageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    categoryName: 'Clima y Mantenimiento',
    readTimeMinutes: 5,
    authorName: 'Equipo Técnico Carrión',
  },
  {
    id: 102,
    date: '2025-02-04T12:00:00',
    slug: 'aluminio-continuo-vs-canalones-tradicionales-con-juntas',
    title: {
      rendered: 'Canalón de aluminio continuo vs. canalón con juntas: ¿cuál elegir para tu tejado?',
    },
    excerpt: {
      rendered:
        '<p>La ausencia total de soldaduras y empalmes convierte al aluminio continuo en la solución número uno en chalets y comunidades. Comparamos durabilidad, rapidez de montaje in situ, carta de colores y costes reales a medio y largo plazo.</p>',
    },
    content: {
      rendered: `
        <div class="prose max-w-none text-[#191C20] space-y-5">
          <p class="text-lg leading-relaxed text-[#41484D] font-medium">
            A la hora de renovar o instalar el sistema de evacuación pluvial de una vivienda, surge una duda habitual: ¿merece la pena optar por aluminio continuo frente a piezas comerciales de PVC o chapa ensamblada?
          </p>

          <h3 class="text-2xl font-bold text-[#155A96] mt-8 mb-4 font-heading">¿Qué es exactamente el aluminio continuo?</h3>
          <p>
            El sistema de aluminio continuo se produce mediante una máquina perfiladora transportada en nuestro furgón taller directamente a la puerta de su vivienda. La bobina de aluminio lacado de primera calidad se moldea de una sola tirada con la longitud exacta del alero, ya sean 8, 15 o más de 25 metros continuos sin un solo corte intermedio.
          </p>

          <h3 class="text-2xl font-bold text-[#155A96] mt-8 mb-4 font-heading">Las 4 ventajas diferenciales frente al canalón tradicional</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Cero fugas:</strong> El 95% de las filtraciones en fachadas proceden del deterioro de las siliconas o soldaduras de los empalmes. Al no haber juntas en los tramos rectos, el riesgo de fuga se reduce a cero.</li>
            <li><strong>Estética arquitectónica impecable:</strong> Al no tener solapes visibles ni abrazaderas exteriores desentonantes, la línea de cubierta se muestra limpia y estilizada.</li>
            <li><strong>Amplia gama de colores normalizados RAL:</strong> Blanco nieve, negro forja, marrón cobrizo, pizarra antracita, burdeos, verde musgo, etc., integrándose a la perfección con la teja y la carpintería.</li>
            <li><strong>Material ecológico y 100% reciclable:</strong> No genera residuos plásticos en obra y ofrece una vida útil superior a los 30 años sin corrosión.</li>
          </ul>

          <div class="p-6 my-6 bg-[#E0F2FE]/50 border-l-4 border-[#4792D4] rounded-2xl">
            <h4 class="font-bold text-[#034E7B] text-lg mb-2">Instalación en el día sin molestias:</h4>
            <p class="text-[#034E7B]/90 text-sm">
              En una vivienda unifamiliar media, nuestro equipo instala todo el perímetro y las bajantes correspondientes en una sola jornada de trabajo, dejando el entorno impecablemente limpio.
            </p>
          </div>
        </div>
      `,
    },
    featuredImageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    categoryName: 'Guía de Materiales',
    readTimeMinutes: 4,
    authorName: 'Javier Carrión',
  },
  {
    id: 103,
    date: '2025-01-22T09:15:00',
    slug: 'mantenimiento-canalones-comunidades-propietarios-normativa',
    title: {
      rendered: 'Mantenimiento y sustitución de canalones en comunidades de vecinos: normativa y prevención',
    },
    excerpt: {
      rendered:
        '<p>Las humedades por desbordamiento de bajantes comunitarias representan uno de los litigios más costosos entre copropietarios. Analizamos las responsabilidades de la ITE, los medios propios de elevación y los planes de revisión anual.</p>',
    },
    content: {
      rendered: `
        <div class="prose max-w-none text-[#191C20] space-y-5">
          <p class="text-lg leading-relaxed text-[#41484D] font-medium">
            En los edificios residenciales de las capitales y municipios de Castilla y León, los canalones y bajantes comunitarios son elementos comunes cuyo correcto estado es responsabilidad solidaria de la Comunidad de Propietarios conforme a la Ley de Propiedad Horizontal.
          </p>

          <h3 class="text-2xl font-bold text-[#155A96] mt-8 mb-4 font-heading">Consecuencias legales y materiales de un mal drenaje</h3>
          <p>
            El rebosamiento de un canalón obstruido o fisurado desgasta los revocos exteriores, provoca desprendimientos de cornisas a la vía pública y genera humedades por capilaridad en los pisos más altos (áticos y últimas plantas). Si se demuestra falta de mantenimiento preventivo, muchas aseguradoras rehúsan indemnizar los daños causados a terceros o a los propietarios afectados.
          </p>

          <h3 class="text-2xl font-bold text-[#155A96] mt-8 mb-4 font-heading">Sustitución de bajantes de fibrocemento o chapa oxidada</h3>
          <p>
            Muchos inmuebles de los años 70 y 80 conservan bajantes pluviales envejecidas. En <em>Canalones Carrión</em> realizamos la sustitución integral por canalizaciones de aluminio o zinc de alto rendimiento, coordinándonos con el administrador de fincas y la junta directiva.
          </p>

          <h3 class="text-2xl font-bold text-[#155A96] mt-8 mb-4 font-heading">Sin andamios costosos: trabajos con camión cesta y medios propios</h3>
          <p>
            Disponemos de plataformas elevadoras y equipos de descenso en altura homologados, lo que abarata notablemente el presupuesto final de la comunidad al evitar la instalación de complejos andamios tubulares que obstaculizan el paso peatonal en portales y locales comerciales.
          </p>
        </div>
      `,
    },
    featuredImageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
    categoryName: 'Comunidades de Vecinos',
    readTimeMinutes: 6,
    authorName: 'Departamento Técnico',
  },
  {
    id: 104,
    date: '2025-01-10T16:45:00',
    slug: 'canalones-para-naves-industriales-gran-desarrollo',
    title: {
      rendered: 'Canalones industriales de gran desarrollo: diseño de evacuación para cubiertas de gran superficie',
    },
    excerpt: {
      rendered:
        '<p>Las naves industriales y centros logísticos en polígonos de Valladolid, Burgos o Palencia requieren perfiles de hasta 450 mm de desarrollo capaces de desalojar aguaceros torrenciales sin colapso estructural.</p>',
    },
    content: {
      rendered: `
        <div class="prose max-w-none text-[#191C20] space-y-5">
          <p class="text-lg leading-relaxed text-[#41484D] font-medium">
            Una cubierta de nave industrial de 2.000 a 10.000 m² concentra un caudal de agua vertiginoso en cuestión de minutos ante tormentas de verano o deshielos intensos. Un error en el dimensionamiento de las limahoyas o canalones perimetrales puede provocar inundaciones en líneas de producción o almacenes de mercancías.
          </p>

          <h3 class="text-2xl font-bold text-[#155A96] mt-8 mb-4 font-heading">Cálculo de caudal y desarrollo de chapa</h3>
          <p>
            En naves industriales empleamos desarrollos de 380 mm a 450 mm con espesores reforzados (hasta 0,8 mm en aluminio y 1 mm en acero prelacado), diseñando vertedores de rebose de seguridad que evitan la sobrecarga en caso de precipitaciones extremas.
          </p>

          <h3 class="text-2xl font-bold text-[#155A96] mt-8 mb-4 font-heading">Seguridad laboral y cumplimiento PRL</h3>
          <p>
            Todos los operarios de Canalones Carrión cuentan con certificados de aptitud médica para trabajos en altura, carnet de plataformas móviles elevadoras de personal (PEMP) y protocolos específicos de seguridad conforme a la normativa laboral española.
          </p>
        </div>
      `,
    },
    featuredImageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    categoryName: 'Industria y Naves',
    readTimeMinutes: 5,
    authorName: 'Ingeniería Carrión',
  },
];

/**
 * Función robusta para consultar publicaciones desde la API REST de WordPress.
 * Si la URL no es válida o hay un error de red/CORS, retorna los artículos fallback enriquecidos.
 */
export async function fetchWordPressPosts(
  page = 1,
  perPage = 6,
  customApiUrl?: string
): Promise<WordPressFetchResult> {
  const targetBaseUrl = (customApiUrl || WP_API_URL).trim().replace(/\/+$/, '');

  // Si la URL es la plantilla por defecto o no parece una URL completa válida, usamos el fallback directamente
  const isDefaultPlaceholder =
    !targetBaseUrl ||
    targetBaseUrl === 'https://tu-dominio-wordpress.com' ||
    targetBaseUrl.includes('tu-dominio-wordpress');

  if (isDefaultPlaceholder) {
    const startIndex = (page - 1) * perPage;
    const paginated = FALLBACK_POSTS.slice(startIndex, startIndex + perPage);
    const totalPages = Math.max(1, Math.ceil(FALLBACK_POSTS.length / perPage));

    return {
      posts: paginated,
      totalPages,
      totalPosts: FALLBACK_POSTS.length,
      isFallback: true,
    };
  }

  try {
    const endpoint = `${targetBaseUrl}/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${perPage}&status=publish`;
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`WordPress API HTTP ${response.status}: ${response.statusText}`);
    }

    const totalPagesHeader = response.headers.get('X-WP-TotalPages');
    const totalPostsHeader = response.headers.get('X-WP-Total');

    const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1;
    const totalPosts = totalPostsHeader ? parseInt(totalPostsHeader, 10) : 0;

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Respuesta no válida del endpoint de WordPress');
    }

    // Normalizar datos de WordPress
    const formattedPosts: WordPressPost[] = data.map((item: any) => {
      let featuredImageUrl: string | undefined = undefined;
      if (item._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
        featuredImageUrl = item._embedded['wp:featuredmedia'][0].source_url;
      }

      let categoryName = 'General';
      if (item._embedded?.['wp:term']?.[0]?.[0]?.name) {
        categoryName = item._embedded['wp:term'][0][0].name;
      }

      let authorName = 'Canalones Carrión';
      if (item._embedded?.['author']?.[0]?.name) {
        authorName = item._embedded['author'][0].name;
      }

      // Estimar tiempo de lectura
      const wordCount = (item.content?.rendered || '').replace(/<[^>]*>/g, '').split(/\s+/).length;
      const readTimeMinutes = Math.max(2, Math.round(wordCount / 180));

      return {
        id: item.id,
        date: item.date,
        slug: item.slug || `post-${item.id}`,
        title: {
          rendered: item.title?.rendered || 'Sin título',
        },
        content: {
          rendered: item.content?.rendered || '',
        },
        excerpt: {
          rendered: item.excerpt?.rendered || '',
        },
        featuredImageUrl: featuredImageUrl || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
        categoryName,
        readTimeMinutes,
        authorName,
      };
    });

    return {
      posts: formattedPosts,
      totalPages: Math.max(1, totalPages),
      totalPosts: totalPosts || formattedPosts.length,
      isFallback: false,
    };
  } catch (err: any) {
    console.warn('Aviso: Conectando con fallback debido a:', err?.message);
    const startIndex = (page - 1) * perPage;
    const paginated = FALLBACK_POSTS.slice(startIndex, startIndex + perPage);
    const totalPages = Math.max(1, Math.ceil(FALLBACK_POSTS.length / perPage));

    return {
      posts: paginated,
      totalPages,
      totalPosts: FALLBACK_POSTS.length,
      isFallback: true,
      error: err?.message || 'Error al conectar con la API de WordPress',
    };
  }
}

/**
 * Obtener un post por ID o slug
 */
export async function fetchWordPressPostById(
  id: number,
  customApiUrl?: string
): Promise<WordPressPost | null> {
  const targetBaseUrl = (customApiUrl || WP_API_URL).trim().replace(/\/+$/, '');

  const isDefaultPlaceholder =
    !targetBaseUrl ||
    targetBaseUrl === 'https://tu-dominio-wordpress.com' ||
    targetBaseUrl.includes('tu-dominio-wordpress');

  if (isDefaultPlaceholder) {
    return FALLBACK_POSTS.find((p) => p.id === id) || null;
  }

  try {
    const endpoint = `${targetBaseUrl}/wp-json/wp/v2/posts/${id}?_embed`;
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const item = await response.json();
    let featuredImageUrl: string | undefined = undefined;
    if (item._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      featuredImageUrl = item._embedded['wp:featuredmedia'][0].source_url;
    }

    let categoryName = 'General';
    if (item._embedded?.['wp:term']?.[0]?.[0]?.name) {
      categoryName = item._embedded['wp:term'][0][0].name;
    }

    let authorName = 'Canalones Carrión';
    if (item._embedded?.['author']?.[0]?.name) {
      authorName = item._embedded['author'][0].name;
    }

    const wordCount = (item.content?.rendered || '').replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readTimeMinutes = Math.max(2, Math.round(wordCount / 180));

    return {
      id: item.id,
      date: item.date,
      slug: item.slug,
      title: item.title,
      content: item.content,
      excerpt: item.excerpt,
      featuredImageUrl: featuredImageUrl || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      categoryName,
      readTimeMinutes,
      authorName,
    };
  } catch {
    return FALLBACK_POSTS.find((p) => p.id === id) || null;
  }
}
