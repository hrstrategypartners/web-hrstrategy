import { programas } from './programas.js';

export const BASE = 'https://hrstrategypartners.com.ar';
const ID_ORG = `${BASE}/#organizacion`;
const ID_PERSONA = `${BASE}/#carolina-navamuel`;
const LINKEDIN_CAROLINA = 'https://www.linkedin.com/in/carolinanavamuel/';

const zonaDeServicio = [
  { '@type': 'AdministrativeArea', name: 'Noroeste Argentino (NOA)' },
  { '@type': 'Country', name: 'Argentina' },
  { '@type': 'AdministrativeArea', name: 'América Latina (remoto)' }
];

const idServicio = (slug) => `${BASE}/programas/${slug}/#servicio`;

export function organizacion() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ID_ORG,
    name: 'HR Strategy Partners',
    alternateName: 'HRSP',
    url: `${BASE}/`,
    logo: `${BASE}/favicon.svg`,
    image: `${BASE}/og-image.jpg`,
    description:
      'Arquitectura organizacional para empresas en crecimiento: diagnóstico, transformación y capacidad permanente. Diagnóstico de 30 minutos, sin costo.',
    email: 'contacto@hrstrategypartners.com.ar',
    telephone: '+5493872289285',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Salta',
      addressRegion: 'Salta',
      addressCountry: 'AR'
    },
    areaServed: zonaDeServicio,
    knowsLanguage: 'es-AR',
    founder: { '@id': ID_PERSONA },
    sameAs: [
      'https://www.linkedin.com/company/hr-strategy-partners/',
      'https://www.instagram.com/hrstrategypartners/'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Programas de HR Strategy Partners',
      itemListElement: programas.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@id': idServicio(p.slug) }
      }))
    }
  };
}

export function persona() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': ID_PERSONA,
    name: 'Carolina Navamuel',
    honorificPrefix: 'Mgtr.',
    jobTitle: 'Fundadora y CEO',
    image: `${BASE}/images/carolina-navamuel.webp`,
    worksFor: { '@id': ID_ORG },
    sameAs: [LINKEDIN_CAROLINA],
    knowsAbout: ['Arquitectura organizacional', 'Gestión de proyectos (Project Management)', 'ISO 30414', 'Topgrading']
  };
}

export function sitioWeb() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE}/#sitio`,
    name: 'HR Strategy Partners',
    url: `${BASE}/`,
    inLanguage: 'es-AR',
    publisher: { '@id': ID_ORG }
  };
}

export function servicio(programa) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': idServicio(programa.slug),
    name: programa.nombre,
    alternateName: programa.tituloPagina && programa.tituloPagina !== programa.nombre ? programa.tituloPagina : undefined,
    serviceType: programa.nivel,
    description: programa.subtitulo,
    url: `${BASE}/programas/${programa.slug}/`,
    provider: { '@id': ID_ORG },
    areaServed: zonaDeServicio
  };
}

export function migas(programa) {
  const titulo = programa.tituloPagina ?? programa.nombre;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'Programas', item: `${BASE}/#niveles` },
      { '@type': 'ListItem', position: 3, name: titulo, item: `${BASE}/programas/${programa.slug}/` }
    ]
  };
}
