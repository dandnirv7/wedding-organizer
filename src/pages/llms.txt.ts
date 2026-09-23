import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { copy } from './_wedding/runsheet-copy';

/**
 * llms.txt untuk satu rute. Direktif AI bersifat advisory; tidak ada jaminan
 * sitasi atau indexing yang diklaim di sini.
 */
export const GET: APIRoute = () => {
  const base = siteConfig.url.replace(/\/+$/, '');
  const contact = siteConfig.contact.whatsapp
    ? `\n\n## Kontak\n\n- WhatsApp: https://wa.me/${siteConfig.contact.whatsapp}`
    : '';
  const sections = copy.sheet.nav.map((n) => `- [${n.label}](${base}/${n.href.slice(1)})`).join('\n');

  const body = `# ${siteConfig.name}

> ${copy.sheet.description}

## Bagian lembar

${sections}

- [Seluruh halaman](${base}/): satu rute statis, tanpa halaman tambahan.${contact}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
