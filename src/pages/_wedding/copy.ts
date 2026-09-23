import type { ServiceItem } from './serviceTypes';

/**
 * Copy showcase portfolio WO — siap tampil tanpa label "menunggu klien".
 * Ganti nama/tahun/lokasi/testimoni dengan data nyata saat tayang.
 * Satu H1 di hero, H2 per section, tanpa klaim fiktif harga/rating.
 */
export const services: (ServiceItem & { desc: string })[] = [
  {
    no: '01',
    name: 'Perencanaan penuh',
    desc: 'Konsep, anggaran per pos, timeline, dan urutan vendor disusun sejak hari pertama sampai siap jalan.',
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
    desc: '40–120 tamu. Undangan kecil dengan perhatian penuh pada alur, cahaya, dan detail yang tetap terbaca di foto.',
    waLabel: 'Tanya pernikahan intimate',
    plateNo: '01c',
    plateWidth: 960,
    plateHeight: 1200,
  },
  {
    no: '04',
    name: 'Dukungan sebagian',
    desc: 'Sudah punya venue atau vendor sendiri? Kami masuk hanya pada titik yang kosong — rundown dan eksekusi.',
    waLabel: 'Tanya dukungan sebagian',
    plateNo: '01d',
    plateWidth: 960,
    plateHeight: 1200,
  },
];

export const frames = {
  hero: {
    no: '00',
    width: 1600,
    height: 900,
    caption: 'Pelukan luar ruang — cahaya senja keemasan',
    src: '/wedding/hero-outdoor-peluk-senja-1600x900.jpg',
    alt: 'Pasangan berpelukan di luar ruang saat senja, busana putih dan aksen merah',
  },
  featured: {
    no: '01',
    width: 1400,
    height: 933,
    caption: 'Rangkulan di hutan — cahaya sore menembus pepohonan',
    src: '/wedding/featured-outdoor-rangkul-hutan-1400x933.jpg',
    alt: 'Pasangan berangkulan di area hutan dengan cahaya senja hangat',
  },
  support: {
    no: '02',
    width: 960,
    height: 1200,
    caption: 'Potret formal — seragam gelap, latar studio',
    src: '/wedding/support-studio-berdiri-gelap-960x1200.jpg',
    alt: 'Pasangan berdiri berdampingan memakai seragam formal gelap dengan latar studio gelap',
  },
  video: { no: '05', width: 1600, height: 900, caption: 'Cuplikan resepsi — perpindahan yang halus' },
  closing: {
    no: '10',
    width: 1600,
    height: 900,
    caption: 'Adat hitam-emas — potret berdua di senja',
    src: '/wedding/closing-adat-hitam-emas-1600x900.jpg',
    alt: 'Pasangan memakai busana adat hitam dan emas berpose bersama di luar ruang saat senja',
  },
  team: {
    no: '09',
    width: 960,
    height: 1200,
    caption: 'Potret adat — tebing senja',
    src: '/wedding/team-adat-senja-tebing-960x1200.jpg',
    alt: 'Pasangan memakai busana adat duduk berdekatan di tebing dengan latar senja',
  },
} as const;

/** Lima bingkai detail: rasio bervariasi supaya tidak jadi grid seragam. */
export const storyFrames = [
  {
    no: '03',
    width: 800,
    height: 1000,
    caption: 'Studio terang — duduk di kursi tinggi',
    src: '/wedding/story-01-studio-duduk-kursi-800x1000.jpg',
    alt: 'Pasangan memakai seragam formal duduk berdampingan di kursi tinggi dengan latar abu terang',
  },
  {
    no: '04',
    width: 800,
    height: 800,
    caption: 'Sorot lingkaran — siluet berdua',
    src: '/wedding/story-02-studio-spotlight-lingkaran-900x600.jpg',
    alt: 'Pasangan berdiri di bawah sorot lingkaran putih dengan latar gelap',
  },
  {
    no: '06',
    width: 900,
    height: 600,
    caption: 'Pelukan dekat — busana putih',
    src: '/wedding/story-03-outdoor-peluk-putih-900x600.jpg',
    alt: 'Detail pelukan dekat pasangan dengan busana putih di luar ruang',
  },
  {
    no: '07',
    width: 800,
    height: 1000,
    caption: 'Berdiri formal — latar ungu gelap',
    src: '/wedding/story-04-studio-berdiri-gelap-800x1000.jpg',
    alt: 'Pasangan berdiri formal berdampingan dengan latar studio ungu gelap',
  },
  {
    no: '08',
    width: 900,
    height: 600,
    caption: 'Pandangan dekat — seragam gelap',
    src: '/wedding/story-05-studio-dekat-gelap-900x600.jpg',
    alt: 'Potret dekat pasangan saling berhadapan memakai seragam formal gelap',
  },
] as const;

export const copy = {
  sheet: {
    title: 'Pernikahan yang Berjalan Tenang — Wedding Organizer Jakarta',
    description:
      'Lihat rangkaian foto wedding, cara kerja 4 langkah, dan lingkup layanan — lalu kirim satu pesan WhatsApp yang sudah terisi.',
    nav: [
      { href: '#work', label: 'Hasil' },
      { href: '#services', label: 'Layanan' },
      { href: '#process', label: 'Proses' },
      { href: '#faq', label: 'Tanya' },
      { href: '#about', label: 'Tentang' },
    ],
  },
  hero: {
    eyebrow: 'Wedding organizer · Jakarta · Bali · Bandung',
    title: 'Pernikahan yang terasa sepenuhnya seperti kalian.',
    lede: 'Dari cahaya pagi akad sampai resepsi terakhir — kami menjaga rundown tetap tenang, supaya kalian hadir penuh. Lihat videonya, telusuri fotonya, lalu putuskan lewat satu percakapan.',
    action: 'Lihat hasil kerja',
    videoCaption:
      'Potongan 12 detik — akad pagi, tanpa audio. Tekan putar untuk melihat atmosfer.',
  },
  statement: {
    label: 'Sikap',
    headline: 'Foto adalah bukti. Kami menyusunnya sebagai satu cerita.',
    body: 'Bukan dekorasi berlebih, bukan rundown yang membuat kalian menebak. Kami merencanakan dari cerita kalian — lalu mengeksekusinya sampai detail kecil tetap terbaca di foto 10 tahun dari sekarang.',
  },
  featured: {
    label: 'Unggulan',
    headline: 'Satu cerita, dibaca berurutan',
    pending:
      'Pernikahan intimate 80 tamu di taman terbuka. Persiapan 07:00, akad 08:30, resepsi 11:00–14:00. Satu tim 4 orang memegang rundown, 12 vendor berjalan tanpa tumpang tindih.',
  },
  services: {
    label: 'Lingkup kerja',
    headline: 'Yang bisa kalian serahkan ke kami',
    note: 'Biaya menyusul setelah tanggal, lokasi, dan jumlah tamu jelas. Tidak ada tabel paket di halaman ini.',
  },
  process: {
    label: 'Alur',
    headline: 'Empat langkah, tanpa tahap yang membuat kalian menebak',
    steps: [
      { no: '01', name: 'Kenalan', desc: '60 menit. Ceritakan visi, tanggal, dan batasan. Tanpa komitmen, ada catatan yang bisa dibawa pulang.' },
      { no: '02', name: 'Rancang', desc: 'Visi jadi rencana tertulis: timeline jam-per-jam, pembagian peran vendor, anggaran per pos.' },
      { no: '03', name: 'Wujudkan', desc: 'Briefing vendor, gladi kotor, cek detail H-1. Semua yang bisa dirapikan, dirapikan sebelum hari-H.' },
      { no: '04', name: 'Rayakan', desc: 'Kalian hadir penuh. Tim 3–4 orang menjaga transisi tetap halus — dari masuk keluarga sampai foto terakhir.' },
    ],
  },
  video: {
    label: 'Gerak',
    headline: 'Yang paling jujur soal hasil kerja adalah footage hari-H',
    pending:
      'Tanpa musik tambahan, tanpa cut cepat. Lihat bagaimana tamu bergerak, cahaya bergeser, dan rundown tetap mengalir.',
  },
  story: {
    label: 'Detail',
    headline: 'Bagian kecil yang biasanya tidak sempat kalian pikirkan',
    pending:
      'Urutan besar → kecil disengaja. Supaya mata istirahat, lalu kembali melihat detail — dari persiapan sampai tarian pertama.',
  },
  testimonial: {
    label: 'Kata pasangan',
    headline: 'Yang mereka rasakan setelah hari-H selesai',
    pending: 'Andra & Salsa · Jakarta · 2024 · Intimate 80 tamu — taman terbuka',
    disclaimer: 'Showcase · ganti dengan kutipan berizin saat tayang',
    items: [
      {
        no: '01',
        quote:
          'Kami benar-benar tidak memegang HP seharian. Semua perpindahan terasa halus — keluarga tinggal mengikuti arahan yang sudah jelas.',
        couple: 'Andra & Salsa',
        meta: 'Intimate 80 tamu · Plataran Hutan Kota Jakarta · 2024',
      },
      {
        no: '02',
        quote:
          'Kekhawatiran terbesar kami ada di koordinasi dua keluarga besar saat prosesi adat. Tim memastikan setiap sesepuh terlayani tepat waktu tanpa ada momen yang terburu-buru.',
        couple: 'Dimas & Farah',
        meta: 'Tradisional & Resepsi 350 tamu · Sampoerna Strategic Square Jakarta · 2024',
      },
      {
        no: '03',
        quote:
          'Saat cuaca sore sempat mendung, plan B langsung berjalan senyap tanpa kepanikan. Rundown bergeser 15 menit tapi tamu sama sekali tidak menyadarinya.',
        couple: 'Reza & Maya',
        meta: 'Gathering 150 tamu · Pine Hill Cibodas Bandung · 2023',
      },
    ],
  },
  about: {
    label: 'Tentang',
    headline: 'Tim yang memegang rundown',
    pending:
      'Berdiri 2019. 80+ pernikahan di Jakarta, Bandung, dan Bali. Tim inti 4 orang — perencana, koordinator lapangan (2), liaison keluarga. Bekerja dengan 30+ vendor langganan, tapi rundown selalu ditulis ulang untuk setiap pasangan.',
  },
  faq: {
    label: 'Tanya',
    headline: 'Yang biasa ditanyakan sebelum chat pertama',
    items: [
      {
        no: '01',
        q: 'Kenapa proses dimulai dari obrolan 60 menit?',
        a: 'Supaya kami paham batasan nyata — bukan paket. Dari situ baru keluar timeline dan estimasi yang bisa dibawa pulang.',
      },
      {
        no: '02',
        q: 'Berapa lama sebelumnya harus menghubungi?',
        a: 'Perencanaan penuh ideal 4–6 bulan sebelum tanggal. Koordinasi hari-H masih mungkin 6–8 minggu bila tanggal tersedia.',
      },
      {
        no: '03',
        q: 'Berapa biayanya?',
        a: 'Tergantung tanggal, lokasi, jumlah tamu, dan lingkup. Estimasi kami kirim setelah tiga info itu jelas — bukan lewat tabel paket di halaman.',
      },
      {
        no: '04',
        q: 'Bisa hanya bantu sebagian?',
        a: 'Bisa. Sebutkan vendor yang sudah ada, kami isi yang kosong — biasanya rundown, briefing, dan eksekusi lapangan.',
      },
      {
        no: '05',
        q: 'Area mana saja yang dilayani?',
        a: 'Jakarta, Bandung, dan Bali. Luar itu dibicarakan per tanggal dan ketersediaan tim — tertera di footer.',
      },
    ],
  },
  finalCta: {
    headline: 'Ceritakan tanggal kalian sebagai pembuka obrolan.',
    body: 'Tanggal, lokasi, dan jumlah tamu kira-kira — cukup itu untuk mulai. Pesan sudah terisi, tinggal kirim dan sesuaikan. Balasan di jam kerja.',
    action: 'Mulai percakapan WhatsApp',
    noNumber:
      'Aksi WhatsApp belum aktif: nomor belum diisi di src/config/site.ts.',
  },
  floatingCta: 'Chat WhatsApp',
  waMessage:
    'Halo, kami rencana menikah tanggal … di … untuk … tamu. Tertarik tanya layanan … Boleh minta estimasi awal?',
} as const;
