// src/templates/monobrand.config.ts

import siteConfig from "../../site.config";

const monobrandConfig = {
  // Наследует базу
  ...siteConfig,

  // ===== БРЕНД =====
  brand: {
    name: "Bingo 101",
    slug: "bingo101",
    logo: "/images/logo.webp",
  },

  // ===== АФФИЛИАТ =====
  affiliate: {
    mainUrl: "https://1woala.life/casino/list?open=register&p=912z",
    promoCode: null,
    ctaText: "Download Bingo 101 APK",
    appStoreUrl: null,
    googlePlayUrl: null,
  },

  // ===== РЕЙТИНГ =====
  rating: {
    overall: 4.8,
    votes: "193K",
    size: "3.4 MB",
    bonus: "100",
  },

  // ===== ТЕМА =====
  theme: {
    primaryColor: "#44b357",
    accentColor: "#2d8b3e",
    fontBody: "Inter",
    fontHeading: "Inter",
  },

  // ===== SEO =====
  seo: {
    title: "Bingo 101 — Game Download and Get up to ₹100 Welcome Bonus",
    description: "Bingo 101 Welcomes you! Play Slots, Rummy, Teen Patti, Aviator, JetX and many more. Start winning money, earn rewards, and instant withdraw cash today!",
    canonical: "https://bingo101-games.com",
    ogImage: "/images/gr4.webp",
  },
};

export default monobrandConfig;
export type MonobrandConfig = typeof monobrandConfig;
