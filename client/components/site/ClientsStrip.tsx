import { clients } from "@/data/site";

export default function ClientsStrip() {
  const list = [...clients, ...clients];
  return (
    <section className="bg-black py-10">
      <div className="border-t-2 border-primary" />
      <div className="overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] gap-8 py-6 will-change-transform">
          {list.map((c, idx) => (
            <div key={idx} className="h-14 w-36 shrink-0 rounded-md bg-white grid place-items-center grayscale hover:grayscale-0 transition">
              {c.logo ? (
                <img src={c.logo} alt={c.name} className="max-h-10 max-w-[8rem] object-contain" />
              ) : (
                <span className="px-2 text-black font-semibold">{c.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
