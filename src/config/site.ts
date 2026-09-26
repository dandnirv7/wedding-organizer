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
  wedding: WeddingConfig;
}

/**
 * Pilihan klien untuk docs/PRD.md FR-08. Keduanya sudah dibangun, jadi
 * keputusan klien cukup mengubah satu nilai tanpa desain ulang.
 * - `consultation`: tanpa angka, CTA minta penawaran.
 * - `public`: nama paket, cocok untuk, layanan, "Mulai dari Rp…".
 * Default `consultation`: strategi harga klien belum diputuskan, jadi tidak
 * ada angka yang tampil sampai angkanya benar.
 */
export interface WeddingConfig {
  packagesMode: 'consultation' | 'public';
}

/**
 * ===== DATA BELUM DITERIMA — GANTI SEMUA NILAI DI BAWAH INI =====
 * Nilai identitas di bawah adalah placeholder yang diberi label, bukan fakta
 * klien. Jangan dipublikasikan apa adanya: nama, tagline, deskripsi, nomor
 * WhatsApp, Instagram, dan area layanan harus diisi dari materi klien.
 * Nomor WA kosong = seluruh CTA tidak dirender (bukan tautan mati).
 */
export const PLACEHOLDER_IDENTITY = true;

export const siteConfig: SiteConfig = {
  url: resolveSiteUrl(),
  name: 'Nama Wedding Organizer',
  tagline: 'Tagline resmi menunggu materi klien',
  description:
    'Deskripsi perusahaan akan diisi setelah materi brand klien diterima. Teks ini adalah placeholder berlabel, bukan fakta usaha.',
  locale: 'id-ID',
  ogDefault: '/og/default.png',
  serviceAreas: [],
  // Kosong dengan sengaja: tanpa data, tanpa klaim.
  contact: {
    whatsapp: '',
  },
  socials: {
    instagram: '',
  },
  wedding: {
    // Strategi harga klien belum diputuskan → tidak ada angka yang tampil.
    // Ubah ke 'public' setelah tarif resmi diterima.
    packagesMode: 'consultation',
  },
};
