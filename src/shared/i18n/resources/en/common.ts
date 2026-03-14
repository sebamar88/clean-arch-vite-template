export const enCommon = {
  language: {
    es: 'ES',
    en: 'EN',
    label: 'Language',
  },
  shell: {
    title: 'Clean Arch Vite Template',
    subtitle:
      'Opinionated starter for products with Clean Architecture, TanStack, and reusable UI.',
  },
  home: {
    badgeArchitecture: 'Vite + Clean Architecture + DDD',
    badgeUi: 'Tailwind + shadcn/ui',
    title: 'A template ready for future projects without restarting from scratch.',
    description:
      'This base separates domain, application, infrastructure, and presentation. ByteKit handles cross-cutting concerns and TanStack covers routing, caching, and forms with current APIs on top of Tailwind v4 and shadcn components.',
    openWorkbench: 'Open workbench',
    viewBlueprint: 'View blueprint',
    stackEyebrow: 'Template stack',
    stackTitle: 'Opinionated frontend foundation with clear rules',
    uiTitle: 'Reusable UI',
    uiDescription: 'Tailwind v4, shadcn/ui, and cn utilities.',
    dddTitle: 'Modular DDD',
    dddDescription: 'Modules by bounded context with stable layers.',
    tanstackTitle: 'TanStack across the flow',
    tanstackDescription:
      'Router, Query, and Form aligned with current APIs and direct Zod validation.',
    principlesEyebrow: 'Principles',
    principlesTitle: 'Core template decisions',
    sharedEyebrow: 'Shared foundation',
    sharedTitle: 'ByteKit where it adds real value',
    sharedDescription:
      'EnvManager centralizes configuration, createLogger keeps observability consistent, and ApiClient is ready for HTTP adapters without leaking into the domain.',
    architectureEyebrow: 'Architecture map',
    architectureTitle: 'Layers and responsibilities',
    principles: [
      'Modules focused on business capability instead of framework folders.',
      'TanStack Query for reading and writing async state with clear contracts.',
      'TanStack Form with direct Zod support and no legacy adapters.',
    ],
  },
  leads: {
    badge: 'Application + infrastructure sample',
    title: 'Lead workbench to exercise the architecture.',
    description:
      'The form lives in presentation, validates with TanStack Form + Zod, and delegates persistence to a repository. Today it uses local storage; tomorrow it can switch to HTTP without breaking the use case.',
    back: 'Back to overview',
    formEyebrow: 'TanStack Form',
    formTitle: 'Direct validation with Zod',
    queryEyebrow: 'TanStack Query',
    queryTitle: 'Cached asynchronous state',
    formFeatureTitle: 'TanStack Form',
    formFeatureDescription: 'Direct Zod schema, typed form state, and explicit error handling.',
    queryFeatureTitle: 'TanStack Query',
    queryFeatureDescription:
      'Caches reads and revalidates the list when the use case creates a new lead.',
    emptyState: 'There are no leads yet. Create one to validate the end-to-end flow.',
    form: {
      company: 'Company',
      email: 'Email',
      expectedUsers: 'Expected users',
      challenge: 'Main challenge',
      companyPlaceholder: 'Acme Health',
      emailPlaceholder: 'team@acme.dev',
      challengePlaceholder:
        'We need an operations frontend with complex forms and stable business rules.',
      submit: 'Save lead',
      saving: 'Saving...',
      success: 'Lead persisted in local storage through replaceable infrastructure.',
      usersSuffix: 'users',
    },
  },
} as const;
