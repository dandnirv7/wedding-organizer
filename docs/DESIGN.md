---
name: Wedding Organizer — Rundown Hari-H
description: Satu halaman yang menayangkan dokumentasi wedding nyata sebagai lembar run-of-show / call sheet produksi.
---

# Design System: Wedding Organizer — Rundown Hari-H

> Sistem visual proyek wedding organizer, versi 2 (dunia "Rundown Hari-H", seed `f347f02d`, keputusan `6ba3275f`). Kontrak *what/why* ada di `PRD.md` dan menang bila konflik. Strategi per-section halaman `/` ada di surface brief rute tersebut (`.impeccable/surfaces/src-pages-index-astro.md`). Sumber kebenaran token: blok `@theme` di `src/styles/global.css`; cermin machine-readable-nya `DESIGN.md` di root proyek dan sidecar `.impeccable/design.json`. Bila angka di dokumen ini bertentangan dengan `@theme`, `@theme` yang benar.
>
> Versi 1 ("Meja Seleksi", seed `c37c4509`) **digantikan**, bukan digabung. Register kertas hangat + serif + lingkaran merah grease-pencil tidak dipakai lagi; ia hanya tinggal sebagai anti-referensi (lihat Do's and Don'ts).

## Overview

**Creative North Star: "Lembar Rundown di Atas Kertas Dingin" (The Call Sheet on Cool Paper)**

Halaman ini bukan brosur wedding yang kebetulan berisi informasi; ia dokumen kerja WO itu sendiri, dicetak di kertas off-white dingin dan diserahkan ke calon pengantin. Setiap section adalah satu baris rundown: jam di gutter kiri, nama cue di bawahnya, isi barisnya di kanan. Yang ingin dirasakan pembaca adalah ketenangan yang sama seperti saat membaca jadwal yang sudah ditulis orang yang kompeten — bukti eksekusinya adalah tata letaknya, bukan foto hero-nya.

Karena itu strukturnya teknis, bukan dekoratif. Satu bidang kertas memikul seluruh halaman; tinta penuh hanya muncul sebagai pita tercetak untuk kop, baris konfirmasi, dan colophon — bukan sebagai warna halaman kedua yang berselang-seling per section. Foto tidak pernah dibingkai sebagai kartu: ia pelat bersudut nol dengan baris kapsel, dan digeser keluar kolom ketika potretnya memang cue utama. Tidak ada ornamen bunga, tidak ada emas-krem, tidak ada italic broadsheet, tidak ada blur. Yang tersisa hanya dua tinta, satu stabilo dengan kuota ketat, satu hijau konfirmasi, dan data: jam, kegiatan, penanggung jawab, durasi.

Dunia ini dipilih saat identitas klien belum ada, sehingga halaman inilah yang kelak menjadi acuan logo, tipografi, dan warna mereka — bukan sebaliknya. Ia juga sengaja tidak mengunci satu segmen wedding: call sheet bekerja sama baiknya untuk garden intimate, ballroom, maupun akad adat, karena yang dijual adalah bukti dan keteraturan, bukan gaya.

**Key Characteristics:**
- Baris adalah grid: gutter (jam + cue) dan isi, di setiap section, tanpa kerangka halaman lain.
- Foto adalah bukti, bukan tekstur; antarmuka mundur sampai hampir tidak terlihat.
- Stabilo tepat dua kali per halaman; sisanya hitam di atas kertas.
- Ketiadaan dirancang serius: pelat kosong berlabel "menunggu aset klien" dengan rasio dan dimensi piksel final.
- Komponen khas sistem ini: `SheetKop`, `FramePlate`, `FaqSheet`, `Colophon`, dan `WaButton` (`line` / `band` / `floating`).

## Colors

Strategi warna: **restrained** — dua bidang netral yang memikul semuanya, satu penanda fungsional, satu penanda status. Warna tidak mengisi area besar; foto yang mengisi.

### Primary
- **Stabilo Cue** (`#dbe24a`, token `select`): pita yang dicetak *di belakang* jam cue aktif, dan warna teks pada satu baris konfirmasi. Kontras ±12:1 terhadap tinta, jadi ia membaca sebagai stabilo di atas kertas gelap, bukan sebagai isyarat lampu.
- **Hijau Konfirmasi** (`#2f6b57`, token `film`): satu tick hijau pada pelat cue utama, garis bawah hover/fokus pada pertanyaan FAQ, dan caret teks. Artinya "ini sudah pasti", bukan "klik saya". ±5,5:1 di atas kertas.

### Neutral
- **Kertas Dingin** (`#f0f1ee`, token `paper`): bidang baca utama — seluruh isi halaman.
- **Kertas Dalam** (`#e2e4de`, token `paper-deep`): isian pelat di atas kertas; selembar yang lebih padat dari halaman tempatnya duduk.
- **Tinta Cetak** (`#1b1d1b`, token `ink` / `table`): seluruh teks di atas kertas, sekaligus dasar kop, baris konfirmasi, dan colophon. ±15:1 terhadap kertas.
- **Tinta Dalam** (`#141614`, token `table-deep`): isian pelat di dalam pita tinta.
- **Tinta Redup** (`#5b6059`, token `ink-muted`): label, folio, nama cue, dan data sekunder di atas kertas. ±5,6:1 — jangan diturunkan lagi supaya tetap terbaca sebagai data, bukan judul.
- **Tinta Meja** (`#eef0ea`) dan **Abu Meja** (`#9aa096`): dua peran yang sama, dibalik, di dalam pita tinta.
- **Hairline** (`#c9cdc5`) dan **Hairline Meja** (`#33372f`): satu-satunya alat struktur — garis 1px antar baris, tepi pelat, dan baris kapsel. Ini garis, bukan teks: kontrasnya terhadap kertas ±1,2:1 dan memang tidak boleh dibaca sebagai konten.

### Named Rules
**The Two Marks Rule.** Stabilo dipakai tepat dua kali per halaman: pita cue aktif di gutter, dan satu baris aksi konfirmasi. Tidak pernah jadi border, latar blok, warna judul, atau efek hover. Kalau muncul benda kuning ketiga, salah satu dari dua pertama harus dicabut.
**The No-Romance Rule.** Tidak ada krem, emas, terracotta, blush, atau pastel wedding. Kehangatan datang dari foto pasangan sendiri, bukan dari palet.
**The One Ground Rule.** Kertas adalah halaman; tinta adalah pita tercetak untuk kop, konfirmasi, dan colophon. Section tidak bergantian kertas/gelap — dulu itu alat ritme utama, sekarang ritmenya datang dari hairline dan gutter.

## Typography

**Display / Data Font:** Anybody Variable (condensed, sumbu lebar aktif), fallback `'Arial Narrow', system-ui, sans-serif`
**Body Font:** Familjen Grotesk Variable, fallback `'Helvetica Neue', system-ui, sans-serif`
**Label / Mono Font:** tidak ada keluarga ketiga; Anybody pada `font-stretch` 66–82% mengerjakan seluruh peran data.

**Character:** pasangan ini adalah formulir dan tulisan tangannya. Data dicetak sempit, tinggi, kapital, dan rata secara numerik supaya jadwal terbaca sekali pandang; prosa dicetak longgar dan tenang supaya benar-benar dibaca di HP. Dua keluarga, maksimal dua berkas webfont — halaman ini image-heavy dan tidak boleh membayar tipografi dengan kuota pengunjung.

### Hierarchy
- **Display** (700, `clamp(2.1rem, 6.6vw, 4.25rem)`, line-height 0.98, letter-spacing −0.01em, `font-stretch` 70%, KAPITAL, maks 15ch): tepat satu per halaman — H1 di baris 00.00, dan H1 halaman 404.
- **Headline** (600, `clamp(1.65rem, 4.4vw, 2.625rem)`, line-height 1.12, letter-spacing −0.02em, maks 26ch): judul setiap section, di wajah baca.
- **Item** (700, 1.0625rem, line-height 1.28, `font-stretch` 82%): nama entitas — layanan, langkah alur, kegiatan rundown.
- **Body** (400, 1.0625rem → 1.125rem di ≥768px, line-height 1.68, maks 62ch): paragraf sikap, uraian layanan, jawaban FAQ.
- **Label / Strip** (600, 0.75rem, tracking +0.1em, KAPITAL, `font-stretch` 75%, tabular): atom data dan catatan.
- **Folio** (700, 0.6875rem, tracking +0.2em, `font-stretch` 66%, KAPITAL): kode tepi — nomor lembar, dimensi pelat.
- **Cue Time** (700, 1.125rem, line-height 1, `font-stretch` 70%, tabular): jam gutter, suara data paling keras di halaman.

### Named Rules
**The Face Follows Function Rule.** Kalau string itu nilai (jam, jumlah, dimensi, nomor, nama cue) → Anybody condensed kapital. Kalau string itu kalimat yang akan dibaca manusia → Familjen Grotesk. Kalimat dikapitalkan-condensed adalah kegagalan, bukan gaya.
**The Whole Step Rule.** Ukuran tipe bergerak pada anak tangga token yang utuh; tidak ada ukuran tengah yang muncul di tengah build "supaya muat".
**The No-Kicker Rule.** Judul tidak diberi eyebrow/kicker. Kata cue di gutter sudah menjalankan peran itu, dan mengulang label section di atas H2 adalah dekorasi, bukan struktur.

## Layout

Satu lembar, `max-width` 1180px, `padding-inline` `clamp(1.25rem, 4vw, 2rem)`, rata tengah. Di dalamnya satu-satunya grid adalah **baris cue**: `grid-template-columns: var(--gutter) minmax(0, 1fr)` dengan `--gutter: clamp(4.25rem, 13vw, 8.5rem)`, hairline 1px di atas tiap baris dan di bawah baris terakhir, `padding-block` `clamp(1.75rem, 4vw, 2.75rem)`.

Di bawah 768px baris runtuh jadi satu kolom dan gutter berubah jadi header inline (jam dan nama cue sebaris), jadi jadwal tetap terbaca atas-ke-bawah tanpa layout kedua. Selisih ritme vertikal antar isi baris: `clamp(1rem, 2.5vw, 1.75rem)`.

Kop menempel di atas dokumen; pada layar sempit baris chip cue turun ke jalurnya sendiri (`flex-wrap`) dan menggulir mendatar tanpa scrollbar — bukan melebarkan halaman. Baris ber-anchor memakai `scroll-mt-28` supaya lompatan chip mendarat di bawah kop. Pelat bukti keluar dari kolomnya dengan dua cara: pelat hero memakai `.plate-bleed` (≥1024px) sehingga tepi kanannya menyentuh batas luar lembar — geserannya persis sebesar padding inline lembar, jadi tidak pernah melebarkan viewport — sedangkan pelat unggulan dan pelat gerak menarik `lg:-ms-6` ke dalam gap kolom sebagai penanda cue besar.

`FramePlate` adalah tulang punggung kerapatan. Lingkup kerja (11.30) adalah ledger berpelisir: dua layanan pertama memecah barisnya 7fr/5fr sehingga pelatnya cukup besar untuk dibaca, dua layanan berikutnya baris teks penuh. Detail (14.30) memakai `.detail-mosaic`: kolom tak sama lebar (≥1024px span 12-kolom 4/3/5 lalu pita kedua bergeser ke kolom 5 dan menyisakan kertas kosong di kiri), semua pelat rata bawah sehingga tepi bergerigi ada di atas; 768–1023px dua kolom tak sama (7fr/5fr), <640px satu kolom dengan urutan DOM = urutan baca. Rasio tiap pelat tetap dikunci pada dimensi finalnya (anti-CLS).

Viewport acuan desktop 1440×900. Mobile adalah penggunaan primer: satu kolom, target sentuh minimal 44px, dan satu baris aksi lengket di bawah yang menghormati `env(safe-area-inset-bottom)` dengan `sticky-reserve` menyiapkan ruangnya agar tidak menutupi kapsel pelat terakhir. Breakpoint: 768, 1024, 1200.

## Elevation & Depth

Sistem ini datar tanpa pengecualian. Tidak ada satu pun `box-shadow` di `@theme` maupun komponen; kedalaman murni tonal — kertas `#f0f1ee` di bawah pelat `#e2e4de`, tinta `#1b1d1b` di bawah pelat `#141614` — ditambah hairline 1px yang berperilaku seperti garis cetak. Blur, `backdrop-filter`, dan glass tidak ada: halaman harus bertahan di koneksi lambat dan layar kecil.

**The Rules Not Shadows Rule.** Pemisah digambar dengan hairline atau langkah tonal. Kalau sebuah komponen butuh bayangan supaya terlihat terpisah, bidang dasarnya yang salah — perbaiki warnanya, jangan tambahkan bayangan.

## Shapes

Sudut nol di mana pun: baris, pelat, kapsel, baris aksi, tautan. Satu-satunya kelengkungan yang sah adalah tanda yang *digambar*, bukan diketik: sepasang kurung siku yang memeluk jam cue (`::before`/`::after` pada `.cue-mark`, garis 7px), empat tick registrasi bergaris putus-putus di dalam pelat kosong (inset 8px), dan satu path tick hijau. Tidak ada chip, tidak ada pill, tidak ada kartu, tidak ada badge, tidak ada lingkaran seleksi, tidak ada ornament bunga. Border selalu 1px dan selalu token hairline — tidak pernah garis berwarna tebal, tidak pernah bingkai 2px mengelilingi konten.

Bahasa bentuknya adalah lembar kerja: persegi panjang tegas yang ditumpuk, digeser keluar kolomnya, dan ditutup satu baris kapsel horizontal.

## Components

Perilaku per komponen ada di `DESIGN.md` root dan sidecar-nya; ini peran yang perlu diketahui lintas dokumen:

- **`SheetKop`** — kepala lembar sticky: nama WO sebagai folio + chip cue sebagai navigasi + satu aksi. Chip adalah tautan, bukan tombol: tanpa latar, tanpa radius, garis bawah stabilo saat hover/fokus.
- **`FramePlate`** — slot foto/video pada rasio final dengan `width`/`height` eksplisit (anti-CLS). Prop `tick` menandai satu cue yang sudah dikonfirmasi; tanpa `src`, yang dirender adalah pelat kosong berlabel.
- **`WaButton`** — tiga varian: `line` (teks beranak panah di kertas), `band` (baris aksi tinta rata kiri, satu-satunya stabilo kedua), `floating` (band yang sama, hanya <768px). Tanpa nomor di `siteConfig`, komponen tidak merender apa pun.
- **`FaqSheet`** — `<details name="faq">` eksklusif tanpa JavaScript; penanda `+`/`−` digambar CSS.
- **`Colophon`** — kaki tinta: nama, kontak yang benar-benar ada, area layanan, sitemap, llms.txt. Tanpa kolom navigasi ala SaaS.

## Motion

Satu gerak khas, dikoreografi sekali: penanda stage manager. Saat sebuah baris masuk posisi baca, kurung siku menutup dan pita stabilo menyala di belakang jamnya, lalu padam — `animation-timeline: view()` pada rentang `cover 18% → cover 46%`, di dalam `prefers-reduced-motion: no-preference` dan `@supports (animation-timeline: view())`.

Baris tetap 100% terbaca tanpa JavaScript maupun animasi; tidak ada konten yang ditahan tak-terlihat sampai di-reveal. Di browser tanpa scroll-driven animation, cue pertama menyala statis lewat fallback `@supports not`. `prefers-reduced-motion: reduce` mematikan seluruh durasi dan mengembalikan `scroll-behavior: auto`.

**The One Marker Rule.** Satu gerak per halaman, milik gutter. Tidak ada hover effect per elemen, tidak ada parallax, tidak ada scroll-hijack, tidak ada loading screen, tidak ada WebGL.

## Do's and Don'ts

### Do:
- **Do** render setiap section sebagai baris cue dengan jam + nama cue di gutter, dan biarkan ia runtuh jadi header inline di bawah 768px.
- **Do** render setiap slot foto sebagai `FramePlate` pada rasio finalnya (`16/9`, `3/2`, `4/5`) dengan `width` dan `height` eksplisit, bernomor, dan berlabel "menunggu aset klien" selama foto asli belum tiba. Saat berkas datang, hanya isinya yang ditukar — susunan tidak boleh bergeser.
- **Do** hitung ulang stabilo setiap kali menambah CTA: kuotanya dua per halaman, dan yang kedua adalah baris konfirmasi.
- **Do** tulis data sebagai baris, bukan badge: jam, kegiatan, PIC, durasi — `cue-time` + `h-item` + `cue-meta`.
- **Do** labeli nilai ilustratif: jam gutter dan baris rundown selalu tercetak berdampingan dengan catatan `contoh urutan — susunan final disusun dari rencana kalian`.
- **Do** jaga target interaktif minimal 44px (`cue-chip`, `min-h-11` pada band, `summary` FAQ).
- **Do** hilangkan CTA WhatsApp sepenuhnya bila nomor belum diisi, dan cetak alasannya di baris konfirmasi — bukan `href="#"`.
- **Do** pakai `alt` bermakna pada tiap foto bukti, `role="img"` + `aria-label` pada pelat kosong, dan `aria-hidden` hanya pada tanda dekoratif.
- **Do** hormati `prefers-reduced-motion`: penanda cue tidak berjalan, halaman tetap utuh.

### Don't:
- **Don't** memakai serif, palet krem/emas/terracotta, lingkaran seleksi merah, atau register kertas-hangat versi 1.
- **Don't** menaruh foto di dalam kartu. Radius, shadow, dan padding internal adalah bahasa boilerplate lama yang justru ditolak brief ini.
- **Don't** menambah bayangan, blur, glassmorphism, gradient text, atau radius sudut mana pun.
- **Don't** mengulang susunan default kategori: hero foto layar penuh + judul serif di tengah + tiga kartu layanan seragam + carousel testimoni ber-rating.
- **Don't** menempatkan kicker/eyebrow di atas judul, atau nomor section yang tidak membawa informasi.
- **Don't** mengarang nama pasangan, lokasi, tahun, jumlah acara, harga, rating, area layanan, atau testimoni. Selama data klien belum ada, yang tampil adalah baris berlabel "menunggu" — dan itu disengaja.
- **Don't** memakai placeholder foto AI, stok, atau hasil generate sebagai pengganti dokumentasi nyata.
- **Don't** menambah keluarga font ketiga, motion kedua, lightbox, carousel, atau fetching data di sisi klien.
