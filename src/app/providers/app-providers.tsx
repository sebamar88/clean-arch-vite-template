import '@shared/i18n/config';

import { LocaleSync } from '@app/providers/locale-sync';
import { queryClient } from '@app/query/query-client';
import { router } from '@app/router/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';

export function AppProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleSync />
      <RouterProvider context={{ queryClient }} router={router} />
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}
