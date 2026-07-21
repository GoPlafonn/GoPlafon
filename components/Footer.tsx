import Image from "next/image";
import { AREA, situs } from "@/data/site";

export default function Footer() {
  return (
    /* padding bawah ekstra di HP memberi ruang untuk tombol WA melayang,
       sekaligus menjaga bagian paling bawah tetap berwarna gelap */
    <footer className="bg-[var(--gp-navy-tua)] px-4 pt-9 pb-24 text-center text-white/80 md:pb-7">
      <div className="mb-3 flex items-center justify-center gap-2.5 text-white">
        <Image
          src="/images/logo-utama.webp"
          alt=""
          width={40}
          height={40}
          className="h-9 w-auto"
        />
        <span className="text-xl font-bold tracking-tight">{situs.nama}</span>
      </div>

      <p className="text-sm">
        Jasa pemasangan plafon PVC &amp; gypsum dan perabotan rumah tangga.
      </p>
      <p className="text-sm">
        Kec. {situs.alamat.kecamatan}, Kab. Mojokerto, {situs.alamat.provinsi} &middot;{" "}
        {situs.jamBuka}
      </p>
      <p className="text-sm">WhatsApp: {situs.teleponTampil}</p>

      <div className="mx-auto mt-5 max-w-5xl border-t border-white/15 pt-4 text-xs opacity-70">
        <p>
          &copy; {new Date().getFullYear()} {situs.nama}. Melayani {AREA.join(", ")}.
        </p>
      </div>
    </footer>
  );
}
