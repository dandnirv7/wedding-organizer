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
  const raw = (
    import.meta.env.SITE_URL ||
    import.meta.env.SITE ||
    (import.meta.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${import.meta.env.VERCEL_PROJECT_PRODUCTION_URL}` : '') ||
    (import.meta.env.VERCEL_URL ? `https://${import.meta.env.VERCEL_URL}` : '') ||
    ''
  ).trim().replace(/\/+$/, '');
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
  /** Signature yang dipakai di footer dan meta description. */
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
 * ===== DATA BELUM DITERIMA — GANTI SEMUA NILAI DI BAWAH INI =====
 * Nama brand MOCA sudah dikonfirmasi (identitas final). Yang belum diterima
 * dan karena itu TIDAK dikarang: nomor WhatsApp, Instagram, email, nomor
 * telepon, dan wilayah kerja. Nilai kosong berarti "belum diisi", dan setiap
 * tempat yang memakainya menampilkannya sebagai status berlabel — bukan
 * tautan mati dan bukan angka/teks karangan.
 *
 * Nomor WhatsApp kosong = CTA membuka form Inquiry di halaman, bukan wa.me.
 * Begitu nomornya diisi, semua CTA otomatis jadi tautan wa.me tanpa
 * perubahan kode lain.
 */
export const PLACEHOLDER_CONTACT = false;

export const siteConfig: SiteConfig = {
  url: resolveSiteUrl(),
  name: 'MOCA',
  tagline: 'Kami membantu mengatur detail di balik hari yang ingin kalian nikmati.',
  description:
    'MOCA adalah wedding organizer yang merencanakan dan mengoordinasikan pernikahan dari percakapan pertama hingga hari pelaksanaan — venue, detail, vendor, timeline, sampai hari-H.',
  locale: 'id-ID',
  ogDefault: '/og/default.png',
  serviceAreas: ['Bekasi', 'Cikarang', 'Jakarta'],
  contact: {
    whatsapp: '089506099845',
    email: 'info@mocaofficial.com',
  },
  socials: {
    instagram: 'https://instagram.com/mocaofficial_',
  },
};
