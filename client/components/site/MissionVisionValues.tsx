const cards = [
  { title: "Mission", text: "Deliver innovative, safe, and sustainable projects that shape Nigeria’s future." },
  { title: "Vision", text: "To be Nigeria’s most trusted construction partner, known for reliability and precision." },
  { title: "Core Values", text: "Innovation • Accuracy • Integrity • Safety • Teamwork." },
];

export default function MissionVisionValues(){
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <div key={c.title} className="rounded-xl border bg-white p-6 shadow-sm opacity-0 animate-[fadeIn_0.7s_ease_forwards]" style={{animationDelay: `${idx*120}ms`}}>
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-gray-600">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes fadeIn{to{opacity:1;transform:none}} .animate-[fadeIn_0.7s_ease_forwards]{transform:translateY(8px)}`}</style>
    </section>
  );
}
