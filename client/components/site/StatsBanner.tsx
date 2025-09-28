export default function StatsBanner(){
  const stats = [
    { value: "40+", label: "Years of Excellence" },
    { value: "200+", label: "Completed Projects" },
    { value: "10M+", label: "Nigerians Impacted" },
    { value: "500+", label: "Skilled Professionals" },
  ];
  return (
    <section className="bg-black text-white">
      <div className="container py-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="space-y-1">
            <div className="text-3xl font-extrabold text-primary">{s.value}</div>
            <div className="text-white/80 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
