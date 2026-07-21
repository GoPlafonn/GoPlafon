"use client";

import Image from "next/image";
import { Modal } from "@heroui/react";
import { GALERI } from "@/data/site";
import Seksi from "./Seksi";

export default function Galeri() {
  return (
    <Seksi
      id="galeri"
      judul="Hasil Pekerjaan Kami"
      sub="Sebagian proyek yang sudah kami kerjakan. Ketuk foto untuk memperbesar."
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {GALERI.map((g) => (
          <Modal key={g.src}>
            <Modal.Trigger>
              <button
                type="button"
                aria-label={`Perbesar foto: ${g.alt}`}
                className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            </Modal.Trigger>

            <Modal.Backdrop>
              <Modal.Container>
                <Modal.Dialog aria-label={`Foto proyek: ${g.alt}`}>
                  {/* Pola render-prop React Aria: memberi fungsi close() yang pasti
                      bekerja. Tombol tutup wajib ada supaya pengunjung HP tidak
                      terjebak saat foto sedang dibuka. */}
                  {({ close }) => (
                    <>
                      <button
                        type="button"
                        onClick={close}
                        aria-label="Tutup foto"
                        className="absolute top-3 right-3 z-10 grid size-9 place-items-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          aria-hidden="true"
                          className="size-5"
                        >
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      </button>

                      <Image
                        src={g.src}
                        alt={g.alt}
                        width={1000}
                        height={750}
                        className="h-auto max-h-[78vh] w-full rounded-xl object-contain"
                      />
                      <p className="mt-3 text-center text-sm text-slate-500">{g.alt}</p>
                    </>
                  )}
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        ))}
      </div>
    </Seksi>
  );
}
