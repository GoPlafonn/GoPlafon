import { buttonVariants } from "@heroui/react";
import { tautanWA } from "@/data/site";
import { IkonWA } from "./Ikon";

type Props = {
  /** Pesan yang otomatis terisi di WhatsApp saat diklik. */
  pesan: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  ikonKelas?: string;
};

/**
 * Tombol WhatsApp. Dibuat sebagai tautan <a> (bukan <button>) supaya
 * bisa dibuka di tab baru dan tetap terbaca mesin pencari, tapi memakai
 * gaya tombol asli HeroUI lewat buttonVariants().
 */
export default function TombolWA({
  pesan,
  children,
  size = "md",
  fullWidth = false,
  className = "",
  ikonKelas = "size-[1.15em]",
}: Props) {
  return (
    <a
      href={tautanWA(pesan)}
      target="_blank"
      rel="noopener"
      className={`${buttonVariants({ size, fullWidth })} tombol-wa rounded-full ${className}`}
    >
      <IkonWA className={ikonKelas} />
      {children}
    </a>
  );
}
