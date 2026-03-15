# Clean Arch Vite Template

[ English](README.md) | [ Español](README.es.md) | [ Português](README.pt.md) | [ 中文](README.zh.md) | [ Français](README.fr.md) | [ Deutsch](README.de.md) | [ 日本語](README.ja.md) | [ 한국어](README.ko.md) | [ Русский](README.ru.md) | [ العربية](README.ar.md)

Template `Vite + React + TypeScript` prepare pour de futurs projets avec :

- Clean Architecture et DDD comme structure de base.
- `TanStack Router`, `TanStack Query` et `TanStack Form`.
- Validation avec `Zod` en utilisant le support direct de TanStack Form.
- `ByteKit` pour `EnvManager`, le logging, le storage et le client HTTP.
- `Tailwind CSS v4` et `shadcn/ui` pour la couche visuelle.
- `Zustand` pour un etat global leger.
- `Intlayer` pour une i18n declarative et type-safe.
- `Vitest` pour les tests.
- `Biome` pour le lint et le formatage.
- `Husky` pour `pre-commit`.
- React Compiler deja active.

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

## Regles de Design

- `domain` : entites metier et contrats stables.
- `application` : cas d'usage et ports.
- `infrastructure` : adaptateurs concrets, repositories, HTTP et storage.
- `presentation` : routes, composants, hooks et formulaires.
- `shared` : concerns transverses reutilisables entre modules.
- `components/ui` : composants de base `shadcn/ui`.
- `lib` : utilitaires UI partages, par exemple `cn`.
- Les types exportes vivent dans des dossiers `types`; dans les composants, ne gardez que les types strictement locaux.

## TanStack

- `Router` est utilise avec un routage type et des providers centralises dans `src/app`.
- `Query` encapsule les lectures et le cache via `queryOptions`.
- `Form` utilise `validators.onChange: schema` avec `Zod` en direct.
- `@tanstack/zod-form-adapter` n'est pas utilise car l'API actuelle n'en a plus besoin.

## ByteKit

- `src/shared/config/env.ts`: `EnvManager`
- `src/shared/observability/logger.ts`: `createLogger`
- `src/shared/http/api-client.ts`: `ApiClient`
- `src/modules/leads/infrastructure/repositories/browser-lead-repository.ts`: `StorageManager`

## UI

- `Tailwind CSS v4` est integre via `@tailwindcss/vite`.
- `shadcn/ui` utilise `components.json`, `src/components/ui` et `src/lib/utils.ts`.
- L'application d'exemple utilise deja `Button`, `Card`, `Badge`, `Input` et `Textarea`.

## State et i18n

- `src/app/state/preferences-store.ts` : store Zustand persistant pour les preferences globales.
- `intlayer.config.ts` : configuration globale des locales supportees.
- `src/**/*.content.ts` : dictionnaires declaratifs par fonctionnalite/ecran.
- `src/app/providers/intlayer-provider.tsx` : pont entre Zustand et Intlayer.
- `src/components/app/language-switcher.tsx` : selecteur de langue connecte au store global.

## Moteur de Traduction IA avec Intlayer

Intlayer peut se connecter a un fournisseur IA pour completer ou suggerer des traductions depuis son CLI, son editeur visuel et son CMS. La configuration se declare dans `intlayer.config.ts`.

Exemple avec `OpenAI` :

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
      'Template frontend avec Clean Architecture, DDD, TanStack et une terminologie produit B2B SaaS.',
  },
};

export default config;
```

Etapes recommandees :

1. Definir le bloc `ai` dans `intlayer.config.ts`.
2. Stocker la cle API dans les variables d'environnement locales ou CI, par exemple `INTLAYER_OPENAI_API_KEY`.
3. Ajuster `applicationContext` avec le domaine du produit pour respecter la terminologie du projet.
4. Executer la commande Intlayer pour completer les traductions manquantes.

Exemple CLI :

```bash
pnpm exec intlayer fill
```

Notes :

- `apiKey` ne doit pas etre exposee au client ; `intlayer.config.ts` est evalue cote Node pendant le tooling/build.
- Vous pouvez changer `provider` et `model` pour d'autres fournisseurs supportes par Intlayer comme `anthropic`, `mistral`, `deepseek`, `gemini` ou `llama`.
- Les traductions generees doivent toujours etre relues manuellement avant validation finale.
- Reference officielle : `https://intlayer.org/en-GB/doc/concept/configuration` et `https://intlayer.org/en-GB/doc/plugin/sync-json`.

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

## Variables d'Environnement

Utilisez `.env.example` comme base :

```bash
VITE_APP_NAME=Clean Arch Vite Template
VITE_API_BASE_URL=/api
```

## Point de Depart Recommande

1. Dupliquez un module d'exemple et renommez-le selon votre bounded context reel.
2. Remplacez le repository browser/local par une implementation HTTP via `ApiClient`.
3. Ajoutez des route loaders ou du prefetching la ou Query a du sens.
4. Gardez les cas d'usage hors des composants.
