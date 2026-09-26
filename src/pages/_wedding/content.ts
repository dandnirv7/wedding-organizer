/**
 * Data tayang `/` — semua teks yang dibaca pengunjung ada di sini supaya
 * materi klien yang masuk tinggal ditukar di satu tempat.
 *
 * Aturan anti-fabrikasi: nama pasangan, lokasi, tahun, jumlah wedding, harga,
 * testimoni, dan kebijakan layanan tidak dikarang. Butir yang menunggu data
 * ditandai `null` dan dirender sebagai status, bukan sebagai kalimat fakta.
 * Sumber copy: docs/CONTENT.md (§6–§16) dan urutan blok docs/PRD.md §7.
 */

export type PackageField = string | null;

export interface Frame {
  id: string;
  width: number;
  height: number;
  caption: string;
}

export interface PairItem {
  /** Apa yang kami siapkan di balik momen itu. */
  prep: string;
  /** Yang pasangan ingat keesokan harinya. */
  remember: string;
  frame: Frame;
}

export interface ServiceItem extends PairItem {
  name: string;
  benefit: string;
  waLabel: string;
}

export interface WeddingItem {
  /** Nama pasangan — null sampai klien mengirim izin. */
  couple: string;
  concept: string;
  venue: string;
  location: string;
  note: string;
  prep: string;
  remember: string;
  frames: readonly [Frame, Frame];
}

export interface PackageItem {
  name: PackageField;
  bestFor: PackageField;
  includes: string[];
  /** Angka hanya dari tarif resmi klien; format "Mulai dari Rp…". */
  price: PackageField;
  ctaLabel: string;
}

const frame = (id: string, width: number, height: number, caption: string): Frame => ({
  id,
  width,
  height,
  caption,
});

/** Rasio final setiap slot. Saat aset tiba, hanya isinya yang ditukar. */
export const frames = {
  stage: frame('H1', 1920, 1080, 'bidang utama — video 8–12 detik atau potret hari-H'),
  service: [
    frame('S1', 1200, 1500, 'persiapan Full Wedding Planning'),
    frame('S2', 1200, 1500, 'koordinasi di hari-H'),
    frame('S3', 1200, 1500, 'rangkaian adat'),
    frame('S4', 1200, 1500, 'Detail Custom Wedding'),
  ],
  wedding: [
    [frame('W1a', 1400, 900, 'persiapan Cerita 1'), frame('W1b', 1400, 900, 'momen Cerita 1')],
    [frame('W2a', 1400, 900, 'persiapan Cerita 2'), frame('W2b', 1400, 900, 'momen Cerita 2')],
    [frame('W3a', 1400, 900, 'persiapan Cerita 3'), frame('W3b', 1400, 900, 'momen Cerita 3')],
  ] as [Frame, Frame][],
  closing: frame('F1', 1400, 1000, 'penutup — tim saat acara berjalan'),
} as const;

export const services: ServiceItem[] = [
  {
    name: 'Full Wedding Planning',
    benefit: 'Satu tangan memegang seluruh rencana, dari konsep sampai rundown.',
    prep: 'Konsep, anggaran, timeline, dan urutan vendor disusun bersama sejak awal.',
    remember: 'Kamu datang ke pertemuan pertama dengan ide, pulang dengan rencana yang tertulis.',
    waLabel: 'Tanya Full Wedding Planning',
    frame: frames.service[0],
  },
  {
    name: 'Wedding Day Coordination',
    benefit: 'Rundown dipegang di lapangan, bukan di kepala kalian.',
    prep: 'Semua vendor dipegang jadwalnya, semua pihak tahu harus berdiri di mana dan jam berapa.',
    remember: 'Kamu menjalani hari itu tanpa memegang daftar — ada yang menjaga waktu di belakang layar.',
    waLabel: 'Tanya Wedding Day Coordination',
    frame: frames.service[1],
  },
  {
    name: 'Pernikahan Adat',
    benefit: 'Rangkaian adat berjalan lengkap, tanpa ada prosesi yang kelewat.',
    prep: 'Urutan prosesi, kebutuhan sesi siraman sampai sungkeman, dan siapa yang memegang tiap bagiannya.',
    remember: 'Keluarga dan tiap sesi adat datang pada waktunya sendiri, tanpa ada yang harus mengejar.',
    waLabel: 'Tanya Pernikahan Adat',
    frame: frames.service[2],
  },
  {
    name: 'Custom Wedding',
    benefit: 'Rencana yang tidak muat di template tetap bisa dikerjakan.',
    prep: 'Konsep non-standar: venue yang jarang dipakai, alur tamu yang berbeda, atau format intimate.',
    remember: 'Yang kamu ceritakan adalah detail yang tidak ditawarkan siapa pun, dan tetap bisa dijalani.',
    waLabel: 'Diskusikan Pernikahanmu',
    frame: frames.service[3],
  },
];

/**
 * Tiga cerita. Nama pasangan, konsep, venue, dan lokasi menunggu data klien —
 * di sini sengaja kosong supaya tidak ada pernikahan yang dikarang.
 */
export const weddings: WeddingItem[] = [
  {
    couple: '',
    concept: '',
    venue: '',
    location: '',
    note: 'menunggu dokumentasi dan izin pasangan',
    prep: 'Rundown, susunan vendor, dan timeline yang dipegang tim sejak tiga bulan sebelumnya.',
    remember: 'Momen yang terlihat di foto itu terjadi tepat pada jamnya — tanpa ada satu pun yang dikejar.',
    frames: frames.wedding[0],
  },
  {
    couple: '',
    concept: '',
    venue: '',
    location: '',
    note: 'menunggu dokumentasi dan izin pasangan',
    prep: 'Koordinasi lapangan di dua lokasi sekaligus, dengan satu orang per area.',
    remember: 'Rombongan berpindah tanpa ada yang bingung harus ke mana dan jam berapa.',
    frames: frames.wedding[1],
  },
  {
    couple: '',
    concept: '',
    venue: '',
    location: '',
    note: 'menunggu dokumentasi dan izin pasangan',
    prep: 'Detail yang biasanya terlewat: alur tamu, cuaca, cadangan listrik, dan jadwal istirahat pengantin.',
    remember: 'Hal-hal kecil itu tidak kamu pikirkan sama sekali — dan itu memang tujuannya.',
    frames: frames.wedding[2],
  },
];

export const values = [
  {
    name: 'Perencanaan yang Terarah',
    body: 'Kami membantu menyusun setiap kebutuhan pernikahan secara terstruktur agar proses persiapan terasa lebih jelas dan terkontrol.',
  },
  {
    name: 'Koordinasi yang Menyeluruh',
    body: 'Dari vendor hingga timeline acara, kami membantu memastikan setiap pihak mengetahui perannya dan bekerja sesuai rencana.',
  },
  {
    name: 'Pendekatan yang Personal',
    body: 'Tidak ada dua pasangan yang memiliki cerita yang sama. Karena itu, setiap pernikahan perlu dirancang sesuai kebutuhan dan karakter masing-masing.',
  },
  {
    name: 'Fokus pada Hari Pernikahanmu',
    body: 'Saat hari yang ditunggu tiba, kamu seharusnya bisa hadir sepenuhnya di dalam momen tersebut, bukan sibuk mengurus detail di belakangnya.',
  },
];

/** Empat langkah — sisi kiri yang kamu bawa, sisi kanan yang kami urus. */
export const steps = [
  {
    name: 'Konsultasi',
    you: 'Ceritakan tentang kamu, pasanganmu, dan pernikahan yang ingin kamu wujudkan.',
    us: 'Kami dengar, lalu catat: tanggal, jumlah tamu, lokasi, dan hal yang tidak bisa dikompromikan.',
  },
  {
    name: 'Perencanaan',
    you: 'Kamu memutuskan arah konsep dan prioritas anggaran.',
    us: 'Kami susun konsep, kebutuhan, timeline, dan detail yang perlu dipersiapkan sampai siap jalan.',
  },
  {
    name: 'Persiapan',
    you: 'Kamu cukup menyetujui dan melengkapi yang dibutuhkan.',
    us: 'Kami koordinasi dengan vendor dan pihak terkait supaya seluruh persiapan berjalan sesuai rencana.',
  },
  {
    name: 'Hari Pernikahan',
    you: 'Kamu menikmati momen bersama orang-orang tersayang.',
    us: 'Kami jaga rundown tetap berjalan, termasuk semua yang tidak seharusnya sampai ke telingamu.',
  },
];

/**
 * Mode A: struktur paket siap tayang. Nama paket dan harga diisi dari tarif
 * resmi klien — keduanya dibiarkan kosong, bukan dikarang.
 */
export const packagesPublic: PackageItem[] = [
  {
    name: null,
    bestFor: null,
    includes: ['Perencanaan konsep', 'Manajemen vendor', 'Timeline & rundown', 'Koordinasi hari-H'],
    price: null,
    ctaLabel: 'Konsultasikan Paket Ini',
  },
  {
    name: null,
    bestFor: null,
    includes: ['Koordinasi hari-H', 'Briefing vendor', 'Rundown & manajemen waktu'],
    price: null,
    ctaLabel: 'Konsultasikan Paket Ini',
  },
  {
    name: null,
    bestFor: null,
    includes: ['Rancangan sesuai konsep', 'Kebutuhan adat', 'Koordinasi penuh'],
    price: null,
    ctaLabel: 'Konsultasikan Paket Ini',
  },
];

/** Jawaban FAQ yang masih menunggu kebijakan klien dijawab apa adanya. */
export interface FaqEntry {
  q: string;
  /** null = jawabannya milik klien; dirender sebagai status + ajakan bertanya. */
  a: string | null;
}

export const faq: FaqEntry[] = [
  {
    q: 'Kapan sebaiknya kami mulai menggunakan jasa WO?',
    a: null,
  },
  {
    q: 'Apakah kami bisa menyesuaikan paket dengan kebutuhan kami?',
    a: 'Bisa. Bentuk pendampingannya disusun dari kebutuhan kalian, bukan dari paket yang sudah dicetak lebih dulu — sebutkan saja bagian mana yang ingin kalian serahkan.',
  },
  {
    q: 'Apakah WO membantu mencari dan mengoordinasikan vendor?',
    a: null,
  },
  {
    q: 'Apakah WO menangani pernikahan adat?',
    a: null,
  },
  {
    q: 'Apakah WO melayani pernikahan di luar kota?',
    a: null,
  },
  {
    q: 'Bagaimana proses konsultasinya?',
    a: 'Mulai dari satu pesan WhatsApp berisi tanggal, lokasi rencana, dan gambaran acara. Dari situ kami obrolkan kebutuhannya sebelum bicara angka.',
  },
  {
    q: 'Berapa biaya menggunakan jasa WO?',
    a: null,
  },
];

export const testimonials: { quote: string; couple: string; context: string }[] = [];

/** Field form kualifikasi lead — docs/PRD.md FR-12. */
export const inquiryFields = {
  weddingTypes: ['Resepsi', 'Akad saja', 'Intimate', 'Adat', 'Belum tahu'],
  guestRanges: ['< 100', '100–300', '300–600', '600–1000', '> 1000'],
  budgetRanges: ['Belum ditentukan'],
  serviceNeeds: [
    'Full Wedding Planning',
    'Wedding Day Coordination',
    'Pernikahan Adat',
    'Custom Wedding',
    'Belum tahu, butuh masukan',
  ],
};

export const page = {
  meta: {
    title: 'Layanan & Proses Wedding Organizer',
    description:
      'Satu halaman tentang bagaimana sebuah pernikahan direncanakan dan dikoordinasikan: lingkup layanan, alur kerja dari konsultasi sampai hari-H, dokumentasi pernikahan nyata, dan pertanyaan yang biasanya muncul sebelum chat pertama.',
  },
  nav: [
    { href: '#pengantar', label: 'Tentang Kami' },
    { href: '#layanan', label: 'Layanan' },
    { href: '#pernikahan', label: 'Pernikahan Kami' },
    { href: '#proses', label: 'Proses' },
    { href: '#tanya', label: 'FAQ' },
  ],
  headerCta: 'Mulai Konsultasi',
  hero: {
    eyebrow: 'Wedding Organizer',
    stageSide: 'Bidang hari-H',
    title: 'Setiap Cerita Layak Dirayakan dengan Indah.',
    lede: 'Dari konsep hingga hari pernikahan, kami membantu mengatur setiap detail agar kamu bisa menikmati setiap momen bersama orang-orang tersayang.',
    primaryCta: 'Mulai Rencanakan Pernikahanmu',
    secondaryCta: 'Lihat Pernikahan Kami',
    stageLabel: 'Dokumentasi hari-H — menunggu footage dari tim videografer klien',
  },
  intro: {
    eyebrow: 'Tentang Kami',
    headline: 'Bukan Sekadar Mengatur Acara.',
    body: [
      'Pernikahan adalah tentang cerita, keluarga, dan momen yang ingin kamu kenang seumur hidup.',
      'Kami hadir untuk membantu mengubah setiap rencana dan harapan menjadi perayaan yang terasa personal, terarah, dan menyenangkan untuk dijalani.',
    ],
    statement:
      'Kamu fokus menikmati momennya. Kami memastikan setiap detailnya berjalan sebagaimana mestinya.',
    frame: frames.closing,
  },
  services: {
    eyebrow: 'Layanan Kami',
    headline: 'Kami Mengurus Detailnya, Kamu Menikmati Momennya.',
    lede: 'Empat bentuk pendampingan. Yang membedakan bukan namanya, tapi seberapa banyak yang bisa kamu serahkan.',
    prepLabel: 'Yang kami siapkan',
    rememberLabel: 'Yang kamu ingat',
    note: 'Daftar layanan ini masih menunggu konfirmasi klien sebelum tayang. Harga dikirim setelah konsep, tanggal, dan jumlah tamu jelas.',
  },
  weddings: {
    eyebrow: 'Real Weddings',
    headline: 'Beberapa Cerita yang Telah Kami Rayakan.',
    lede: 'Setiap pasangan datang dengan cerita, tradisi, dan keinginan yang berbeda. Berikut adalah beberapa pernikahan yang pernah kami bantu wujudkan.',
    prepLabel: 'Di balik layar',
    rememberLabel: 'Yang terlihat',
    cta: 'Lihat Semua Pernikahan',
    pending:
      'Nama pasangan, konsep, venue, dan lokasi ditulis setelah dokumentasi dan izinnya dikirim — tidak ada pernikahan yang kami susun sendiri.',
  },
  why: {
    eyebrow: 'Kenapa Kami',
    headline: 'Karena Detail Kecil Membuat Perbedaan Besar.',
  },
  process: {
    eyebrow: 'Cara Kami Bekerja',
    headline: 'Dari Ide Menjadi Perayaan.',
    youLabel: 'Yang kamu bawa',
    usLabel: 'Yang kami urus',
  },
  packages: {
    eyebrowPublic: 'Paket Pernikahan',
    headlinePublic: 'Pilih Pendampingan yang Sesuai dengan Kebutuhanmu.',
    eyebrowConsult: 'Pernikahanmu, Sesuai Gayamu',
    headlineConsult: 'Setiap Pernikahan Punya Kebutuhan yang Berbeda.',
    bodyConsult:
      'Ceritakan rencana pernikahanmu kepada kami. Kami akan membantu menentukan bentuk pendampingan yang paling sesuai dengan kebutuhan dan konsep yang kamu inginkan.',
    ctaConsult: 'Konsultasikan Pernikahanmu',
    pendingName: 'Nama paket menunggu tarif resmi klien',
    pendingPrice: 'Harga menunggu tarif resmi klien',
    priceNote: 'Semua nama paket dan angka di bagian ini menunggu data resmi klien, jadi sengaja belum diisi.',
  },
  testimonials: {
    eyebrow: 'Cerita Mereka',
    headline: 'Bukan Hanya Tentang Pernikahannya, Tapi Juga Pengalamannya.',
    pending:
      'Belum ada testimoni yang ditayangkan. Kutipan yang tampil di sini adalah yang benar-benar dikirim klien, beserta izin memakai namanya.',
  },
  faq: {
    eyebrow: 'Pertanyaan Umum',
    headline: 'Hal yang Biasa Ditanya Sebelum Chat Pertama.',
    pendingAnswer: 'Jawaban ini mengikuti kebijakan klien — silakan tanyakan langsung lewat WhatsApp.',
    cta: 'Tanya lewat WhatsApp',
  },
  finalCta: {
    eyebrow: 'Langkah Pertama',
    headline: 'Mari Mulai Merencanakan Hari Istimewamu.',
    lede: 'Ceritakan sedikit tentang pernikahan yang kamu bayangkan. Kami akan menghubungi kamu untuk membicarakan bagaimana kami bisa membantu mewujudkannya.',
    primaryCta: 'Mulai Konsultasi',
    secondaryCta: 'WhatsApp Kami',
    formIntro:
      'Isi yang kamu tahu saja. Pesannya tersusun otomatis dan terbuka di WhatsApp — kamu tinggal periksa dan kirim.',
    optional: 'opsional',
    submit: 'Susun Pesan WhatsApp',
    submitHint: 'Tidak ada data yang terkirim ke situs ini. Form hanya menyusun pesan untuk kamu kirim sendiri.',
    needsNumber:
      'Nomor WhatsApp klien belum dipasang di konfigurasi, jadi form ini belum bisa disusun jadi pesan. Ganti src/config/site.ts untuk mengaktifkannya.',
    errors: {
      required: 'Isi {field} dulu ya — itu yang paling dibutuhkan untuk mulai.',
    },
    ok: 'Pesannya sudah siap di WhatsApp. Kalau ada yang mau diubah, tinggal edit sebelum dikirim.',
  },
  waMessage:
    'Halo, saya tertarik dengan layanan wedding organizer. Tanggal rencana kami: …, lokasi: …, jumlah tamu kira-kira: …',
  floatingCta: 'Mulai Konsultasi',
} as const;

/** Pesan kualifikasi lead yang disusun dari field form. */
export function buildInquiryMessage(values: Record<string, string>): string {
  const lines = [
    'Halo, saya ingin konsultasi soal pernikahan kami.',
    '',
    `Nama: ${values.nama || '—'}${values.pasangan ? ` & ${values.pasangan}` : ''}`,
    values.tanggal ? `Tanggal rencana: ${values.tanggal}` : null,
    values.lokasi ? `Lokasi: ${values.lokasi}` : null,
    values.tamu ? `Perkiraan tamu: ${values.tamu}` : null,
    values.jenis ? `Jenis pernikahan: ${values.jenis}` : null,
    values.layanan ? `Layanan yang dibutuhkan: ${values.layanan}` : null,
    values.budget ? `Kisaran budget: ${values.budget}` : null,
    values.kontak ? `Nomor yang bisa dihubungi: ${values.kontak}` : null,
    values.pesan ? `\n${values.pesan}` : null,
  ];
  return lines.filter((line): line is string => line !== null).join('\n');
}
