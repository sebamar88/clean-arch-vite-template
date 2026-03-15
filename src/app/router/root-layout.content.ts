import { type Dictionary, t } from 'intlayer';

const rootLayoutContent = {
  key: 'root-layout',
  content: {
    title: 'Clean Arch Vite Template',
    subtitle: t({
      es: 'Base opinionada para productos con Clean Architecture, TanStack y UI reusable.',
      en: 'Opinionated starter for products with Clean Architecture, TanStack, and reusable UI.',
    }),
  },
} satisfies Dictionary;

export default rootLayoutContent;
