# PRD — Wedding Organizer Landing Page

> Status: Draft | Versi: 2.1 (pure PRD, arah Cinematic Minimalism)
> Dokumen pendamping: `DESIGN.md` (art direction + UX), `TECH-SPEC.md` (teknis + SOW)
> Dokumen ini adalah sumber kebenaran untuk *what & why*. *How* ada di dokumen pendamping.

## Problem Statement

Calon pengantin yang mencari Wedding Organizer (WO) kesulitan menilai kualitas dan kecocokan WO hanya dari chat WhatsApp yang tersebar atau feed Instagram yang tidak terstruktur. Mereka harus berpindah-pindah antara portofolio, info layanan, dan testimoni tanpa narasi yang jelas, sehingga ragu untuk menghubungi.

Dari sisi pemilik WO: memiliki banyak foto dan video wedding berkualitas, tetapi tidak punya satu tautan digital yang premium, mudah dibagikan, dan langsung menghasilkan inquiry. Akibatnya perceived value rendah dan inquiry yang masuk tidak qualified (banyak tanya harga/layanan dasar berulang).

## Solution

Satu one-page marketing website dengan alur naratif visual: create desire → establish trust → explain service → convert to inquiry.

Pengalaman halaman dibangun dengan fotografi wedding sebagai elemen visual utama, didukung satu cinematic video di hero, typography yang kuat, whitespace yang terkontrol, dan navigasi yang sederhana.

Editorial digunakan sebagai pendekatan pacing dan composition, bukan sebagai tampilan dokumen, presentasi, atau magazine layout.

Pengunjung menerima impak visual dulu (foto/video), memahami positioning brand, melihat bukti portfolio, memahami layanan dan proses kerja, membaca testimoni, mengenal pemilik brand, lalu menghubungi via WhatsApp dalam satu klik dengan pesan prefilled. Website bukan sistem booking, bukan CMS, bukan e-commerce — hanya brand presentation + lead generation.

## User Stories

### Calon pengantin — discovery & desire

1. As a calon pengantin mobile, I want a membuka satu tautan dan langsung melihat visual wedding yang premium, so that saya cepat merasakan gaya WO tanpa harus scroll katalog acak.
2. As a calon pengantin, I want a membaca satu kalimat positioning brand yang singkat, so that saya tahu apakah WO ini cocok dengan gaya saya (intimate, luxury, minimal).
3. As a calon pengantin, I want a melihat satu featured wedding story dengan rangkaian foto yang kuat (foto utama + pendukung + nama couple + lokasi + tahun), so that saya dapat menilai kualitas eksekusi melalui dokumentasi nyata.
4. As a calon pengantin visual-first, I want a melihat variasi wide shot, portrait, candid, dan detail, so that saya dapat merasakan keseluruhan atmosfer dan perhatian terhadap detail.
5. As a calon pengantin emosional, I want a melihat satu cuplikan video sinematik pendek di hero tanpa audio, so that saya langsung memahami atmosphere brand sebelum membaca detail layanan.

### Calon pengantin — evaluasi layanan & proses

6. As a calon pengantin, I want a melihat daftar layanan (planning, coordination, intimate, full service) dalam format list sederhana, so that saya cepat paham apa yang ditawarkan tanpa tabel harga kompleks.
7. As a calon pengantin sensitif harga, I want a melihat label "Starting from" hanya bila pemilik mempublikasikannya, so that saya mendapat gambaran budget tanpa merasa dipaksa.
8. As a calon pengantin desktop, I want a mengarahkan kursor ke nama layanan dan melihat preview image berubah, so that saya mendapat konteks visual tiap layanan.
9. As a calon pengantin yang cemas, I want a membaca proses kerja 3–4 langkah (Discover → Plan → Create → Celebrate), so that saya tahu ekspektasi bekerja sama dan merasa aman.
10. As a calon pengantin ragu, I want a membaca 1–3 testimoni autentik (quote + nama couple + tahun + lokasi + foto bila ada), so that saya membangun kepercayaan dari pengalaman orang lain.

### Calon pengantin — konversi

11. As a calon pengantin mobile, I want a tombol WhatsApp sticky yang selalu terlihat tanpa menutupi konten, so that saya bisa menghubungi kapan pun tanpa scroll ke bawah.
12. As a calon pengantin, I want a tombol WhatsApp final dengan pesan prefilled yang sopan, so that saya tidak perlu mengetik dari nol dan tidak salah menyampaikan kebutuhan.
13. As a calon pengantin, I want a menemukan kontak alternatif (Instagram, email, area layanan) di footer, so that saya punya kanal cadangan bila WhatsApp tidak aktif.
14. As a calon pengantin yang diburu waktu, I want a navigasi anchor (Work, Services, About) yang smooth-scroll ke section, so that saya lompat ke info yang saya butuhkan.

### Keluarga & rujukan

15. As a orang tua/keluarga calon pengantin, I want a halaman yang cepat dimuat dan mudah dibaca di HP, so that saya bisa meneruskannya ke pasangan/keluarga via WhatsApp.
16. As a teman yang mereferensikan, I want a preview link (title + deskripsi + foto wedding) yang bagus saat dibagikan di WhatsApp, so that penerima tertarik mengklik.
17. As a vendor/venue kolaborator, I want a satu tautan brand presentation yang profesional, so that saya cepat menilai kelayakan kolaborasi.

### Pemilik WO — operasional & konten

18. As a pemilik WO non-teknis, I want a konten statis yang mudah diupdate via data terstruktur (brand, services, portfolio, testimonials), so that saya tidak bergantung pada CMS/database.
19. As a pemilik WO, I want a nomor WhatsApp dikelola di satu konfigurasi pusat, so that saya ganti nomor tanpa menyentuh komponen.
20. As a pemilik WO, I want a harga/availabilitas tidak difabrikasi di structured data bila datanya tidak ada, so that brand saya jujur dan tidak kena penalti SEO.
21. As a pemilik WO, I want a mengetahui CTA mana yang paling diklik (hero, services, final, sticky), so that saya mengoptimalkan penempatan CTA.

### Kualitas non-fungsional

22. As a pengunjung dengan koneksi lambat, I want a hero cepat tampil dan gambar below-fold lazy-load, so that saya tidak menunggu lama atau kehabisan kuota.
23. As a pengunjung keyboard-only, I want a semua elemen interaktif bisa diakses keyboard dengan focus visible, so that saya bisa navigasi penuh tanpa mouse.
24. As a pengunjung dengan preferensi reduced-motion, I want a animasi reveal dihormati/dimatikan, so that saya tidak pusing.
25. As a mesin pencari, I want a satu H1 unik, heading hierarchy benar, canonical, dan satu JSON-LD @graph valid, so that halaman layak crawl dan layak kutip tanpa klaim palsu.
26. As a pemilik WO, I want a website tetap berguna dengan JavaScript minimal, so that biaya hosting dan maintenance tetap rendah.

## Implementation Decisions

Keputusan tingkat arsitektur. Tanpa path file atau snippet kode — detail layout ada di `DESIGN.md`, detail stack ada di `TECH-SPEC.md`.

- **Satu rute statis, prerender penuh.** Tidak ada multi-page (`/portfolio`, `/blog`), tidak ada SSR/ISR/server function. Seluruh halaman di-generate saat build. Ini menjaga budget dan performa.
- **Stack mengikuti boilerplate yang ada: Astro + TypeScript + Tailwind, deploy statis Vercel.** Koreksi dari versi sebelumnya yang menyebut Next.js/React App Router — tidak berlaku untuk repo ini. Tidak ada React/Vue/Svelte, tidak ada global state, tidak ada client fetching.
- **Konfigurasi situs sebagai satu-satunya sumber kebenaran.** Nama, URL produksi, deskripsi, locale, kontak WhatsApp, dan socials hidup di satu modul konfigurasi. Komponen reusable tidak meng-hardcode nomor atau URL brand.
- **Batas capability LEAD terisolasi.** Pembangun tautan WhatsApp (normalisasi nomor Indonesia `08…` → `62…`, encode pesan) dan abstraksi tracking (`lead_whatsapp_click` via `dataLayer`, no-op bila tanpa analytics) hidup di capability LEAD. Core/catalog tidak pernah mengimpornya langsung; komposisi dilakukan di level page (contoh konseptual: detail katalog + tombol WA). Tanpa nomor terkonfigurasi, CTA tidak dirender — bukan link mati.
- **Konten config-driven, tanpa CMS/database.** Koleksi data: brand, services, portfolio, testimonials, gallery. Update = ubah data + rebuild. Tidak ada admin, auth, atau API.
- **Modul SEO generik di core.** Resolusi canonical (strip tracking params, trailing-slash konsisten), resolusi title (`Judul | Nama Situs`), head metadata (title, description, canonical, OG/Twitter), dan satu JSON-LD `@graph` per halaman (`WebSite` + `WebPage`; `Organization`/`LocalBusiness` hanya bila data kontak/alamat nyata tersedia). Tidak ada review/rating/harga fiktif.
- **Kebijakan media: image-driven, performance > animasi.** Photography adalah bahasa visual utama. Foto wedding merupakan elemen utama dalam membentuk identitas visual halaman. Layout harus memberi ruang yang cukup bagi foto untuk tampil sebagai konten utama, bukan sekadar thumbnail atau ilustrasi pendamping. Gambar responsif + lazy di bawah fold + format modern; hero image/video tidak boleh memblokir first render. Video: autoplay muted loop inline + poster wajib + fallback image statis. Bila harus memilih antara animasi keren vs loading cepat, pilih loading cepat.
- **Hero video bersifat tunggal dan disengaja.** Video digunakan khusus pada hero sebagai pembentuk atmosphere awal. Section lain menggunakan photography sebagai medium utama.
- **Interaksi visual minimal.** Yang diizinkan: fade/reveal ringan, image scale/hover secukupnya, smooth anchor scroll, preview image layanan di desktop, sticky nav subtle, dan interaksi portfolio/media yang tidak mengganggu pembacaan. Yang dilarang: parallax berlebihan, 3D/WebGL, scroll hijacking, loading screen panjang, cursor effect.
- **Aksesibilitas sebagai syarat, bukan opsional.** HTML semantik, kontras cukup, alt bermakna (kosong hanya untuk dekoratif), label aksesibel, video tanpa audio autoplay, hormati `prefers-reduced-motion`.
- **Analitik opsional dan vendor-agnostik.** Event yang dilacak: `page_view`, `whatsapp_click` (konversi primer, dengan parameter lokasi CTA: hero/services/final/sticky_mobile), `instagram_click`, `portfolio_interaction`. Komponen memanggil abstraksi `track()`, bukan vendor langsung. Tidak ada data sensitif ke analitik.
- **Skema netral domain.** Bila katalog/portfolio dibutuhkan, gunakan penamaan netral (`items`/`catalog`/`entries`), bukan asumsi `products`/e-commerce. Tidak ada cart/checkout/payment.

## Creative Direction

**Direction:** Cinematic Minimalism

**North Star:** Image-led Wedding Storytelling

Website harus terasa premium melalui kualitas fotografi, typography, composition, spacing, dan pacing — bukan melalui ornamen UI atau efek visual yang kompleks.

Editorial digunakan sebagai pendekatan composition dan rhythm, bukan sebagai visual metaphor seperti magazine, canvas, presentation deck, rundown, atau dokumen kerja.

Prioritas visual:

1. Photography
2. Typography
3. Composition & whitespace
4. Content
5. Interface

Prinsip utama: let the wedding documentation become the visual identity.

## Testing Decisions

- **Apa itu test yang baik di sini:** hanya menguji perilaku eksternal yang terlihat pengguna/mesin (HTML ter-render, tautan WA benar, metadata ada), bukan detail implementasi (nama class, struktur komponen, durasi animasi).
- **Seam utama (satu seam, level tertinggi):** output HTML statis dari rute `/` hasil build. Hampir semua acceptance bisa diverifikasi dari sini: 1 H1, canonical absolut, OG image absolut, 1 JSON-LD `@graph`, semua image punya alt/width-height, anchor nav valid, semua CTA WA mengarah ke nomor ternormalisasi + pesan ter-encode, video punya poster + atribut muted/loop/playsinline.
- **Seam pendukung (pure function, tanpa browser):** pembangun tautan WhatsApp (normalisasi `08…`/`8…`/spasi-strip → `62…`, encode teks, fallback aman bila nomor kosong) dan fungsi SEO (canonical stripping `utm_*`/`fbclid`/`gclid`, title fallback). Diuji sebagai unit murni.
- **Prior art di repo ini (gunakan yang sudah ada, jangan bikin harness baru):** `pnpm check` (typecheck, 0 errors), `pnpm build` + `pnpm assert:dist` (gate: canonical/OG/JSON-LD/lang di `dist/`), `pnpm diagnost` (heuristik non-blocking), verifikasi manual view-source `/` dan `/404`, Rich Results Test + Schema Validator untuk JSON-LD, buka satu OG PNG di browser, uji responsif desktop/tablet/mobile + navigasi keyboard.
- **Yang tidak diuji:** visual taste subjektif ("terasa premium"), ranking/indexing aktual, sitasi AI — tidak dijamin dan tidak diverifikasi di sini, hanya kelayakan teknis.

## Out of Scope

Menjaga budget dan arsitektur statis. Tidak termasuk:

- CMS, admin dashboard, login/register, customer account
- Booking system, calendar, real-time availability, online chat, WhatsApp API
- Backend, database, payment, cart, order/vendor/client/event management
- Blog management system, multi-language CMS, advanced portfolio filtering, user-generated reviews
- Complex animation engine, 3D, WebGL, virtual venue tour
- Custom photography/art direction, video production/editing profesional, logo design, copywriting campaign
- Multi-page (`/portfolio`, `/services`, `/about`, `/blog`, `/contact`) untuk versi initial — hanya `/` + tautan eksternal Instagram/WhatsApp

Website hanya menyediakan tautan/CTA ke WhatsApp milik client.

## Further Notes

- **Budget diseragamkan:** target ≤ Rp1.000.000, plafon keras ≤ Rp1.500.000. Versi sebelumnya menyebut keduanya secara bergantian; yang berlaku adalah target vs plafon ini. Jaga one-page + statis + aset dari client untuk tetap di dalam plafon.
- **Koreksi stack:** versi sebelumnya menyebut Next.js/React — diganti Astro sesuai `package.json` dan `astro.config.mjs` aktual. Jangan jadikan PRD ini alasan migrasi stack.
- **Struktur dokumen:** detail visual/UX dipindah ke `DESIGN.md`; detail teknis/komersial (SEO teknis, performa, analitik, deliverables, revisi, acceptance teknis) dipindah ke `TECH-SPEC.md`. Bila ada konflik, PRD ini menang untuk *what/why*.
- **Risiko terbesar:** website image/video-heavy. Mitigasi: kompresi + responsif + lazy + poster; client wajib sediakan 15–25+ foto asli resolusi tinggi (bukan forward WhatsApp terkompresi) + 1–2 video pendek. Lihat `TECH-SPEC.md` untuk daftar aset minimum.
- **Sukses diukur dari konversi, bukan jumlah fitur:** metrik primer WhatsApp clicks; sekunder Instagram clicks, scroll depth, portfolio interaction. Prinsip inti: *website harus terasa mahal tanpa mahal untuk dibangun* — via art direction, typography, photography, komposisi, hierarchy, pacing; bukan via halaman/fitur/backend/animasi/CMS.
