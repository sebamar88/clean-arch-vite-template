# Clean Arch Vite Template

English: see `README.md`.
Español: see `README.es.md`.
Português: see `README.pt.md`.
中文: see `README.zh.md`.

이 문서는 향후 프로젝트를 위한 `Vite + React + TypeScript` 템플릿입니다. 다음을 포함합니다.

- 기본 구조로 Clean Architecture 와 DDD 채택
- `TanStack Router`, `TanStack Query`, `TanStack Form`
- TanStack Form 을 직접 사용하는 `Zod` 검증
- `ByteKit` 기반 `EnvManager`, 로깅, 스토리지, HTTP 클라이언트
- `Tailwind CSS v4` 와 `shadcn/ui` 기반 UI 레이어
- 가벼운 전역 상태 관리를 위한 `Zustand`
- 타입 안전하고 선언적인 i18n 을 위한 `Intlayer`
- 테스트용 `Vitest`
- lint 및 포맷팅용 `Biome`
- `pre-commit` 용 `Husky`
- React Compiler 활성화 완료

## 스택

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

## 구조

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

## 설계 규칙

- `domain`: 안정적인 비즈니스 엔티티와 계약
- `application`: 유스케이스와 포트
- `infrastructure`: 구체적인 어댑터, 리포지토리, HTTP, 스토리지
- `presentation`: 라우트, 컴포넌트, 훅, 폼
- `shared`: 모듈 간 재사용 가능한 횡단 관심사
- `components/ui`: `shadcn/ui` 기본 컴포넌트
- `lib`: `cn` 같은 공통 UI 유틸리티
- 외부로 노출하는 타입은 `types` 폴더에 두고, 컴포넌트 안에는 로컬 타입만 남긴다

## TanStack

- `Router` 는 타입 안전한 라우팅과 중앙화된 provider 구성을 `src/app` 에서 사용
- `Query` 는 `queryOptions` 를 통해 읽기와 캐싱을 캡슐화
- `Form` 은 `validators.onChange: schema` 와 직접적인 `Zod` 사용 방식 채택
- 현재 API 에서는 필요 없으므로 `@tanstack/zod-form-adapter` 는 사용하지 않음

## ByteKit

- `src/shared/config/env.ts`: `EnvManager`
- `src/shared/observability/logger.ts`: `createLogger`
- `src/shared/http/api-client.ts`: `ApiClient`
- `src/modules/leads/infrastructure/repositories/browser-lead-repository.ts`: `StorageManager`

## UI

- `Tailwind CSS v4` 는 `@tailwindcss/vite` 로 통합
- `shadcn/ui` 는 `components.json`, `src/components/ui`, `src/lib/utils.ts` 를 사용
- 예제 앱은 이미 `Button`, `Card`, `Badge`, `Input`, `Textarea` 를 사용

## State 와 i18n

- `src/app/state/preferences-store.ts`: 전역 환경설정을 위한 영속화된 Zustand store
- `intlayer.config.ts`: 지원 로케일에 대한 전역 설정
- `src/**/*.content.ts`: 기능/화면 단위 선언형 사전
- `src/app/providers/intlayer-provider.tsx`: Zustand 와 Intlayer 를 연결하는 브리지
- `src/components/app/language-switcher.tsx`: 전역 store 와 연결된 언어 전환기

## Intlayer AI 번역 엔진

Intlayer 는 CLI, 비주얼 에디터, CMS 에서 번역을 자동 완성하거나 제안하기 위해 AI 제공자를 연결할 수 있습니다. 설정은 `intlayer.config.ts` 에 작성합니다.

`OpenAI` 예시:

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
      'Clean Architecture, DDD, TanStack, B2B SaaS 제품 용어를 사용하는 프론트엔드 템플릿.',
  },
};

export default config;
```

권장 단계:

1. `intlayer.config.ts` 에 `ai` 블록을 정의한다
2. API 키를 로컬 또는 CI 환경 변수에 저장한다. 예: `INTLAYER_OPENAI_API_KEY`
3. `applicationContext` 를 제품 도메인에 맞게 조정해 번역 용어를 맞춘다
4. Intlayer 명령으로 누락된 번역을 채운다

CLI 예시:

```bash
pnpm exec intlayer fill
```

참고:

- `apiKey` 는 클라이언트에 노출하면 안 된다. `intlayer.config.ts` 는 tooling/build 시점에 Node 측에서 평가된다.
- `provider` 와 `model` 은 `anthropic`, `mistral`, `deepseek`, `gemini`, `llama` 등 Intlayer 가 지원하는 다른 제공자로 바꿀 수 있다.
- 자동 생성된 번역도 최종 반영 전에는 사람이 검토하는 것이 좋다.
- 공식 문서: `https://intlayer.org/en-GB/doc/concept/configuration` 및 `https://intlayer.org/en-GB/doc/plugin/sync-json`

## 스크립트

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

## 환경 변수

`.env.example` 를 기반으로 사용하세요.

```bash
VITE_APP_NAME=Clean Arch Vite Template
VITE_API_BASE_URL=/api
```

## 권장 시작점

1. 예제 모듈 하나를 복제하고 실제 bounded context 이름으로 변경한다
2. browser/local 리포지토리를 `ApiClient` 기반 HTTP 구현으로 교체한다
3. Query 가 적합한 곳에 route loader 또는 prefetching 을 추가한다
4. use case 는 컴포넌트 밖에 유지한다
