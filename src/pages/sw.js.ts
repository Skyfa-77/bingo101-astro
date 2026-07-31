import type { APIRoute } from 'astro';
import { PWA } from '../config/site.config';

export const GET: APIRoute = () => {
  const cacheName = `bingo101-${PWA.cache.version}`;
  const urlsToCache = PWA.cache.urls;   // ← убрал SITE.url

  const swCode = `
    const CACHE_NAME = '${cacheName}';
    const urlsToCache = ${JSON.stringify(urlsToCache)};

    self.addEventListener('install', event => {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(cache => cache.addAll(urlsToCache))
      );
    });

    self.addEventListener('fetch', event => {
      event.respondWith(
        caches.match(event.request)
          .then(response => response || fetch(event.request))
      );
    });

    self.addEventListener('activate', event => {
      event.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              if (cacheName !== CACHE_NAME) {
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
    });
  `;

  return new Response(swCode, {
    headers: { 'Content-Type': 'application/javascript' },
  });
};