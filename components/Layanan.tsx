import Image from "next/image";
import { Card, Chip } from "@heroui/react";
import { LAYANAN } from "@/data/site";
import Seksi from "./Seksi";

export default function Layanan() {
  return (
    <Seksi
      id="layanan"
      judul="Layanan Kami"
      sub="Dikerjakan langsung oleh tim sendiri, bukan dialihkan ke pihak lain."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {LAYANAN.map((l) => (
          <Card key={l.judul} className="items-center p-7 text-center">
            <Image
              src={l.ikon}
              alt=""
              width={160}
              height={160}
              className="mb-4 h-[74px] w-auto object-contain"
            />
            <Card.Title className="text-lg font-semibold">{l.judul}</Card.Title>
            <Card.Description className="mt-2 text-slate-500">
              {l.isi}
            </Card.Description>
            <Chip size="sm" variant="soft" className="mt-4">
              {l.catatan}
            </Chip>
          </Card>
        ))}
      </div>
    </Seksi>
  );
}
