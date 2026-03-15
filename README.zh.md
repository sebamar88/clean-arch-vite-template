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

这是一个用于未来项目的 `Vite + React + TypeScript` 模板，包含：

- 以 Clean Architecture 和 DDD 作为基础结构。
- `TanStack Router`、`TanStack Query` 和 `TanStack Form`。
- 使用 `Zod` 并直接集成 TanStack Form 的校验方案。
- 使用 `ByteKit` 提供 `EnvManager`、日志、存储和 HTTP 客户端。
- 使用 `Tailwind CSS v4` 和 `shadcn/ui` 构建视觉层。
- 使用 `Zustand` 管理轻量级全局状态。
- 使用 `Intlayer` 实现类型安全、声明式的 i18n。
- 使用 `Vitest` 进行测试。
- 使用 `Biome` 进行 lint 和格式化。
- 使用 `Husky` 处理 `pre-commit`。
- 已启用 React Compiler。

## 技术栈

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

## 目录结构

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

## 设计规则

- `domain`：稳定的业务实体与契约。
- `application`：用例与端口。
- `infrastructure`：具体的适配器、仓库、HTTP 与存储实现。
- `presentation`：路由、组件、hooks 与表单。
- `shared`：模块间可复用的横切关注点。
- `components/ui`：`shadcn/ui` 基础组件。
- `lib`：共享 UI 工具，例如 `cn`。
- 对外导出的类型放在 `types` 目录中；组件文件里只保留严格局部的类型。

## TanStack

- `Router` 使用类型化路由，并在 `src/app` 中集中管理 providers。
- `Query` 通过 `queryOptions` 封装读取与缓存。
- `Form` 使用 `validators.onChange: schema` 并直接配合 `Zod`。
- 不使用 `@tanstack/zod-form-adapter`，因为当前 API 已不再需要它。

## ByteKit

- `src/shared/config/env.ts`: `EnvManager`
- `src/shared/observability/logger.ts`: `createLogger`
- `src/shared/http/api-client.ts`: `ApiClient`
- `src/modules/leads/infrastructure/repositories/browser-lead-repository.ts`: `StorageManager`

## UI

- `Tailwind CSS v4` 通过 `@tailwindcss/vite` 集成。
- `shadcn/ui` 使用 `components.json`、`src/components/ui` 和 `src/lib/utils.ts`。
- 示例应用已使用 `Button`、`Card`、`Badge`、`Input` 和 `Textarea`。

## 状态与 i18n

- `src/app/state/preferences-store.ts`：用于全局偏好的持久化 Zustand store。
- `intlayer.config.ts`：支持语言的全局配置。
- `src/**/*.content.ts`：按功能或页面组织的声明式字典。
- `src/app/providers/intlayer-provider.tsx`：连接 Zustand 与 Intlayer 的桥接层。
- `src/components/app/language-switcher.tsx`：连接全局 store 的语言切换器。

## 使用 Intlayer 的 AI 翻译引擎

Intlayer 可以连接 AI 提供商，通过 CLI、可视化编辑器和 CMS 自动补全或建议翻译。配置写在 `intlayer.config.ts` 中。

`OpenAI` 示例：

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
      '使用 Clean Architecture、DDD、TanStack 与 B2B SaaS 产品术语的前端模板。',
  },
};

export default config;
```

推荐步骤：

1. 在 `intlayer.config.ts` 中定义 `ai` 配置块。
2. 将 API key 存入本地或 CI 环境变量，例如 `INTLAYER_OPENAI_API_KEY`。
3. 根据你的产品领域调整 `applicationContext`，让翻译更符合项目术语。
4. 运行 Intlayer 命令补全缺失翻译。

CLI 示例：

```bash
pnpm exec intlayer fill
```

说明：

- 不要把 `apiKey` 暴露到客户端；`intlayer.config.ts` 会在 Node 侧的 tooling/build 阶段执行。
- 你也可以把 `provider` 和 `model` 切换为 Intlayer 支持的其他提供商，例如 `anthropic`、`mistral`、`deepseek`、`gemini` 或 `llama`。
- 自动生成的翻译仍然建议人工复核后再正式采用。
- 官方参考：`https://intlayer.org/en-GB/doc/concept/configuration` 与 `https://intlayer.org/en-GB/doc/plugin/sync-json`。

## 脚本

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

## 环境变量

以 `.env.example` 为基础：

```bash
VITE_APP_NAME=Clean Arch Vite Template
VITE_API_BASE_URL=/api
```

## 推荐起点

1. 复制一个示例模块，并重命名为你的真实 bounded context。
2. 使用 `ApiClient` 将 browser/local 仓库替换为 HTTP 实现。
3. 在适合使用 Query 的地方增加 route loaders 或 prefetching。
4. 将 use case 保持在组件之外。
