import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { OGImageRoute } from 'astro-og-canvas';
import { siteConfig } from '../../config/site';
import { ogSlugFromPath } from '../../lib/og';
import { page as pageCopy } from '../../pages/_wedding/content';

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
 * OG 1200×630 dalam dunia editorial docs/DESIGN.md: bidang charcoal, judul
 * ivory, garis champagne di tepi bawah. Satu rute publik (`/`) plus `default`
 * untuk tautan tanpa halaman sendiri.
 */
const IVORY: [number, number, number] = [247, 243, 238];
const CHARCOAL: [number, number, number] = [30, 29, 27];
const MUTED: [number, number, number] = [207, 198, 186];
const CHAMPAGNE: [number, number, number] = [182, 155, 114];

const pages: Record<string, { title: string; description: string }> = {
  default: { title: siteConfig.name, description: pageCopy.meta.description },
  [ogSlugFromPath('/')]: { title: pageCopy.meta.title, description: pageCopy.meta.description },
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getSlug: (path) => path.replace(/\.png$/, ''),
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgColor: CHARCOAL,
    border: { color: CHAMPAGNE, width: 14, side: 'block-end' },
    padding: 88,
    font: {
      title: {
        size: 64,
        weight: 'Bold',
        color: IVORY,
        families: ['Inter'],
      },
      description: {
        size: 27,
        lineHeight: 1.45,
        color: MUTED,
        families: ['Inter'],
      },
    },
    // Kartu OG dirender dari TTF yang ada di node_modules (canvaskit tidak
    // membaca woff2), jadi Inter dipakai di sini sementara halaman memakai
    // Cormorant Garamond + Manrope. Inter berlisensi OFL (SIL Open Font
    // License); tidak ada font proprietary yang dikomit ke repo.
    fonts: FONT_FILES.map(resolveFont),
  }),
});
