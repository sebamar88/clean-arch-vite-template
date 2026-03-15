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

Template de `Vite + React + TypeScript` preparado para projetos futuros com:

- Clean Architecture e DDD como estrutura base.
- `TanStack Router`, `TanStack Query` e `TanStack Form`.
- Validação com `Zod` usando suporte direto do TanStack Form.
- `ByteKit` para `EnvManager`, logging, storage e cliente HTTP.
- `Tailwind CSS v4` e `shadcn/ui` para a camada visual.
- `Zustand` para estado global leve.
- `Intlayer` para i18n declarativo e type-safe.
- `Vitest` para testes.
- `Biome` para lint e formatação.
- `Husky` para `pre-commit`.
- React Compiler já habilitado.

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

## Estrutura

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

## Regras de Design

- `domain`: entidades e contratos estáveis do negócio.
- `application`: casos de uso e portas.
- `infrastructure`: adapters concretos, repositórios, HTTP e storage.
- `presentation`: rotas, componentes, hooks e formulários.
- `shared`: concerns transversais reutilizados entre módulos.
- `components/ui`: componentes base de `shadcn/ui`.
- `lib`: utilitários transversais de UI, por exemplo `cn`.
- Tipos exportados vivem em pastas `types`; dentro de componentes ficam apenas tipos estritamente locais.

## TanStack

- `Router` é usado com roteamento tipado e providers centralizados em `src/app`.
- `Query` encapsula leituras e cache via `queryOptions`.
- `Form` usa `validators.onChange: schema` com `Zod` direto.
- `@tanstack/zod-form-adapter` não é usado porque a API atual não precisa mais dele.

## ByteKit

- `src/shared/config/env.ts`: `EnvManager`
- `src/shared/observability/logger.ts`: `createLogger`
- `src/shared/http/api-client.ts`: `ApiClient`
- `src/modules/leads/infrastructure/repositories/browser-lead-repository.ts`: `StorageManager`

## UI

- `Tailwind CSS v4` é integrado via `@tailwindcss/vite`.
- `shadcn/ui` usa `components.json`, `src/components/ui` e `src/lib/utils.ts`.
- O app de exemplo já usa `Button`, `Card`, `Badge`, `Input` e `Textarea`.

## State e i18n

- `src/app/state/preferences-store.ts`: store persistido do Zustand para preferências globais.
- `intlayer.config.ts`: configuração global dos locais suportados.
- `src/**/*.content.ts`: dicionários declarativos por feature/tela.
- `src/app/providers/intlayer-provider.tsx`: ponte entre Zustand e Intlayer.
- `src/components/app/language-switcher.tsx`: seletor de idioma conectado ao store global.

## Motor de IA para Traduções com Intlayer

O Intlayer pode se conectar a um provedor de IA para completar ou sugerir traduções via CLI, editor visual e CMS. A configuração é declarada em `intlayer.config.ts`.

Exemplo com `OpenAI`:

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
      'Template frontend com Clean Architecture, DDD, TanStack e terminologia de produto B2B SaaS.',
  },
};

export default config;
```

Passos recomendados:

1. Definir o bloco `ai` em `intlayer.config.ts`.
2. Guardar a API key em variáveis de ambiente locais ou de CI, por exemplo `INTLAYER_OPENAI_API_KEY`.
3. Ajustar `applicationContext` com o domínio do produto para que as traduções respeitem a terminologia do projeto.
4. Executar o comando do Intlayer para preencher traduções ausentes.

Exemplo via CLI:

```bash
pnpm exec intlayer fill
```

Notas:

- `apiKey` não deve ser exposta ao cliente; `intlayer.config.ts` é avaliado no lado do Node durante tooling/build.
- Você pode trocar `provider` e `model` por outros suportados pelo Intlayer, como `anthropic`, `mistral`, `deepseek`, `gemini` ou `llama`.
- As traduções geradas ainda devem ser revisadas manualmente antes de serem consideradas finais.
- Referência oficial: `https://intlayer.org/en-GB/doc/concept/configuration` e `https://intlayer.org/en-GB/doc/plugin/sync-json`.

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

## Variáveis de Ambiente

Use `.env.example` como base:

```bash
VITE_APP_NAME=Clean Arch Vite Template
VITE_API_BASE_URL=/api
```

## Ponto de Partida Recomendado

1. Duplicar um dos módulos de exemplo e renomeá-lo para o bounded context real.
2. Substituir o repositório browser/local por uma implementação HTTP usando `ApiClient`.
3. Adicionar route loaders ou prefetching onde Query fizer sentido.
4. Manter os casos de uso fora dos componentes.
