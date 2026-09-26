# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primer: calon pengantin Indonesia, mobile-first.** Mereka sampai lewat satu tautan yang dibagikan (WhatsApp, Instagram bio, stories, grupos keluarga) — bukan lewat pencarian atau navigasi situs. Pekerjaan mereka: memutuskan apakah gaya dan kualitas WO ini cocok dengan wedding yang mereka bayangkan, lalu cukup percaya untuk menghubungi. Mereka membaca sambil berdiri/scroll cepat, koneksi bervariasi, dan tidak sabar dengan halaman berat.

**Sekunder (dipahami dari PRD, bukan diada-adakan):**
- Orang tua/keluarga yang menerima forward tautan dan meneruskannya ke pasangan — butuh halaman yang cepat dan terbaca di HP.
- Teman perujuk — membagikan tautan, sehingga preview sosial (title + deskripsi + foto) ikut bekerja.
- Vendor/venue kolaborator — menilai kelayakan kolaborasi dari satu tautan.

**Pemilik WO (audiens internal):** non-teknis, tidak menyentuh CMS/database. Mengupdate lewat data terstruktur lalu build ulang, dan ingin inquiry yang masuk sudah qualified (tidak mengulang tanya harga/layanan dasar).

## Product Purpose

Satu halaman satu-URL yang membuat calon pengantin ingin menikah bersama WO ini, lalu menghubungkannya ke WhatsApp dengan satu klik dan pesan yang sudah terisi.

Alur yang jadi tujuan: create desire → establish trust → explain service → convert to inquiry. Website **bukan** sistem booking, bukan CMS, bukan e-commerce — hanya brand presentation + lead generation.

Sukses primer: jumlah klik WhatsApp dan kualitas inquiry yang masuk. Sukses sekunder: klik Instagram, scroll depth, interaksi portfolio. Bukan diukur dari banyaknya halaman atau fitur.

## Positioning

Satu tautan yang menampilkan dokumentasi wedding nyata dalam satu narasi editorial — bukan feed Instagram yang terpotong-potong dan bukan chat WhatsApp yang tersebar — dan menutup narasi itu dengan permintaan kontak yang tinggal kirim.

Yang tidak bisa ditiru tetangga begitu saja: kombinasi "bukti eksekusi nyata tersusun sebagai satu cerita" + konversi langsung ke WA dengan pesan prefilled (menyertakan identitas sumber/campaign) di atas halaman yang tetap ringan karena statis penuh. Klaimnya berhenti di situ: tidak ada jaminan ranking, indexing, traffic, atau sitasi AI.

## Operating Context

- Proyek freelance tunggal, dikerjakan satu developer; pemilik WO menyediakan materi, bukan tim konten.
- Cara pengunjung datang: tautan dibagikan di WhatsApp/Instagram → mayoritas mobile, mayoritas sesi singkat.
- Pemilik WO mengupdate konten dengan mengubah data terstruktur lalu build ulang; tidak ada admin, login, atau API.
- Konversi terjadi di luar website: chat WhatsApp milik klien. Website hanya menyiapkan tautan dan pesan.
- Pembatas komersial yang aktif: target biaya ≤ Rp1.000.000 dengan plafon keras Rp1.500.000; revisi 2 ronde desain + 2 ronde minor development. Sisanya = change request.
- Verifikasi berjalan di repo: `pnpm check`, `pnpm build`, `pnpm assert:dist` sebagai gate; `pnpm diagnost` informatif.

## Capabilities and Constraints

**Dikonfirmasi:**
- Satu rute statis `/` dengan prerender penuh (+ `404.astro`). Tidak ada `/portfolio`, `/services`, `/about`, `/blog`, `/contact` pada versi initial; hanya tautan eksternal Instagram dan WhatsApp.
- Struktur 11 blok sesuai `docs/PRD.md` §7 dan sudah terpasang: Hero → Introduction → Services → Real Weddings → Why Us → How We Work → Packages/Investment → Testimonials → FAQ → Final CTA → Footer. Anchor nyata: `#pengantar`, `#layanan`, `#pernikahan`, `#proses`, `#paket`, `#tanya`, `#rencana`.
- **Dunia visual = sistem editorial `docs/DESIGN.md`** (Ivory/Charcoal/Beige + Champagne hemat, Cormorant Garamond + Manrope). Dikonfirmasi 2026-09-25: DESIGN.md menang atas tampilan yang sedang terpasang, jadi iterasi "call sheet" sebelumnya **digantikan, bukan digabung**.
- CTA WhatsApp di hero, daftar layanan, final CTA, dan sticky bawah khusus mobile. Nomor dikelola hanya di `src/config/site.ts`; **bila nomor belum diisi, CTA tidak dirender** — bukan link mati.
- Bahasa copy: **Indonesia penuh** (dikonfirmasi 2026-09-22). Contoh heading Inggris di `docs/DESIGN.md` ("Discover Our Work", "Let's Make It Yours", "Every Detail Matters") wajib diterjemahkan; locale `id-ID`.
- **Dua mode harga dirancang keduanya** (dikonfirmasi 2026-09-25) dan dipisahkan satu flag: `siteConfig.wedding.packagesMode`. `'public'` = Mode A (nama paket, cocok untuk, yang termasuk, harga, CTA); `'consultation'` = Mode B (tanpa angka sama sekali, ajakan konsultasi). Default sekarang `'consultation'` karena tarif resmi klien belum diterima — tidak ada harga yang dikarang.
- Testimonial: 1 unggulan, maksimum 3, hanya yang benar-benar diberikan klien.
- Media: **bingkai kosong berukuran final, bukan foto pengganti.** Setiap slot foto/video dirender sebagai frame dengan aspect ratio dan ukuran yang sama seperti hasil akhir section-nya (width/height tetap ditetapkan agar bebas CLS), diberi label "menunggu aset klien". Saat aset tiba, hanya isinya yang ditukar — layout, komposisi, dan ritme sudah final sejak build. Tidak ada foto pernikahan placeholder, stok, maupun hasil generate. (dikonfirmasi 2026-09-22)
- **Hero media-agnostic** (dikonfirmasi 2026-09-25): satu bidang 16:9 (1920×1080) yang hari ini berupa bingkai kosong berlabel, besok poster, lusa `<video autoplay muted loop playsinline>` — kotak, rasio, dan posisinya tidak pernah berubah, jadi hero tidak dibangun ulang saat footage tiba. Video tetap bukan-syarat: pesan utama selalu terbaca lewat teks. Daftar kebutuhan per slot ada di `docs/ASSET-MANIFEST.md`.
- **Form inquiry = penyusun pesan WhatsApp** (dikonfirmasi 2026-09-25): submit membuka `wa.me` dengan pesan terisi, **bukan** ke email atau endpoint. Tidak ada backend. Fallback `method="get"` + `action` = tautan wa.me membuat chat tetap terbuka tanpa JavaScript, dan field wajib punya success/error state plus label aksesibel.
- Analytics opsional dan vendor-agnostik lewat abstraksi `track()`; event yang benar-benar dipakai halaman ini: `hero_cta_click`, `whatsapp_click` (+ `location: header|hero|services|packages|final_cta|sticky_mobile`), `portfolio_click`, `service_interaction`, `inquiry_form_start`, `inquiry_form_submit`, `email_click`, `instagram_click`. `page_view` milik vendor, bukan emit repo. Tanpa data sensitif; vendor dipasang di project, tidak di core.
- Terlarang secara arsitektur: React/Vue/Svelte, global state, client-side data fetching, backend, database, CMS, auth, cart/checkout/payment, WhatsApp Business API. JavaScript runtime hanya bawaan Astro (prefetch/transition) + inline script kecil.
- `SITE_URL` wajib via env (dipakai bersama oleh `astro.config.mjs` dan `src/config/site.ts`); build gagal eksplisit bila absen.
- Bila butuh listing terstruktur, penamaan tetap netral domain (`items`/`catalog`), dan capability `catalog` tidak boleh bergantung pada WhatsApp — komposisi lead terjadi di level page.
- Batas scope yang disepakati klien: tanpa produksi foto/video, tanpa desain logo/artwork custom, tanpa copywriting campaign.

**Belum diputuskan (jangan mengarang sampai dijawab):**
- Identitas brand: nama WO, tagline resmi, deskripsi perusahaan, email, Instagram, nomor WhatsApp, alamat/area layanan, tahun berdiri, jumlah wedding.
- Segmen wedding yang benar-benar ditangani klien. Per 2026-09-22 brief baru sedikit; kemungkinan modern minimal atau lintas gaya. Sistem visual sengaja dibuat tidak mengunci satu genre supaya tetap benar apa pun jawabannya nanti.
- Kapan dan dalam bentuk apa aset klien tiba (rasio, orientasi, jumlah, ada/tidaknya video).
- Branch mana yang jadi rilis produksi (`v4` saat ini vs `main`). Penempatan proyek satu-rute sendiri sudah tercatat sebagai pengecualian disengaja di "Project Overlay" `AGENTS.md`.
- Vendor analitik mana (bila ada) yang akan dipasang.
- Domain produksi `SITE_URL`.

## Brand Commitments

- Nama, logo, tagline, tone, kontak, dan seluruh materi brand adalah milik klien dan **belum diterima**. Jangan menulis salah satunya sebagai fakta.
- Bahasa suara: Indonesia, hangat dan lugas; pesan WhatsApp prefilled contoh dari PRD tetap dalam Indonesia sopan ("Halo, saya tertarik dengan layanan wedding organizer…").
- Nama section dan label kecil berbahasa Inggris yang muncul di contoh `docs/DESIGN.md` tidak terikat — yang terikat adalah bahasa Indonesia penuh untuk copy yang tayang.
- Satu komitmen yang mengikat: jujur pada bukti. Tidak ada review, rating, harga, ketersediaan, statistik, atau pasangan fiktif.

## Evidence on Hand

- `docs/PRD.md` v2.0 — problem, solution, 26 user story, keputusan arsitektur, out-of-scope, budget. Sumber kebenaran what/why.
- `docs/DESIGN.md` — art direction & spesifikasi 11 section, strategi desktop/tablet/mobile, aturan motion. Sumber kebenaran visual/UX.
- `docs/TECH-SPEC.md` — stack terkonfirmasi Astro, arsitektur konten, daftar kebutuhan media per section, SEO/a11y/analytics, deliverables, acceptance.
- Fondasi teknis siap pakai di repo: `src/lib/{seo,schema,og}.ts`, `src/components/seo/*`, `src/capabilities/lead/{index.ts,lib/whatsapp.ts,lib/track.ts,components/WaButton.astro}` (normalisasi `08…`→`62…` + encode pesan, tracking terdelegasi), pipeline OG (`src/pages/og/[...slug].png.ts`) + sitemap + robots + `llms.txt`, dan gerbang `scripts/assert-dist.mjs`.
- **Lapisan halaman sudah terpasang** (2026-09-26): `src/pages/index.astro` + `src/pages/_wedding/{content.ts,PairRow.astro,MediaStage.astro,FramePlate.astro,SectionHead.astro,SiteHeader.astro,SiteFooter.astro,FaqList.astro,InquiryForm.astro}`, design system editorial di `src/styles/global.css`, `404.astro`, `llms.txt.ts`. Copy tayang hidup di satu sumber: `src/pages/_wedding/content.ts`.
- **Kosong — dan tidak boleh diisi karangan:** `src/config/site.ts` masih berisi placeholder berlabel ("Nama Wedding Organizer", `whatsapp: ''`, `instagram: ''`, `serviceAreas: []`, deskripsi perusahaan berlabel placeholder), tidak ada `src/content/` sama sekali, dan `public/` hanya berisi favicon. Foto, video, logo, nama pasangan, venue, tahun, testimoni, tarif, dan kontak klien: **nol aset tersedia** — semuanya diminta lewat `docs/ASSET-MANIFEST.md`.

## Product Principles

1. **Emosi dulu, informasi kemudian.** Pengunjung memutuskan perasaan sebelum membaca detail; urutan halaman mengikuti itu, bukan kelengkapan informasi.
2. **Bukti nyata atau slot kosong.** Lebih baik placeholder berlabel jelas dan manifest permintaan aset daripada data atau foto fiktif.
3. **Satu tujuan per halaman: klik WhatsApp.** Setiap section bekerja untuk itu; fitur yang tidak mengarah ke sana keluar scope.
4. **Statis dan ringan itu fitur.** Bila harus memilih antara efek yang keren dan first render yang cepat, pilih cepat.
5. **Core tetap generik.** Aturan wedding-specific tinggal di layer project; kemampuan lead (WhatsApp) tetap terisolasi dari core dan catalog.

## Accessibility & Inclusion

Aksesibilitas adalah syarat terima, bukan opsi, sesuai PRD/TECH-SPEC: HTML semantik, tepat satu H1 dengan hierarchy benar, kontras cukup, seluruh elemen interaktif dapat diakses keyboard dengan focus visible, alt bermakna (kosong hanya untuk dekoratif), label pada kontrol, video tanpa audio autoplay, dan seluruh animasi reveal menghormati `prefers-reduced-motion`. CTA sticky mobile tidak boleh menutupi konten dan harus menghormati safe-area. Kebutuhan pengguna spesifik lain (mis. target WCAG formal) belum ditetapkan klien.
