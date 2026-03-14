import { useAppPreferencesStore } from '@app/state/preferences-store';
import { i18n } from '@shared/i18n/config';
import { useEffect } from 'react';

export function LocaleSync() {
  const locale = useAppPreferencesStore((state) => state.locale);

  useEffect(() => {
    void i18n.changeLanguage(locale);
  }, [locale]);

  return null;
}
