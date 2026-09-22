# Wedding Organizer — Editorial Landing Page

One-page, satu URL, yang menampilkan dokumentasi wedding asli sebagai contact sheet fotografer, lalu menutupnya dengan CTA WhatsApp yang tinggal kirim.

Base-nya: boilerplate Astro untuk multipage public site (static-first, technical SEO, LEAD capability yang terisolasi). Checkout ini di branch `main` dipakai sebagai **proyek wedding organizer one-page** — pengecualian yang disengaja, bukan default boilerplate.

Source of truth (urutan prioritas kalau ada konflik): `docs/PRD.md` → `docs/DESIGN.md` → `docs/TECH-SPEC.md` → `PRODUCT.md`. Aturan agen: `AGENTS.md` (termasuk Project Overlay wedding di bagian bawah).

> Asset status: **belum ada aset klien** — nama, logo, foto, video, testimoni, kontak masih kosong. Slot kosong dirender sebagai `FramePlate` berlabel "menunggu aset klien" dengan final layout anti-CLS. Tanpa foto stok/AI/generated, tanpa pasangan/harga/rating fiktif.

## Page structure `/`

Hero (dark `Light Table` surface) → Brand Statement → Featured Wedding `#work` → Services `#services` → Process → Cinematic Video Break → Visual Story → Testimonials → About/Trust `#about` → Final CTA → Footer. Tidak ada `/portfolio`, `/services`, `/about`, `/blog`, `/contact` di initial version. Production copy full Bahasa Indonesia, locale `id-ID`.

## Setup

1. Copy `.env.example` → `.env`, isi `SITE_URL=https://domain-produksi.id` (required; build fail fast kalau absen; selalu pakai production domain supaya canonical/sitemap/OG/JSON-LD satu identitas).
2. `pnpm install`
3. `pnpm dev` → `localhost:4321`
4. Saat data klien tiba: isi `src/config/site.ts` (nama, deskripsi, kontak WhatsApp, socials — biarkan kosong yang belum ada, jangan ngarang) + section data di `src/pages/_wedding/` + swap isi `FramePlate` tanpa mengubah layout.

## Commands

| Command | Fungsi |
| :-- | :-- |
| `pnpm dev` | Dev server |
| `pnpm build` | Static build ke `./dist/` (full prerender, tanpa server/ISR/SSR) |
| `pnpm preview` | Preview hasil build |
| `pnpm check` | Typecheck `astro check`, 0 errors |
| `pnpm assert:dist` | Output gate (lolos = boleh merge) |
| `pnpm diagnost` | Heuristic non-blocking, informatif |

Release gate: `pnpm check` + `pnpm build` + `pnpm assert:dist` hijau; `pnpm diagnost` informatif.

## Pre-handoff checklist

- View-source `/` dan `/404`: absolute canonical, absolute OG image 1200×630, tepat 1× JSON-LD `@graph` (`/`: `WebSite`+`WebPage`; `Organization` hanya bila kontak/sosial real tersedia; `/404`: tanpa JSON-LD, `noindex`).
- Tepat 1 H1; setiap claim di JSON-LD harus visible di HTML; semua proof image ada `alt` + dimensions; video `muted`/`loop`/`playsinline` + poster + static fallback.
- Semua WhatsApp CTA dari `siteConfig.contact.whatsapp` (normalisasi `08…`→`62…`, encoded message); tanpa nomor → CTA tidak dirender. Event `lead_whatsapp_click` via `track()` + CTA location, tanpa sensitive data.
- Diuji di desktop/tablet/mobile; keyboard navigable + visible focus; `prefers-reduced-motion` dihormati; sticky mobile CTA tidak menutupi konten dan respect safe-area.

## Constraints

Bukan online store, bukan CMS, tanpa search engine (hanya build-time grouping), tanpa i18n, tanpa auth, tanpa backend/database/API/WhatsApp API. Tanpa photo/video production, logo design, atau copywriting campaign. Budget: target ≤ Rp1.000.000, hard cap Rp1.500.000; revisi 2 design rounds + 2 minor dev rounds, sisanya change request. Tidak ada garansi indexing, ranking, traffic, AI citation, atau konversi — yang diverifikasi hanya technical feasibility lokal.
