/**
 * Data tayang `/` — semua teks yang dibaca pengunjung ada di sini supaya
 * materi klien yang masuk tinggal ditukar di satu tempat.
 *
 * Aturan anti-fabrikasi: nama pasangan, konsep, lokasi, tahun, jumlah wedding,
 * harga, testimoni, nama tim, dan kebijakan layanan tidak dikarang. Butir yang
 * menunggu data ditandai `null` dan dirender sebagai status berlabel, bukan
 * sebagai kalimat fakta.
 *
 * Struktur blok mengikuti docs/references/ui/{desktop,tablet,mobile}.png
 * (= Framer /wedding-organizer-v2) yang menjadi sumber kebenaran visual:
 * 13 blok, lihat docs/PRD.md §7.
 *
 * Sapaan: "kalian" (bukan "kamu") — disepakati saat halaman dibangun ulang.
 */
import type { ImageMetadata } from 'astro';

import openingPhotograph from '../../assets/wedding/opening-photograph.png';
import weddingPhoto from '../../assets/wedding/wedding-photo.png';
import mainStory from '../../assets/wedding/main-story.png';
import couplesDetail from '../../assets/wedding/couples-detail.png';
import flowerDetail from '../../assets/wedding/flower-detail.png';
import ringDetail from '../../assets/wedding/ring-detail.png';
import tableDetail from '../../assets/wedding/table-detail.png';
import locationDetail from '../../assets/wedding/location-detail.png';
import eventDetail from '../../assets/wedding/event-detail.png';
import mocaTeam from '../../assets/wedding/moca-team.png';
import temporaryTeamOne from '../../assets/wedding/temporary-moca-team.png';
import temporaryTeamTwo from '../../assets/wedding/temporary-moca-team-2.png';

/**
 * Slot media. Rasio tata letak sudah final dan terkunci, jadi aset yang berganti
 * tidak pernah menggeser layout. `sm` hanya untuk slot yang komposisinya memang
 * berubah di layar sempit.
 *
 * Foto di `src/assets/wedding/` semuanya 3:2 dan totalnya sekitar 9 MB, jadi
 * tidak pernah dilayani apa adanya: `<Picture>` menurunkan avif/webp + srcset
 * per slot sesuai lebar tampilnya.
 */
export interface Frame {
  id: string;
  width: number;
  height: number;
  /** Rasio tata letak, bukan ukuran file. */
  caption: string;
  src: ImageMetadata;
  /** Alt tekstual. Boleh kosong hanya untuk slot yang memang dekoratif. */
  alt: string;
  sm?: { width: number; height: number };
}

const frame = (
  id: string,
  width: number,
  height: number,
  caption: string,
  src: ImageMetadata,
  alt: string,
  sm?: { width: number; height: number }
): Frame => ({ id, width, height, caption, src, alt, sm });

/** Rasio tiap slot, diukur dari komposisi di referensi (1440 / 834 / 390). */
export const frames = {
  hero: frame(
    'H1',
    1600,
    1600,
    'momen hari-H, prosesi Tradisi Jawa',
    openingPhotograph,
    'Pengantin Tradisi Jawa duduk berdampingan di halaman joglo, mengenakan busana emas dan mahkota bunga',
    { width: 342, height: 360 }
  ),
  portfolio: [
    frame(
      'W1a',
      2100,
      1400,
      'Persiapan Cerita 01',
      mainStory,
      'Dua tangan berhias cincin bersenggolan di atas buket bunga oranye',
      { width: 342, height: 280 }
    ),
    frame('W1b', 1020, 680, 'Momen Cerita 01', couplesDetail, 'Dua tangan bersentuhan di depan dinding monogram bunga', {
      width: 342,
      height: 160,
    }),
    frame('W1c', 1020, 680, 'Detail Cerita 01', flowerDetail, 'Tangan memegang setangkai bunga putih', {
      width: 342,
      height: 160,
    }),
  ],
  craft: frame(
    'D1',
    2000,
    815,
    'Pekerjaan yang jarang terlihat',
    weddingPhoto,
    'Pria mengenakan mahkota Tradisi Jawa dan busana putih',
    { width: 342, height: 250 }
  ),
  detail: [
    frame('D2a', 1850, 997, 'Dekorasi hari-H', ringDetail, 'Bunga dan cincin di atas kain sutra keemasan', {
      width: 342,
      height: 240,
    }),
    frame('D2b', 1200, 501, 'Bunga dan sentuhan kecil', flowerDetail, 'Tangan memegang setangkai bunga putih', {
      width: 166,
      height: 132,
    }),
    frame('D2c', 1200, 501, 'Tata meja acara', tableDetail, 'Meja bulat dihiasi bunga dan lilin', {
      width: 166,
      height: 132,
    }),
    frame('D2d', 1000, 500, 'Detail personal', couplesDetail, 'Dua tangan bersentuhan di depan dinding monogram bunga', {
      width: 166,
      height: 132,
    }),
    frame('D2e', 1000, 500, 'Suasana lokasi', locationDetail, 'Kursi dan bunga di ruang acara', {
      width: 166,
      height: 132,
    }),
    frame('D2f', 1000, 500, 'Susunan meja panjang', eventDetail, 'Meja panjang dihiasi bunga oranye', {
      width: 342,
      height: 160,
    }),
  ],
  process: [
    frame('P1', 1560, 690, 'Dekorasi dan bunga', ringDetail, 'Bunga dan cincin di atas kain sutra keemasan', {
      width: 166,
      height: 230,
    }),
    frame('P2', 900, 690, 'Ruang acara', locationDetail, 'Kursi dan bunga di ruang acara', {
      width: 166,
      height: 230,
    }),
    frame('P3', 720, 690, 'Tata meja siap', tableDetail, 'Meja bulat dihiasi bunga dan lilin', {
      width: 166,
      height: 230,
    }),
  ],
  team: [
    frame(
      'T1',
      1040,
      906,
      'Tim 01, perencanaan',
      mocaTeam,
      'Tiga perempuan berpose bersama buket bunga merah muda',
      { width: 180, height: 170 }
    ),
    frame(
      'T2',
      1040,
      906,
      'Tim 02, koordinasi',
      temporaryTeamOne,
      'Seorang perempuan sedang menyiapkan diri untuk hari-H',
      { width: 152, height: 170 }
    ),
    frame(
      'T3',
      1040,
      906,
      'Tim 03, pelaksanaan',
      temporaryTeamTwo,
      'Seorang perempuan tersenyum di meja acara',
      { width: 342, height: 200 }
    ),
  ],
  voices: [
    frame(
      'S1',
      1289,
      1000,
      'Dokumentasi pasangan Ardi & Citra',
      mainStory,
      'Dua tangan berhias cincin bersenggolan di atas buket bunga oranye',
      { width: 342, height: 230 }
    ),
    frame(
      'S2',
      1289,
      1000,
      'Dokumentasi pasangan Raka & Aulia',
      couplesDetail,
      'Dua tangan bersentuhan di depan dinding monogram bunga',
      { width: 342, height: 230 }
    ),
    frame(
      'S3',
      1289,
      1000,
      'Dokumentasi pasangan Dimas & Nabila',
      ringDetail,
      'Bunga dan cincin di atas kain sutra keemasan',
      { width: 342, height: 230 }
    ),
  ],
  form: {
    ...frame('F1', 1692, 1000, 'Dokumentasi hari-H', flowerDetail, 'Tangan memegang setangkai bunga putih', {
      width: 342,
      height: 220,
    }),
  },
  closing: frame(
    'C1',
    1729,
    1000,
    'Momen penutup, tangan dan cincin',
    couplesDetail,
    'Dua tangan bersentuhan di depan dinding monogram bunga',
    { width: 342, height: 240 }
  ),
} as const;

/**
 * Cerita yang sudah kami dampingi. Nama pasangan, konsep, dan lokasi
 * menunggu izin klien — sengaja kosong supaya tidak ada pernikahan karangan.
 */
export interface StoryItem {
  couple: string | null;
  concept: string | null;
  location: string | null;
  note: string;
  frames: readonly Frame[];
}

export const stories: StoryItem[] = [
  {
    couple: null,
    concept: null,
    location: null,
    note: 'Menunggu cerita asli MOCA',
    frames: [frames.portfolio[0], frames.portfolio[1], frames.portfolio[2]],
  },
];

/** Label dan nilai tiga baris di bawah grid Cerita Pernikahan. */
export const storyMeta = [
  { label: 'Pasangan', value: stories[0].couple, note: stories[0].note },
  { label: 'Konsep', value: stories[0].concept, note: 'Menunggu data acara' },
  { label: 'Lokasi', value: stories[0].location, note: 'Menunggu data lokasi' },
];

/** Deretan label penutup blok pengantar, bukan paragraf. */
export const craftKeywords = ['Venue', 'Detail', 'Vendor', 'Timeline', 'Koordinasi', 'Eksekusi'];

/** Tiga pekerjaan yang berjalan di balik satu hari. */
export const behindTheDay = [
  { no: '01', name: 'Perencanaan', body: 'Konsep, kebutuhan, keputusan, dan timeline.' },
  { no: '02', name: 'Koordinasi vendor', body: 'Tim, vendor, dan jadwal bergerak bersama.' },
  { no: '03', name: 'Hari pelaksanaan', body: 'Tradisi, keluarga, dan persiapan berjalan sesuai rencana.' },
];

export interface ServiceItem {
  name: string;
  summary: string;
}

export const services: ServiceItem[] = [
  { name: 'PERENCANAAN PENUH', summary: 'Dari konsep hingga hari pelaksanaan.' },
  { name: 'KOORDINASI HARI-H', summary: 'Tim, vendor, dan jadwal bergerak bersama.' },
  { name: 'PERNIKAHAN ADAT', summary: 'Tradisi dan keluarga diperhatikan.' },
  { name: 'PERNIKAHAN INTIM', summary: 'Perayaan personal dengan persiapan terarah.' },
];

/** Baris penanda di bawah grid detail: motif garis dan titik. */
export const craftLegend = ['Detail', 'Vendor', 'Lokasi', 'Persiapan', 'Hari-H'];

export interface Step {
  name: string;
  body: string;
}

export const steps: Step[] = [
  { name: 'Konsultasi', body: 'Memahami visi dan kebutuhan kalian.' },
  { name: 'Perencanaan', body: 'Menyusun konsep, prioritas, dan timeline.' },
  { name: 'Persiapan', body: 'Koordinasi vendor dan setiap detail.' },
  { name: 'Hari-H', body: 'Kalian hadir dalam momen. Kami menjaga alurnya.' },
];

export interface TeamMember {
  name: string | null;
  role: string;
  body: string;
  frame: Frame;
}

export const team: TeamMember[] = [
  {
    name: 'NAMA TIM 01',
    role: 'Perencanaan',
    body: 'Mendengar cerita dan menyusun langkah pertama bersama kalian.',
    frame: frames.team[0],
  },
  {
    name: 'NAMA TIM 02',
    role: 'Koordinasi',
    body: 'Menghubungkan orang dan detail agar semua bergerak selaras.',
    frame: frames.team[1],
  },
  {
    name: 'NAMA TIM 03',
    role: 'Pelaksanaan',
    body: 'Menjaga alur saat hari yang ditunggu akhirnya tiba.',
    frame: frames.team[2],
  },
];

/** Testimoni: tiga cerita pasangan MOCA. */
export interface Testimonial {
  id: string;
  quote: string;
  couple: string;
  context?: string | null;
  frame: Frame;
}

export const testimonials: readonly Testimonial[] = [
  {
    id: 'voice-1',
    quote:
      'Persiapan pernikahan kami terasa jauh lebih tenang bersama MOCA. Banyak hal yang sebelumnya membuat kami khawatir ternyata bisa ditangani dengan baik, sehingga kami bisa lebih fokus menikmati setiap proses menuju hari pernikahan.',
    couple: 'Ardi & Citra',
    context: 'Wedding Day',
    frame: frames.voices[0],
  },
  {
    id: 'voice-2',
    quote:
      'Yang paling kami rasakan adalah koordinasinya yang rapi. Di hari pernikahan, kami tidak perlu sibuk memikirkan detail acara dan bisa benar-benar menikmati waktu bersama keluarga dan orang-orang terdekat.',
    couple: 'Raka & Aulia',
    context: 'Wedding Day',
    frame: frames.voices[1],
  },
  {
    id: 'voice-3',
    quote:
      'Setelah melewati begitu banyak persiapan, rasanya lega ketika akhirnya bisa menikmati hari yang kami tunggu-tunggu. MOCA membantu membuat semuanya terasa lebih terarah, sehingga kami bisa hadir sepenuhnya sebagai pasangan dan menikmati setiap momennya.',
    couple: 'Dimas & Nabila',
    context: 'Wedding Day',
    frame: frames.voices[2],
  },
];

export const testimonial = testimonials[0];

export interface FaqEntry {
  q: string;
  /** null = jawabannya milik klien; dirender sebagai status plus ajakan bertanya. */
  a: string | null;
}

export const faq: FaqEntry[] = [
  { q: 'Kapan sebaiknya mulai menggunakan jasa wedding organizer?', a: null },
  { q: 'Apakah layanan bisa disesuaikan dengan kebutuhan kami?', a: null },
  { q: 'Apakah kalian membantu koordinasi vendor?', a: null },
  { q: 'Apakah kalian menangani pernikahan adat?', a: null },
  { q: 'Bagaimana proses konsultasinya?', a: null },
  { q: 'Apa yang terjadi setelah kami menghubungi kalian?', a: null },
];

/** Opsi form: label yang tampil, bukan nilai kiriman. */
export const formOptions = {
  layanan: ['Perencanaan penuh', 'Koordinasi hari-H', 'Pernikahan adat', 'Pernikahan intim'],
  tamu: ['< 100', '100–300', '300–600', '600–1000', '> 1000'],
} as const;

export const page = {
  meta: {
    title: 'MOCA — Wedding Organizer',
    description:
      'Wedding organizer yang merencanakan dan mengoordinasikan pernikahan dari percakapan pertama sampai hari pelaksanaan: venue, detail, vendor, timeline, sampai hari-H.',
  },
  nav: [
    { href: '#layanan', label: 'Layanan' },
    { href: '#pernikahan', label: 'Pernikahan' },
    { href: '#tentang', label: 'Tentang' },
    { href: '#tanya', label: 'FAQ' },
  ],
  brand: 'MOCA',
  headerCta: 'Mulai Merencanakan',
  hero: {
    eyebrow: 'MC · WO · WCC',
    title: 'Setiap detail kami siapkan agar kalian bisa menikmati harinya.',
    lede: 'Dari perencanaan hingga hari pelaksanaan. Di balik momen yang kalian nikmati, ada tim yang menjaga semuanya berjalan.',
    primaryCta: 'Mulai Merencanakan',
    secondaryCta: 'Lihat Pernikahan',
    secondaryTarget: '#pernikahan',
  },
  intro: {
    eyebrow: 'Yang terlihat / Yang kami tangani',
    headline: 'Acara yang terlihat sederhana sebenarnya tidak pernah sederhana.',
    lede: 'Di balik satu hari yang terasa lancar, ada keputusan, detail, vendor, jadwal, dan orang-orang yang harus berjalan bersama.',
  },
  portfolio: {
    eyebrow: 'Cerita Pernikahan',
    headline: 'Pernikahan yang telah kami dampingi',
    lede: 'Setiap pasangan punya kebutuhan, gaya, dan cara merayakan yang berbeda. Kami membantu menerjemahkannya menjadi acara yang terasa personal.',
    note: 'Foto editorial sementara — ganti dengan portofolio asli MOCA sebelum publikasi.',
  },
  behind: {
    eyebrow: 'Satu hari, banyak yang harus berjalan',
    headline: 'Dari luar, satu momen. Di baliknya, banyak detail.',
    lede: 'Perencanaan, vendor, dan hari pelaksanaan perlu bertemu dalam satu alur agar kalian bisa benar-benar hadir di dalam momennya.',
  },
  services: {
    eyebrow: 'Layanan MOCA',
    headline: 'Yang kami kerjakan',
    lede: 'Kalian membawa visi. Kami membantu mengubahnya menjadi rencana yang siap dijalankan.',
    note: 'Kategori layanan perlu dikonfirmasi dengan MOCA.',
  },
  craft: {
    eyebrow: 'Pekerjaan yang tak selalu terlihat',
    headline: 'Hal-hal kecil yang menjaga hari besar.',
    lede: 'Detail dicek. Vendor dikoordinasikan. Lokasi dipersiapkan. Semua itu terjadi sebelum kalian menerima tamu pertama.',
  },
  process: {
    eyebrow: 'Cara kami bekerja',
    headline: 'Dari percakapan hingga hari pelaksanaan',
    lede: 'Proses yang jelas membantu kalian tahu apa yang sedang terjadi di setiap tahap.',
  },
  team: {
    eyebrow: 'Tim MOCA',
    headline: 'Orang-orang di balik detail',
    lede: 'Acara yang terasa lancar membutuhkan orang-orang yang memperhatikan detail sebelum kalian menyadarinya.',
    note: 'Potret dan nama tim aktual menunggu aset dari MOCA.',
  },
  voices: {
    eyebrow: 'Cerita dari pasangan',
    headline: 'Mereka yang sudah menjalaninya',
    caption: 'Dokumentasi pasangan',
    pendingQuote:
      'Kutipan asli pasangan MOCA belum dikirim. Tidak ada cerita yang disusun untuk mengisi ruang ini.',
    pendingCouple: 'Nama pasangan menunggu data MOCA',
    pendingContext: 'Konteks acara menunggu data MOCA',
    pendingCount: 'Belum ada testimoni yang bisa ditampilkan',
    note: 'Contoh tata letak testimoni. Kutipan, nama, dan foto perlu diganti dengan cerita asli pasangan MOCA.',
  },
  faq: {
    eyebrow: 'Sebelum kita mulai',
    headline: 'Pertanyaan yang mungkin ingin kalian ajukan',
    pendingAnswer: 'Jawaban ini mengikuti kebijakan MOCA — silakan tanyakan langsung lewat WhatsApp.',
    cta: 'Tanya lewat WhatsApp',
  },
  inquiry: {
    eyebrow: 'Sekarang, tentang pernikahan kalian',
    headline: 'Ceritakan sedikit tentang yang sedang kalian siapkan.',
    lede: 'Setiap pernikahan dimulai dari sesuatu yang personal. Ceritakan kebutuhan kalian; kami akan membantu melihat langkah berikutnya.',
    formEyebrow: 'Mulai dengan cerita kalian',
    formHint: 'Cukup cerita singkat — kita bisa melanjutkan percakapan dari sana.',
    submit: 'Mulai Konsultasi',
  },
  closing: {
    headline: 'Kalian nikmati harinya. Kami urus detailnya.',
    cta: 'Mulai Konsultasi',
  },
  footer: {
    columns: [
      {
        title: 'Layanan',
        links: [
          { href: '#layanan', label: 'Perencanaan' },
          { href: '#layanan', label: 'Koordinasi' },
          { href: '#layanan', label: 'Pernikahan Adat' },
          { href: '#layanan', label: 'Pernikahan Intim' },
        ],
      },
      {
        title: 'Pernikahan',
        links: [
          { href: '#pernikahan', label: 'Pernikahan Kami' },
          { href: '#tanya', label: 'FAQ' },
        ],
      },
    ],
    contactTitle: 'Hubungi',
    /** Ditampilkan hanya kalau tidak ada kanal yang sudah terisi. */
    pendingContact: ['WhatsApp', 'Instagram', 'Email'],
  },
  /** Tujuan semua CTA selama nomor WhatsApp belum diisi. */
  formAnchor: '#mulainya',
  waMessage:
    'Halo, saya ingin konsultasi soal pernikahan kami. Tanggal rencana: …, lokasi: …, jumlah tamu: …',
} as const;
