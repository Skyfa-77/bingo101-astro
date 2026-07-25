// src/config/site.config.ts

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
    { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
    { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
  ],
  cache: {
    urls: ['/', '/offline', '/styles/global.css', '/app.js'],
    version: 'v1',
  },
};