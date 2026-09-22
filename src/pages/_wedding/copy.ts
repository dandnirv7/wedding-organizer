import type { ServiceItem } from './serviceTypes';

/**
 * Copy tangan `/`. Semua teks yang tayang ada di sini supaya penggantian data
 * klien tidak menyentuh markup.
 *
 * Aturan anti-fabrikasi (PRODUCT.md): tidak ada nama pasangan, tahun, jumlah
 * wedding, testimoni, harga, atau area layanan karangan. Butir yang butuh data
 * klien ditandai `pending` dan dirender sebagai baris "menunggu".
 */
export const services: (ServiceItem & { desc: string })[] = [
  {
    no: '01',
    name: 'Perencanaan penuh',
    desc: 'Konsep, anggaran, timeline, dan urutan vendor disusun bersama sejak awal sampai siap jalan.',
    waLabel: 'Tanya perencanaan penuh',
    plateNo: '01a',
    plateWidth: 960,
    plateHeight: 1200,
  },
  {
    no: '02',
    name: 'Koordinasi hari-H',
    desc: 'Rundown dipegang di lapangan supaya kalian menjalani hari itu tanpa memegang daftar.',
    waLabel: 'Tanya koordinasi hari-H',
    plateNo: '01b',
    plateWidth: 960,
    plateHeight: 1200,
  },
  {
    no: '03',
    name: 'Pernikahan intimate',
    desc: 'Undangan kecil dengan perhatian penuh pada detail yang tetap terbaca di foto.',
    waLabel: 'Tanya pernikahan intimate',
    plateNo: '01c',
    plateWidth: 960,
    plateHeight: 1200,
  },
  {
    no: '04',
    name: 'Dukungan sebagian',
    desc: 'Sudah punya vendor dan rencana sendiri? Kami masuk pada titik yang kalian butuhkan saja.',
    waLabel: 'Tanya dukungan sebagian',
    plateNo: '01d',
    plateWidth: 960,
    plateHeight: 1200,
  },
];

export const frames = {
  hero: { no: '00', width: 1600, height: 900, caption: 'frame utama lembar' },
  featured: { no: '01', width: 1400, height: 933, caption: 'cerita unggulan' },
  support: { no: '02', width: 960, height: 1200, caption: 'pelat pendukung' },
  video: { no: '05', width: 1600, height: 900, caption: 'video sinematik' },
  closing: { no: '10', width: 1600, height: 900, caption: 'penutup lembar' },
  team: { no: '09', width: 960, height: 1200, caption: 'foto tim' },
} as const;

/** Lima pelat detail: rasio bervariasi supaya strip tidak jadi grid seragam. */
export const storyFrames = [
  { no: '03', width: 800, height: 1000, caption: 'detail' },
  { no: '04', width: 800, height: 800, caption: 'detail' },
  { no: '06', width: 900, height: 600, caption: 'detail' },
  { no: '07', width: 800, height: 1000, caption: 'detail' },
  { no: '08', width: 900, height: 600, caption: 'detail' },
] as const;

export const copy = {
  sheet: {
    title: 'Lembar Seleksi Dokumentasi Wedding',
    description:
      'Satu halaman editorial: dokumentasi wedding nyata disusun sebagai satu cerita, lengkap dengan lingkup layanan, proses, dan kontak WhatsApp yang tinggal kirim.',
    nav: [
      { href: '#work', label: 'Hasil' },
      { href: '#services', label: 'Layanan' },
      { href: '#process', label: 'Proses' },
      { href: '#faq', label: 'Tanya' },
      { href: '#about', label: 'Tentang' },
    ],
  },
  hero: {
    folio: 'lembar 01 — seleksi dokumentasi',
    title: 'Pernikahan yang terasa sepenuhnya seperti kalian.',
    lede: 'Lembaran ini berisi bukti kerja: frame yang benar-benar terdokumentasi, lingkup layanan, dan proses yang berjalan. Setelah membacanya, kalian tahu persis apa yang perlu ditanyakan.',
    action: 'Lihat lembaran lengkap',
  },
  statement: {
    label: 'Sikap',
    headline: 'Foto adalah bukti. Kami menyusunnya sebagai satu cerita.',
    body: 'Setiap frame di halaman ini bernomor seperti lembar seleksi studio: ada nomor pelat, rasio, dan kredit lokasi. Susunan, ritme, dan ukurannya sudah final sejak sekarang — saat dokumentasi kalian tiba, hanya isinya yang ditukar.',
  },
  featured: {
    label: 'Unggulan',
    headline: 'Satu cerita, dibaca berurutan',
    pending:
      'Cerita lengkapnya kami susun dari dokumentasi yang dikirim: persiapan, upacara, resepsi, dan detail yang biasa terlewat.',
  },
  services: {
    label: 'Lingkup kerja',
    headline: 'Yang bisa kalian serahkan ke kami',
    note: 'Harga dikirim setelah konsep, tanggal, dan jumlah tamu jelas. Tidak ada tabel paket di halaman ini.',
  },
  process: {
    label: 'Alur',
    headline: 'Empat langkah, tanpa tahap yang membuat kalian menebak',
    steps: [
      { no: '01', name: 'Kenalan', desc: 'Ceritakan visi, tanggal, dan batasan. Obrolan pertama tanpa komitmen.' },
      { no: '02', name: 'Rancang', desc: 'Ide jadi rencana tertulis: timeline, peran vendor, anggaran per pos.' },
      { no: '03', name: 'Wujudkan', desc: 'Koordinasi dijalankan dan detail terakhir dirapikan sebelum hari-H.' },
      { no: '04', name: 'Rayakan', desc: 'Kalian hadir penuh; tim yang menjaga rundown berjalan sesuai jadwal.' },
    ],
  },
  video: {
    label: 'Gerak',
    headline: 'Yang paling jujur soal hasil kerja kami adalah footage hari-H',
    pending: 'Frame 05 menunggu video dari klien — 5–15 detik, diputar hanya setelah kalian menekan tombol.',
  },
  story: {
    label: 'Detail',
    headline: 'Bagian kecil yang biasanya tidak sempat kalian pikirkan',
    pending:
      'Strip ini diisi foto detail dari dokumentasi klien. Jumlah dan rasionya ditetapkan lebih dulu supaya tidak ada pergeseran layout saat foto masuk.',
  },
  testimonial: {
    label: 'Kata pasangan',
    headline: 'Kami tampilkan hanya yang benar-benar diberikan',
    pending:
      'Belum ada testimoni yang ditayangkan. Saat klien mengirim izin dan kutipannya, satu kutipan unggulan tampil di sini — maksimal tiga.',
  },
  about: {
    label: 'Tentang',
    headline: 'Tim yang memegang rundown',
    pending:
      'Cerita singkat, tahun berdiri, jumlah wedding, dan area layanan ditulis setelah datanya kami terima. Tidak ada angka yang kami karang.',
  },
  faq: {
    label: 'Tanya',
    headline: 'Yang biasa ditanyakan sebelum chat pertama',
    items: [
      {
        no: '01',
        q: 'Kenapa sebagian frame masih kosong?',
        a: 'Karena dokumentasi milik pasangan adalah milik pasangan. Halaman ini dibangun dengan ukuran, rasio, dan posisi setiap frame sudah final, jadi slot berlabel “menunggu aset klien” akan terisi foto nyata tanpa mengubah susunan apa pun.',
      },
      {
        no: '02',
        q: 'Berapa lama sebelumnya harus menghubungi?',
        a: 'Makin awal makin lega. Perencanaan penuh idealnya dimulai beberapa bulan sebelum tanggal; koordinasi hari-H masih bisa diterima lebih dekat ke hari jika jadwal tim belum terisi.',
        pending: true,
      },
      {
        no: '03',
        q: 'Berapa biayanya?',
        a: 'Biaya tergantung konsep, tanggal, jumlah tamu, dan lokasi, jadi angka resminya kami kirim lewat chat setelah tiga hal itu jelas — bukan lewat tabel paket di halaman.',
        pending: true,
      },
      {
        no: '04',
        q: 'Bisa hanya bantu sebagian?',
        a: 'Bisa. Banyak pasangan sudah punya vendor sendiri dan hanya butuh rundown serta koordinasi lapangan. Lingkup itulah yang paling menentukan biaya, jadi sebutkan saja yang kalian butuhkan.',
      },
      {
        no: '05',
        q: 'Area mana saja yang dilayani?',
        a: 'Wilayah kerja kami cantumkan di kaki halaman ini setelah datanya dikonfirmasi klien.',
        pending: true,
      },
    ],
  },
  finalCta: {
    headline: 'Kirim lembar ini sebagai pembuka obrolan.',
    body: 'Tanggal, lokasi, dan gambaran acara sudah cukup untuk mulai. Pesannya sudah terisi — kalian tinggal mengirim dan menyesuaikan.',
    action: 'Mulai percakapan WhatsApp',
    noNumber:
      'Aksi WhatsApp belum aktif: nomor klien belum diisi di src/config/site.ts. Kami sengaja tidak memasang tautan mati.',
  },
  floatingCta: 'Chat WhatsApp',
  waMessage:
    'Halo, saya tertarik dengan layanan wedding organizer. Tanggal rencana kami: …, lokasi: …, jumlah tamu kira-kira: …',
} as const;
