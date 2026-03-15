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

هذا قالب `Vite + React + TypeScript` مخصص للمشاريع المستقبلية ويتضمن:

- اعتماد Clean Architecture و DDD كبنية أساسية.
- `TanStack Router` و `TanStack Query` و `TanStack Form`.
- التحقق باستخدام `Zod` مع دعم مباشر من TanStack Form.
- `ByteKit` من أجل `EnvManager` والسجلات والتخزين وعميل HTTP.
- `Tailwind CSS v4` و `shadcn/ui` للطبقة البصرية.
- `Zustand` لإدارة حالة عامة خفيفة.
- `Intlayer` من أجل i18n تصريحي وآمن من ناحية الأنواع.
- `Vitest` للاختبارات.
- `Biome` للفحص والتنسيق.
- `Husky` لخطافات `pre-commit`.
- تم تفعيل React Compiler مسبقا.

## التقنيات

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

## البنية

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

## قواعد التصميم

- `domain`: كيانات العمل والعقود المستقرة.
- `application`: حالات الاستخدام والمنافذ.
- `infrastructure`: المحولات الفعلية والمستودعات و HTTP والتخزين.
- `presentation`: المسارات والمكونات و hooks والنماذج.
- `shared`: الاهتمامات المشتركة القابلة لإعادة الاستخدام بين الوحدات.
- `components/ui`: المكونات الأساسية من `shadcn/ui`.
- `lib`: أدوات UI مشتركة مثل `cn`.
- يجب أن تعيش الأنواع المصدرة في مجلدات `types`، بينما تبقى داخل المكونات الأنواع المحلية فقط.

## TanStack

- يستخدم `Router` توجيها typed مع providers مركزية داخل `src/app`.
- تقوم `Query` بتغليف عمليات القراءة والتخزين المؤقت عبر `queryOptions`.
- يستخدم `Form` النمط `validators.onChange: schema` مع `Zod` مباشرة.
- لا يتم استخدام `@tanstack/zod-form-adapter` لأن واجهة API الحالية لم تعد تحتاجه.

## ByteKit

- `src/shared/config/env.ts`: `EnvManager`
- `src/shared/observability/logger.ts`: `createLogger`
- `src/shared/http/api-client.ts`: `ApiClient`
- `src/modules/leads/infrastructure/repositories/browser-lead-repository.ts`: `StorageManager`

## UI

- يتم دمج `Tailwind CSS v4` عبر `@tailwindcss/vite`.
- يستخدم `shadcn/ui` الملفات `components.json` و `src/components/ui` و `src/lib/utils.ts`.
- التطبيق التجريبي يستخدم بالفعل `Button` و `Card` و `Badge` و `Input` و `Textarea`.

## الحالة و i18n

- `src/app/state/preferences-store.ts`: متجر Zustand مستمر للتفضيلات العامة.
- `intlayer.config.ts`: الإعداد العام للغات المدعومة.
- `src/**/*.content.ts`: قواميس تصريحية حسب الميزة أو الشاشة.
- `src/app/providers/intlayer-provider.tsx`: طبقة ربط بين Zustand و Intlayer.
- `src/components/app/language-switcher.tsx`: مبدل لغة متصل بالمتجر العام.

## محرك الترجمة بالذكاء الاصطناعي مع Intlayer

يمكن لـ Intlayer الاتصال بمزود ذكاء اصطناعي لإكمال الترجمات أو اقتراحها من خلال CLI والمحرر المرئي و CMS. يتم تعريف الإعداد داخل `intlayer.config.ts`.

مثال باستخدام `OpenAI`:

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
      'قالب واجهة أمامية يعتمد على Clean Architecture و DDD و TanStack ومصطلحات منتج B2B SaaS.',
  },
};

export default config;
```

الخطوات الموصى بها:

1. تعريف كتلة `ai` داخل `intlayer.config.ts`.
2. حفظ مفتاح API في متغيرات البيئة المحلية أو CI مثل `INTLAYER_OPENAI_API_KEY`.
3. ضبط `applicationContext` بما يناسب نطاق المنتج حتى تحافظ الترجمات على مصطلحات المشروع.
4. تشغيل أمر Intlayer لإكمال الترجمات الناقصة.

مثال CLI:

```bash
pnpm exec intlayer fill
```

ملاحظات:

- يجب عدم كشف `apiKey` للعميل؛ يتم تقييم `intlayer.config.ts` على جهة Node أثناء tooling/build.
- يمكنك تغيير `provider` و `model` إلى مزودين آخرين يدعمهم Intlayer مثل `anthropic` و `mistral` و `deepseek` و `gemini` و `llama`.
- يفضل مراجعة الترجمات المولدة يدويا قبل اعتمادها نهائيا.
- المرجع الرسمي: `https://intlayer.org/en-GB/doc/concept/configuration` و `https://intlayer.org/en-GB/doc/plugin/sync-json`.

## الأوامر

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

## متغيرات البيئة

استخدم `.env.example` كنقطة بداية:

```bash
VITE_APP_NAME=Clean Arch Vite Template
VITE_API_BASE_URL=/api
```

## نقطة البداية الموصى بها

1. انسخ أحد الوحدات التجريبية وأعد تسميته إلى bounded context الحقيقي.
2. استبدل مستودع browser/local بتنفيذ HTTP باستخدام `ApiClient`.
3. أضف route loaders أو prefetching حيث تكون Query مناسبة.
4. أبق use cases خارج المكونات.
