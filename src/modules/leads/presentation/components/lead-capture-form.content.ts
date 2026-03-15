import { type Dictionary, t } from 'intlayer';

const leadCaptureFormContent = {
  key: 'lead-capture-form',
  content: {
    company: t({
      es: 'Empresa',
      en: 'Company',
    }),
    email: 'Email',
    expectedUsers: t({
      es: 'Usuarios esperados',
      en: 'Expected users',
    }),
    challenge: t({
      es: 'Problema principal',
      en: 'Main challenge',
    }),
    companyPlaceholder: 'Acme Health',
    emailPlaceholder: 'team@acme.dev',
    challengePlaceholder: t({
      es: 'Necesitamos un front de operaciones con formularios complejos y reglas de negocio estables.',
      en: 'We need an operations frontend with complex forms and stable business rules.',
    }),
    submit: t({
      es: 'Guardar lead',
      en: 'Save lead',
    }),
    saving: t({
      es: 'Guardando...',
      en: 'Saving...',
    }),
    success: t({
      es: 'Lead persistido en storage local mediante infraestructura reemplazable.',
      en: 'Lead persisted in local storage through replaceable infrastructure.',
    }),
    validation: {
      companyMin: t({
        es: 'La empresa necesita al menos 2 caracteres.',
        en: 'Company must have at least 2 characters.',
      }),
      emailInvalid: t({
        es: 'Ingresa un email valido.',
        en: 'Enter a valid email address.',
      }),
      expectedUsersMin: t({
        es: 'Debe haber al menos 1 usuario esperado.',
        en: 'Expected users must be at least 1.',
      }),
      expectedUsersMax: t({
        es: 'Usa un valor realista para el ejemplo.',
        en: 'Use a realistic value for this example.',
      }),
      challengeMin: t({
        es: 'Describe el problema con al menos 20 caracteres.',
        en: 'Describe the challenge with at least 20 characters.',
      }),
    },
  },
} satisfies Dictionary;

export default leadCaptureFormContent;
