# Asset Manifest — `/` (wedding organizer)

Daftar ini adalah **permintaan aset ke klien**. Semua slot di halaman sudah punya bentuk final:
rasio, dimensi piksel, dan posisinya tidak akan berubah saat aset tiba — yang ditukar hanya isinya.
Karena itu layout tidak perlu dibangun ulang setelah foto/video masuk, dan halaman tidak bergeser
(CLS nol) bahkan saat masih kosong.

Aturan yang berlaku untuk semua baris:

- **Foto dokumentasi nyata milik klien saja.** Tanpa foto stok, tanpa hasil AI, tanpa render
  pengganti. Slot yang belum terisi dirender sebagai bingkai kosong berlabel `menunggu aset klien`.
- **Setiap foto butuh teks alternatif** (isi `alt`) — satu kalimat deskriptif Bahasa Indonesia, bukan
  daftar kata kunci.
- **Setiap wajah pasangan/keluarga butuh izin tayang tertulis.** Tanpa izin, slot tetap kosong dan
  halaman sudah benar.
- Kirim file apa adanya (JPEG/WebP kualitas penuh atau MP4). Optimasi, konversi WebP, dan pemotongan
  responsif dikerjakan di sisi build, bukan oleh klien.
- Angka rasio yang tercetak di bingkai adalah desimal pembulatan dua angka dari dimensi final
  (1920×1080 tampil sebagai `1.78:1`, 1400×900 sebagai `1.56:1`) — nama 16:9 / 14:9 di dokumen ini
  adalah nama praktis rasio yang sama.

Lokasi letak file: `public/assets/wedding/<id>.<ekstensi>` (mis. `public/assets/wedding/S1.jpg`).
Komponen menerima path string, jadi jalur ini langsung tampil tanpa perubahan kode. Bila nanti
dibutuhkan varian lebar responsif otomatis, itu perubahan terpisah (pindah ke `astro:assets`).

## 1 · Bidang utama hero — `H1`

| Field | Nilai |
| --- | --- |
| Render di | `MediaStage` di blok 01 Hero (sisi kanan sumbu) |
| Rasio | 16:9 |
| Dimensi final | **1920 × 1080 px** |
| Yang dibutuhkan | **Salah satu**: potret hari-H terbaik, **atau** klip video 8–12 detik |
| Video | MP4 H.264, tanpa audio, tanpa teks yang dibakar dalam gambar, loop mulus, aksi terbaca tanpa suara; sertakan poster 1920×1080 juga |
| Alternatif teks | wajib, untuk poster/cover |
| Catatan | Bidang ini media-agnostic: hari ini bingkai kosong, besok poster, lusa video — kotaknya tidak berubah. Video selalu opsional; pesan utama tetap terbaca lewat teks. |

## 2 · Layanan (blok 03) — `S1`–`S4`

Empat pelat portrait 4:5, satu per kategori layanan. Sisi kiri teks, sisi kanan pelat, selang-seling.

| Id | Dimensi final | Rasio | Isi yang dibutuhkan | Pasangkan dengan |
| --- | --- | --- | --- | --- |
| `S1` | 1200 × 1500 px | 0.8:1 | Persiapan Full Wedding Planning — meeting, moodboard, rundown di meja | layanan 1 |
| `S2` | 1200 × 1500 px | 0.8:1 | Koordinasi hari-H — tim di lapangan, radio/tally, arus tamu | layanan 2 |
| `S3` | 1200 × 1500 px | 0.8:1 | Rangkaian adat — siraman, sungkeman, prosesi | layanan 3 |
| `S4` | 1200 × 1500 px | 0.8:1 | Detail Custom Wedding — dekor non-standar, venue tak lazim, format intimate | layanan 4 |

Teks kredit di bawah tiap pelat terambil otomatis dari `content.ts` (id + catatan pendek), jadi
kirim juga satu baris keterangan per foto kalau ingin kreditnya lebih spesifik.

## 3 · Real Weddings (blok 04) — `W1a`–`W3b`

Tiga cerita, masing-masing **sepasang** pelat landscape 14:9: yang satu "di balik layar", yang satu
"momen yang diingat".

| Id | Dimensi final | Rasio | Isi yang dibutuhkan |
| --- | --- | --- | --- |
| `W1a` / `W1b` | 1400 × 900 px | 1.56:1 | persiapan Cerita 1 / momen Cerita 1 |
| `W2a` / `W2b` | 1400 × 900 px | 1.56:1 | persiapan Cerita 2 / momen Cerita 2 |
| `W3a` / `W3b` | 1400 × 900 px | 1.56:1 | persiapan Cerita 3 / momen Cerita 3 |

Bersama foto, tiap cerita butuh data yang sekarang **sengaja kosong** (tidak dikarang):

```ts
couple:   // nama pasangan — hanya dengan izin tertulis
concept:  // satu baris konsep, mis. "akad pagi, resepsi garden"
venue:    // nama venue
location: // kota
```

Kalau satu cerita belum lengkap datanya, kirim fotonya saja: halaman akan tetap menampilkan status
menunggu alih-alih mengarang nama pasangan.

## 4 · Penutup — `F1`

| Field | Nilai |
| --- | --- |
| Render di | blok 02 Introduction (bercaption) **dan** blok 10 Final CTA (tanpa caption) |
| Rasio | 1.4:1 |
| Dimensi final | **1400 × 1000 px** |
| Isi yang dibutuhkan | Tim saat acara berjalan — orang bekerja, bukan pose tim |
| Alternatif teks | wajib |

Satu file dipakai dua tempat, jadi ini slot dengan nilai tertinggi per usaha: kalau hanya satu foto
tambahan yang bisa dikirim, kirim `F1`.

## Ringkasan jumlah

| Kelompok | Slot | Rasio | Prioritas |
| --- | --- | --- | --- |
| Hero `H1` | 1 | 16:9 | 1 — paling dilihat |
| Penutup `F1` | 1 | 1.4:1 | 2 — muncul dua kali |
| Layanan `S1`–`S4` | 4 | 4:5 | 3 |
| Cerita `W1a`–`W3b` | 6 | 14:9 | 4 (butuh izin pasangan) |
| **Total** | **12 slot foto/video** | | |

## Aset non-foto yang juga ditunggu

Bukan file, tapi tanpa ini halaman tidak boleh tayang penuh — semuanya sekarang dirender sebagai
status menunggu, bukan karangan:

| Yang dibutuhkan | Mengisi | Sumber saat ini |
| --- | --- | --- |
| Nama WO, tagline, logo/favicon, email, Instagram, nomor WhatsApp, area layanan | `src/config/site.ts` | placeholder berlabel |
| Konfirmasi 5 kategori layanan yang benar-benar ditawarkan | blok 03 | `docs/PRODUCTS.md` §11 — belum disetujui |
| Mode harga: publik (`'public'`) atau konsultasi (`'consultation'`) | blok 07 | `siteConfig.wedding.packagesMode` = `'consultation'` |
| Nama paket, "cocok untuk", dan tarif resmi | blok 07 Mode A | `null` |
| 5 jawaban FAQ yang masih kebijakan klien | blok 09 | `null` → diarahkan ke chat |
| Testimoni asli + izin pakai nama | blok 08 | array kosong |
| Tahun berdiri / jumlah wedding (kalau mau ditampilkan) | mana pun | tidak ada angka yang dikarang |

## Cara menukar aset

1. Letakkan file di `public/assets/wedding/` dengan nama id-nya.
2. Isi `src` (dan `alt`) pada `FramePlate` / `MediaStage` di `src/pages/index.astro`, atau sambungkan
   dari `content.ts` kalau field-nya sudah tersedia.
3. Jalankan `pnpm check && pnpm build && SITE_URL=<domain> pnpm assert:dist`.
4. Cek visual pada 1440 dan 390 sebelum mengirim ke klien.

Jangan ubah angka `width`/`height`/rasio di `src/pages/_wedding/content.ts` tanpa menyesuaikan
permintaan di dokumen ini — keduanya adalah kontrak yang sama.
