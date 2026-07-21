import { Accordion } from "@heroui/react";
import { FAQ } from "@/data/site";
import Seksi from "./Seksi";

/**
 * Daftar tanya-jawab.
 * Sumber datanya SAMA dengan yang dikirim ke Google di app/layout.tsx,
 * sehingga teks yang dibaca pengunjung dan yang dibaca Google pasti cocok.
 * (Google mensyaratkan FAQ harus benar-benar terlihat di halaman.)
 */
export default function Faq() {
  return (
    <Seksi
      id="faq"
      judul="Pertanyaan yang Sering Ditanyakan"
      sub="Belum menemukan jawabannya? Hubungi kami langsung lewat WhatsApp."
      terang
    >
      <Accordion>
        {FAQ.map((f, i) => (
          <Accordion.Item key={f.tanya} id={`faq-${i}`}>
            <Accordion.Heading>
              <Accordion.Trigger>
                {f.tanya}
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="text-slate-600">{f.jawab}</Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Seksi>
  );
}
