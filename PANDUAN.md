# Panduan Website GoPlafon

Website: **https://goplafon.my.id**
Kode: repo GitHub `GoPlafonn/GoPlafon`

---

## Hal terpenting: cara mengubah isi website

**Bapak tidak perlu membuka Terminal.** Semua teks yang sering berubah ada di satu
berkas: **`data/site.ts`**.

Langkahnya:

1. Buka https://github.com/GoPlafonn/GoPlafon
2. Klik folder **`data`** → klik berkas **`site.ts`**
3. Klik ikon **pensil** (Edit) di kanan atas
4. Ubah yang perlu diubah
5. Gulir ke bawah, klik **Commit changes**

Website akan **membangun ulang dirinya sendiri** dan tayang dalam **± 2 menit**.
Bapak bisa memantau prosesnya di tab **Actions**.

### Contoh: mengubah harga

Cari baris ini di `data/site.ts`:

```ts
hargaMulai: 200000,
hargaTampil: "Rp200.000",
```

Ganti **keduanya** (yang satu untuk data Google, yang satu untuk tampilan).
Harga akan otomatis berubah di hero, kartu layanan, kotak harga, FAQ, dan data Google
— sekali ubah, berubah di semua tempat.

### Yang bisa diubah di `data/site.ts`

| Bagian | Isinya |
|---|---|
| `situs` | Nomor WA, jam buka, alamat, tautan sosmed, tahun berdiri, jumlah proyek |
| `AREA` | Daftar kota yang dilayani |
| `LAYANAN` | Dua kartu layanan |
| `ALASAN` | Empat alasan di bagian "Mengapa Kami" |
| `LANGKAH` | Empat langkah cara kerja |
| `GALERI` | Daftar foto hasil pekerjaan |
| `FAQ` | Tanya-jawab |

> **Kenapa satu berkas?** Karena teks FAQ yang dilihat pengunjung dan data FAQ yang
> dibaca Google diambil dari sumber yang sama. Jadi keduanya tidak mungkin berbeda isi
> — Google mensyaratkan itu.

---

## Menambah foto galeri

1. Kecilkan dulu fotonya (lihat bagian "Kompres gambar" di bawah)
2. Di GitHub, buka folder **`public/images`** → **Add file → Upload files** → unggah foto
3. Buka `data/site.ts`, tambahkan satu baris di bagian `GALERI`:

```ts
{ src: "/images/galeri-7.webp", alt: "Jelaskan isi fotonya dengan singkat" },
```

Tulisan `alt` penting: dibaca Google dan pembaca layar untuk tunanetra.

---

## Kompres gambar (penting)

Foto langsung dari HP berukuran 3–5 MB dan membuat website lambat. Kecilkan dulu
lewat Terminal:

```bash
sips -Z 1000 foto-asli.jpg --out sementara.jpg
cwebp -q 72 sementara.jpg -o galeri-7.webp
```

Target: setiap foto di bawah 100 KB.

---

## Struktur berkas

| Berkas / folder | Isinya |
|---|---|
| `data/site.ts` | **Semua teks yang sering berubah** — ini yang biasanya Bapak edit |
| `app/layout.tsx` | Pengaturan SEO: judul, deskripsi, data untuk Google, verifikasi Search Console |
| `app/globals.css` | Warna merek dan gaya tambahan |
| `components/` | Bagian-bagian halaman (hero, layanan, galeri, dll) |
| `public/images/` | Semua gambar |
| `public/CNAME` | Berisi `goplafon.my.id`. **Jangan dihapus** — ini yang mengikat domain |
| `.github/workflows/` | Robot yang membangun & menerbitkan website otomatis |

---

## Jangan dihapus

1. **`public/CNAME`** — kalau hilang, domain `goplafon.my.id` lepas dan website
   kembali ke alamat github.io.
2. **Baris verifikasi Google** di `app/layout.tsx`:
   ```ts
   verification: { google: "2qzbbVNpu2C7..." }
   ```
   Google memeriksa ulang secara berkala. Kalau baris ini hilang, verifikasi Search
   Console batal dan datanya ikut hilang.
3. **Bagian `prefers-reduced-motion` di `app/globals.css`** — animasinya sengaja
   dipercepat, bukan dimatikan. Kalau diubah menjadi `animation: none`, jendela foto
   galeri tidak bisa ditutup, karena komponennya menunggu sinyal "animasi selesai".

---

## Kalau website tidak berubah setelah diedit

1. Buka tab **Actions** di GitHub
2. Lihat proses paling atas:
   - **Titik kuning** = sedang membangun, tunggu ± 2 menit
   - **Centang hijau** = berhasil. Buka website dengan **Cmd + Shift + R** (muat ulang paksa)
   - **Silang merah** = ada kesalahan. Klik untuk melihat pesannya

---

## Pengaturan penting (untuk rujukan)

**Sumber penerbitan GitHub Pages** harus tetap **"GitHub Actions"**
(Settings → Pages → Build and deployment → Source). Kalau diubah ke "Deploy from a
branch", website akan mati karena kode sumber React tidak bisa dibaca langsung
oleh browser tanpa proses build.

**DNS di DomaiNesia:**

| Tipe | Host | Nilai |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `goplafonn.github.io` |

Keempat alamat IP itu milik GitHub. Bila website dipindah ke hosting lain, data DNS
inilah yang perlu diganti.

---

## Google Search Console

Website sudah diverifikasi. Yang masih perlu dilakukan:

1. Masuk https://search.google.com/search-console
2. Menu **Sitemaps** → ketik `sitemap.xml` → **Submit**
3. Opsional: menu **Inspeksi URL** → tempel `https://goplafon.my.id/` → **Minta pengindeksan**

Hasil pencarian butuh beberapa hari sampai 2 minggu untuk muncul. Itu normal.

**Yang paling berpengaruh berikutnya:** daftarkan GoPlafon di **Google Bisnis Profil**
(Google Maps) — gratis, dan paling menentukan untuk pencarian "jasa plafon Mojokerto".
Setelah jadi, ganti tautan `maps` di `data/site.ts` dengan tautan profil resminya.

---

## Yang sengaja TIDAK ditulis di website

- **Garansi** — belum ada kebijakan resmi, jadi tidak dijanjikan.
- **Testimoni** — menunggu testimoni asli dari pelanggan.
- **Jumlah bintang / rating** — hanya boleh ditampilkan kalau ulasannya benar-benar ada.

Menuliskan hal yang belum benar berisiko membuat akun iklan diblokir dan merugikan
kepercayaan pelanggan.

---

## Untuk yang paham teknis (opsional)

Menjalankan website di komputer sendiri:

```bash
npm install      # sekali saja
npm run dev      # buka http://localhost:3000
npm run build    # membangun versi siap terbit ke folder out/
```

Dibangun dengan Next.js 16 (static export), React 19, HeroUI v3, dan Tailwind CSS v4.
Static export dipilih agar seluruh isi halaman tetap berupa HTML biasa yang terbaca
Google — bukan halaman kosong yang diisi JavaScript.
