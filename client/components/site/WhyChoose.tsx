import { CheckCircle } from "lucide-react";

export default function WhyChoose() {
  const points = [
    "40+ years of trusted experience.",
    "Seamless integration of design & execution.",
    "Commitment to QHSE at every stage.",
    "Local expertise, global standards.",
  ];
  return (
    <section className="bg-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1581093588401-16da9cf9b37d?q=80&w=1400&auto=format&fit=crop"
          alt="Engineers on site"
          className="rounded-xl object-cover h-72 md:h-[420px] w-full"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Clients Choose Us
          </h2>
          <ul className="mt-4 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
