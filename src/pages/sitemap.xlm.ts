// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';
import { SITE, PAGES } from '../config/site.config';

const today = new Date().toISOString().split('T')[0];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${PAGES.map(page => `
    <url>
      <loc>${SITE.url}/${page.slug}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};