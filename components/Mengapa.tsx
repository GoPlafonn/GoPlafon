import { ALASAN } from "@/data/site";
import { IKON_ALASAN } from "./Ikon";
import Seksi from "./Seksi";

export default function Mengapa() {
  return (
    <Seksi
      id="mengapa"
      judul="Mengapa Memilih GoPlafon?"
      sub="Empat alasan pelanggan mempercayakan plafonnya kepada kami."
    >
      <div className="grid gap-3.5 md:grid-cols-2">
        {ALASAN.map((a, i) => {
          const Ikon = IKON_ALASAN[i];
          return (
            <div
              key={a.judul}
              className="flex items-start gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-4.5"
            >
              <Ikon className="size-9 shrink-0 opacity-90" />
              <div>
                <h3 className="font-semibold">{a.judul}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/85">{a.isi}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Seksi>
  );
}
