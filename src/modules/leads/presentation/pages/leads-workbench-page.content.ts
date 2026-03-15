import { type Dictionary, t } from 'intlayer';

const leadsWorkbenchPageContent = {
  key: 'leads-workbench-page',
  content: {
    badge: 'Application + infrastructure sample',
    title: t({
      es: 'Workbench de leads para probar la arquitectura.',
      en: 'Lead workbench to exercise the architecture.',
    }),
    description: t({
      es: 'El formulario vive en presentacion, valida con TanStack Form + Zod y delega la persistencia a un repositorio. Hoy usa storage local; manana puede cambiar por HTTP sin romper el caso de uso.',
      en: 'The form lives in presentation, validates with TanStack Form + Zod, and delegates persistence to a repository. Today it uses local storage; tomorrow it can switch to HTTP without breaking the use case.',
    }),
    back: t({
      es: 'Volver al overview',
      en: 'Back to overview',
    }),
    formEyebrow: 'TanStack Form',
    formTitle: t({
      es: 'Validacion directa con Zod',
      en: 'Direct validation with Zod',
    }),
    queryEyebrow: 'TanStack Query',
    queryTitle: t({
      es: 'Estado asincrono cacheado',
      en: 'Cached asynchronous state',
    }),
    formFeatureTitle: 'TanStack Form',
    formFeatureDescription: t({
      es: 'Esquema Zod directo, estado de formulario tipado y manejo explicito de errores.',
      en: 'Direct Zod schema, typed form state, and explicit error handling.',
    }),
    queryFeatureTitle: 'TanStack Query',
    queryFeatureDescription: t({
      es: 'Cachea lecturas y revalida el listado cuando el caso de uso crea un lead nuevo.',
      en: 'Caches reads and revalidates the list when the use case creates a new lead.',
    }),
    emptyState: t({
      es: 'No hay leads todavia. Crea uno para validar el flujo end-to-end.',
      en: 'There are no leads yet. Create one to validate the end-to-end flow.',
    }),
    usersSuffix: t({
      es: 'usuarios',
      en: 'users',
    }),
  },
} satisfies Dictionary;

export default leadsWorkbenchPageContent;
