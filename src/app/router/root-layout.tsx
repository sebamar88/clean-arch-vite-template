import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/app/language-switcher';

export function RootLayout() {
  const { t } = useTranslation();

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-start justify-between px-4 py-4 md:px-8">
          <div className="glass-card pointer-events-auto max-w-xl rounded-2xl px-4 py-3">
            <p className="text-sm font-semibold tracking-tight">{t('shell.title')}</p>
            <p className="text-muted-foreground text-xs">{t('shell.subtitle')}</p>
          </div>
          <div className="pointer-events-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
