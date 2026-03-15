# Clean Arch Vite Template

[ English](README.md) | [ Español](README.es.md) | [ Português](README.pt.md) | [ 中文](README.zh.md) | [ Français](README.fr.md) | [ Deutsch](README.de.md) | [ 日本語](README.ja.md) | [ 한국어](README.ko.md) | [ Русский](README.ru.md) | [ العربية](README.ar.md)

`Vite + React + TypeScript` template prepared for future projects with:

- Clean Architecture and DDD as the base structure.
- `TanStack Router`, `TanStack Query`, and `TanStack Form`.
- Validation with `Zod` using direct TanStack Form support.
- `ByteKit` for `EnvManager`, logging, storage, and HTTP client.
- `Tailwind CSS v4` and `shadcn/ui` for the visual layer.
- `Zustand` for lightweight global state.
- `Intlayer` for type-safe, declarative i18n.
- `Vitest` for testing.
- `Biome` for linting and formatting.
- `Husky` for `pre-commit`.
- React Compiler already enabled.

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
- `intlayer`
- `react-intlayer`
- `vite-intlayer`
- `vitest`
- `@biomejs/biome`
- `husky`

## Structure

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

## Design Rules

- `domain`: stable business entities and contracts.
- `application`: use cases and ports.
- `infrastructure`: concrete adapters, repositories, HTTP, storage.
- `presentation`: routes, components, hooks, and forms.
- `shared`: cross-cutting concerns reused across modules.
- `components/ui`: base `shadcn/ui` components.
- `lib`: shared UI utilities, for example `cn`.
- Exported types live in `types` folders; component files should only keep strictly local types.

## TanStack

- `Router` is used with typed routing and centralized providers in `src/app`.
- `Query` wraps reads and caching through `queryOptions`.
- `Form` uses `validators.onChange: schema` with direct `Zod`.
- `@tanstack/zod-form-adapter` is not used because the current API no longer needs it.

## ByteKit

- `src/shared/config/env.ts`: `EnvManager`
- `src/shared/observability/logger.ts`: `createLogger`
- `src/shared/http/api-client.ts`: `ApiClient`
- `src/modules/leads/infrastructure/repositories/browser-lead-repository.ts`: `StorageManager`

## UI

- `Tailwind CSS v4` is integrated through `@tailwindcss/vite`.
- `shadcn/ui` uses `components.json`, `src/components/ui`, and `src/lib/utils.ts`.
- The sample app already uses `Button`, `Card`, `Badge`, `Input`, and `Textarea`.

## State and i18n

- `src/app/state/preferences-store.ts`: persisted Zustand store for global preferences.
- `intlayer.config.ts`: global configuration for supported locales.
- `src/**/*.content.ts`: declarative dictionaries by feature/screen.
- `src/app/providers/intlayer-provider.tsx`: bridge between Zustand and Intlayer.
- `src/components/app/language-switcher.tsx`: language switcher connected to the global store.

## AI Translation Engine with Intlayer

Intlayer can connect to an AI provider to complete or suggest translations from its CLI, visual editor, and CMS. The configuration is declared in `intlayer.config.ts`.

Example using `OpenAI`:

```ts
import { Locales, type IntlayerConfig } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.SPANISH, Locales.ENGLISH],
    defaultLocale: Locales.SPANISH,
  },
  ai: {
    provider: 'openai',
    model: 'gpt-4.1-mini',
    apiKey: process.env.INTLAYER_OPENAI_API_KEY,
    temperature: 0.2,
    applicationContext:
      'Frontend template with Clean Architecture, DDD, TanStack, and B2B SaaS product terminology.',
  },
};

export default config;
```

Recommended steps:

1. Define the `ai` block in `intlayer.config.ts`.
2. Store the API key in local or CI environment variables, for example `INTLAYER_OPENAI_API_KEY`.
3. Adjust `applicationContext` with your product domain so translations follow the project terminology.
4. Run the Intlayer command to fill missing translations.

CLI example:

```bash
pnpm exec intlayer fill
```

Notes:

- `apiKey` should not be exposed to the client; `intlayer.config.ts` is evaluated on the Node side during tooling/build.
- You can switch `provider` and `model` to other providers supported by Intlayer, such as `anthropic`, `mistral`, `deepseek`, `gemini`, or `llama`.
- Generated translations should still be reviewed manually before being considered final.
- Official reference: `https://intlayer.org/en-GB/doc/concept/configuration` and `https://intlayer.org/en-GB/doc/plugin/sync-json`.

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

## Environment Variables

Use `.env.example` as a base:

```bash
VITE_APP_NAME=Clean Arch Vite Template
VITE_API_BASE_URL=/api
```

## Recommended Starting Point

1. Duplicate one of the sample modules and rename it to your real bounded context.
2. Replace the browser/local repository with an HTTP implementation using `ApiClient`.
3. Add route loaders or prefetching where Query makes sense.
4. Keep use cases outside components.
