import { AREA, situs } from "@/data/site";
import Seksi from "./Seksi";
import TombolWA from "./TombolWA";
import {
  IkonFacebook,
  IkonInstagram,
  IkonJam,
  IkonPin,
  IkonTelepon,
  IkonTikTok,
} from "./Ikon";

const INFO = [
  {
    Ikon: IkonPin,
    judul: "Lokasi",
    isi: `Kec. ${situs.alamat.kecamatan}, Kab. Mojokerto, ${situs.alamat.provinsi}`,
  },
  { Ikon: IkonJam, judul: "Jam Operasional", isi: situs.jamBuka },
  { Ikon: IkonTelepon, judul: "Telepon / WhatsApp", isi: situs.teleponTampil },
  { Ikon: IkonPin, judul: "Cakupan", isi: AREA.join(", ") },
];

const SOSMED = [
  { Ikon: IkonInstagram, label: "Instagram", href: situs.sosmed.instagram },
  { Ikon: IkonFacebook, label: "Facebook", href: situs.sosmed.facebook },
  { Ikon: IkonTikTok, label: "TikTok", href: situs.sosmed.tiktok },
  { Ikon: IkonPin, label: "Google Maps", href: situs.sosmed.maps },
];

export default function Kontak() {
  return (
    <Seksi
      id="kontak"
      judul="Konsultasi Sekarang"
      sub="Tanya harga, jadwal, atau minta survei. Tidak dipungut biaya dan tanpa keharusan memesan."
    >
      {/* informasi kontak */}
      <div className="mb-6 grid gap-3.5 md:grid-cols-2">
        {INFO.map((k) => (
          <div
            key={k.judul}
            className="flex items-start gap-3.5 rounded-2xl bg-white/10 p-4"
          >
            <k.Ikon className="mt-0.5 size-5 shrink-0 opacity-85" />
            <div>
              <p className="text-xs font-medium tracking-wider uppercase opacity-70">
                {k.judul}
              </p>
              <p className="font-medium">{k.isi}</p>
            </div>
          </div>
        ))}
      </div>

      {/* tombol utama */}
      <div className="mb-6 text-center">
        <TombolWA
          size="lg"
          pesan="Halo GoPlafon, saya mau minta survei dan penawaran harga (RAB). Lokasi saya di: "
          className="w-full md:w-auto md:min-w-80"
        >
          Chat WhatsApp Sekarang
        </TombolWA>
      </div>

      {/* sosial media */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {SOSMED.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2.5 rounded-full bg-white px-3 py-3 font-semibold text-[var(--gp-navy)] transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <s.Ikon className="size-5 shrink-0" />
            {s.label}
          </a>
        ))}
      </div>
    </Seksi>
  );
}
