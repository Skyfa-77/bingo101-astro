// src/pages/llms.txt.ts
import type { APIRoute } from 'astro';
import { SITE, PAGES } from '../config/site.config';

export const GET: APIRoute = () => {
  const llmsTxt = `# ${SITE.name}
> ${SITE.description}

## Quick Links
- [Home](${SITE.url}/)
${PAGES.filter(p => p.slug !== '').map(p => `- [${p.slug.replace('-', ' ').toUpperCase()}](${SITE.url}/${p.slug})`).join('\n')}

## About
This is an independent information portal about ${SITE.name}. We provide reviews, guides, and updates on gambling and betting.
`;

  return new Response(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};