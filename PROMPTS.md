### Структура шаблонного конфига (пример monobrand.config.ts):

```ts
// src/templates/monobrand.config.ts
import siteConfig from "../config/site.config";

const monobrandConfig = {
  ...siteConfig,

  brand: {
    name: "Bingo 101",
    slug: "bingo101",
    logo: "/images/logo.webp",
  },

  affiliate: {
    mainUrl: "https://1woala.life/casino/list?open=register&p=912z",
    promoCode: null,
    ctaText: "Download Bingo 101 APK",
  },

  rating: {
    overall: 4.8,
    votes: "193K",
    size: "3.4 MB",
    bonus: "100",
  },

  theme: {
    primaryColor: "#44b357",
    accentColor: "#2d8b3e",
    fontBody: "Inter",
    fontHeading: "Inter",
  },

  seo: {
    title: "Bingo 101 — Game Download and Get up to ₹100 Welcome Bonus",
    description: "Bingo 101 Welcomes you! Play Slots, Rummy, Teen Patti, Aviator, JetX and many more. Start winning money, earn rewards, and instant withdraw cash today!",
    canonical: "https://bingo101-games.com",
    ogImage: "/images/gr4.webp",
  },
};

export default monobrandConfig;
export type MonobrandConfig = typeof monobrandConfig;
```

### Правило использования:

- Страницы шаблона импортируют свой конфиг:
  `import config from "../../src/templates/monobrand.config"`
- Компоненты шаблона получают данные через пропсы — конфиг не импортируют.
- site.config.ts содержит только то, что одинаково для всех шаблонов:
  siteUrl, i18n.defaultLocale, i18n.locales, brand.name/slug.
- SITE_URL всегда берётся из .env и перекрывает site.config.ts.

- 
## 2. Монобренд iGaming шаблон

  Поверх инфраструктурной базы (Промпт #1) создаётся шаблон монобренда.
  5 страниц × 4-5 блоков. Стиль: тёмный, premium, casino-feel.
  CSS только через custom properties из global.css — без Tailwind.

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ## СТРАНИЦЫ И БЛОКИ
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ### 1. Главная — src/pages/index.astro

  Это готовый рабочий сайт, который используется как шаблон для других брендов.
  Что входит:

    Главная страница с Hero, преимуществами, бонусами, FAQ

    Страницы: политика, условия, ответственная игра

    PWA (установка, офлайн, иконки)

    Динамические файлы: robots.txt, sitemap.xml, llms.txt, manifest.json, sw.js, app.js

    Адаптивный дизайн, тёмная тема, кнопки с PWA-логикой

























