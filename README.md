# Clean Arch Vite Template

[![English](https://img.shields.io/badge/English-111827?style=flat-square&logo=github&logoColor=white)](README.md)
[![Español](https://img.shields.io/badge/Espa%C3%B1ol-1f6feb?style=flat-square&logo=github&logoColor=white)](README.es.md)
[![Português](https://img.shields.io/badge/Portugu%C3%AAs-16a34a?style=flat-square&logo=github&logoColor=white)](README.pt.md)
[![中文](https://img.shields.io/badge/%E4%B8%AD%E6%96%87-d97706?style=flat-square&logo=github&logoColor=white)](README.zh.md)
[![Français](https://img.shields.io/badge/Fran%C3%A7ais-7c3aed?style=flat-square&logo=github&logoColor=white)](README.fr.md)
[![Deutsch](https://img.shields.io/badge/Deutsch-374151?style=flat-square&logo=github&logoColor=white)](README.de.md)
[![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-dc2626?style=flat-square&logo=github&logoColor=white)](README.ja.md)
[![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-0891b2?style=flat-square&logo=github&logoColor=white)](README.ko.md)
[![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-4f46e5?style=flat-square&logo=github&logoColor=white)](README.ru.md)
[![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-0f766e?style=flat-square&logo=github&logoColor=white)](README.ar.md)

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=111827)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Intlayer](https://img.shields.io/badge/Intlayer-8.3-0f172a?style=flat-square&logoColor=white)](https://intlayer.org/)
[![Vitest](https://img.shields.io/badge/Vitest-4-ca8a04?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-10-f69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)

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
