# Clean Arch Vite Template

[ English](README.md) | [ Español](README.es.md) | [ Português](README.pt.md) | [ 中文](README.zh.md) | [ Français](README.fr.md) | [ Deutsch](README.de.md) | [ 日本語](README.ja.md) | [ 한국어](README.ko.md) | [ Русский](README.ru.md) | [ العربية](README.ar.md)

これは将来のプロジェクト向けに用意した `Vite + React + TypeScript` テンプレートです。以下を含みます。

- Clean Architecture と DDD をベース構造として採用
- `TanStack Router`、`TanStack Query`、`TanStack Form`
- TanStack Form に直接対応した `Zod` バリデーション
- `ByteKit` による `EnvManager`、ロギング、ストレージ、HTTP クライアント
- `Tailwind CSS v4` と `shadcn/ui` による UI レイヤー
- 軽量なグローバル状態管理のための `Zustand`
- 型安全で宣言的な i18n のための `Intlayer`
- テスト用の `Vitest`
- lint と format 用の `Biome`
- `pre-commit` 用の `Husky`
- React Compiler を有効化済み

## スタック

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

## 構成

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

## 設計ルール

- `domain`: 安定したビジネスエンティティと契約
- `application`: ユースケースとポート
- `infrastructure`: 具体的なアダプタ、リポジトリ、HTTP、ストレージ
- `presentation`: ルート、コンポーネント、hooks、フォーム
- `shared`: モジュール間で再利用する横断的関心事
- `components/ui`: `shadcn/ui` の基本コンポーネント
- `lib`: `cn` などの共通 UI ユーティリティ
- エクスポートする型は `types` フォルダに置き、コンポーネント内にはローカルな型のみ残す

## TanStack

- `Router` は型付きルーティングと中央集約された provider を `src/app` で利用
- `Query` は `queryOptions` を通じて読み取りとキャッシュをカプセル化
- `Form` は `validators.onChange: schema` を使い `Zod` を直接利用
- 現在の API では不要なため `@tanstack/zod-form-adapter` は使用しない

## ByteKit

- `src/shared/config/env.ts`: `EnvManager`
- `src/shared/observability/logger.ts`: `createLogger`
- `src/shared/http/api-client.ts`: `ApiClient`
- `src/modules/leads/infrastructure/repositories/browser-lead-repository.ts`: `StorageManager`

## UI

- `Tailwind CSS v4` は `@tailwindcss/vite` 経由で統合
- `shadcn/ui` は `components.json`、`src/components/ui`、`src/lib/utils.ts` を利用
- サンプルアプリでは `Button`、`Card`、`Badge`、`Input`、`Textarea` を使用済み

## State と i18n

- `src/app/state/preferences-store.ts`: グローバル設定用の永続化された Zustand store
- `intlayer.config.ts`: 対応ロケールのグローバル設定
- `src/**/*.content.ts`: 機能や画面ごとの宣言的辞書
- `src/app/providers/intlayer-provider.tsx`: Zustand と Intlayer をつなぐブリッジ
- `src/components/app/language-switcher.tsx`: グローバル store に接続された言語切替

## Intlayer の AI 翻訳エンジン

Intlayer は CLI、ビジュアルエディタ、CMS から翻訳を補完または提案するために AI プロバイダを接続できます。設定は `intlayer.config.ts` に記述します。

`OpenAI` の例:

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
      'Clean Architecture、DDD、TanStack、B2B SaaS の用語を前提としたフロントエンドテンプレート。',
  },
};

export default config;
```

推奨手順:

1. `intlayer.config.ts` に `ai` ブロックを定義する
2. API キーをローカルまたは CI の環境変数に保存する。例: `INTLAYER_OPENAI_API_KEY`
3. `applicationContext` を製品ドメインに合わせて調整し、翻訳の用語を揃える
4. Intlayer コマンドを実行して不足している翻訳を補完する

CLI 例:

```bash
pnpm exec intlayer fill
```

補足:

- `apiKey` はクライアントに公開しないこと。`intlayer.config.ts` は tooling/build 時に Node 側で評価されます。
- `provider` と `model` は `anthropic`、`mistral`、`deepseek`、`gemini`、`llama` など Intlayer が対応する他のプロバイダへ切り替え可能です。
- 自動生成された翻訳も最終反映前に人手で確認するべきです。
- 公式リファレンス: `https://intlayer.org/en-GB/doc/concept/configuration` と `https://intlayer.org/en-GB/doc/plugin/sync-json`

## スクリプト

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

## 環境変数

`.env.example` をベースに使用してください。

```bash
VITE_APP_NAME=Clean Arch Vite Template
VITE_API_BASE_URL=/api
```

## 推奨スタートポイント

1. サンプルモジュールを複製し、実際の bounded context 名に変更する
2. browser/local リポジトリを `ApiClient` を使った HTTP 実装に置き換える
3. Query が有効な箇所に route loader や prefetching を追加する
4. use case はコンポーネントの外に保つ
