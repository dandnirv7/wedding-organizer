import type { ServiceItem } from './serviceTypes';

/**
 * Copy tangan `/`. Semua teks yang tayang ada di sini supaya penggantian data
 * klien tidak menyentuh markup.
 *
 * Aturan anti-fabrikasi (PRODUCT.md): tidak ada nama pasangan, tahun, jumlah
 * wedding, testimoni, harga, atau area layanan karangan. Butir yang butuh data
 * klien ditandai `pending` dan dirender sebagai baris "menunggu".
 *
 * `cueTime` pada baris rundown adalah STRUKTUR contoh, bukan klaim: selalu
 * dirender bersama label `contohUrutan` supaya tidak terbaca sebagai acara nyata.
 */
export const services: (ServiceItem & { desc: string })[] = [
  {
    no: '01',
    name: 'Perencanaan penuh',
    desc: 'Konsep, anggaran, timeline, dan urutan vendor disusun bersama sejak awal sampai siap jalan.',
    waLabel: 'Tanya perencanaan penuh',
    plate: { no: '01a', width: 1200, height: 800 },
  },
  {
    no: '02',
    name: 'Koordinasi hari-H',
    desc: 'Rundown dipegang di lapangan supaya kalian menjalani hari itu tanpa memegang daftar.',
    waLabel: 'Tanya koordinasi hari-H',
    plate: { no: '01b', width: 1280, height: 720 },
  },
  {
    no: '03',
    name: 'Pernikahan intimate',
    desc: 'Undangan kecil dengan perhatian penuh pada detail yang tetap terbaca di foto.',
    waLabel: 'Tanya pernikahan intimate',
  },
  {
    no: '04',
    name: 'Dukungan sebagian',
    desc: 'Sudah punya vendor dan rencana sendiri? Kami masuk pada titik yang kalian butuhkan saja.',
    waLabel: 'Tanya dukungan sebagian',
  },
];

export const frames = {
  hero: { no: '00', width: 1200, height: 1500, caption: 'pelat utama lembar' },
  featured: { no: '01', width: 1400, height: 933, caption: 'cerita unggulan' },
  support: { no: '02', width: 960, height: 1200, caption: 'pelat pendamping' },
  video: { no: '05', width: 1600, height: 900, caption: 'video sinematik' },
  closing: { no: '10', width: 1600, height: 900, caption: 'penutup lembar' },
  team: { no: '09', width: 960, height: 1200, caption: 'foto tim' },
} as const;

/** Lima pelat detail: lebarnya datang dari span mosaic, bukan kolom sama rata. */
export const storyFrames = [
  { no: '03', width: 800, height: 1000, caption: 'detail' },
  { no: '04', width: 800, height: 800, caption: 'detail' },
  { no: '06', width: 900, height: 600, caption: 'detail' },
  { no: '07', width: 800, height: 1000, caption: 'detail' },
  { no: '08', width: 900, height: 600, caption: 'detail' },
] as const;

/** Baris rundown contoh: kolom jam, kegiatan, penanggung jawab, durasi. */
export const runSheet = {
  note: 'contoh urutan — susunan final disusun dari rencana kalian',
  rows: [
    { time: '00.00', cue: 'Cue utama', item: 'Dokumentasi wedding', pic: 'Lead', durasi: '8 jam' },
    { time: '07.00', cue: 'Persiapan', item: 'Makeup, busana, doa', pic: '2 crew', durasi: '2 jam' },
    { time: '09.00', cue: 'Upacara', item: 'Pemberkatan / akad', pic: 'Lead + venue', durasi: '1 jam' },
    { time: '11.30', cue: 'Resepsi', item: 'Sambutan, makan, dance floor', pic: '6 crew', durasi: '4 jam' },
    { time: '16.00', cue: 'Penutup', item: 'Breakdown dan barang kembali', pic: 'Crew', durasi: '2 jam' },
  ],
} as const;

export const copy = {
  sheet: {
    title: 'Rundown Hari-H — Layanan Wedding Organizer',
    description:
      'Satu halaman: dokumentasi wedding nyata disusun sebagai urutan hari-H, lengkap dengan lingkup kerja, penanggung jawab tiap baris, dan kontak WhatsApp yang pesannya sudah terisi.',
    label: 'RUNDOWN HARI-H',
    nav: [
      { href: '#work', label: 'Hasil' },
      { href: '#services', label: 'Lingkup' },
      { href: '#process', label: 'Alur' },
      { href: '#faq', label: 'Tanya' },
      { href: '#about', label: 'Tim' },
    ],
  },
  hero: {
    folio: 'lembar 01 — contoh urutan',
    title: 'Pernikahan yang terasa sepenuhnya seperti kalian.',
    lede: 'Halaman ini lembar kerja kami: urutan hari-H, siapa yang memegang tiap barisnya, dan bukti kerja yang benar-benar terdokumentasi. Setelah membacanya, kalian tahu persis apa yang perlu ditanyakan.',
    action: 'Buka urutan lengkap',
  },
  statement: {
    label: 'Sikap',
    headline: 'Foto adalah bukti. Urutan adalah yang membuatnya terjadi.',
    body: 'Di balik setiap frame yang kalian lihat ada baris rundown: jam, kegiatan, dan nama yang memegangnya. Susunan, ritme, dan ukuran halaman ini sudah final sejak sekarang — saat dokumentasi kalian tiba, hanya isinya yang ditukar.',
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
    pending: 'Pelat 05 menunggu video dari klien — 5–15 detik, diputar hanya setelah kalian menekan tombol.',
  },
  story: {
    label: 'Detail',
    headline: 'Bagian kecil yang biasanya tidak sempat kalian pikirkan',
    pending:
      'Mosaic ini diisi foto detail dari dokumentasi klien. Jumlah, lebar tiap kolom, dan rasionya ditetapkan lebih dulu supaya tidak ada pergeseran layout saat foto masuk.',
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
        q: 'Kenapa sebagian pelat masih kosong?',
        a: 'Karena dokumentasi milik pasangan adalah milik pasangan. Halaman ini dibangun dengan ukuran, rasio, dan posisi setiap pelat sudah final, jadi slot bertanda tunggu akan terisi foto nyata tanpa mengubah susunan apa pun.',
      },
      {
        no: '02',
        q: 'Apakah jam di halaman ini jadwal kalian?',
        a: 'Bukan. Kolom jam di sini adalah contoh struktur rundown supaya kalian bisa membayangkan bentuk kerjanya. Urutan, jam, dan penanggung jawab yang benar disusun bersama setelah tanggal dan konsep jelas.',
      },
      {
        no: '03',
        q: 'Berapa lama sebelumnya harus menghubungi?',
        a: 'Makin awal makin lega. Perencanaan penuh idealnya dimulai beberapa bulan sebelum tanggal; koordinasi hari-H masih bisa diterima lebih dekat ke hari jika jadwal tim belum terisi.',
        pending: true,
      },
      {
        no: '04',
        q: 'Berapa biayanya?',
        a: 'Biaya tergantung konsep, tanggal, jumlah tamu, dan lokasi, jadi angka resminya kami kirim lewat chat setelah tiga hal itu jelas — bukan lewat tabel paket di halaman.',
        pending: true,
      },
      {
        no: '05',
        q: 'Bisa hanya bantu sebagian?',
        a: 'Bisa. Banyak pasangan sudah punya vendor sendiri dan hanya butuh rundown serta koordinasi lapangan. Lingkup itulah yang paling menentukan biaya, jadi sebutkan saja yang kalian butuhkan.',
      },
      {
        no: '06',
        q: 'Area mana saja yang dilayani?',
        a: 'Wilayah kerja kami cantumkan di kaki halaman ini setelah datanya dikonfirmasi klien.',
        pending: true,
      },
    ],
  },
  finalCta: {
    headline: 'Kirim halaman ini sebagai pembuka obrolan.',
    body: 'Tanggal, lokasi, dan gambaran acara sudah cukup untuk mulai. Pesannya sudah terisi — kalian tinggal mengirim dan menyesuaikan.',
    action: 'Konfirmasi lewat WhatsApp',
    noNumber:
      'Aksi WhatsApp belum aktif: nomor klien belum diisi di src/config/site.ts. Kami sengaja tidak memasang tautan mati.',
  },
  floatingCta: 'Chat WhatsApp',
  waMessage:
    'Halo, saya tertarik dengan layanan wedding organizer. Tanggal rencana kami: …, lokasi: …, jumlah tamu kira-kira: …',
} as const;
