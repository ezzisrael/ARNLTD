import { Building2, Cog, Cable, Shield, Wrench } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Building, Civil & Structural Engineering",
    text:
      "Residential, commercial, and government buildings; roads and bridges; petroleum stations; irrigation; agro-industrial facilities.",
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    text:
      "Plumbing systems, hospital machines, medical equipment installations, cold rooms, kitchen & laundry equipment, pipeline works.",
  },
  {
    icon: Cable,
    title: "Electrical Engineering & Security Systems",
    text:
      "Power distribution, HVAC, fire alarms, security systems, and integrated communications.",
  },
];

export default function ServiceCards(){
  return (
    <section className="bg-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-1 hover:border-primary/60 hover:bg-orange-50/40 duration-200">
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
