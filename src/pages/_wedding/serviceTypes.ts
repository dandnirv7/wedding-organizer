/** Kontrak data ledger lingkup kerja + pesan WhatsApp per layanan. */
export interface ServiceItem {
  no: string;
  name: string;
  desc: string;
  waLabel: string;
  /** Hanya layanan yang memang punya bukti foto yang membawa pelat. */
  plate?: {
    no: string;
    width: number;
    height: number;
  };
}

export function serviceWaMessage(name: string): string {
  return `Halo, saya ingin bertanya tentang layanan "${name}". Tanggal rencana kami: …, lokasi: …, jumlah tamu kira-kira: …`;
}
