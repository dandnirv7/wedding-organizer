/** Kontrak data untuk ServiceLedger + pesan WhatsApp per layanan. */
export interface ServiceItem {
  no: string;
  name: string;
  desc: string;
  waLabel: string;
  plateNo: string;
  plateWidth: number;
  plateHeight: number;
}

export function serviceWaMessage(name: string): string {
  return `Halo, saya ingin bertanya tentang layanan "${name}". Tanggal rencana kami: …, lokasi: …, jumlah tamu kira-kira: …`;
}
