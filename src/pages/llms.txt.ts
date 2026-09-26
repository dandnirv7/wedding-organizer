import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { normalizePhoneNumber } from '../capabilities/lead/lib/whatsapp';
import { page } from '../pages/_wedding/content';

/**
 * llms.txt untuk satu rute. Direktif AI bersifat advisory; tidak ada jaminan
 * sitasi atau indexing yang diklaim di sini.
 */
export const GET: APIRoute = () => {
  const base = siteConfig.url.replace(/\/+$/, '');
  const waNumber = normalizePhoneNumber(siteConfig.contact.whatsapp ?? '');
  const contact = waNumber ? `\n\n## Kontak\n\n- WhatsApp: https://wa.me/${waNumber}` : '';
  const sections = page.nav.map((n) => `- [${n.label}](${base}/${n.href.slice(1)})`).join('\n');

  const body = `# ${siteConfig.name}

> ${page.meta.description}

## Bagian halaman

${sections}

- [Seluruh halaman](${base}/): satu rute statis, tanpa halaman tambahan.${contact}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
