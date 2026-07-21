import TombolWA from "./TombolWA";

/** Tombol WhatsApp yang selalu terlihat di pojok kanan bawah. */
export default function WaMelayang() {
  return (
    <div className="fixed right-4 bottom-4 z-40">
      <TombolWA
        pesan="Halo GoPlafon, saya mau tanya pemasangan plafon."
        className="shadow-xl"
      >
        Chat WA
      </TombolWA>
    </div>
  );
}
