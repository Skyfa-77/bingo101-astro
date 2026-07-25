 Полный промпт: инфраструктура + твой сайт как монобрендовый шаблон
1. Инфраструктурная база (Astro 5 SSG)

Создай Astro 5 SSG инфраструктурную базу. Это НЕ сайт и НЕ шаблон. Только три модуля:
SEO-инфраструктура, i18n-система (опционально), affiliate-конфиг.
Поверх этой базы будет подключаться монобрендовый шаблон.
2. Архитектура конфигов

Каждый шаблон (монобренд, слот, обзор и т.д.) имеет свой отдельный конфиг-файл.
Общая база — site.config.ts.
text

site.config.ts              ← общее: siteUrl, i18n, PWA, SEO
src/templates/
  monobrand.config.ts       ← affiliate, theme, SEO, бренд

3. Монобрендовый шаблон — твой сайт Bingo 101

Это готовый рабочий сайт, который используется как шаблон для других брендов.
Что входит:

    Главная страница с Hero, преимуществами, бонусами, FAQ

    Страницы: политика, условия, ответственная игра

    PWA (установка, офлайн, иконки)

    Динамические файлы: robots.txt, sitemap.xml, llms.txt, manifest.json, sw.js, app.js

    Адаптивный дизайн, тёмная тема, кнопки с PWA-логикой

Конфиг монобренда:
ts

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

Контент (JSON):
json

{
  "hero": {
    "title": "How to start playing Bingo 101?",
    "text": [
      "Every day, thousands of people visit our website...",
      "You can play such games as: Aviator, JetX, Lucky Birds...",
      "Card Games: Teen Patti, Andar Bahar, 7 Up Down, Rummy, Poker, Blackjack.",
      "Casino Games: Roulette, Baccarat, Plinko, Dice, Wheel of Fortune.",
      "Bingo Games: Bingo 101, Bingo Blitz, Bingo Royale, and many more!"
    ]
  },
  "sections": {
    "registration": { ... },
    "advantages": { ... },
    "license": { ... },
    "payments": { ... },
    "bonuses": { ... },
    "sports": { ... },
    "mobile": { ... },
    "support": { ... }
  },
  "disclaimer": { ... },
  "footer": { ... }
}

4. Динамические файлы (полная автоматизация)

Все системные файлы генерируются из конфига:
Файл	Откуда берёт
robots.txt.ts	site.config.ts → SITE.url
sitemap.xml.ts	site.config.ts → PAGES
llms.txt.ts	site.config.ts → SITE.name + PAGES
manifest.json.ts	site.config.ts → SITE + PWA.icons
sw.js.ts	site.config.ts → PWA.cache
app.js.ts	monobrand.config.ts → affiliate + brand
5. PWA-модуль

    Иконки: 192×192 и 512×512 (квадратные, .webp или .png)

    Офлайн-режим через Service Worker

    Кеширование: HTML, CSS, JS, изображения

    Установка на рабочий стол через beforeinstallprompt

6. SEO-модуль

    <title> из monobrand.config.ts

    Meta-теги: description, robots, canonical

    Open Graph: og:title, og:description, og:image

    Twitter Card: summary_large_image

    Schema.org: Organization, LocalBusiness, Article, Product

7. Структура проекта
text

src/
  config/
    site.config.ts
  templates/
    monobrand.config.ts
  content/
    brand-text.json
  components/
    monobrand/
      BrandBox.astro
      DownloadButton.astro
      Bonuses.astro
      AppInfo.astro
      Logo.astro
      Header.astro
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    privacy-policy.astro
    terms.astro
    responsible-gambling.astro
    robots.txt.ts
    sitemap.xml.ts
    llms.txt.ts
    manifest.json.ts
    sw.js.ts
    app.js.ts
  styles/
    global.css
public/
  icons/
    icon-192.webp
    icon-512.webp
  images/
    logo.webp
    gr4.webp
  styles/
    global.css

8. Готовность к деплою

    npm run build → собирается в dist/

    Cloudflare Pages → автоматический деплой из GitHub

    Все динамические файлы генерируются на лету

    PWA работает на Android (Chrome) и iOS (Safari)

9. Что дальше:

    Добавлять новые бренды → копировать monobrand.config.ts и JSON-контент

    Менять цвета, шрифты, ссылки → не трогая код

    Расширять функциональность → добавлять новые компоненты

📌 Итог

Этот промпт — готовая инструкция по созданию полностью динамического PWA-сайта на Astro 5 с твоим сайтом как монобрендовым шаблоном. Все файлы генерируются из конфигов, никакой рутины.
Подходит для масштабирования на десятки брендов.
Просто скажи. 🚀
This response is AI-generated, for reference only.
