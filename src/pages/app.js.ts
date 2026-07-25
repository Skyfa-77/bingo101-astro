import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const appCode = `
    // PWA install prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      console.log('PWA install prompt available');
    });

    // Service Worker registration
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered:', registration);
          })
          .catch(error => {
            console.log('SW registration failed:', error);
          });
      });
    }

    console.log('Bingo101 app loaded');
  `;

  return new Response(appCode, {
    headers: { 'Content-Type': 'application/javascript' },
  });
};