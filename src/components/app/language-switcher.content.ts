import { type Dictionary, t } from 'intlayer';

const languageSwitcherContent = {
  key: 'language-switcher',
  content: {
    label: t({
      es: 'Idioma',
      en: 'Language',
    }),
    es: 'ES',
    en: 'EN',
  },
} satisfies Dictionary;

export default languageSwitcherContent;
