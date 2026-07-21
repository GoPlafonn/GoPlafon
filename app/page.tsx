import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Harga from "@/components/Harga";
import Galeri from "@/components/Galeri";
import Mengapa from "@/components/Mengapa";
import Faq from "@/components/Faq";
import Area from "@/components/Area";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";
import WaMelayang from "@/components/WaMelayang";

export default function Beranda() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Layanan />
        <Harga />
        <Galeri />
        <Mengapa />
        <Faq />
        <Area />
        <Kontak />
      </main>
      <Footer />
      <WaMelayang />
    </>
  );
}
