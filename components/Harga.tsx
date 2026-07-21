import { situs, LANGKAH } from "@/data/site";
import Seksi from "./Seksi";

export default function Harga() {
  return (
    <Seksi
      id="harga"
      judul="Harga &amp; Cara Kerja"
      sub="Tanpa biaya tersembunyi. Rincian anggaran biaya diberikan sebelum pekerjaan dimulai."
      terang
    >
      {/* kotak harga */}
      <div className="mb-7 rounded-2xl bg-gradient-to-br from-[var(--gp-navy)] to-[var(--gp-navy-muda)] p-7 text-center text-white">
        <p className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
          {situs.hargaTampil} <span className="text-base font-medium opacity-85">/ m²</span>
        </p>
        <p className="mt-2 text-sm opacity-90">
          Harga mulai dari, untuk pemasangan plafon PVC. Biaya akhir menyesuaikan luas
          area, jenis material, dan tingkat kerumitan — dipastikan setelah survei.
        </p>
      </div>

      {/* langkah kerja */}
      <ol className="grid gap-3.5 md:grid-cols-2">
        {LANGKAH.map((l, i) => (
          <li
            key={l.judul}
            className="flex items-start gap-3.5 rounded-2xl bg-slate-100 p-4"
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--gp-navy)] text-sm font-bold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold">{l.judul}</h3>
              <p className="text-sm text-slate-500">{l.isi}</p>
            </div>
          </li>
        ))}
      </ol>
    </Seksi>
  );
}
