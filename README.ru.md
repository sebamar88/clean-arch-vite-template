# Clean Arch Vite Template

[ English](README.md) | [ Español](README.es.md) | [ Português](README.pt.md) | [ 中文](README.zh.md) | [ Français](README.fr.md) | [ Deutsch](README.de.md) | [ 日本語](README.ja.md) | [ 한국어](README.ko.md) | [ Русский](README.ru.md) | [ العربية](README.ar.md)

Шаблон `Vite + React + TypeScript` для будущих проектов со следующим стеком:

- Clean Architecture и DDD как базовая структура.
- `TanStack Router`, `TanStack Query` и `TanStack Form`.
- Валидация через `Zod` с прямой поддержкой TanStack Form.
- `ByteKit` для `EnvManager`, логирования, storage и HTTP-клиента.
- `Tailwind CSS v4` и `shadcn/ui` для визуального слоя.
- `Zustand` для легкого глобального состояния.
- `Intlayer` для декларативной и type-safe i18n.
- `Vitest` для тестов.
- `Biome` для lint и форматирования.
- `Husky` для `pre-commit`.
- React Compiler уже включен.

## Стек

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

## Структура

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

## Правила дизайна

- `domain`: стабильные бизнес-сущности и контракты.
- `application`: use cases и порты.
- `infrastructure`: конкретные адаптеры, репозитории, HTTP и storage.
- `presentation`: маршруты, компоненты, хуки и формы.
- `shared`: переиспользуемые cross-cutting concerns между модулями.
- `components/ui`: базовые компоненты `shadcn/ui`.
- `lib`: общие UI-утилиты, например `cn`.
- Экспортируемые типы должны жить в папках `types`; в компонентах оставляйте только локальные типы.

## TanStack

- `Router` используется с типизированным роутингом и центральными providers в `src/app`.
- `Query` инкапсулирует чтение и кеширование через `queryOptions`.
- `Form` использует `validators.onChange: schema` с прямым `Zod`.
- `@tanstack/zod-form-adapter` не используется, потому что текущему API он больше не нужен.

## ByteKit

- `src/shared/config/env.ts`: `EnvManager`
- `src/shared/observability/logger.ts`: `createLogger`
- `src/shared/http/api-client.ts`: `ApiClient`
- `src/modules/leads/infrastructure/repositories/browser-lead-repository.ts`: `StorageManager`

## UI

- `Tailwind CSS v4` интегрирован через `@tailwindcss/vite`.
- `shadcn/ui` использует `components.json`, `src/components/ui` и `src/lib/utils.ts`.
- В примере уже используются `Button`, `Card`, `Badge`, `Input` и `Textarea`.

## State и i18n

- `src/app/state/preferences-store.ts`: persisted Zustand store для глобальных предпочтений.
- `intlayer.config.ts`: глобальная конфигурация поддерживаемых локалей.
- `src/**/*.content.ts`: декларативные словари по feature/экрану.
- `src/app/providers/intlayer-provider.tsx`: мост между Zustand и Intlayer.
- `src/components/app/language-switcher.tsx`: переключатель языка, подключенный к глобальному store.

## AI-движок переводов с Intlayer

Intlayer может подключаться к AI-провайдеру, чтобы дополнять или предлагать переводы через CLI, визуальный редактор и CMS. Конфигурация задается в `intlayer.config.ts`.

Пример с `OpenAI`:

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
      'Frontend template с Clean Architecture, DDD, TanStack и терминологией B2B SaaS продукта.',
  },
};

export default config;
```

Рекомендуемые шаги:

1. Определить блок `ai` в `intlayer.config.ts`.
2. Сохранить API key в локальных или CI-переменных окружения, например `INTLAYER_OPENAI_API_KEY`.
3. Настроить `applicationContext` под продуктовую доменную область, чтобы переводы соблюдали терминологию проекта.
4. Запустить команду Intlayer для заполнения отсутствующих переводов.

Пример CLI:

```bash
pnpm exec intlayer fill
```

Примечания:

- `apiKey` нельзя отдавать на клиент; `intlayer.config.ts` вычисляется на стороне Node во время tooling/build.
- `provider` и `model` можно переключить на другие поддерживаемые Intlayer провайдеры: `anthropic`, `mistral`, `deepseek`, `gemini` или `llama`.
- Сгенерированные переводы все равно стоит вручную проверить перед финальным использованием.
- Официальная документация: `https://intlayer.org/en-GB/doc/concept/configuration` и `https://intlayer.org/en-GB/doc/plugin/sync-json`.

## Скрипты

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

## Переменные окружения

Используйте `.env.example` как основу:

```bash
VITE_APP_NAME=Clean Arch Vite Template
VITE_API_BASE_URL=/api
```

## Рекомендуемая точка старта

1. Дублировать один из примерных модулей и переименовать его под реальный bounded context.
2. Заменить browser/local репозиторий на HTTP-реализацию через `ApiClient`.
3. Добавить route loaders или prefetching там, где это оправдано для Query.
4. Держать use cases вне компонентов.
