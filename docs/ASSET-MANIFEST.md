# Daftar kebutuhan aset — wedding-organizer `/`

Setiap slot di bawah sudah punya posisi, rasio, dan ukuran piksel final di halaman. Saat
aset datang, **hanya isinya yang ditukar** — isi `src/config/site.ts` dan ganti properti
`src` pada komponen; layout tidak bergeser dan tidak ada CLS.

Kolom "Label di halaman" adalah teks yang sekarang tampil pada bingkai kosong.

| # | Section | Slot | Rasio | Ukuran final (px) | Orientasi | Label di halaman |
|---|---|---|---|---|---|---|
| 1 | Hero | frame utama | 16:9 | 1600 × 900 | landscape | `00 · menunggu aset klien` |
| 2 | Featured wedding | cerita utama (seleksi) | 3:2 | 1400 × 933 | landscape | `01 · menunggu aset klien` |
| 3 | Featured wedding | pelat pendukung | 4:5 | 960 × 1200 | potret | `02 · menunggu aset klien` |
| 4 | Layanan | preview "Perencanaan penuh" | 4:5 | 960 × 1200 | potret | `01a` |
| 5 | Layanan | preview "Koordinasi hari-H" | 4:5 | 960 × 1200 | potret | `01b` |
| 6 | Layanan | preview "Pernikahan intimate" | 4:5 | 960 × 1200 | potret | `01c` |
| 7 | Layanan | preview "Dukungan sebagian" | 4:5 | 960 × 1200 | potret | `01d` |
| 8 | Video break | footage sinematik | 16:9 | 1600 × 900 | landscape | `05 · menunggu video klien` |
| 9–13 | Visual story | detail 1–5 | 4:5 · 1:1 · 3:2 · 4:5 · 3:2 | 800×1000 · 800×800 · 900×600 · 800×1000 · 900×600 | campur | `03/04/06/07/08 · menunggu aset klien` |
| 14 | About / trust | foto tim | 4:5 | 960 × 1200 | potret | `09 · menunggu foto tim` |
| 15 | Final CTA | pelat penutup | 16:9 | 1600 × 900 | landscape | `10 · menunggu aset klien` |

Jumlah: 14 foto + 1 video. Foto layanan (slot 4–7) hanya tampil di desktop ≥1024px;
di mobile pelat yang sama muncul di dalam barisnya masing-masing, jadi tidak perlu aset
berbeda. Boleh 1 foto dipakai untuk beberapa slot selama rasiosya aman setelah dipotong.

## Video (slot 8)

- 5–15 detik, tanpa audio, tidak autoplay sebelum ditekan; poster statis wajib.
- Format: MP4 H.264, ≤ 4 MB, atau poster JPG 1600 × 900 bila footage belum ada.
- Bila tidak ada footage: hapus section Video Break dari `src/pages/index.astro`, jangan
  ganti dengan animasi atau stok video.

## Data teks yang masih menunggu klien (`src/config/site.ts`)

| Field | Isi sekarang | Catatan |
|---|---|---|
| `name` | `Nama Wedding Organizer` | placeholder berlabel — ganti nama resmi |
| `tagline` | `Tagline resmi menunggu materi klien` | dipakai di folio footer + OG |
| `description` | teks placeholder | untuk meta description + OG + llms.txt |
| `contact.whatsapp` | `''` (kosong) | **selama kosong, semua CTA tidak dirender** dan section akhir menampilkan baris "Aksi WhatsApp belum aktif" — bukan tautan mati |
| `socials.instagram` | `''` (kosong) | baris Instagram tidak dirender di footer |
| `serviceAreas` | `[]` (kosong) | baris area tidak dirender di footer |
| `SITE_URL` (env) | wajib diisi | build gagal bila kosong |

## Butir FAQ yang ditandai "menunggu konfirmasi"

Tiga jawaban di `src/pages/_wedding/copy.ts` → `copy.faq.items` ditandai `pending: true`
dan dirender dengan label "jawabannya menunggu konfirmasi klien": lead time, biaya, dan
area layanan. Set menjadi `false` (atau tulis ulang jawabannya) setelah klien mengonfirmasi.

## Yang tidak akan pernah kami isi otomatis

Testimoni, jumlah wedding, tahun berdiri, harga, nama pasangan, lokasi, dan tahun pada
`CreditLine`. Semuanya menunggu materi atau izin tertulis; kosong = tidak dirender,
bukan dikarang (lihat `PRODUCT.md`, "bukti nyata atau slot kosong").

## Catatan teknis gambar

- Sertakan file asli beresolusi ≥ ukuran final di atas; pipeline Astro (`astro:assets`
  via sharp) yang membuat varian responsif + AVIF/WebP.
- Tidak ada foto stok, AI-generated, atau comp sebagai pengganti dokumentasi nyata.
- Kartu berbagi (OG 1200 × 630) dirender otomatis dari `src/pages/og/[...slug].png.ts`
  dengan bidang gelap + garis merah; tipografi kartu memakai Inter TTF karena canvas
  server tidak membaca woff2 — wajah halaman tetap Source Serif 4 + Archivo Narrow.
