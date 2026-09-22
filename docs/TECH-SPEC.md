# TECH-SPEC + SOW — Wedding Organizer Editorial Landing Page

> Pendamping `PRD.md` (what/why) dan `DESIGN.md` (visual/UX). Berisi *how* teknis + batas komersial.

## 1. Stack (dikoreksi sesuai repo)

- Astro 7 + TypeScript + Tailwind CSS v4, adapter Vercel dengan output **statis** (prerender penuh, tanpa server function/ISR/SSR). `SITE_URL` wajib via env, dipakai untuk canonical/sitemap/OG/JSON-LD.
- Tidak ada backend custom, database, CMS, auth. Tidak ada React/Vue/Svelte/global state/client fetching. Satu-satunya JS runtime yang diizinkan: transisi/prefetch bawaan Astro + inline script kecil (nav `<details>`, tracker LEAD).
- Versi PRD sebelumnya menyebut Next.js/React App Router — **tidak berlaku**, jangan jadikan acuan.

## 2. Content Architecture (Astro, bukan Next.js)

- Konten statis config-driven, tanpa CMS. Struktur mengikuti boilerplate: `src/config/site.ts` (sumber tunggal: name, URL, description, locale, contact.whatsapp, socials), `src/content/` (pages/articles/faqs via Content Collections + Zod), `src/components/`, `src/layouts/`, `src/lib/` (SEO/schema/OG generik), `src/capabilities/lead/` (WA + track terisolasi), `src/assets/` + `public/` untuk media.
- Konsep data per section: brand, services, portfolio, testimonials, gallery. Update = ubah data + rebuild. Struktur `src/data/*.ts` + `src/app/page.tsx` dari versi lama dihapus karena itu pola Next.js.
- Bila butuh listing terstruktur, pakai capability `catalog` netral (`items`/`catalog`, bukan `products`) + komposisi LEAD di level page. Core tidak mengimpor LEAD.

## 3. Media & Performance

Risiko terbesar: image/video-heavy. Target: fast first render, hero tidak blokir konten, lazy below-fold, responsive sizing, video compressed, JS minimal, animasi tidak blokir render. Prioritas: Performance > Animation complexity.

- Image: client sediakan high-res original + varian portrait/landscape, hindari forward WhatsApp terkompresi. Pipeline: responsive + compress + lazy di bawah fold + format modern (WebP; AVIF opsional per project) + width/height untuk hindari CLS. Minimum: Hero 1–2, Featured 3–5, Visual Story 8–15, About 1–2, Testimonial 1–3, Final CTA 1–2. Total ideal 15–25+ foto. Tidak semua harus dipakai.
- Video: Hero 1 + section 1 (+ opsional 1–2 footage). 5–15 detik preferred, autoplay muted loop playsinline, tanpa audio otomatis, poster wajib, fallback image statis, compressed, responsive aspect ratio, tidak hambat initial render. Dev tidak mencakup produksi/editing video profesional.

## 4. SEO, Social, A11y, Analytics

### SEO

- Metadata wajib: `<title>`, meta description unik, canonical absolut, OG + Twitter/X, robots directive tepat.
- Structured data: satu JSON-LD `@graph` per halaman. `WebSite` + `WebPage` standar; `Organization`/`LocalBusiness` (name, image, URL, telephone, address, areaServed) hanya bila data nyata tersedia. Tanpa review/rating/harga/availabilitas fiktif. Validasi via Rich Results Test + Schema Validator.
- Semantic: tepat 1 H1, hierarchy H1→H2→H3 benar. Image penting: meaningful `alt` + filename deskriptif + width/height + responsive; dekoratif `alt=""`.
- `llms.txt` kurasi manual + OG PNG 1200×630 mengikuti brand; sitemap/robots bawaan boilerplate.

### Accessibility (minimum)

Semantic HTML, kontras cukup, keyboard navigable + focus visible, alt bermakna, button ada accessible label, video tanpa audio autoplay, dukung `prefers-reduced-motion`.

### Analytics (opsional, vendor-agnostik)

Track via abstraksi `track()`, bukan `gtag` langsung. Event: `page_view`, `whatsapp_click` (primer, mis. `whatsapp_cta_clicked` + param `location: hero|services|final_cta|sticky_mobile`), `instagram_click`, `portfolio_interaction`. Tanpa data sensitif. Vendor (GA4/Pixel) dipasang di project, bukan di core.

### Social sharing

Saat URL dibagikan via WhatsApp/sosmed, preview tampilkan brand title + description + wedding image berkualitas (OG 1200×630).

## 5. URL Strategy

Primary: `/`. Eksternal: Instagram, WhatsApp. Tidak perlu `/portfolio`, `/services`, `/about`, `/blog`, `/contact` untuk initial.

## 6. Scope Control & Komersial

Budget: target ≤ Rp1.000.000, plafon keras ≤ Rp1.500.000. Jaga via: one-page, static content (tanpa CMS), direct WhatsApp (tanpa API), limited interaction (micro + editorial transition saja), aset dari client (copy, image, video, testimonial, logo, kontak), tanpa custom content production (photoshoot, videography, copywriting campaign, artwork, logo design).

Revisi komersial: Design 2 rounds + Development 2 minor rounds (typography, spacing, image replacement, copy correction, CTA text, small layout). Tetap dalam approved scope. Di luar itu ("sekalian jadi 5 halaman") = change request.

## 7. Deliverables

Client sediakan: 01 Logo, 02 Brand name, 03 Tagline/positioning, 04 Company description, 05 Services, 06 Portfolio photos, 07 Videos, 08 Testimonial, 09 WhatsApp number, 10 Instagram, 11 Email, 12 Address/service area, 13 SEO keywords bila ada, 14 Legal/copyright.

Developer sediakan: 01 One-page responsive (desktop/tablet/mobile), 02 WhatsApp integration, 03 Instagram link, 04 Image optimization, 05 Basic SEO, 06 Social metadata, 07 Analytics bila disetujui, 08 Deployment, 09 Basic post-launch bug fixing.

## 8. Acceptance (verifikasi)

- Visual: editorial konsisten, photography focal, hierarchy jelas, bukan template SaaS, sesuai approved design, mobile tanpa horizontal overflow.
- Functional: semua anchor, WA CTA, Instagram link, hero video/image, semua image tampil, sticky WA mobile berfungsi.
- SEO: title, description, canonical, OG, 1 H1, alt meaningful images — cek via view-source `/` + validator.
- Performance: images/video compressed, below-fold lazy, JS minimal, tanpa major CLS dari media.
- Responsive: desktop/tablet/mobile tested, nav + CTA mobile mudah dipakai.
- Gate repo: `pnpm check` + `pnpm build` + `pnpm assert:dist` hijau; `pnpm diagnost` informatif.
