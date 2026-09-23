export interface SiteContact {
  whatsapp?: string;
  phone?: string;
  email?: string;
}

export interface SiteSocials {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  [key: string]: string | undefined;
}

/**
 * Single authoritative production URL.
 * Same source as astro.config.mjs (`SITE_URL`), normalized identically
 * (trimmed, no trailing slash). Fails fast instead of silently falling
 * back to a placeholder domain.
 */
function resolveSiteUrl(): string {
  const raw = (import.meta.env.SITE_URL || '').trim().replace(/\/+$/, '');
  if (!raw) {
    throw new Error(
      '[config] SITE_URL is required. Copy .env.example to .env and set SITE_URL (e.g. SITE_URL=https://domain-produksi.id).'
    );
  }
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') throw new Error();
  } catch {
    throw new Error(`[config] SITE_URL must be an absolute http(s) URL, got: ${JSON.stringify(raw)}.`);
  }
  return raw;
}

export interface SiteConfig {
  url: string;
  name: string;
  tagline: string;
  description: string;
  locale: string;
  ogDefault: string;
  /** Wilayah kerja yang benar-benar dilayani; kosong = belum dikonfirmasi. */
  serviceAreas: string[];
  contact: SiteContact;
  socials: SiteSocials;
}

/**
 * ===== SHOWCASE — isi showcase portfolio, ganti dengan data nyata saat tayang =====
 * Nilai di bawah adalah contoh terisi agar layout terlihat penuh tanpa
 * embel-embel "menunggu klien". Saat data klien tiba, ganti nama, deskripsi,
 * WhatsApp, Instagram, dan area layanan dengan materi asli.
 */
export const PLACEHOLDER_IDENTITY = false;

export const siteConfig: SiteConfig = {
  url: resolveSiteUrl(),
  name: 'Ruang Reka',
  tagline: 'Pernikahan yang berjalan tenang',
  description:
    'Wedding organizer Jakarta · Bali · Bandung. Merencanakan, mengoordinasi, dan menjaga hari-H tetap tenang — dari obrolan pertama sampai foto terakhir.',
  locale: 'id-ID',
  ogDefault: '/og/default.png',
  serviceAreas: ['Jakarta', 'Bali', 'Bandung'],
  contact: {
    whatsapp: '6281234567890',
    email: 'halo@ruangreka.id',
  },
  socials: {
    instagram: 'ruangreka.wo',
  },
};
