import { Chip } from "@heroui/react";
import { AREA, situs } from "@/data/site";
import Seksi from "./Seksi";

export default function Area() {
  return (
    <Seksi
      id="area"
      judul="Area Layanan"
      sub={`Workshop kami di ${situs.alamat.kecamatan}, ${situs.alamat.kabupaten}. Kami melayani pemasangan di:`}
      terang
    >
      <ul className="flex flex-wrap gap-2.5">
        {AREA.map((kota) => (
          <li key={kota}>
            <Chip variant="soft" size="lg">
              {kota}
            </Chip>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-slate-500">
        Lokasi Anda di luar daftar ini? Silakan tetap hubungi kami — sebagian wilayah
        sekitar masih bisa kami jangkau.
      </p>
    </Seksi>
  );
}
