// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';
import { SITE } from '../config/site.config';

export const GET: APIRoute = () => {
  const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${SITE.url}/sitemap.xml
Allow: /llms.txt
  `.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};