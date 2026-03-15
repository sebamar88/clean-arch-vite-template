import { useAppPreferencesStore } from '@app/state/preferences-store';
import type { AppLocale } from '@app/state/types/app-locale';
import { getHTMLTextDir } from 'intlayer';
import { type PropsWithChildren, useEffect } from 'react';
import { IntlayerProvider } from 'react-intlayer';

export function AppIntlayerProvider({ children }: PropsWithChildren) {
  const locale = useAppPreferencesStore((state) => state.locale);
  const setLocale = useAppPreferencesStore((state) => state.setLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getHTMLTextDir(locale);
  }, [locale]);

  return (
    <IntlayerProvider
      locale={locale}
      setLocale={(nextLocale) => setLocale(nextLocale as AppLocale)}
    >
      {children}
    </IntlayerProvider>
  );
}
