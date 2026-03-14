# Clean Arch Vite Template

Template de `Vite + React + TypeScript` preparado para futuros proyectos con:

- Clean Architecture y DDD como estructura base.
- `TanStack Router`, `TanStack Query` y `TanStack Form`.
- Validacion con `Zod` usando soporte directo de TanStack Form.
- `ByteKit` para `EnvManager`, logging, storage y cliente HTTP.
- `Tailwind CSS v4` y `shadcn/ui` para la capa visual.
- `Zustand` para estado global liviano.
- `i18next + react-i18next` para traducciones futuras.
- `Vitest` para tests.
- `Biome` para lint y format.
- `Husky` para `pre-commit`.
- React Compiler ya habilitado.

## Stack

- `react` 19
- `vite` 8
- `@tanstack/react-router`
- `@tanstack/react-query`
- `@tanstack/react-form`
- `zod`
- `bytekit`
- `tailwindcss`
- `shadcn`
- `zustand`
- `i18next`
- `react-i18next`
- `vitest`
- `@biomejs/biome`
- `husky`

## Estructura

```text
src
├─ app
│  ├─ providers
│  ├─ query
│  └─ router
│  └─ state
├─ components
│  └─ ui
├─ lib
├─ modules
│  ├─ blueprint
│  │  ├─ application
│  │  ├─ domain
│  │  ├─ infrastructure
│  │  └─ presentation
│  └─ leads
│     ├─ application
│     ├─ domain
│     ├─ infrastructure
│     └─ presentation
└─ shared
   ├─ config
   ├─ http
   ├─ observability
   └─ utils
```

## Reglas de diseño

- `domain`: entidades y contratos estables del negocio.
- `application`: casos de uso y puertos.
- `infrastructure`: adapters concretos, repositorios, HTTP, storage.
- `presentation`: rutas, componentes, hooks y formularios.
- `shared`: cross-cutting concerns reutilizables entre modulos.
- `components/ui`: componentes base de `shadcn/ui`.
- `lib`: utilidades transversales de UI, por ejemplo `cn`.
- Los tipos exportados viven en carpetas `types`; dentro de componentes solo quedan tipos estrictamente locales.

## TanStack

- `Router` se usa con router tipado y providers centrales en `src/app`.
- `Query` encapsula lecturas y cache mediante `queryOptions`.
- `Form` usa `validators.onChange: schema` con `Zod` directo.
- No se usa `@tanstack/zod-form-adapter` porque ya no hace falta en la API actual.

## ByteKit

- `src/shared/config/env.ts`: `EnvManager`
- `src/shared/observability/logger.ts`: `createLogger`
- `src/shared/http/api-client.ts`: `ApiClient`
- `src/modules/leads/infrastructure/repositories/browser-lead-repository.ts`: `StorageManager`

## UI

- `Tailwind CSS v4` se integra con `@tailwindcss/vite`.
- `shadcn/ui` usa `components.json`, `src/components/ui` y `src/lib/utils.ts`.
- La app de ejemplo ya usa `Button`, `Card`, `Badge`, `Input` y `Textarea`.

## State e i18n

- `src/app/state/preferences-store.ts`: store persistido de Zustand para preferencias globales.
- `src/shared/i18n/config.ts`: inicializacion de i18next.
- `src/shared/i18n/resources`: recursos `es` y `en`.
- `src/components/app/language-switcher.tsx`: selector de idioma listo para extender.

## Scripts

```bash
pnpm dev
pnpm build
pnpm test
pnpm test:run
pnpm check
pnpm format
pnpm lint
pnpm preview
```

## Variables de entorno

Tomar `.env.example` como base:

```bash
VITE_APP_NAME=Clean Arch Vite Template
VITE_API_BASE_URL=/api
```

## Punto de partida recomendado

1. Duplicar un modulo de ejemplo y renombrarlo al bounded context real.
2. Reemplazar el repositorio browser/local por uno HTTP usando `ApiClient`.
3. Agregar loaders o prefetching por ruta donde Query tenga sentido.
4. Mantener los casos de uso fuera de componentes.
