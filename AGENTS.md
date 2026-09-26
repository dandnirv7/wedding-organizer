# AGENTS.md

## Project Identity

This repository is a reusable Astro boilerplate for freelance and personal websites.

The repository is designed to support multiple project packages ranging from simple landing pages to content sites, product catalogs, and WhatsApp lead-generation websites.

The primary goal is:

> Clone → configure → add content → deploy quickly.

Optimize for maintainability by a single developer.

---

# Core Principles

## 1. Keep the core generic

The core must not assume a specific business domain.

Do NOT introduce business-specific assumptions such as:

- florist
- furniture
- materials
- property
- restaurant
- agency
- SaaS
- ecommerce
- digital product

Business-specific functionality belongs in an appropriate package/branch.

---

## 2. Static-first

Prefer static HTML whenever possible.

Default rendering strategy:

```text
Astro
  ↓
Static HTML
  ↓
Minimal JavaScript
```

Only introduce client-side JavaScript when an interaction genuinely requires it.

Do not introduce React, Vue, Svelte, global state, or client-side data fetching without a concrete requirement.

---

## 3. Progressive enhancement

The website should remain useful without unnecessary JavaScript.

Prefer:

- semantic HTML
- native links
- native forms
- server/static rendering
- progressive enhancement

Interactive behavior should be isolated to the smallest possible component.

---

# Architecture Rules

Use simple boundaries:

```text
src/
├── components/
├── layouts/
├── pages/
├── content/
├── config/
├── lib/
├── styles/
└── assets/
```

Do not create deep abstraction layers unless they solve a repeated problem.

Avoid:

```text
services/
repositories/
factories/
managers/
providers/
adapters/
```

unless there is a demonstrated need.

---

# Component Rules

Components should be:

- small
- composable
- accessible
- reusable
- explicit about their inputs

Prefer:

```astro
<Card title={title} description={description} />
```

over hidden global state.

Avoid components that know about unrelated business logic.

For example, a generic button should not know about:

- products
- WhatsApp
- analytics
- pricing
- checkout

Business behavior belongs in higher-level components.

---

# Content Rules

Content should be data-driven.

Prefer Content Collections or structured data for repeated content.

Do not hard-code large amounts of content inside components.

For repeated entities, use schemas.

Example:

```text
content/
├── pages/
├── articles/
└── faqs/
```

Additional collections may be introduced by a package.

Do not add `products/` to the core unless the selected project package requires catalog functionality.

---

# SEO Rules

SEO is a core capability.

Every indexable page should have:

- unique title
- useful description
- canonical URL
- appropriate robots directive
- Open Graph metadata
- Twitter/X metadata
- semantic heading structure
- crawlable links

Structured data must:

- represent visible content accurately
- use valid Schema.org vocabulary
- avoid fabricated information
- avoid duplicate/conflicting entities

Prefer one JSON-LD `@graph` per page.

Do not add structured data simply to obtain a rich result.

Do not create fake reviews, ratings, prices, availability, or other unverifiable data.

---

# AEO / GEO Rules

Optimize for useful, understandable information rather than AI-specific hacks.

Prefer:

- explicit facts
- descriptive headings
- semantic HTML
- clear entity relationships
- useful summaries
- FAQs where appropriate
- internal linking
- authoritative source information
- accurate structured data

Do not assume that:

- `llms.txt` guarantees AI visibility
- special AI schema guarantees citations
- AI-specific metadata guarantees inclusion
- any plugin guarantees AEO/GEO results

Never make ranking, indexing, or AI visibility guarantees.

---

# Performance Rules

Performance is a core requirement.

Prefer:

- static generation
- Astro components
- minimal client JavaScript
- optimized images
- responsive images
- lazy loading
- optimized fonts
- minimal third-party scripts

Avoid unnecessary hydration.

Before adding a client-side dependency, ask:

> Can this be implemented with HTML/CSS or a small inline script?

If yes, prefer the simpler implementation.

---

# Accessibility Rules

Every component must consider:

- semantic HTML
- keyboard navigation
- focus states
- accessible names
- alt text
- color contrast
- reduced motion
- form labels
- error messaging

Do not use ARIA when native HTML already provides the required semantics.

---

# Package / Branch Architecture

The repository uses capability-oriented project variants.

The core branch contains only generic functionality.

Project variants may add capabilities.

Recommended variants:

```text
starter
content
catalog
catalog-lead
```

## Starter

For:

- landing pages
- company profiles
- portfolios
- simple marketing websites

Contains:

- Astro
- TypeScript
- Tailwind
- layouts
- generic components
- SEO
- sitemap
- robots
- OG
- accessibility
- performance

Must NOT contain:

- product models
- ecommerce logic
- WhatsApp-specific logic
- catalog filtering
- checkout

---

## Content

Extends the starter capabilities with:

- Content Collections
- articles
- categories/tags where needed
- MD/MDX where needed
- RSS where appropriate
- article SEO
- pagination where appropriate

Do not introduce catalog-specific concepts.

---

## Catalog

Extends the starter/content capabilities with:

- item/product collection
- categories
- detail pages
- listing pages
- search/filter where required
- related items
- image gallery
- variants where required
- pricing where applicable
- availability where applicable
- item/product structured data where applicable

The implementation must remain generic.

Do not call the domain `products` if the package is intended to support non-product catalogs.

Prefer neutral naming such as:

```text
items
entries
catalog
```

when appropriate.

---

## Catalog Lead

Extends catalog functionality with:

- WhatsApp CTA
- inquiry flow
- pre-filled WhatsApp messages
- source/UTM information
- lead click tracking
- analytics abstraction

The core catalog must not depend on WhatsApp.

WhatsApp functionality belongs exclusively to this package.

---

# WhatsApp Rules

WhatsApp integration must be isolated.

Use a helper such as:

```ts
buildWaLink({
  number,
  text,
});
```

Messages may contain:

- item name
- item URL
- selected variant
- quantity
- campaign/source

Do not hard-code a business WhatsApp number inside reusable components.

The number belongs in project configuration.

Track the conversion event:

```text
lead_whatsapp_click
```

Do not send sensitive user information to analytics.

---

# Analytics Rules

Analytics must be optional.

Business components should not directly depend on a specific analytics vendor.

Prefer an abstraction such as:

```ts
track("lead_whatsapp_click", payload);
```

over directly calling:

```ts
gtag(...)
```

inside every component.

---

# Dependencies

Keep dependencies minimal.

Before adding a package, verify:

1. Is the functionality required?
2. Can Astro/native browser APIs solve it?
3. Is the dependency actively maintained?
4. Does it create unnecessary bundle/runtime cost?
5. Does it introduce vendor lock-in?
6. Does it belong in core or a package variant?

Do not add dependencies merely because they are popular.

---

# Forbidden Core Features

Do not add these to the generic core:

- authentication
- database
- checkout
- payment processing
- customer accounts
- ecommerce backend
- complex state management
- React Query
- Redux
- complex caching
- server actions unless specifically required
- business-specific schemas
- business-specific content
- AI content generation
- AI SEO hacks

These belong to a project-specific implementation if ever required.

---

# Branch Rules

When implementing a new capability:

1. Determine which package requires it.
2. Do not automatically add it to core.
3. Keep unrelated branches unaffected.
4. Prefer additive changes.
5. Avoid copying large amounts of code between branches.
6. Keep shared functionality in core only when it is genuinely generic.

Example:

```text
WhatsApp
→ catalog-lead

Product schema
→ catalog

Article schema
→ content

Generic SEO
→ core
```

---

# SEO / Content / Business Separation

Keep these concerns separate.

```text
Generic SEO
    ↓
Core

Article content
    ↓
Content package

Catalog data
    ↓
Catalog package

WhatsApp conversion
    ↓
Catalog Lead package
```

Do not allow business functionality to leak into generic SEO components.

---

# Configuration

Project-specific configuration belongs in:

```text
src/config/site.ts
```

Configuration may contain:

- site name
- site URL
- description
- locale
- contact information
- social links
- analytics configuration
- package-specific configuration

Do not hard-code project-specific values inside reusable components.

---

# Environment Variables

Secrets must never be committed.

Use environment variables for:

- private API keys
- analytics secrets
- service credentials
- server-only configuration

Public values may be exposed only when intentionally prefixed/configured for client access.

---

# Validation

Before considering a change complete, run:

```bash
pnpm build
pnpm diagnost
```

Also run type checking/linting when configured.

For critical user flows, add E2E tests.

---

# Definition of Done

A change is complete when:

- TypeScript passes
- build passes
- diagnostics pass
- no unnecessary dependency was introduced
- accessibility is preserved
- SEO behavior is preserved
- performance is not unnecessarily degraded
- core remains generic
- package boundaries remain intact

---

# Agent Behavior

Before changing architecture:

1. Read this file.
2. Read `docs/PRD.md`, `docs/DESIGN.md`, `docs/TECH-SPEC.md`, `PRODUCT.md`.
3. Inspect the existing repository.
4. Identify the active package/branch.
5. Prefer the smallest change that satisfies the requirement.

Do not rewrite working architecture without evidence.

Do not add features that were not requested.

Do not turn a simple website requirement into a full-stack architecture.

When uncertain, preserve:

```text
simplicity
+
static-first
+
SEO
+
accessibility
+
performance
+
maintainability
```

over abstraction or feature completeness.

---

# Project Overlay: wedding-organizer (pengecualian satu-rute yang disengaja)

Boilerplate ini adalah fondasi **multipage public site** generik (landing, company profile,
content, catalog). Checkout ini dipakai sebagai **proyek wedding organizer one-page** —
pengecualian satu-rute yang disengaja, bukan pola default boilerplate.

Sumber kebenaran proyek (urutan menang bila konflik):

```text
docs/PRD.md (what/why)
  ↓
docs/PRODUCTS.md (definisi produk)
  ↓
docs/DESIGN.md (visual/UX)
  ↓
docs/CONTENT.md (draft copy)
  ↓
docs/WIREFRAME.md (referensi experience; bukan penambah scope)
  ↓
docs/TECH-SPEC.md (how teknis + SOW)
  ↓
PRODUCT.md (keputusan terkonfirmasi vs belum diputuskan)
```

Konflik IA yang dicatat: `PRD.md` §7 + `CONTENT.md` §5 (struktur bisnis) menang untuk scope
initial atas chapter experience `WIREFRAME.md` §40. WIREFRAME dipakai untuk interaksi/motion/ritme.

Aturan proyek yang mengikat (di atas aturan generik):

- Satu rute `/` berisi 11 blok: Hero → Introduction → Services → Real Weddings → Why Us →
  How We Work → Packages/Investment → Testimonials → FAQ → Final CTA → Footer. Tidak ada
  `/portfolio`, `/services`, `/about`, `/blog`, `/contact` pada versi initial. Story detail/galeri
  lanjutan = opsional/future (change request). Navigasi mengikuti `PRD.md` FR-13 + `CONTENT.md` §16
  (anchor minimal, smooth-scroll, tanpa link mati); CTA konsisten per `CONTENT.md` §17.
- Bahasa copy tayang **Indonesia penuh**, locale `id-ID`, sapa Kamu/Pernikahanmu/Ceritamu,
  tone Hangat-Personal-Elegan-Natural-Profesional. Contoh heading/CTA Inggris di `DESIGN.md`,
  `PRODUCTS.md`, `WIREFRAME.md` ("Discover Our Work", "Let's Talk", "Start Planning") wajib
  diterjemahkan saat implementasi ("Lihat Pernikahan Kami", "Mulai Konsultasi",
  "Mulai Rencanakan Pernikahanmu").
- Tepat 1 H1 per halaman. Klaim di JSON-LD harus terlihat di HTML. Tanpa review, rating, harga,
  ketersediaan, statistik, pasangan/lokasi/tahun, atau testimoni fiktif. Angka (tahun, jumlah wedding)
  hanya bila terverifikasi. Testimonial autentik saja, jangan ubah makna/konteks. Harga mengikuti
  strategi klien: Mode A publik (nama/cocok-untuk/layanan/harga/CTA) vs Mode B konsultasi (tanpa harga).
- Nomor WhatsApp hanya dari `siteConfig.contact.whatsapp`. Tanpa nomor → CTA tidak dirender
  (bukan `href="#"`); baris kontak/footer menyesuaikan. Form inquiry opsional (`PRD.md` FR-12,
  progresif `WIREFRAME.md` §20 bila dipakai) wajib punya success/error state + label aksesibel.
  Tracking hanya via abstraksi `track()` (`page_view`, `hero_cta_click`, `portfolio_click`,
  `service_interaction`, `whatsapp_click` + `location: hero|services|final_cta|sticky_mobile`,
  `inquiry_form_start/submit`, `email_click`, `instagram_click`). Tanpa `gtag` langsung, tanpa data sensitif.
- Visual `DESIGN.md`: Charcoal (`#1E1D1B`) teks/tombol/footer, Ivory (`#F7F3EE`) latar utama,
  Beige (`#E8DED2`) permukaan sekunder, Champagne (`#B69B72`) aksen hemat (label/eyebrow/garis tipis,
  bukan latar/blok besar), White (`#FFFFFF`) kontras. Foto memikul warna (70/20/10). Font hanya
  Cormorant Garamond (display) + Manrope (body); tanpa font ketiga, tanpa italic-broadsheet.
  Radius restrained (image 0–4, card 4–8, button 0–2). Shadow minimal/none. Tanpa kartu membulat besar,
  pill, badge, blur, glassmorphism, gold gradient, floral/ornamen berlebih, WebGL.
  Motion Slow-Elegant-Intentional-Subtle-Cinematic (micro 150–250ms, standard 300–500ms,
  reveal 600–900ms, hero 800–1200ms); hormati `prefers-reduced-motion`; larang bounce, parallax berlebih,
  scroll hijack, loading screen panjang, cursor effect.
- Layanan mengikuti `PRODUCTS.md` §11 (5 kategori potensial) — wajib konfirmasi klien sebelum tayang;
  jangan mempublikasikan kategori yang tidak ditawarkan. Proses = 4 langkah Konsultasi → Perencanaan →
  Persiapan → Hari Pernikahan. Portfolio = editorial grid asimetris + feature besar, bukan grid 3-kolom.
  FAQ = accordion native. Footer dark `#1E1D1B` teks terang.
- Slot foto/video kosong dirender sebagai bingkai kosong berlabel netral dengan rasio + dimensi final
  anti-CLS (`width`/`height` + `aspect-ratio`); saat aset tiba hanya isinya yang ditukar.
  Tanpa foto stok, AI, atau generate sebagai pengganti dokumentasi nyata.
  `docs/ASSET-MANIFEST.md` adalah daftar permintaan aset yang sudah disinkronkan dengan slot
  terpasang (`H1`, `S1`–`S4`, `W1a`–`W3b`, `F1`); ubah rasio/piksel di kedua tempat sekaligus.
- Komponen wedding tinggal langsung di `src/pages/` (file/komponen ber-prefix `_`
  agar tidak menjadi rute). Core `src/components/`, `src/lib/`, `src/layouts/`
  hanya diubah bila perlu dan tetap generik; komposisi LEAD selalu di level page.
- Komponen wedding tidak boleh meng-hardcode nomor, URL brand, atau copy final klien
  yang belum diterima. Kekosongan data adalah fitur anti-fabrikasi (tidak dirender, bukan dikarang).
- Validasi: `pnpm check` + `pnpm build` + `pnpm assert:dist` hijau (gate),
  `pnpm diagnost` informatif.
