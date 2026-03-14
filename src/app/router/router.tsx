import { queryClient } from '@app/query/query-client';
import { RootLayout } from '@app/router/root-layout';
import type { AppRouterContext } from '@app/router/types/app-router-context';
import { HomePage } from '@modules/blueprint/presentation/pages/home-page';
import { LeadsWorkbenchPage } from '@modules/leads/presentation/pages/leads-workbench-page';
import { createRootRouteWithContext, createRoute, createRouter } from '@tanstack/react-router';

const rootRoute = createRootRouteWithContext<AppRouterContext>()({
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const leadsWorkbenchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/leads-workbench',
  component: LeadsWorkbenchPage,
});

const routeTree = rootRoute.addChildren([homeRoute, leadsWorkbenchRoute]);

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
