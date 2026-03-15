# Clean Arch Vite Template

[ English](README.md) | [ Español](README.es.md) | [ Português](README.pt.md) | [ 中文](README.zh.md) | [ Français](README.fr.md) | [ Deutsch](README.de.md) | [ 日本語](README.ja.md) | [ 한국어](README.ko.md) | [ Русский](README.ru.md) | [ العربية](README.ar.md)

`Vite + React + TypeScript`-Template fur zukunftige Projekte mit:

- Clean Architecture und DDD als Grundstruktur.
- `TanStack Router`, `TanStack Query` und `TanStack Form`.
- Validierung mit `Zod` unter direkter Nutzung der TanStack-Form-Unterstutzung.
- `ByteKit` fur `EnvManager`, Logging, Storage und HTTP-Client.
- `Tailwind CSS v4` und `shadcn/ui` fur die visuelle Ebene.
- `Zustand` fur leichtgewichtiges globales State-Management.
- `Intlayer` fur deklaratives, typsicheres i18n.
- `Vitest` fur Tests.
- `Biome` fur Linting und Formatierung.
- `Husky` fur `pre-commit`.
- React Compiler bereits aktiviert.

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

## Struktur

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

## Designregeln

- `domain`: stabile Geschaftsentitaten und Vertrage.
- `application`: Use Cases und Ports.
- `infrastructure`: konkrete Adapter, Repositories, HTTP und Storage.
- `presentation`: Routen, Komponenten, Hooks und Formulare.
- `shared`: wiederverwendbare Querschnittsthemen zwischen Modulen.
- `components/ui`: Basis-Komponenten von `shadcn/ui`.
- `lib`: gemeinsame UI-Hilfsfunktionen, z. B. `cn`.
- Exportierte Typen gehoren in `types`-Ordner; in Komponenten sollten nur strikt lokale Typen bleiben.

## TanStack

- `Router` wird mit typisiertem Routing und zentralen Providern in `src/app` verwendet.
- `Query` kapselt Lesezugriffe und Caching uber `queryOptions`.
- `Form` verwendet `validators.onChange: schema` direkt mit `Zod`.
- `@tanstack/zod-form-adapter` wird nicht genutzt, weil die aktuelle API ihn nicht mehr benotigt.

## ByteKit

- `src/shared/config/env.ts`: `EnvManager`
- `src/shared/observability/logger.ts`: `createLogger`
- `src/shared/http/api-client.ts`: `ApiClient`
- `src/modules/leads/infrastructure/repositories/browser-lead-repository.ts`: `StorageManager`

## UI

- `Tailwind CSS v4` wird uber `@tailwindcss/vite` integriert.
- `shadcn/ui` verwendet `components.json`, `src/components/ui` und `src/lib/utils.ts`.
- Die Beispiel-App nutzt bereits `Button`, `Card`, `Badge`, `Input` und `Textarea`.

## State und i18n

- `src/app/state/preferences-store.ts`: persistenter Zustand-Store fur globale Einstellungen.
- `intlayer.config.ts`: globale Konfiguration der unterstutzten Sprachen.
- `src/**/*.content.ts`: deklarative Dictionaries pro Feature/Seite.
- `src/app/providers/intlayer-provider.tsx`: Brucke zwischen Zustand und Intlayer.
- `src/components/app/language-switcher.tsx`: Sprachumschalter mit globalem Store.

## KI-Ubersetzungsengine mit Intlayer

Intlayer kann einen KI-Anbieter anbinden, um Ubersetzungen uber CLI, visuellen Editor und CMS zu vervollstandigen oder vorzuschlagen. Die Konfiguration erfolgt in `intlayer.config.ts`.

Beispiel mit `OpenAI`:

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
      'Frontend-Template mit Clean Architecture, DDD, TanStack und B2B-SaaS-Produktsprache.',
  },
};

export default config;
```

Empfohlene Schritte:

1. Den `ai`-Block in `intlayer.config.ts` definieren.
2. Den API-Key in lokalen oder CI-Umgebungsvariablen speichern, z. B. `INTLAYER_OPENAI_API_KEY`.
3. `applicationContext` an die Produktdomane anpassen, damit die Ubersetzungen zur Projektsprache passen.
4. Den Intlayer-Befehl ausfuhren, um fehlende Ubersetzungen zu erganzen.

CLI-Beispiel:

```bash
pnpm exec intlayer fill
```

Hinweise:

- `apiKey` darf nicht im Client landen; `intlayer.config.ts` wird wahrend Tooling/Build auf der Node-Seite ausgewertet.
- `provider` und `model` konnen auf andere von Intlayer unterstutzte Anbieter wie `anthropic`, `mistral`, `deepseek`, `gemini` oder `llama` umgestellt werden.
- Generierte Ubersetzungen sollten vor der finalen Nutzung manuell gepruft werden.
- Offizielle Referenz: `https://intlayer.org/en-GB/doc/concept/configuration` und `https://intlayer.org/en-GB/doc/plugin/sync-json`.

## Skripte

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

## Umgebungsvariablen

Nutze `.env.example` als Grundlage:

```bash
VITE_APP_NAME=Clean Arch Vite Template
VITE_API_BASE_URL=/api
```

## Empfohlener Startpunkt

1. Ein Beispielmodul duplizieren und auf den echten bounded context umbenennen.
2. Das browser/local-Repository durch eine HTTP-Implementierung mit `ApiClient` ersetzen.
3. Route-Loader oder Prefetching dort hinzufugen, wo Query sinnvoll ist.
4. Use Cases ausserhalb von Komponenten halten.
