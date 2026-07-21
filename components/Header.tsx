"use client";

import { useState } from "react";
import Image from "next/image";
import { situs } from "@/data/site";
import TombolWA from "./TombolWA";

const MENU = [
  { href: "#layanan", label: "Layanan" },
  { href: "#harga", label: "Harga" },
  { href: "#galeri", label: "Galeri" },
  { href: "#mengapa", label: "Mengapa Kami" },
  { href: "#area", label: "Area" },
  { href: "#faq", label: "FAQ" },
];

const PESAN = "Halo GoPlafon, saya mau tanya pemasangan plafon.";

export default function Header() {
  const [buka, setBuka] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#beranda" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-utama.webp"
            alt="Logo GoPlafon"
            width={40}
            height={40}
            className="h-9 w-auto"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-[var(--gp-navy)]">
            {situs.nama}
          </span>
        </a>

        {/* menu layar besar */}
        <nav className="hidden items-center gap-1 md:flex">
          {MENU.map((m) => (
            <a
              key={m.href}
              href={m.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--gp-navy)] transition-colors hover:bg-slate-100"
            >
              {m.label}
            </a>
          ))}
          <TombolWA pesan={PESAN} size="sm" className="ml-1">
            WhatsApp
          </TombolWA>
        </nav>

        {/* tombol menu HP */}
        <button
          type="button"
          onClick={() => setBuka((v) => !v)}
          aria-label={buka ? "Tutup menu" : "Buka menu"}
          aria-expanded={buka}
          className="rounded-xl border-2 border-[var(--gp-navy)] p-1.5 text-[var(--gp-navy)] md:hidden"
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
            {buka ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* menu HP */}
      {buka && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 md:hidden">
          {MENU.map((m) => (
            <a
              key={m.href}
              href={m.href}
              onClick={() => setBuka(false)}
              className="block rounded-xl px-3 py-3 text-base font-medium text-[var(--gp-navy)] hover:bg-slate-100"
            >
              {m.label}
            </a>
          ))}
          <TombolWA pesan={PESAN} fullWidth className="mt-2">
            WhatsApp
          </TombolWA>
        </nav>
      )}
    </header>
  );
}
