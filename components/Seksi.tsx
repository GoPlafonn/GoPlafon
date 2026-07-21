/** Kerangka satu bagian halaman: kartu besar dengan judul dan penjelasan. */
export default function Seksi({
  id,
  judul,
  sub,
  terang = false,
  children,
}: {
  id: string;
  judul: string;
  sub?: string;
  /** true = kartu putih, false = kartu navy */
  terang?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto mb-9 max-w-5xl px-4">
      <div
        className={`rounded-3xl p-7 shadow-lg md:p-10 ${
          terang ? "bg-white text-[var(--gp-navy)]" : "bg-[var(--gp-navy)] text-white"
        }`}
      >
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{judul}</h2>
        {sub && (
          <p
            className={`mt-1.5 mb-6 max-w-2xl ${
              terang ? "text-slate-500" : "text-white/85"
            }`}
          >
            {sub}
          </p>
        )}
        {!sub && <div className="mb-6" />}
        {children}
      </div>
    </section>
  );
}
