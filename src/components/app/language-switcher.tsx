import { useAppPreferencesStore } from '@app/state/preferences-store';
import { type AppLocale, appLocales } from '@app/state/types/app-locale';
import { useIntlayer } from 'react-intlayer';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const content = useIntlayer('language-switcher');
  const locale = useAppPreferencesStore((state) => state.locale);
  const setLocale = useAppPreferencesStore((state) => state.setLocale);

  const handleLanguageChange = (nextLocale: AppLocale) => {
    setLocale(nextLocale);
  };

  return (
    <div className="glass-card flex items-center gap-1 rounded-full px-2 py-2">
      <span className="text-muted-foreground px-2 text-xs font-medium uppercase">
        {content.label}
      </span>
      {appLocales.map((option) => (
        <Button
          className="rounded-full"
          key={option}
          onClick={() => handleLanguageChange(option)}
          size="sm"
          type="button"
          variant={locale === option ? 'default' : 'ghost'}
        >
          {content[option]}
        </Button>
      ))}
    </div>
  );
}
