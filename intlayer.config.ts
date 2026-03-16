import { Locales, type IntlayerConfig } from 'intlayer';

const config: IntlayerConfig = {
  dictionary: {
    importMode: 'dynamic',
  },
  compiler: {
    output: ({ fileName }) => `./${fileName}.content.ts`,
  },
  internationalization: {
    locales: [Locales.SPANISH, Locales.ENGLISH],
    defaultLocale: Locales.SPANISH,
  },
};

export default config;
