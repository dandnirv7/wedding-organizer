import { existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { createRequire } from 'node:module';
import { OGImageRoute } from 'astro-og-canvas';
import { siteConfig } from '../../config/site';
import { ogSlugFromPath } from '../../lib/og';
import { page as pageCopy } from '../../pages/_wedding/content';

const FONT_FILES = ['Inter_400Regular.ttf', 'Inter_700Bold.ttf'];

/**
 * canvaskit hanya membaca TTF. Paket font bisa tertaut langsung di
 * node_modules atau hanya ada di store virtual pnpm; struktur versi baru
 * (@expo-google-fonts/inter@0.4.x+) meletakkan TTF di dalam subfolder
 * (mis. 400Regular/Inter_400Regular.ttf).
 */
function resolveFont(name: string): string {
  const variant = name.replace(/^Inter_/, '').replace(/\.ttf$/, '');

  // 1. Module resolution via require.resolve (paling andal di Vercel/CI/pnpm)
  try {
    const req = createRequire(import.meta.url);
    const pkgDir = dirname(req.resolve('@expo-google-fonts/inter/package.json'));

    const subfolderCandidate = join(pkgDir, variant, name);
    if (existsSync(subfolderCandidate)) return subfolderCandidate;

    const directCandidate = join(pkgDir, name);
    if (existsSync(directCandidate)) return directCandidate;

    for (const entry of readdirSync(pkgDir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const nested = join(pkgDir, entry.name, name);
        if (existsSync(nested)) return nested;
      }
    }
  } catch {}

  // 2. Direct relative path fallback
  const directSub = join('node_modules', '@expo-google-fonts', 'inter', variant, name);
  if (existsSync(directSub)) return directSub;
  const direct = join('node_modules', '@expo-google-fonts', 'inter', name);
  if (existsSync(direct)) return direct;

  // 3. pnpm virtual store fallback
  const store = join('node_modules', '.pnpm');
  if (existsSync(store)) {
    for (const dir of readdirSync(store)) {
      if (!dir.includes('@expo-google-fonts+inter')) continue;
      const subCandidate = join(store, dir, 'node_modules', '@expo-google-fonts', 'inter', variant, name);
      if (existsSync(subCandidate)) return subCandidate;
      const rootCandidate = join(store, dir, 'node_modules', '@expo-google-fonts', 'inter', name);
      if (existsSync(rootCandidate)) return rootCandidate;
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
