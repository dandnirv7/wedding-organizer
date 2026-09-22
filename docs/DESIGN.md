<!-- SEED: established with the user before implementation; re-run $impeccable document once there's code to capture the actual tokens and components. -->
---
name: Wedding Organizer — The Selects Table
description: Satu halaman editorial yang menampilkan dokumentasi wedding nyata sebagai lembar seleksi fotografer.
---

# Design System: Wedding Organizer — The Selects Table

> Sistem visual proyek wedding organizer. Kontrak *what/why* ada di `PRD.md` dan menang bila konflik. Strategi per-section halaman `/` pindah ke surface brief rute tersebut.

## Overview

**Creative North Star: "Meja Seleksi" (The Selects Table)**

Halaman ini adalah lembar kontak: frame-frame wedding asli berjejer dengan nomor, dan satu lingkaran merah menandai mana yang dipilih. Metaforanya bukan gaya majalah atau brosur hotel, tapi meja lampu di studio foto — benda yang sangat dikenal audiens ini: momen setelah pernikahan saat pasangan dan keluarga memilih foto untuk album. Pengunjung yang sama, beberapa menit sebelum membuka tautan ini, bisa jadi sedang membicarakan album itu.

Karena itu struktur visualnya teknis, bukan dekoratif. Kertas adalah bidang baca; meja gelap adalah bidang lihat. Foto tidak pernah dibingkai sebagai kartu: ia pelat persegi dengan gutter kapsel, dan diskalakan sampai memecah kolom ketika potretnya memang meminta begitu. Tidak ada ornamen emas, tidak ada hairline bergaya broadsheet, tidak ada italic display. Yang tersisa hanya dua tinta, satu tanda merah fungsional, dan data: nomor frame, lokasi, tahun.

Dunia ini dipilih saat identitas klien belum ada, sehingga halaman inilah yang kelak menjadi acuan logo, tipografi merek, dan warna mereka — bukan sebaliknya. Dunia ini juga sengaja tidak mengunci satu segmen wedding: lembar seleksi bekerja sama baiknya untuk garden intimate, ballroom, maupun akad adat, karena yang dijual adalah bukti, bukan gaya.

**Key Characteristics:**
- Foto adalah bukti, bukan tekstur; antarmuka mundur sampai hampir tidak terlihat.
- Setiap frame bernomor, dan nomor itu sekaligus navigasi dan kredit.
- Merah hanya lingkaran seleksi, kapsel yang terpilih, dan satu baris aksi per bidang — tidak pernah latar.
- Sudut tanpa radius; kedalaman datang dari skala dan batas kertas/meja, bukan bayangan.
- Komponen khas sistem ini: `FramePlate`, `SelectStrip`, `EdgeBand`, `CreditLine`, `SelectMark CTA`.

## Colors

Strategi warna: **Restrained** — dua bidang netral yang memikul semuanya, satu tanda fungsional. Warna tidak mengisi area besar; foto yang mengisi.

**The Two Grounds Rule.** Kertas dipakai untuk membaca, meja gelap untuk melihat. Satu section memakai salah satunya, tidak pernah gradien di antaranya. Perpindahan antar-bidang adalah alat ritme utama halaman.

### Primary
- **Select Red** (`#c9302b`): lingkaran grease-pencil pada frame terpilih, garis bawah `CreditLine` yang aktif, dan satu baris aksi per bidang. Kontras ±5.4:1 di atas kertas, lolos AA untuk teks dan elemen UI.

### Neutral
- **Proof Paper** (`#f2f1ec`): bidang baca utama — teks, kapsel, daftar layanan, testimoni.
- **Light Table** (`#17181a`): bidang lihat — hero, `SelectStrip`, break video sinematik, footer.
- **Ink** (`#1a1c1e`): seluruh teks di atas kertas.
- **Table Ink** (`#e9e7e1`): seluruh teks di atas meja.
- **Graphite** (`#5c6066`): nomor frame, kapsel sekunder, meta. ±5.4:1 di atas kertas; jangan diturunkan lagi agar tetap terbaca sebagai data, bukan judul.
- **Hairline Paper** (`#d9d6ce`) dan **Hairline Table** (`#2a2c30`): gutter kapsel dan pemisah strip saja, 1px, hanya horizontal.

### Named Rules
**The Red Is a Circle, Not a Brand Rule.** Select Red tidak pernah menjadi latar tombol, badge, blok dekoratif, atau garis aksen. Porsi layarnya di satu viewport tidak melebihi ±3%. Begitu merah mulai terasa seperti warna korporat, sistemnya sudah salah baca.
**The Edge Code Rule.** Amber pudar (`#8a6a2f`) hanya boleh muncul tercetak di dalam pita film `EdgeBand` — nomor roll, orientasi, tahun. Ia tidak pernah dipakai untuk teks di bidang kertas.

## Typography

**Display Font:** Source Serif 4 (variable, `opsz` aktif), fallback `Georgia, 'Times New Roman', serif`
**Body Font:** Source Serif 4 — keluarga yang sama dengan display, berat berbeda
**Label Font:** Archivo Narrow untuk nomor frame, folio section, kapsel, dan navigasi; fallback `'Arial Narrow', system-ui, sans-serif`

**Character:** Satu serif kerja yang tenang untuk semua kata yang dibaca, dan satu grotesk sempit untuk semua data. Hubungannya bukan "elegan lawan teknis" ala majalah, melainkan "kalimat lawan catatan pinggir": yang kedua selalu lebih kecil, lebih rapat, dan tidak pernah naik menjadi judul. Dua keluarga, maksimal dua berkas webfont — halaman ini image-heavy dan tidak boleh membayar tipografi dengan kuota pengunjung.

### Hierarchy
- **Display** (600, `clamp(2.55rem, 8.5vw, 5.25rem)`, line-height 1.02, letter-spacing −0.015em): nama pasangan besar di pelat utama dan satu kalimat positioning. Selalu kalimat biasa, tidak pernah title-case bertumpuk.
- **Headline** (600, `clamp(1.75rem, 4.5vw, 2.75rem)`, line-height 1.12): judul section.
- **Title** (600, 1.0625rem, sentence case): nama layanan, nama venue.
- **Body** (400, 1.0625rem di mobile naik ke 1.125rem di ≥1024, line-height 1.7, maksimal 66 karakter): paragraf cerita dan uraian layanan.
- **Label** (600, 0.75rem, tracking +0.14em; UPPERCASE hanya untuk kode frame dan folio): `04 · DIMANAH · 2025`.

### Named Rules
**The No-Broadsheet Rule.** Tidak ada italic display, tidak ada hairline vertikal antar kolom, tidak ada label monospasi ber-spasi lebar di seluruh halaman. Kalau sebuah section mulai mirip halaman koran, ubah strukturnya — jangan tambah ornamen.
**The One Family for Words Rule.** Semua kalimat memakai serif yang sama dari display sampai body. Menambah keluarga ketiga "supaya terlihat premium" adalah kesalahan, bukan penyempurnaan.

## Layout

Grid asimetris 12 kolom di desktop (rasio 7/5 dan 5/7 berselang-seling), 8 kolom di tablet, satu kolom di mobile. Kontainer maksimum 1240px; gutter 20px mobile, 32px tablet, 48px desktop. Foto boleh keluar dari gutter — itu alat utama memisahkan "bukti" dari "teks".

Satu baseline grid 8px menguasai semua posisi vertikal; tidak ada elemen yang ditempatkan di luar kisi tanpa satu alasan yang bisa disebutkan. Ritme section: 96px (mobile) / 144px (desktop) ruang di atas judul dan 40px di bawahnya — selalu lebih lapang sebelum heading daripada sesudahnya.

`SelectStrip` adalah tulang punggung kerapatan: 5 kolom di ≥1024px, 3 kolom di 768–1023px, 2 kolom di <768px. Strip tidak pernah tampil 5 kolom di ponsel — thumbnail sekecil itu menghancurkan satu-satunya hal yang halaman ini jual.

Viewport acuan desktop 1440×900, dengan variasi bidang constrained, full-bleed, dan edge-aligned agar halaman punya napas. Navigasi transparan di atas hero lalu solid setelah scroll, memakai `Table Ink` di atas `Light Table` tanpa blur latar. Mobile adalah penggunaan primer: satu kolom, foto besar, target sentuh jempol, dan CTA lengket di bawah yang menghormati safe-area tanpa menutupi kapsel. Breakpoint: 768, 1024, 1280.

## Elevation & Depth

Sistem ini datar. Kedalaman tidak dibeli dengan bayangan, melainkan dengan lapisan tonal (kertas di atas meja), kontras skala, dan gutter kapsel. Hanya satu bayangan yang diizinkan: sambungan setebal 1px di bawah pelat yang sedang diangkat dari sleeve-nya — `box-shadow: 0 1px 0 rgba(23,24,26,.18)`, disertai perpindahan 2–4px. Tidak ada blur shadow, tidak ada glassmorphism, tidak ada gradient wash.

**The Flat Sheet Rule.** Permukaan berhenti dalam keadaan datar. Bayangan hanya muncul sebagai respons state (hover, terpilih, fokus), tingginya tidak pernah lebih dari 4px, dan kaburnya nol. Header tanpa `backdrop-blur`.

## Shapes

Sudut nol di mana pun: pelat, bidang strip, panel teks, dan CTA. Satu-satunya kelengkungan yang sah adalah lingkaran seleksi — elips goresan tangan, digambar sebagai stroke SVG 3px yang tidak tertutup rapi, bukan hasil `border-radius`. Lubang perforasi pada `EdgeBand` adalah kotak kecil 2px yang tercetak, bukan kontrol interaktif. Tidak ada chip, tidak ada pill, tidak ada kartu: bila sebuah elemen punya radius sekaligus padding internal, ia bukan bagian dari sistem ini.

Bahasa bentuknya adalah lembaran — persegi panjang tegas yang ditumpuk, digeser 8–24px dari kolomnya, dan ditutup garis kapsel horizontal.

## Do's and Don'ts

### Do:
- **Do** render setiap slot foto sebagai `FramePlate` pada rasio finalnya (`4/5`, `3/2`, `16/9`) dengan `width` dan `height` eksplisit, bernomor, dan berlabel "menunggu aset klien" selama foto asli belum tiba. Saat berkas datang, hanya isinya yang ditukar — tata letak tidak boleh bergeser.
- **Do** pakai `SelectStrip` untuk semua bukti berkelompok (detail, dekor, candid) dan satu `FramePlate` besar untuk satu cerita unggulan.
- **Do** tulis data sebagai kapsel pendek: `07 · UBUD · 2025`. Nomor dan lokasi adalah bagian dari estetika, bukan chrome yang perlu disembunyikan.
- **Do** jaga satu baris aksi merah per bidang, dan buat target sentuhnya minimal 44px tinggi meskipun bentuknya hanya teks bergaris bawah.
- **Do** hormati `prefers-reduced-motion`: reveal menjadi tanpa gerak dan pelat tetap terlihat sejak awal. Durasi yang diizinkan 150–250ms untuk micro, 400–600ms untuk reveal pelat; tanpa parallax, tanpa scroll-hijack, tanpa loading screen.
- **Do** pakai `alt` bermakna pada tiap foto bukti dan `alt=""` hanya untuk pita film serta ornamen strip.
- **Do** gunakan `Table Ink` penuh untuk teks kecil di atas meja gelap, bukan `Graphite`.

### Don't:
- **Don't** menaruh foto di dalam kartu. Radius, shadow, dan padding internal adalah bahasa boilerplate lama yang justru ditolak brief ini.
- **Don't** memakai Select Red sebagai latar tombol, badge, atau blok.
- **Don't** mengulang susunan boilerplate: grid layanan tiga kartu seragam, hero ber-badge pil, header transparan ber-blur.
- **Don't** memakai cream-kuning-emas, serif display italic, atau hairline broadsheet. Rendition itu adalah default "wedding editorial" di mana pun; hindari kecuali klien resmi memakainya sebagai identitas.
- **Don't** mengarang nama pasangan, lokasi, tahun, jumlah acara, harga, rating, atau testimoni. Selama data klien belum ada, `CreditLine` memakai penanda kosong yang terlihat sengaja.
- **Don't** memakai placeholder foto AI, stok, atau hasil generate. Slot kosong adalah fitur, bukan kegagalan.
- **Don't** menambah keluarga font ketiga, efek WebGL, atau animasi yang menahan konten tetap tak terlihat.
