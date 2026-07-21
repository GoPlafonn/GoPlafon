/* ==========================================================
   PUSAT DATA GOPLAFON
   Semua teks yang sering berubah ada di berkas ini.
   Mengubah di sini otomatis mengubah halaman DAN data untuk Google,
   jadi keduanya tidak mungkin berbeda isi.
   ========================================================== */

export const situs = {
  nama: "GoPlafon",
  domain: "https://goplafon.my.id",
  telepon: "+6281231065773",
  teleponTampil: "0812-3106-5773",
  whatsapp: "6281231065773",
  berdiri: "2017",
  jumlahProyek: "50+",
  hargaMulai: 200000,
  hargaTampil: "Rp200.000",
  jamBuka: "07.00 – 16.00 WIB",
  alamat: {
    kecamatan: "Mojosari",
    kabupaten: "Kabupaten Mojokerto",
    provinsi: "Jawa Timur",
  },
  sosmed: {
    instagram: "https://www.instagram.com/goplafon.id",
    facebook: "https://www.facebook.com/share/1EH2ahQXGn/",
    tiktok: "https://www.tiktok.com/@goplafon.id",
    maps: "https://www.google.com/maps/search/?api=1&query=GoPlafon+Mojosari+Mojokerto",
  },
} as const;

/** Membuat tautan WhatsApp berisi pesan yang sudah terisi otomatis. */
export function tautanWA(pesan: string) {
  return `https://wa.me/${situs.whatsapp}?text=${encodeURIComponent(pesan)}`;
}

export const AREA = [
  "Mojokerto",
  "Sidoarjo",
  "Surabaya",
  "Gresik",
  "Pasuruan",
  "Malang",
  "Jombang",
] as const;

export const LAYANAN = [
  {
    ikon: "/images/icon-layanan-1.webp",
    judul: "Pemasangan Plafon",
    isi: "Plafon PVC (Ultapon), gypsum, dan sejenisnya untuk rumah, ruko, kantor, hingga musala. Rangka kokoh dengan finishing rapi.",
    catatan: "Mulai Rp200.000/m²",
  },
  {
    ikon: "/images/icon-layanan-2.webp",
    judul: "Perabotan Rumah Tangga",
    isi: "Pembuatan dan perbaikan perabotan seperti lemari, rak, dan meja — menyesuaikan ukuran serta model yang Anda inginkan.",
    catatan: "Harga sesuai desain",
  },
];

export const ALASAN = [
  {
    judul: "Dikerjakan tenaga ahli",
    isi: "Setiap proyek ditangani langsung oleh tenaga yang berpengalaman di bidang konstruksi interior dan pembuatan perabotan sejak 2017.",
  },
  {
    judul: "Material pilihan",
    isi: "Kami menggunakan Ultapon PVC dan bahan baku pilihan yang terbukti awet, kokoh, serta aman untuk jangka panjang.",
  },
  {
    judul: "Harga jujur & transparan",
    isi: "Anda menerima rincian anggaran biaya (RAB) yang jelas di awal. Tidak ada biaya tambahan yang muncul mendadak.",
  },
  {
    judul: "Tepat waktu",
    isi: "Pekerjaan diselesaikan sesuai jadwal yang disepakati, dengan hasil akhir finishing yang mulus dan area kerja yang dibersihkan.",
  },
];

export const LANGKAH = [
  {
    judul: "Hubungi via WhatsApp",
    isi: "Ceritakan kebutuhan dan lokasi Anda. Kami balas pada jam kerja.",
  },
  {
    judul: "Survei & RAB gratis",
    isi: "Kami ukur langsung di lokasi, lalu berikan rincian anggaran biaya yang jelas.",
  },
  {
    judul: "Pengerjaan",
    isi: "Dikerjakan tim berpengalaman sesuai jadwal yang sudah disepakati.",
  },
  {
    judul: "Selesai & bersih",
    isi: "Hasil diperiksa bersama, area kerja dibereskan sebelum kami pamit.",
  },
];

export const GALERI = [
  {
    src: "/images/galeri-1.webp",
    alt: "Plafon PVC dengan lis kayu dan lampu LED biru di ruang keluarga",
  },
  {
    src: "/images/galeri-2.webp",
    alt: "Plafon PVC drop ceiling bertingkat dengan lampu LED ungu",
  },
  {
    src: "/images/galeri-3.webp",
    alt: "Plafon PVC putih dengan ornamen tengah dan lampu LED biru",
  },
  {
    src: "/images/galeri-4.webp",
    alt: "Plafon PVC motif garis dengan ornamen medalion dan lampu hangat",
  },
  {
    src: "/images/galeri-5.webp",
    alt: "Plafon PVC putih bergaris pada ruangan memanjang",
  },
  {
    src: "/images/galeri-6.webp",
    alt: "Plafon PVC motif kayu warna oranye dengan pencahayaan tersembunyi",
  },
];

/* Dipakai DUA kali: untuk tampilan FAQ di halaman, dan untuk data
   FAQ yang dibaca Google. Karena sumbernya satu, keduanya pasti sama. */
export const FAQ = [
  {
    tanya: "Berapa biaya pasang plafon PVC per meter?",
    jawab:
      "Harga mulai dari Rp200.000 per meter persegi untuk pemasangan plafon PVC. Biaya akhir menyesuaikan luas area, jenis material, dan tingkat kerumitan, dan dipastikan setelah survei gratis di lokasi Anda.",
  },
  {
    tanya: "Daerah mana saja yang dilayani GoPlafon?",
    jawab:
      "Kami melayani Mojokerto, Sidoarjo, Surabaya, Gresik, Pasuruan, Malang, dan Jombang. Workshop kami berada di Kecamatan Mojosari, Kabupaten Mojokerto. Untuk lokasi di sekitar wilayah tersebut, silakan hubungi kami terlebih dahulu.",
  },
  {
    tanya: "Material plafon apa yang GoPlafon gunakan?",
    jawab:
      "Untuk plafon PVC kami menggunakan Ultapon, serta gypsum sesuai kebutuhan. Kami memilih bahan yang terbukti awet, kokoh, dan aman untuk pemakaian jangka panjang.",
  },
  {
    tanya: "Apakah ada survei dan penawaran harga sebelum pengerjaan?",
    jawab:
      "Ya. Kami melakukan survei langsung ke lokasi dan memberikan rincian anggaran biaya (RAB) secara gratis, tanpa keharusan memesan.",
  },
  {
    tanya: "Berapa lama waktu pemasangan plafon?",
    jawab:
      "Lama pengerjaan tergantung luas ruangan dan tingkat kerumitan desain. Estimasi waktu yang jelas kami sampaikan bersama RAB setelah survei.",
  },
  {
    tanya: "Apakah GoPlafon juga mengerjakan selain plafon?",
    jawab:
      "Ya. Selain pemasangan plafon, kami juga menerima pembuatan dan perbaikan perabotan rumah tangga seperti lemari, rak, dan meja.",
  },
];
