const logos = ["ISO 9001","ISO 14001","ISO 45001","SON","COREN","ARCON","NSCDC","NIQS"];

export default function LogosStripLight(){
  const list = [...logos, ...logos];
  return (
    <section className="bg-gray-50">
      <div className="container overflow-hidden py-10">
        <div className="flex animate-[marquee_18s_linear_infinite] gap-8 will-change-transform">
          {list.map((l, i) => (
            <div key={i} className="h-14 w-40 shrink-0 rounded-md bg-white grid place-items-center text-gray-700 font-semibold shadow-sm grayscale hover:grayscale-0 transition">{l}</div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
