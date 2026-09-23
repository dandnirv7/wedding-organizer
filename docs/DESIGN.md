---
name: Wedding Organizer — Cinematic Minimalism
description: Satu halaman image-led yang membiarkan dokumentasi wedding nyata menjadi identitas visual.
---

# Design System: Wedding Organizer — Cinematic Minimalism

> Sistem visual proyek wedding organizer. Kontrak *what/why* ada di `PRD.md` dan menang bila konflik. Copy tayang Indonesia penuh, locale `id-ID`.

## Overview

**Creative Direction: Cinematic Minimalism**

**North Star: Image-led Wedding Storytelling**

**Layout Philosophy: Editorial Pacing, Not Editorial UI**

```text
                CINEMATIC MINIMALISM
                         │
                         ▼
              IMAGE-LED STORYTELLING
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      PHOTOGRAPHY    TYPOGRAPHY       SPACE
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                 EDITORIAL PACING
                         │
                         ▼
                  QUIET INTERFACE
                         │
                         ▼
                    WHATSAPP
```

**Visual Priority:**

1. Photography
2. Typography
3. Space
4. Content
5. UI

**Core Principle:** let the wedding documentation become the visual identity.

```text
DESIGN
=
PHOTO
+
VIDEO
+
TYPE
+
SPACE
+
TIMING
```

Bukan:

```text
DESIGN
=
CARDS
+
BORDERS
+
BADGES
+
SHADOWS
+
DECORATION
```

Clean diperlakukan sebagai *quality attribute*, bukan creative direction. Editorial diperlakukan sebagai teknik mengatur ritme dan komposisi, bukan sebagai tampilan majalah, presentasi, kanvas, atau dokumen kerja.

**Avoid:**

- Komposisi ala kanvas / slide presentasi
- Magazine cosplay / halaman koran
- Grid tiga kartu seragam ala SaaS generik
- Klise wedding (emas-cream, ornamen, serif italic dekoratif)
- UI dekoratif: card, pill, badge, blur, glassmorphism, shadow-blur, WebGL, gradient

## Colors

Strategi warna: **Restrained**. Halaman tenang, foto yang menghidupkan.

```text
     OFF-WHITE
        │
        │
     CHARCOAL
        │
        │
      PHOTO
        │
        │
   occasional accent
```

- **Canvas** (`#f4f2ed`): latar baca utama — warm-neutral / off-white.
- **Ink** (`#1c1d1f`): seluruh teks di atas terang.
- **Dark Field** (`#161719`): bidang lihat — hero video, jeda atmosfer, footer. Satu section memakai terang atau gelap, tidak pernah gradien di antaranya. Perpindahan bidang adalah alat ritme, bukan dekorasi.
- **Dark Ink** (`#eceae4`): seluruh teks di atas gelap.
- **Muted** (`#61656b`): meta dan micro copy di atas terang. Jangan diturunkan lagi agar tetap terbaca.
- **Hairline** (`#ddd9d0` terang, `#2a2c30` gelap): pemisah horizontal 1px saja.
- **Accent** (`#b3352c`): sangat terbatas — satu baris aksi per bidang, maksimal ±3% viewport. Tidak pernah menjadi latar tombol, badge, atau blok.

Fotografi adalah sumber warna utama halaman, bukan warna UI.

## Typography

Filosofi: typography sebagai *brand expression*, bukan dekorasi.

```text
DISPLAY
besar
berani
sedikit condensed / grotesk

        +

BODY
neutral
tenang
sangat readable

        +

MICRO COPY
kecil
subtle
sebagai informasi
```

- **Display:** grotesk condensed, tegas, untuk judul besar dan satu kalimat positioning. Contoh nada: besar, rapat, percaya diri — bukan italic, bukan serif dekoratif.
- **Body:** netral, tenang, line-height lega, maksimal ±66 karakter.
- **Micro:** kecil, subtle, untuk lokasi, tahun, label navigasi, caption.

Aturan:

- Maksimal dua berkas webfont — halaman ini image-heavy dan tidak boleh membayar tipografi dengan kuota pengunjung.
- Satu H1 per halaman. Hierarchy H1 → H2 → H3 benar.
- Tidak ada italic display, tidak ada label yang naik menjadi judul, tidak ada keluarga font ketiga.
- Skala display memakai `clamp()` agar besar di desktop dan tetap terbaca di mobile. Body 1.0625rem di mobile naik ke 1.125rem di ≥1024px.

## Layout

Grid 12 kolom di desktop, 8 kolom di tablet, satu kolom di mobile. Kontainer maksimum 1240px; spacing 20px mobile, 32px tablet, 48px desktop. Baseline 8px; ruang sebelum heading selalu lebih lapang daripada sesudahnya (mis. 96px mobile / 144px desktop di atas judul, 40px di bawahnya).

Asimetri boleh, tetapi natural — akibat dari kebutuhan fotografi, bukan desainer memaksa grid. Pola yang diizinkan:

```text
Judul rata kiri,
foto besar bergeser kanan.
```

```text
[ FOTO ]                  Pendekatan kami
[      ]                  ───────────────
[      ]                  Direncanakan dari
                          cerita Anda...
```

```text
              [ LARGE PHOTO ]

   [ DETAIL ]                [ DETAIL ]
```

Foto boleh keluar dari kolom teks untuk memisahkan "bukti" dari "teks". Tidak ada elemen di luar kisi tanpa alasan yang bisa disebutkan.

Breakpoint: 768, 1024, 1280. Mobile adalah penggunaan primer: satu kolom, foto besar, target sentuh ≥44px, CTA lengket di bawah yang menghormati safe-area tanpa menutupi konten. Navigasi transparan di atas hero lalu solid setelah scroll, tanpa blur latar.

## Image-led Storytelling

Halaman terasa seperti mengikuti rangkaian sebuah wedding, bukan membaca daftar fitur.

Urutan `/` (11 section, satu rute): Hero → Brand Statement → Featured Wedding (`#work`) → Services (`#services`) → Process → Atmosphere Break → Visual Story → Testimonial → About/Trust (`#about`) → Final CTA → Footer.

- **Hero sinematik:** video tidak harus memenuhi viewport. Beri ruang di sekelilingnya agar terasa seperti brand website, bukan video landing page. Headline kuat di bawah video, didukung lokasi dan tautan jelajah (`Jakarta · Indonesia` + `↓ Lihat karya`).
- **Featured wedding:** satu foto besar sebagai pembuka cerita (nama pasangan + kota + tahun hanya bila data nyata), lalu rangkaian pendukung: wide, portrait, candid, detail.
- **Visual story:** urutan foto besar → kecil, diselingi satu quote pendek. Caption singkat dan faktual.
- **Services:** daftar tenang (list, bukan kartu). Di desktop, arahkan kursor ke nama layanan untuk preview image. Tanpa tabel harga kompleks; label "Mulai dari Rp…" hanya bila pemilik mempublikasikannya.
- **Process:** didominasi typography, 3–4 langkah.
- **Testimonial:** 1 unggulan, maksimal 3, hanya yang benar-benar diberikan klien — foto + quote + nama + tahun + lokasi.
- **About/Trust + Final CTA:** foto pemilik (bila ada) lalu CTA bersih.

## Media Rule: One Video, Many Photos

> **One cinematic video, many photographic moments.**

```text
HERO
└── video (tunggal, 5–15 detik, muted, loop, playsinline, poster wajib)

FEATURED WEDDING
├── photo · photo · photo
VISUAL STORY
├── photo · photo · photo · photo
SERVICES / PROCESS / TESTIMONIAL / ABOUT
├── photography atau typography
CTA / FOOTER
└── bersih, tanpa media berat
```

- Video hanya di hero. Section "break" diperlakukan sebagai jeda fotografi atmosfer, bukan video autoplay kedua — kecuali klien menyediakan footage kedua dan disepakati eksplisit.
- Semua slot foto/video kosong dirender sebagai `MediaFrame` berlabel "menunggu aset klien" dengan rasio final (`4/5`, `3/2`, `16/9`) plus `width`/`height` eksplisit anti-CLS. Saat aset tiba hanya isinya yang ditukar — layout tidak bergeser.
- Tanpa foto stok, AI, atau generate sebagai pengganti dokumentasi nyata. Kekosongan data adalah fitur anti-fabrikasi.
- Gambar responsif + lazy di bawah fold + format modern. Hero tidak boleh memblokir first render. Bila harus memilih antara animasi dan loading cepat, pilih cepat.
- Jangan mengarang nama pasangan, lokasi, tahun, jumlah acara, harga, rating, atau testimoni. Caption memakai penanda kosong yang terlihat disengaja selama data belum ada.

## Quiet Interface

Pengunjung harus lebih banyak melihat image–type–space daripada card–button–badge.

```text
Lihat karya kami  →
Jelajahi layanan  →
Mulai percakapan  →
```

Bukan tombol blok besar. CTA adalah baris teks bergaris bawah atau tautan panah dengan target sentuh minimal 44px.

- Navigasi: sederhana (Work, Services, About + WhatsApp). Anchor smooth-scroll.
- Sticky WhatsApp khusus mobile: selalu terlihat, tidak menutupi konten.
- Nomor WhatsApp hanya dari konfigurasi situs. Tanpa nomor → CTA tidak dirender (bukan `href="#"`).
- Tracking hanya via abstraksi `track()` (`lead_whatsapp_click` + lokasi CTA). Tanpa `gtag` langsung, tanpa data sensitif.
- Radius nol di semua permukaan. Tidak ada card, pill, badge, blur, shadow-blur, glassmorphism, gradient.

## Motion

Interaksi visual minimal: fade/reveal ringan, image scale/hover secukupnya, smooth anchor scroll, sticky nav subtle, interaksi portfolio yang tidak mengganggu pembacaan.

Durasi: 150–250ms untuk micro, 400–600ms untuk reveal. Tanpa parallax berlebihan, tanpa 3D/WebGL, tanpa scroll hijacking, tanpa loading screen panjang, tanpa cursor effect. Hormati `prefers-reduced-motion`: reveal menjadi tanpa gerak dan konten tetap terlihat sejak awal.

## Do's and Don'ts

### Do:

- **Do** biarkan foto menjadi desainnya: beri ruang besar, biarkan warna foto memikul halaman.
- **Do** pakai ritme editorial: besar → kecil → teks → foto → jeda. Kepadatan berselang-seling, bukan semua section sama beratnya.
- **Do** render slot kosong sebagai frame final anti-CLS berlabel jelas.
- **Do** pakai `alt` bermakna untuk foto bukti, `alt=""` hanya untuk dekoratif murni.
- **Do** pakai teks terang penuh di atas bidang gelap untuk micro copy kecil.
- **Do** jaga klaim di JSON-LD selalu terlihat di HTML. Tanpa review, rating, harga, ketersediaan, statistik, atau pasangan fiktif.

### Don't:

- **Don't** menaruh foto di dalam kartu, pill, atau badge.
- **Don't** memakai accent merah sebagai latar, blok, atau garis dekoratif.
- **Don't** menyusun layanan sebagai tiga kartu seragam atau hero ber-badge pil.
- **Don't** memakai cream-kuning-emas, serif italic display, atau hairline vertikal broadsheet.
- **Don't** menambah font ketiga, WebGL, atau animasi yang menahan konten tetap tak terlihat.
- **Don't** memakai foto stok/AI sebagai pengganti dokumentasi nyata.

(End of file)
