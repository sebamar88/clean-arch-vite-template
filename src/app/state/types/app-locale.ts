export const appLocales = ['es', 'en'] as const;

export type AppLocale = (typeof appLocales)[number];
