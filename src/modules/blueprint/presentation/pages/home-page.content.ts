import { type Dictionary, t } from 'intlayer';

const homePageContent = {
  key: 'home-page',
  content: {
    badgeArchitecture: 'Vite + Clean Architecture + DDD',
    badgeUi: 'Tailwind + shadcn/ui',
    title: t({
      es: 'Template listo para futuros proyectos sin arrancar otra vez desde cero.',
      en: 'A template ready for future projects without restarting from scratch.',
    }),
    description: t({
      es: 'Esta base separa dominio, aplicacion, infraestructura y presentacion. ByteKit cubre concerns transversales y TanStack resuelve routing, cache y formularios con APIs actuales sobre una UI hecha con Tailwind v4 y componentes shadcn.',
      en: 'This base separates domain, application, infrastructure, and presentation. ByteKit handles cross-cutting concerns and TanStack covers routing, caching, and forms with current APIs on top of Tailwind v4 and shadcn components.',
    }),
    openWorkbench: t({
      es: 'Abrir workbench',
      en: 'Open workbench',
    }),
    viewBlueprint: t({
      es: 'Ver blueprint',
      en: 'View blueprint',
    }),
    stackEyebrow: t({
      es: 'Stack del template',
      en: 'Template stack',
    }),
    stackTitle: t({
      es: 'Base opinionada para frontends con reglas claras',
      en: 'Opinionated frontend foundation with clear rules',
    }),
    uiTitle: t({
      es: 'UI reusable',
      en: 'Reusable UI',
    }),
    uiDescription: t({
      es: 'Tailwind v4, shadcn/ui y utilidades cn.',
      en: 'Tailwind v4, shadcn/ui, and cn utilities.',
    }),
    dddTitle: 'DDD modular',
    dddDescription: t({
      es: 'Modulos por bounded context y capas estables.',
      en: 'Modules by bounded context with stable layers.',
    }),
    tanstackTitle: t({
      es: 'TanStack en todo el flujo',
      en: 'TanStack across the flow',
    }),
    tanstackDescription: t({
      es: 'Router, Query y Form alineados con APIs actuales y validacion Zod directa.',
      en: 'Router, Query, and Form aligned with current APIs and direct Zod validation.',
    }),
    principlesEyebrow: t({
      es: 'Principios',
      en: 'Principles',
    }),
    principlesTitle: t({
      es: 'Decisiones base del template',
      en: 'Core template decisions',
    }),
    sharedEyebrow: t({
      es: 'Shared foundation',
      en: 'Shared foundation',
    }),
    sharedTitle: t({
      es: 'ByteKit donde aporta valor real',
      en: 'ByteKit where it adds real value',
    }),
    sharedDescription: t({
      es: 'EnvManager centraliza configuracion, createLogger deja observabilidad consistente y ApiClient queda preparado para adaptadores HTTP sin contaminar el dominio.',
      en: 'EnvManager centralizes configuration, createLogger keeps observability consistent, and ApiClient is ready for HTTP adapters without leaking into the domain.',
    }),
    architectureEyebrow: t({
      es: 'Architecture map',
      en: 'Architecture map',
    }),
    architectureTitle: t({
      es: 'Capas y responsabilidades',
      en: 'Layers and responsibilities',
    }),
    principles: {
      modularity: t({
        es: 'Modulos orientados al negocio en lugar de carpetas por framework.',
        en: 'Modules focused on business capability instead of framework folders.',
      }),
      query: t({
        es: 'TanStack Query para leer y escribir estado asincrono con contratos claros.',
        en: 'TanStack Query for reading and writing async state with clear contracts.',
      }),
      form: t({
        es: 'TanStack Form con Zod directo, sin adapters legacy.',
        en: 'TanStack Form with direct Zod support and no legacy adapters.',
      }),
    },
  },
} satisfies Dictionary;

export default homePageContent;
