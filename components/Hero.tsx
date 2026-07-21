import Image from "next/image";
import { Chip, buttonVariants } from "@heroui/react";
import { situs } from "@/data/site";
import TombolWA from "./TombolWA";

export default function Hero() {
  return (
    <section id="beranda" className="mx-auto mt-5 mb-10 max-w-5xl px-4">
      <div className="hero-lapisan relative flex min-h-[460px] items-end overflow-hidden rounded-3xl shadow-lg md:min-h-[480px]">
        <Image
          src="/images/bg-hero.webp"
          alt="Interior ruang tamu dengan plafon rapi"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 960px"
          className="object-cover"
        />

        <div className="relative z-10 w-full p-7 text-white md:p-11">
          <Chip variant="soft" size="sm" className="mb-3.5 backdrop-blur-sm">
            Melayani Mojokerto &amp; Jawa Timur sejak {situs.berdiri}
          </Chip>

          <h1 className="mb-3 text-3xl leading-tight font-bold tracking-tight drop-shadow-md md:text-5xl">
            Jasa Pemasangan Plafon PVC &amp; Gypsum Terpercaya
          </h1>

          <p className="mb-5 max-w-xl text-white/95 md:text-lg">
            Plafon rapi, rangka kokoh, pengerjaan tepat waktu. Material Ultapon PVC.{" "}
            <span className="font-semibold text-[var(--gp-emas)]">
              Mulai {situs.hargaTampil}/m²
            </span>{" "}
            — survei &amp; rincian biaya (RAB) gratis.
          </p>

          <div className="mb-6 flex flex-wrap gap-3">
            <TombolWA
              size="lg"
              pesan="Halo GoPlafon, saya mau tanya pemasangan plafon. Lokasi saya di: "
            >
              Konsultasi Gratis
            </TombolWA>
            <a
              href="#galeri"
              className={`${buttonVariants({ variant: "outline", size: "lg" })} rounded-full border-white/65 bg-white/15 text-white backdrop-blur-sm hover:bg-white hover:text-[var(--gp-navy)]`}
            >
              Lihat Hasil Kerja
            </a>
          </div>

          <dl className="flex flex-wrap gap-x-7 gap-y-2 border-t border-white/25 pt-4 text-sm text-white/95">
            <div className="flex items-center gap-2">
              <dt className="order-2">tahun berdiri</dt>
              <dd className="order-1 text-base font-bold">{situs.berdiri}</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="order-2">proyek selesai</dt>
              <dd className="order-1 text-base font-bold">{situs.jumlahProyek}</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="order-2">kota &amp; kabupaten</dt>
              <dd className="order-1 text-base font-bold">7</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
