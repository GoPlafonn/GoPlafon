import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Menghasilkan HTML statis biasa di folder out/ — inilah yang membuat
  // isi halaman tetap terbaca Google dan bisa dihosting di GitHub Pages.
  output: "export",

  // GitHub Pages tidak punya server pengolah gambar, jadi dimatikan.
  images: { unoptimized: true },

  // Membuat alamat berakhiran garis miring (goplafon.my.id/) — lebih aman di GitHub Pages.
  trailingSlash: true,
};

export default nextConfig;
