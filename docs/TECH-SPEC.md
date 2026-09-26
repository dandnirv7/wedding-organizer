# TECH-SPEC + SOW — Wedding Organizer Editorial Landing Page

> Pendamping `PRD.md` (what/why), `PRODUCTS.md` (definisi produk), `DESIGN.md` (visual/UX),
> `CONTENT.md` (draft copy), `WIREFRAME.md` (referensi experience). Berisi *how* teknis + batas komersial.
> Bila konflik: `PRD.md` menang untuk what/why, `PRODUCTS.md` untuk definisi produk,
> `DESIGN.md` untuk visual/UX, `CONTENT.md` untuk copy. TECH-SPEC tidak pernah menambah scope produk.
> `PRODUCT.md` di root adalah ringkasan keputusan confirmed-vs-pending dan menang paling akhir.

## 1. Stack (sesuai repo)

- Astro 7 + TypeScript + Tailwind CSS v4, adapter Vercel dengan output **statis** (prerender penuh,
  tanpa server function/ISR/SSR). `SITE_URL` wajib via env, dipakai bersama oleh `astro.config.mjs`
  dan `src/config/site.ts` untuk canonical/sitemap/OG/JSON-LD; build gagal eksplisit bila absen.
- Tidak ada backend custom, database, CMS, auth. Tidak ada React/Vue/Svelte/global state/client fetching.
- JS runtime yang diizinkan: prefetch/transisi bawaan Astro + progressive enhancement terisolasi per komponen:
  menu navigasi, FAQ accordion (prefer native `<details>`), smooth anchor scroll, reveal via
  `IntersectionObserver` dengan guard `prefers-reduced-motion`, lightbox/galeri opsional (PRD FR-05, MAY),
  hotspot craft sebagai button/`<details>` (expandable di mobile per WIREFRAME §27).
  Yang dilarang di initial: parallax berat, 3D/WebGL, scroll hijacking, loading screen panjang,
  cursor effect, client-side data fetching. P3 WIREFRAME §37 (cursor, parallax, page transition)
  default mati — hanya bila tanpa biaya perf/a11y/mobile.
- Koreksi yang tetap berlaku: versi PRD lama yang menyebut Next.js/React App Router **tidak berlaku**.
  Struktur `src/data/*.ts` + `src/app/page.tsx` adalah pola Next.js dan tidak dipakai di sini.
- Catatan font yang belum selaras (pekerjaan implementasi terpisah, bukan scope edit docs ini):
  `package.json` saat ini masih membawa font sistem lama (Source Serif 4 + Archivo Narrow + Inter),
  sedangkan `DESIGN.md` §5 menetapkan Cormorant Garamond (display) + Manrope (body). Jangan tambah
  keluarga ketiga.

## 2. Content Architecture (Astro, bukan Next.js)

- Konten statis config-driven, tanpa CMS. `src/config/site.ts` adalah sumber tunggal: name, URL, description,
  locale `id-ID`, `contact.whatsapp`, `contact.email`, `socials.instagram`, `serviceAreas`.
  Nilai kosong = belum dikonfirmasi = tidak dirender (bukan placeholder fiktif).
- `src/content/` (pages/articles/faqs via Content Collections + Zod), `src/components/`, `src/layouts/`,
  `src/lib/` (SEO/schema/OG generik), `src/capabilities/lead/` (`lib/whatsapp.ts`: normalisasi
  `08…`→`62…` + encode pesan; `lib/track.ts`: abstraksi `track()` vendor-agnostik; `components/WaButton.astro`),
  `src/assets/` + `public/` untuk media. Core tidak mengimpor LEAD; komposisi LEAD selalu di level page.
- Data per section mengikuti `CONTENT.md` §5–§16 + `PRD.md` FR-01–FR-15 + `PRODUCTS.md` §11:
  11 blok `/`: Hero → Introduction → Services → Real Weddings → Why Us → How We Work →
  Packages/Investment → Testimonials → FAQ → Final CTA → Footer.
  Arsitektur layanan potensial (`PRODUCTS.md` §11): Full Wedding Planning, Wedding Day Coordination,
  Traditional Wedding, Intimate Wedding, Custom Wedding Planning — **wajib konfirmasi klien** sebelum tayang
  (jangan mempublikasikan kategori yang tidak benar-benar ditawarkan). Update = ubah data + rebuild.
- Bila butuh listing terstruktur, pakai capability `catalog` netral (`items`/`catalog`, bukan `products`).
- Konflik IA yang dicatat (tidak diputuskan di sini): `WIREFRAME.md` §40 menolak urutan
  bisnis-generik dan mengusulkan chapter experience (Entry → Manifesto → Stories → Craft → Journey →
  Behind The Day → People → Couples → Your Story → Begin). Untuk scope initial, yang mengikat adalah
  IA `PRD.md` §7 + `CONTENT.md` §5. WIREFRAME dipakai sebagai referensi interaksi/motion/ritme,
  bukan penambah section atau rute.

## 3. Media & Performance

Risiko terbesar: image/video-heavy. Prioritas: Performance > Animation complexity. Target: first render cepat,
hero tidak memblokir konten, lazy below-fold, responsive sizing, video compressed, JS minimal, animasi tidak
blokir render.

- Image: client sediakan high-res original + varian portrait/landscape, hindari forward WhatsApp terkompresi.
  Pipeline: responsive + compress + lazy di bawah fold + format modern (WebP; AVIF opsional per project) +
  `width`/`height` + `aspect-ratio` anti-CLS + `alt` bermakna (kosong hanya untuk dekoratif) + filename deskriptif.
  Kategori foto mengikuti `PRD.md` §31: Couple, Ceremony, Reception, Decoration, Detail, Candid moments,
  Venue, Traditional elements. Portfolio adalah bukti utama (`DESIGN.md` §18): editorial grid, large feature
  image, komposisi asimetris bila tepat; bukan 3-column product grid. Foto layanan/testimoni/tim bersifat
  pendukung dan opsional.
- Video: Hero 1 (+ opsional 1 footage pendukung). 5–15 detik preferred, autoplay muted loop playsinline,
  tanpa audio otomatis, poster wajib, fallback image statis, compressed, responsive aspect ratio,
  tidak menghambat initial render, hormati `prefers-reduced-motion` (non-esensial, pesan inti tetap terbaca
  tanpa video). Mobile boleh memakai poster atau aset mobile-specific bila performa bermasalah
  (`DESIGN.md` §27). Narasi hero mengikuti `WIREFRAME.md` §34 (atmosphere → venue → couple → emotion →
  celebration → details), 3–5 detik pertama harus memuat manusia/emosi, bukan venue kosong/logo abstrak.
  Dev tidak mencakup produksi/editing video profesional, photoshoot, artwork, atau logo design.
- Catatan: `docs/ASSET-MANIFEST.md` masih berbasis sistem visual lama (Selects Table/FramePlate) dan
  **jangan dijadikan acuan rasio/jumlah slot** sampai dimutakhirkan terpisah. Tidak ada foto stok,
  AI-generated, atau generate sebagai pengganti dokumentasi nyata.

## 4. SEO, Social, A11y, Analytics

### SEO (`PRD.md` NFR-05, `DESIGN.md` §28)

- Metadata wajib: `<title>` unik, meta description unik, canonical absolut, OG + Twitter/X, robots directive tepat,
  locale `id-ID`, semantic HTML, tepat 1 H1, hierarchy H1→H2→H3 benar.
- Structured data: satu JSON-LD `@graph` per halaman. `WebSite` + `WebPage` standar;
  `Organization`/`LocalBusiness` (name, image, URL, telephone, address, areaServed) hanya bila data nyata
  tersedia. Tanpa review/rating/harga/availabilitas/statistik fiktif. Klaim di JSON-LD harus terlihat di HTML.
  Validasi via Rich Results Test + Schema Validator.
- `llms.txt` kurasi manual + OG PNG 1200×630 mengikuti brand; sitemap/robots bawaan boilerplate.
  Saat URL dibagikan via WhatsApp/sosmed, preview menampilkan brand title + description + wedding image
  berkualitas.

### Accessibility (minimum, `PRD.md` NFR-03 + `DESIGN.md` §28)

Semantic HTML, kontras cukup (jangan taruh teks penting di atas imagery kompleks tanpa treatment),
keyboard navigable + focus visible, alt bermakna, button punya accessible name, label pada semua kontrol/form,
body minimal 16px, touch target minimal 44×44px, video tanpa audio autoplay dan non-esensial (fallback tersedia),
dukung `prefers-reduced-motion` (matikan parallax/gerakan agresif, konten tetap aksesibel penuh),
CTA sticky mobile tidak menutupi konten dan menghormati safe-area.

### Analytics (opsional, vendor-agnostik)

Track via abstraksi `track()`, bukan `gtag` langsung. Taksonomi mengikuti `PRD.md` NFR-06:
`page_view`, `hero_cta_click`, `portfolio_click`, `service_interaction`, `whatsapp_click` (konversi primer,
dengan param `location: hero|services|final_cta|sticky_mobile`), `inquiry_form_start`, `inquiry_form_submit`,
`email_click`, `instagram_click`. Tanpa data sensitif. Vendor (GA4/Pixel) dipasang di project, bukan di core.

## 5. URL Strategy

Primary: `/`. Eksternal: Instagram, WhatsApp. Tidak perlu `/portfolio`, `/services`, `/about`, `/blog`,
`/contact` untuk initial.
Galeri/lightbox/project-detail bersifat MAY/opsional (`PRD.md` FR-05; `WIREFRAME.md` §9 story-detail concept)
dan masuk future scope (`PRD.md` §39) — bila diminta, perlakukan sebagai change request, bukan bagian initial.

## 6. Scope Control & Komersial

Budget: target ≤ Rp1.000.000, plafon keras ≤ Rp1.500.000. Jaga via: one-page, static content (tanpa CMS),
direct WhatsApp (tanpa API), interaksi terbatas (micro 150–250ms, standard 300–500ms, image reveal 600–900ms,
hero/editorial 800–1200ms per `DESIGN.md` §24; motion Slow-Elegant-Intentional-Subtle-Cinematic, larang bounce/
elastic/fast-zoom/parallax berlebih/floating kontinu per `DESIGN.md` §24 + `WIREFRAME.md` §35),
aset dari client (copy, image, video, testimonial, logo, kontak), tanpa custom content production
(photoshoot, videography, copywriting campaign, artwork, logo design).

Revisi komersial: Design 2 rounds + Development 2 minor rounds (typography, spacing, image replacement,
copy correction, CTA text, small layout). Tetap dalam approved scope. Di luar itu
("sekalian jadi 5 halaman", filtering portfolio, kalkulator paket, booking/kalender, lead management,
login/dashboard, vendor directory, blog/journal) = change request (`PRD.md` §39).

Out of scope initial: CMS/admin, login/account, booking/calendar/availability real-time, chat/API WhatsApp,
backend/database/payment/cart/order, multi-language CMS, UGC reviews, filtering lanjutan, 3D/WebGL/virtual tour,
serta seluruh klaim/diferensiator yang belum divalidasi klien (`PRODUCTS.md` §9 bersifat hipotesis).

## 7. Deliverables

Client sediakan: Brand name, Logo, Tagline/positioning, Brand description, Service list + descriptions,
Wedding types, Geographic coverage, Portfolio photos + metadata (couple, concept, venue, location, type),
Videos (hero final + mobile-specific bila ada), Testimonials (asli + atribusi + izin), Experience,
Wedding count, Team info, Vendor/partner info, Packages + Pricing model (atau keputusan Mode A vs Mode B
per `DESIGN.md` §22), Booking requirements, Consultation process, WhatsApp number, Email, Instagram,
Address/service area, Operating hours, Legal/copyright, SEO keywords bila ada, brand guideline bila ada.
Seluruh butir di atas mengikuti `PRD.md` §36 Data Requirements + `CONTENT.md` §20 checklist —
yang belum diterima = tidak dirender, bukan dikarang.

Developer sediakan: 01 One-page responsif (breakpoint `<768` / `768–1279` / `1280+` per `PRD.md` NFR-02),
02 WhatsApp integration (prefilled sopan Indonesia), 03 Instagram link, 04 Image optimization,
05 Basic SEO, 06 Social metadata, 07 Analytics bila disetujui, 08 Deployment, 09 Basic post-launch bug fixing.

## 8. Acceptance (verifikasi)

- Functional (`PRD.md` §40): hero video autoplay-muted-poster-headline-CTA-mobile ok; services aktual
  terwakili + deskripsi jelas + CTA works + tanpa klaim tak didukung; portfolio real + identifiable +
  optimized + interaksi works + mobile ok; testimonials autentik + atribusi benar + responsif;
  FAQ mencerminkan concern nyata + accordion works + akurat; CTA primer works + WA link works +
  form (bila ada) punya success/error state.
- Visual/UX (`DESIGN.md` §36): terasa warm-editorial, hierarchy jelas, whitespace cukup, aksen hemat,
  foto sebagai fokus, tanpa dekorasi berlebih; purpose tiap section langsung terbaca, CTA jelas,
  flow mendukung journey Discover → Request Consultation; bukan template SaaS.
- Konten: lolos `CONTENT.md` §20 checklist; copy Indonesia penuh (`CONTENT.md` §17–§18: Kamu/Pernikahanmu,
  hindari formalitas/sales berlebih); harga hanya Mode A bila klien mempublikasikan, selain itu Mode B
  konsultasi (`PRD.md` FR-08, `DESIGN.md` §22).
- Teknis: title, description, canonical, OG, 1 H1, alt meaningful — cek via view-source `/` + validator;
  images/video compressed, below-fold lazy, JS minimal, tanpa major CLS; desktop/tablet/mobile tested,
  nav + CTA mobile mudah dipakai, tanpa horizontal overflow.
- Sukses diukur dari konversi (`PRD.md` §42): primer qualified consultation inquiries; sekunder hero CTR,
  WA CTR, form completion, portfolio engagement, engagement time, scroll depth, service/FAQ interaction,
  return visits — ditafsirkan menurut traffic source/campaign/period. Tanpa jaminan ranking/indexing/sitasi AI.
- Gate repo: `pnpm check` + `pnpm build` + `pnpm assert:dist` hijau; `pnpm diagnost` informatif.
