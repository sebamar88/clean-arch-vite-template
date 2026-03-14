import { useAppPreferencesStore } from '@app/state/preferences-store';
import { enCommon } from '@shared/i18n/resources/en/common';
import { esCommon } from '@shared/i18n/resources/es/common';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

void i18n.use(initReactI18next).init({
  lng: useAppPreferencesStore.getState().locale,
  fallbackLng: 'es',
  defaultNS: 'common',
  ns: ['common'],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  resources: {
    es: {
      common: esCommon,
    },
    en: {
      common: enCommon,
    },
  },
});

export { i18n };
