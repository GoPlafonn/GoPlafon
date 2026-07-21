import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { situs, FAQ, AREA } from "@/data/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(situs.domain),
  title: "Jasa Pasang Plafon PVC Mojokerto, Sidoarjo & Surabaya | GoPlafon",
  description:
    "Jasa pemasangan plafon PVC & gypsum sejak 2017. Melayani Mojokerto, Sidoarjo, Surabaya, Gresik, Pasuruan, Malang, dan Jombang. Mulai Rp200.000/m², survei & RAB gratis. Konsultasi via WhatsApp.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: situs.nama,
    title: "Jasa Pasang Plafon PVC & Gypsum — GoPlafon Mojokerto",
    description:
      "Pengalaman sejak 2017, 50+ proyek. Melayani Mojokerto, Sidoarjo, Surabaya, Gresik, Pasuruan, Malang, Jombang. Mulai Rp200.000/m².",
    url: "/",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hasil pemasangan plafon PVC oleh GoPlafon",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/images/favicon.png", apple: "/images/favicon.png" },

  // Bukti kepemilikan untuk Google Search Console. JANGAN DIHAPUS —
  // kalau hilang, verifikasi Google batal dengan sendirinya.
  verification: {
    google: "2qzbbVNpu2C7MdKcJ6hWh3huOXeFHzt_LiaXkq4SjiQ",
  },

  other: {
    "geo.region": "ID-JI",
    "geo.placename": `${situs.alamat.kecamatan}, ${situs.alamat.kabupaten}, ${situs.alamat.provinsi}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#243c5a",
};

/* Data usaha untuk Google — membantu muncul di pencarian & Maps. */
const dataUsaha = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${situs.domain}/#usaha`,
  name: situs.nama,
  url: `${situs.domain}/`,
  description:
    "Jasa pemasangan plafon PVC dan gypsum, serta pembuatan dan perbaikan perabotan rumah tangga.",
  image: `${situs.domain}/images/og-image.jpg`,
  logo: `${situs.domain}/images/logo-utama.webp`,
  telephone: situs.telepon,
  foundingDate: situs.berdiri,
  priceRange: "Mulai Rp200.000/m2",
  currenciesAccepted: "IDR",
  address: {
    "@type": "PostalAddress",
    addressLocality: situs.alamat.kecamatan,
    addressRegion: situs.alamat.provinsi,
    addressCountry: "ID",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "16:00",
  },
  areaServed: AREA.map((kota) => ({ "@type": "City", name: kota })),
  makesOffer: {
    "@type": "Offer",
    priceCurrency: "IDR",
    price: String(situs.hargaMulai),
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(situs.hargaMulai),
      priceCurrency: "IDR",
      unitText: "meter persegi",
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: "1",
        unitCode: "MTK",
      },
    },
    itemOffered: { "@type": "Service", name: "Pemasangan Plafon PVC & Gypsum" },
  },
  sameAs: [situs.sosmed.instagram, situs.sosmed.facebook, situs.sosmed.tiktok],
};

/* Daftar tanya-jawab untuk Google. Sumbernya SAMA dengan yang tampil
   di halaman (data/site.ts), jadi isinya tidak mungkin berbeda. */
const dataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.tanya,
    acceptedAnswer: { "@type": "Answer", text: f.jawab },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${poppins.variable} antialiased`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dataUsaha) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dataFAQ) }}
        />
      </body>
    </html>
  );
}
