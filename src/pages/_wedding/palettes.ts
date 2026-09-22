/**
 * Palet warna untuk pratinjuan klien.
 *
 * Hanya id + label yang ada di sini; nilai warna tinggal satu sumber, yaitu
 * blok `[data-palette="…"]` di `src/styles/global.css`. Karena swatch di picker
 * ikut memakai variabel token yang sama, menambah palet baru = satu blok CSS
 * baru + satu baris di daftar ini.
 *
 * Palet default (`meja-seleksi`) ikut punya blok sendiri di CSS, mengulang nilai
 * `@theme`, supaya barisnya di picker tidak ikut warna palet yang sedang aktif.
 */
export interface Palette {
  id: string;
  name: string;
  note: string;
}

export const defaultPaletteId = 'meja-seleksi';

export const palettes: readonly Palette[] = [
  {
    id: 'meja-seleksi',
    name: 'Meja Seleksi',
    note: 'Bawaan sistem: kertas bukti, meja gelap, pensil merah.',
  },
  {
    id: 'abu-sage',
    name: 'Abu Sage',
    note: 'Untuk akad taman dan dekorasi hijau. Aksi tetap tanah liat.',
  },
  {
    id: 'kabut-slate',
    name: 'Kabut Slate',
    note: 'Untuk ballroom kota dan resepsi malam. Aksi tinta biru.',
  },
  {
    id: 'sepia-malam',
    name: 'Sepia Malam',
    note: 'Untuk resepsi klasik dengan cahaya hangat. Aksi wine.',
  },
];

/** Kunci penyimpanan pilihan palet di peramban klien. */
export const paletteStorageKey = 'wedding-palet';

/**
 * Skrip pra-paint: pasang `data-palette` pada <html> sebelum gaya pertama
 * dihitung, supaya klien tidak melihat kedip palet default saat membuka ulang.
 */
export const paletteBootstrap = `try{var s=localStorage.getItem(${JSON.stringify(
  paletteStorageKey
)});if(s&&${JSON.stringify(palettes.map((p) => p.id))}.indexOf(s)>-1)document.documentElement.dataset.palette=s}catch(e){}`;
