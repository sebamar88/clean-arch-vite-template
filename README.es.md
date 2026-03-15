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

Template de `Vite + React + TypeScript` preparado para futuros proyectos con:

- Clean Architecture y DDD como estructura base.
- `TanStack Router`, `TanStack Query` y `TanStack Form`.
- Validacion con `Zod` usando soporte directo de TanStack Form.
- `ByteKit` para `EnvManager`, logging, storage y cliente HTTP.
- `Tailwind CSS v4` y `shadcn/ui` para la capa visual.
- `Zustand` para estado global liviano.
- `Intlayer` para i18n type-safe y declarativo.
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
- `intlayer`
- `react-intlayer`
- `vite-intlayer`
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
- `intlayer.config.ts`: configuracion global de locales soportados.
- `src/**/*.content.ts`: diccionarios declarativos por feature/pantalla.
- `src/app/providers/intlayer-provider.tsx`: puente entre Zustand e Intlayer.
- `src/components/app/language-switcher.tsx`: selector de idioma conectado al store global.

## IA para traducciones con Intlayer

Intlayer permite conectar un proveedor de IA para completar o sugerir traducciones desde su CLI, editor visual y CMS. La configuracion se declara en `intlayer.config.ts`.

Ejemplo con `OpenAI`:

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
      'Frontend template con Clean Architecture, DDD, TanStack y terminologia de producto B2B SaaS.',
  },
};

export default config;
```

Pasos recomendados:

1. Definir el bloque `ai` en `intlayer.config.ts`.
2. Guardar la API key en variables de entorno del entorno local o CI, por ejemplo `INTLAYER_OPENAI_API_KEY`.
3. Ajustar `applicationContext` con el dominio del producto para que las traducciones respeten la terminologia del proyecto.
4. Ejecutar el comando de Intlayer para completar traducciones faltantes.

Ejemplo de uso por CLI:

```bash
pnpm exec intlayer fill
```

Notas:

- El `apiKey` no debe exponerse al cliente; `intlayer.config.ts` se evalua del lado de Node durante tooling/build.
- Puedes cambiar `provider` y `model` por otros soportados por Intlayer, como `anthropic`, `mistral`, `deepseek`, `gemini` o `llama`.
- Conviene revisar manualmente las traducciones generadas antes de darlas por cerradas.
- Referencia oficial: `https://intlayer.org/en-GB/doc/concept/configuration` y `https://intlayer.org/en-GB/doc/plugin/sync-json`.

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
