import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { OGImageRoute } from 'astro-og-canvas';
import { siteConfig } from '../../config/site';
import { ogSlugFromPath } from '../../lib/og';
import { copy } from '../../pages/_wedding/copy';

const FONT_FILES = ['Inter_400Regular.ttf', 'Inter_700Bold.ttf'];

/**
 * canvaskit hanya membaca TTF. Paket font bisa tertaut langsung di
 * node_modules atau hanya ada di store virtual pnpm; keduanya valid di mesin
 * berbeda, jadi carinya dua jalur lalu gagal keras daripada merender kartu kosong.
 */
function resolveFont(name: string): string {
  const direct = join('node_modules', '@expo-google-fonts', 'inter', name);
  if (existsSync(direct)) return direct;
  const store = join('node_modules', '.pnpm');
  if (existsSync(store)) {
    for (const dir of readdirSync(store)) {
      if (!dir.includes('@expo-google-fonts+inter')) continue;
      const candidate = join(store, dir, 'node_modules', '@expo-google-fonts', 'inter', name);
      if (existsSync(candidate)) return candidate;
    }
  }
  throw new Error(
    `[og] ${name} tidak ditemukan. Pasang @expo-google-fonts/inter atau taruh TTF-nya di node_modules/@expo-google-fonts/inter/.`
  );
}

/**
 * OG 1200×630 dalam dunia Selects Table: bidang meja gelap, garis seleksi
 * merah di tepi bawah, tipografi serif yang sama dengan halaman. Satu rute
 * publik (`/`) plus `default` untuk tautan tanpa halaman sendiri.
 */
const PAPER: [number, number, number] = [242, 241, 236];
const TABLE: [number, number, number] = [23, 24, 26];
const MUTED: [number, number, number] = [160, 156, 148];
const SELECT: [number, number, number] = [201, 48, 43];

const pages: Record<string, { title: string; description: string }> = {
  default: { title: siteConfig.name, description: copy.sheet.description },
  [ogSlugFromPath('/')]: { title: copy.sheet.title, description: copy.sheet.description },
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getSlug: (path) => path.replace(/\.png$/, ''),
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgColor: TABLE,
    border: { color: SELECT, width: 18, side: 'block-end' },
    padding: 88,
    font: {
      title: {
        size: 64,
        weight: 'Bold',
        color: PAPER,
        families: ['Inter'],
      },
      description: {
        size: 27,
        lineHeight: 1.45,
        color: MUTED,
        families: ['Inter'],
      },
    },
    // OG card dirender dengan TTF yang tersedia di node_modules (canvaskit tidak
    // membaca woff2). Interface web tetap Source Serif 4; lihat docs/ASSET-MANIFEST.md.
    // Inter OFL (SIL Open Font License). Font proprietary tidak dikomit ke repo.
    fonts: FONT_FILES.map(resolveFont),
  }),
});
