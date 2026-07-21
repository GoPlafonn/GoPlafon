# Panduan Website GoPlafon.id

Catatan singkat untuk merawat dan mengubah isi website ini.

## Isi folder

| File / folder | Isinya |
|---|---|
| `index.html` | Seluruh teks dan struktur halaman |
| `css/style.css` | Warna, ukuran, tata letak |
| `js/main.js` | Menu HP, galeri klik-perbesar, pelacakan klik WhatsApp |
| `images/` | Semua gambar (format `.webp`, sudah dikompres) |
| `sitemap.xml` | Peta situs untuk Google (daftar alamat halaman) |
| `robots.txt` | Izin bagi mesin pencari + penunjuk ke sitemap |

File gambar asli sebelum dikompres disimpan di luar folder web:
`GoPlafon.id/_Gambar Asli (Backup)/` — jangan diunggah ke hosting, ukurannya besar.

## Cara mengganti hal yang sering berubah

**Ganti harga** — cari `Rp200.000` di `index.html` (muncul di 4 tempat: hero, kartu layanan,
kotak harga, dan data untuk Google di bagian atas file).

**Ganti nomor WhatsApp** — cari `6281231065773`, ganti semuanya. Format: kode negara tanpa
tanda `+` dan tanpa angka 0 di depan.

**Tambah foto galeri**
1. Masukkan foto ke folder `images/`.
2. Kecilkan dulu ukurannya (lihat bagian "Kompres gambar" di bawah).
3. Salin satu blok `<button class="galeri-item">...</button>` di `index.html`, lalu ganti
   nama file dan tulisan `alt` sesuai foto barunya.

**Isi testimoni** — di `index.html` ada blok bertanda
`TESTIMONI (SIAP DIISI)`. Hapus tanda `<!--` di awal dan `-->` di akhir blok, lalu isi
dengan kalimat asli dari pelanggan.

**Ganti tautan Google Maps** — cari `maps/search` di `index.html`, ganti dengan tautan
profil Google Maps GoPlafon.

## Kompres gambar (penting)

Foto langsung dari HP berukuran 3–5 MB dan membuat website lambat. Sebelum diunggah,
kecilkan lewat Terminal:

```bash
# ubah ukuran jadi maksimal 1000 piksel lalu jadikan webp
sips -Z 1000 foto-asli.jpg --out sementara.jpg
cwebp -q 72 sementara.jpg -o images/galeri-7.webp
```

Target: setiap foto di bawah 100 KB. Seluruh halaman sebaiknya tetap di bawah 500 KB.

## Sebelum website dionlinekan

1. Beli domain **`goplafon.my.id`**. Alamat ini **sudah tertulis** di `index.html`,
   `sitemap.xml`, dan `robots.txt` — jadi tidak perlu diubah lagi. Kalau suatu saat
   pindah ke domain lain, ganti semua baris `https://goplafon.my.id/` di ketiga file itu.
2. Pasang Meta Pixel dan/atau Google Ads di `index.html`, pada bagian bertanda
   `TEMPAT PIXEL IKLAN`.
3. Buka `js/main.js` bagian 3, hapus tanda `//` pada baris pelacakan yang dipakai.
   Tanpa langkah ini, jumlah klik WhatsApp dari iklan tidak akan terhitung.

## SEO (Search Engine Optimization)

Sudah terpasang: judul & deskripsi halaman, data usaha untuk Google (harga, jam buka,
area layanan), daftar FAQ, peta situs, dan pengaturan gambar saat dibagikan di WhatsApp/
Facebook. Yang masih perlu Bapak lakukan agar hasilnya maksimal:

1. **Google Bisnis Profil** — daftarkan GoPlafon di Google Maps (gratis). Ini yang paling
   berpengaruh untuk pencarian "jasa plafon Mojokerto". Setelah jadi, ganti tautan
   `maps/search` di `index.html` dengan tautan profil resmi.
2. **Titik koordinat lokasi** — bila ingin muncul lebih akurat di peta, koordinat workshop
   (garis lintang & bujur dari Google Maps) bisa ditambahkan ke data Google. Belum diisi
   karena butuh angka pasti dari Bapak.
3. **Daftarkan ke Google Search Console** — langkahnya di bagian bawah panduan ini.
4. **Jam operasional** di data Google saat ini diisi **Senin–Sabtu, 07.00–16.00**.
   Kalau ternyata buka hari Minggu juga (atau ada hari libur), beri tahu untuk disesuaikan.

## Cara daftar Google Search Console

Search Console itu alat gratis dari Google untuk memantau apakah website muncul di
pencarian, kata kunci apa yang membawa pengunjung, dan kalau ada masalah teknis.

> **Penting:** langkah ini baru bisa diselesaikan **setelah website online** di domain
> `goplafon.my.id`. Sebelum di-hosting, Google belum bisa memverifikasi. Kode tempat
> verifikasi sudah disiapkan di `index.html` (cari tulisan `VERIFIKASI GOOGLE SEARCH CONSOLE`).

Setelah website sudah online, ikuti urutan ini:

1. Buka **https://search.google.com/search-console** dan masuk dengan akun Google usaha
   (sebaiknya email yang sama dipakai untuk Instagram/iklan).
2. Klik **Add property / Tambahkan properti**. Pilih tipe **"Awalan URL / URL prefix"**,
   lalu ketik alamat lengkap: `https://goplafon.my.id`
3. Pada pilihan verifikasi, pilih **"Tag HTML"**. Google menampilkan satu baris kode.
   Salin baris itu, lalu buka `index.html` dan tempel menggantikan baris contoh di bagian
   `VERIFIKASI GOOGLE SEARCH CONSOLE` (hapus tanda komentarnya). Unggah ulang file, lalu
   kembali ke Search Console dan klik **Verify / Verifikasi**.
4. Setelah berhasil, buka menu **Sitemaps**. Pada kolom isian, ketik `sitemap.xml`
   lalu klik **Submit / Kirim**.
5. (Opsional, mempercepat) Buka menu **Inspeksi URL** di atas, tempel `https://goplafon.my.id/`,
   tekan Enter, lalu klik **Minta pengindeksan / Request indexing**.

Hasil pencarian tidak muncul seketika — biasanya butuh beberapa hari sampai 2 minggu
sampai Google selesai mengindeks. Ini normal.

> **Alternatif bagi yang paham DNS:** saat membeli domain, bisa juga pilih tipe properti
> **"Domain"** dan menaruh satu data **TXT** di pengaturan DNS. Cara ini mencakup semua versi
> alamat (www / non-www, http / https) sekaligus, tapi sedikit lebih teknis. Metode "Tag HTML"
> di atas sudah cukup.

## Yang sengaja TIDAK ditulis di website

- **Garansi** — belum ada kebijakan garansi resmi, jadi tidak dijanjikan.
- **Testimoni** — dikosongkan sampai ada testimoni asli dari pelanggan.
- **Jumlah bintang / rating** — hanya boleh ditampilkan kalau ulasannya benar-benar ada.

Menuliskan hal yang belum benar berisiko membuat akun iklan diblokir dan merugikan
kepercayaan pelanggan.
