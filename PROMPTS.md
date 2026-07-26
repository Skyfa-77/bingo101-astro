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
## 2. Монобренд iGaming шаблон — твой сайт как основа

Поверх инфраструктурной базы (Промпт #1) используется готовый шаблон — твой сайт Bingo 101.
Шаблон содержит 4 страницы, блоки, PWA, динамические файлы, конфиги.
Стиль: светлый, информационный, с акцентом на установку приложения. CSS через global.css, без Tailwind.
2. Страницы и блоки
1. Главная — src/pages/index.astro

Блок 1: Hero

    Заголовок H1: How to start playing Bingo 101?

    Текст из массива (5 абзацев):

        Вступление

        Список игр (Aviator, JetX, Lucky Birds, Chicken Train, Chicken Crash, Slots)

        Card Games (Teen Patti, Andar Bahar, 7 Up Down, Rummy, Poker, Blackjack)

        Casino Games (Roulette, Baccarat, Plinko, Dice, Wheel of Fortune)

        Bingo Games (Bingo 101, Bingo Blitz, Bingo Royale, and many more!)

    Рейтинг звёздами: 4.8 (из appInfo.rating)

    Большая CTA кнопка: Download Bingo 101 APK (вызывает PWA-установку)

    Промокод: отсутствует

Блок 2: AppInfo

    Рейтинг: 4.8

    Размер: 3.4 MB

    Голоса: 193K

    Бонус: 100

    Отображается в виде информационных карточек

Блок 3: BonusHighlight

    Заголовок: 100 Welcome Bonus

    Подзаголовок: 250 FREE BETS

    Текст: High income through bonuses and promotions

    Данные из brand-text.json → bonuses

Блок 4: Registration Steps

    Заголовок: How to Register on Bingo 101?

    Список шагов (5 пунктов):

        Visit official website

        Choose registration method

        Fill personal details

        Confirm via SMS/email

        Complete verification

    Важное примечание: ссылка на официальный сайт

Блок 5: Advantages

    Заголовок: What advantages of Bingo 101?

    Список преимуществ (6 пунктов):

        Competitive odds

        Wide betting line

        24/7 support

        Variety of payment systems

        Mobile apps

        Bonus program

Блок 6: License & Security

    Текст: информация о лицензии Curacao

    Список мер безопасности (4 пункта)

    Важное примечание: проверять на официальном сайте

Блок 7: Financial Operations

    Способы депозита (6 пунктов)

    Информация о выводе: Instant Withdrawal

    Примечание: проверять актуальные условия

Блок 8: Bonuses

    Заголовок: How many bonuses you will receive?

    Список бонусов (5 пунктов)

    Примечание: условия могут меняться

Блок 9: Sports Line

    Дисциплины (8 пунктов: Cricket, Football, Hockey, Basketball, Tennis, MMA, Esports, Motorsports)

    Типы ставок (5 пунктов)

Блок 10: What is a Mirror?

    Текст про зеркала

    Примечание: мы не предоставляем ссылки

Блок 11: Mobile Solutions

    Список мобильных решений (3 пункта)

    Примечание: Game Download для Android и iOS

Блок 12: Support Service

    Каналы поддержки (5 пунктов)

    Примечание: 24/7, многоязычность

Блок 13: Disclaimer

    Что портал НЕ является

    Что мы предоставляем

    Ответственная игра

    Полный дисклеймер

    Что мы НЕ делаем

    Копирайт

    Английская версия

2. Политика конфиденциальности — src/pages/privacy-policy.astro

Стандартная страница с информацией о сборе данных, файлах cookie, защите информации.
Данные из brand-text.json (если есть) или статический текст.
3. Условия использования — src/pages/terms.astro

Стандартная страница с условиями использования сайта.
Данные из brand-text.json (если есть) или статический текст.
4. Ответственная игра — src/pages/responsible-gambling.astro

Страница с информацией о безопасной игре, ограничениях по возрасту (18+), помощи при зависимости.
3. Компоненты

Все компоненты лежат в src/components/:
Компонент	Назначение
BrandBox.astro	Блок с бонусами и 5 кнопками Download
DownloadButton.astro	Кнопка с PWA-логикой (вызывает handleDownloadClick)
Bonuses.astro	Отображение бонусов (Welcome, Free Bets, подзаголовок)
AppInfo.astro	Карточки с рейтингом, размером, голосами, бонусом
Logo.astro	Логотип бренда
BrandTitle.astro	Название бренда H1
Header.astro	Шапка сайта с ссылкой на вход/регистрацию

Особенности компонентов:

    Принимают данные через пропсы (не импортируют конфиг напрямую)

    Стили — scoped внутри компонента

    Используют CSS-переменные из global.css

4. Layout
BaseLayout.astro — основной лейаут

    Мета-теги (title, description, robots, canonical)

    PWA: manifest.json, theme-color, apple-touch-icon

    Стили: global.css

    Скрипты: app.js (динамический)

    Service Worker: регистрация sw.js

    Open Graph: og:title, og:description, og:image, og:type, og:url

    Schema.org: Organization, LocalBusiness, Casino, Article, Event, SportEvent

    Контейнер для контента: <slot />

5. Конфиги
src/config/site.config.ts — общий конфиг
ts

export const SITE = {
  url: 'https://bingo101-games.com',
  name: 'bingo101-games.com',
  shortName: 'Bingo101',
  description: 'Gambling and Betting information portal',
  themeColor: '#44b357',
  backgroundColor: '#ffffff',
  display: 'standalone',
};

export const PAGES = [
  { slug: '', priority: 1.0, changefreq: 'daily' },
  { slug: 'privacy-policy', priority: 0.5, changefreq: 'monthly' },
  { slug: 'terms', priority: 0.5, changefreq: 'monthly' },
  { slug: 'responsible-gambling', priority: 0.5, changefreq: 'monthly' },
];

export const PWA = {
  icons: [
    { src: '/icons/icon-512.webp', sizes: '512x512', type: 'image/webp', purpose: 'any' },
    { src: '/icons/icon-192.webp', sizes: '192x192', type: 'image/webp', purpose: 'any' },
  ],
  cache: {
    urls: [
      '/',
      '/manifest.json',
      '/styles/global.css',
      '/app.js',
      '/images/logo.webp',
      '/images/gr4.webp',
      '/icons/icon-512.webp',
      '/icons/icon-192.webp'
    ],
    version: 'v1',
  },
};

src/config/brand.js — конфиг бренда
js

export const brand = {
  name: "Bingo 101",
  slug: "bingo101",
  logo: "/images/logo.webp",
  favicon: "/favicon.ico",
  // ...
};

src/content/brand-text.json — весь контент

Содержит:

    hero (title, text[])

    sections (registration, advantages, license, payments, bonuses, sports, mobile, support)

    disclaimer (portal, provide, responsibleGambling, fullDisclaimer, doNot, copyright, en)

    footer (year, text, links, bottomText)

    buttons (download, downloadFull)

    bonuses (welcome, freeBets, subtitle)

    appInfo (rating, size, votes, bonus)

    affiliate (link, target)

    seo (title, description, canonical, ogImage)

    pwa (themeColor)

6. Динамические файлы (полная автоматизация)

Все системные файлы генерируются из конфига:
Файл	Откуда берёт	Назначение
src/pages/robots.txt.ts	SITE.url	Указывает поисковикам, что можно индексировать
src/pages/sitemap.xml.ts	PAGES	Карта сайта для поисковиков
src/pages/llms.txt.ts	SITE.name + PAGES	Для ИИ-моделей (шпаргалка по сайту)
src/pages/manifest.json.ts	SITE + PWA.icons	PWA-манифест
src/pages/sw.js.ts	PWA.cache	Service Worker (кеширование, офлайн)
src/pages/app.js.ts	monobrand.config.ts	PWA-логика, установка, кнопки
7. PWA-модуль

    Иконки: 192×192 и 512×512 (квадратные, .webp, с отступами)

    Офлайн-режим через Service Worker

    Кеширование: HTML, CSS, JS, изображения

    Установка на рабочий стол через beforeinstallprompt

    Логика установки в app.js:

        Если PWA можно установить → диалог

        Если нет → редирект на партнёрскую ссылку

    Обработка appinstalled → редирект на аффилиат

8. Структура проекта (твой сайт)
text

src/
  config/
    site.config.ts          ← общие настройки (SITE, PAGES, PWA)
    brand.js                ← данные бренда
  content/
    brand-text.json         ← ВЕСЬ контент (hero, секции, футер, дисклеймер)
  components/
    BrandBox.astro
    DownloadButton.astro
    Bonuses.astro
    AppInfo.astro
    Logo.astro
    BrandTitle.astro
    Header.astro
  layouts/
    BaseLayout.astro        ← основной лейаут (SEO, PWA, скрипты, Schema.org)
  pages/
    index.astro             ← главная (все блоки)
    privacy-policy.astro
    terms.astro
    responsible-gambling.astro
    robots.txt.ts           ← динамический
    sitemap.xml.ts          ← динамический
    llms.txt.ts             ← динамический
    manifest.json.ts        ← динамический
    sw.js.ts                ← динамический
    app.js.ts               ← динамический
  styles/
    global.css              ← все стили (CSS-переменные, утилиты, компоненты)

public/
  icons/
    icon-192.webp
    icon-512.webp
  images/
    logo.webp
    gr4.webp
  styles/
    global.css              ← (дублируется для статики)
  favicon.ico
  manifest.json             ← (запасной, если динамика не работает)
  sw.js                     ← (запасной)
  app.js                    ← (запасной)
  robots.txt                ← (запасной)
  sitemap.xml               ← (запасной)
  llms.txt                  ← (запасной)

9. Порядок создания (для твоего проекта)

    ✅ site.config.ts — готов

    ✅ brand.js — готов

    ✅ brand-text.json — готов

    ✅ BaseLayout.astro — готов

    ✅ global.css — готов

    ✅ Компоненты — готовы (BrandBox, DownloadButton, Bonuses, AppInfo, Logo, BrandTitle, Header)

    ✅ Страницы — готовы (index, privacy-policy, terms, responsible-gambling)

    ✅ Динамические файлы — готовы (robots, sitemap, llms, manifest, sw, app)

    ✅ PWA — готова и работает

10. Критерий готовности (твой сайт)

    ✅ npm run build без ошибок

    ✅ PWA устанавливается на телефон

    ✅ Иконка отображается правильно (квадратная, с отступами)

    ✅ 6 кнопок Download (1 видимая, 5 в BrandBox)

    ✅ Все секции на главной отображаются

    ✅ Страницы политики, условий, ответственной игры — открываются

    ✅ robots.txt, sitemap.xml, llms.txt — генерируются динамически

    ✅ manifest.json, sw.js, app.js — динамические

    ✅ Cloudflare Pages — деплоится автоматически из GitHub

📌 Итог

Твой сайт — это готовый монобрендовый шаблон, который можно:

    Использовать как есть (Bingo 101)

    Копировать под новый бренд (заменить brand.js, brand-text.json, иконки, цвета)

    Расширять новыми страницами и блоками

Всё динамическое, всё работает. 🚀

Если хочешь, могу:

    Дописать недостающие блоки (например, FAQ-аккордеон)

    Добавить динамический SEOHead.astro

    Адаптировать под новый бренд за 5 минут

Просто скажи. 🫡
This response is AI-generated, for reference only.


























