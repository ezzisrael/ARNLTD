import { BadgeCheck, HeartPulse, Shield, Leaf } from "lucide-react";

const pillars = [
  { icon: BadgeCheck, title: "Quality", text: "Strict compliance with global engineering and construction standards." },
  { icon: HeartPulse, title: "Health", text: "Promoting physical and mental well-being of employees and stakeholders." },
  { icon: Shield, title: "Safety", text: "Zero-tolerance approach to hazards; proactive risk management." },
  { icon: Leaf, title: "Environment", text: "Eco-conscious construction with sustainable methods and materials." },
];

export default function QHSEPillars(){
  return (
    <section className="bg-white py-16">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="group rounded-xl border bg-white p-6 shadow-sm transition hover:border-primary hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-orange-50 text-primary transition transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
