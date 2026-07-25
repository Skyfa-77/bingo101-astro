import type { APIRoute } from 'astro';
import { SITE, PWA } from '../config/site.config';

export const GET: APIRoute = () => {
  const manifest = {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: '/',
    display: SITE.display,
    background_color: SITE.backgroundColor,
    theme_color: SITE.themeColor,
    icons: PWA.icons,
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};