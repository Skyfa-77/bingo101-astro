// src/templates/monobrand.config.ts

import siteConfig from "../../site.config";
  
const monobrandConfig = {
  ...siteConfig,   
  
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
    ...siteConfig.seo,
    titleTemplate: "%s | Casino Name",
    defaultDescription: {
      en: "...",
      de: "...",
    },
  },

  // ===== БРЕНД =====
  brand: {
    name: "Bingo 101",
    slug: "bingo101",
    logo: "/images/logo.webp",
  },
};

export default monobrandConfig;
export type MonobrandConfig = typeof monobrandConfig;
