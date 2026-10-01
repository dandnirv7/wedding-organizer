// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import robotsTxt from 'astro-robots-txt';
import compressor from 'astro-compressor';
import fs from 'node:fs';

import icon from 'astro-icon';

function loadDotEnv() {
  try {
    const raw = fs.readFileSync('.env', 'utf8');
    for (const line of raw.split('\n')) {
      const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
    }
  } catch {}
}
loadDotEnv();
const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '') ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
  ''
).trim().replace(/\/+$/, '');

if (!siteUrl) {
  throw new Error(
    '[config] SITE_URL is required. Copy .env.example to .env and set SITE_URL (e.g. SITE_URL=https://domain-produksi.id).'
  );
}

try {
  const parsed = new URL(siteUrl);
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') throw new Error();
} catch {
  throw new Error(
    `[config] SITE_URL must be an absolute http(s) URL, got: ${JSON.stringify(process.env.SITE_URL)}.`
  );
}

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  prefetch: true,

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        avif: { effort: 5, quality: 72 },
        webp: { effort: 6, quality: 80 },
        jpeg: { mozjpeg: true, quality: 80 },
        png: { compressionLevel: 9, effort: 7 },
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap({
    filter: (page) =>
      !page.includes('/404') && !page.includes('/drafts') && !page.includes('/api'),
  }), robotsTxt({
    policy: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/drafts', '/404'],
      },
    ],
    transform(content) {
      // AI crawler notes are advisory preferences, not enforcement:
      // robots.txt cannot compel compliance; real control needs edge/WAF.
      // AI retrieval for search/discovery stays allowed via User-agent: *.
      return `${content}
# Note: AI crawler directives below are advisory only (not enforceable via robots.txt).
# AI retrieval for search/discovery remains allowed; no crawler is blocked here.
`;
    },
  }), // Compressor must be last in integrations list
  compressor(), icon()],

  adapter: vercel(),
});

// ---------------------------------------------------------------------------
// Rendering profiles (IMPLEMENTATION-PLAN.md §5).
// Default: static output (no `output` field) — every page prerendered, no
// server functions, no ISR. Keep it that way for Starter/Content/static Catalog.
//
// Server (opt-in, per project): set `output: 'server'` above and mark only
// routes needing request-time data with `export const prerender = false`.
// ISR (opt-in): server output + per-route `export const prerender = false`
// with Vercel `isr: { expiration }` route config; never enable globally,
// exclude preview/auth/API paths, and document stale-cache behavior.
// ---------------------------------------------------------------------------