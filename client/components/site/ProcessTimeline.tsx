const steps = [
  { title: "Consultation", text: "Understanding project needs." },
  { title: "Design", text: "Architectural, structural, and engineering planning." },
  { title: "Execution", text: "Swift, safe, and precise delivery." },
  { title: "Quality Control", text: "Testing, inspections, and compliance." },
  { title: "Handover & Support", text: "Post-project care and client support." },
];

export default function ProcessTimeline(){
  return (
    <section className="bg-gray-50">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((s, idx) => (
            <div key={s.title} className="relative rounded-xl bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-primary">Step {idx+1}</div>
              <div className="mt-1 font-bold">{s.title}</div>
              <div className="mt-2 text-sm text-gray-600">{s.text}</div>
              {idx < steps.length-1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 h-[2px] w-6 bg-primary/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
