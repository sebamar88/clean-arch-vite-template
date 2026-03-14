export const esCommon = {
  language: {
    es: 'ES',
    en: 'EN',
    label: 'Idioma',
  },
  shell: {
    title: 'Clean Arch Vite Template',
    subtitle: 'Base opinionada para productos con Clean Architecture, TanStack y UI reusable.',
  },
  home: {
    badgeArchitecture: 'Vite + Clean Architecture + DDD',
    badgeUi: 'Tailwind + shadcn/ui',
    title: 'Template listo para futuros proyectos sin arrancar otra vez desde cero.',
    description:
      'Esta base separa dominio, aplicacion, infraestructura y presentacion. ByteKit cubre concerns transversales y TanStack resuelve routing, cache y formularios con APIs actuales sobre una UI hecha con Tailwind v4 y componentes shadcn.',
    openWorkbench: 'Abrir workbench',
    viewBlueprint: 'Ver blueprint',
    stackEyebrow: 'Stack del template',
    stackTitle: 'Base opinionada para frontends con reglas claras',
    uiTitle: 'UI reusable',
    uiDescription: 'Tailwind v4, shadcn/ui y utilidades cn.',
    dddTitle: 'DDD modular',
    dddDescription: 'Modulos por bounded context y capas estables.',
    tanstackTitle: 'TanStack en todo el flujo',
    tanstackDescription:
      'Router, Query y Form alineados con APIs actuales y validacion Zod directa.',
    principlesEyebrow: 'Principios',
    principlesTitle: 'Decisiones base del template',
    sharedEyebrow: 'Shared foundation',
    sharedTitle: 'ByteKit donde aporta valor real',
    sharedDescription:
      'EnvManager centraliza configuracion, createLogger deja observabilidad consistente y ApiClient queda preparado para adaptadores HTTP sin contaminar el dominio.',
    architectureEyebrow: 'Architecture map',
    architectureTitle: 'Capas y responsabilidades',
    principles: [
      'Modulos orientados al negocio en lugar de carpetas por framework.',
      'TanStack Query para leer y escribir estado asincrono con contratos claros.',
      'TanStack Form con Zod directo, sin adapters legacy.',
    ],
  },
  leads: {
    badge: 'Application + infrastructure sample',
    title: 'Workbench de leads para probar la arquitectura.',
    description:
      'El formulario vive en presentacion, valida con TanStack Form + Zod y delega la persistencia a un repositorio. Hoy usa storage local; manana puede cambiar por HTTP sin romper el caso de uso.',
    back: 'Volver al overview',
    formEyebrow: 'TanStack Form',
    formTitle: 'Validacion directa con Zod',
    queryEyebrow: 'TanStack Query',
    queryTitle: 'Estado asincrono cacheado',
    formFeatureTitle: 'TanStack Form',
    formFeatureDescription:
      'Esquema Zod directo, estado de formulario tipado y manejo explicito de errores.',
    queryFeatureTitle: 'TanStack Query',
    queryFeatureDescription:
      'Cachea lecturas y revalida el listado cuando el caso de uso crea un lead nuevo.',
    emptyState: 'No hay leads todavia. Crea uno para validar el flujo end-to-end.',
    form: {
      company: 'Empresa',
      email: 'Email',
      expectedUsers: 'Usuarios esperados',
      challenge: 'Problema principal',
      companyPlaceholder: 'Acme Health',
      emailPlaceholder: 'team@acme.dev',
      challengePlaceholder:
        'Necesitamos un front de operaciones con formularios complejos y reglas de negocio estables.',
      submit: 'Guardar lead',
      saving: 'Guardando...',
      success: 'Lead persistido en storage local mediante infraestructura reemplazable.',
      usersSuffix: 'usuarios',
    },
  },
} as const;
