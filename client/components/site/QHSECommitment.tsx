import { CheckCircle } from "lucide-react";

export default function QHSECommitment() {
  const items = [
    "Comply with all statutory and regulatory requirements.",
    "Prevent accidents through proactive risk assessment.",
    "Protect the environment by minimizing waste and emissions.",
    "Train and retrain staff on QHSE practices.",
    "Continuously improve through audits and feedback.",
  ];
  return (
    <section className="bg-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1543198126-a3f3f8690ee0?q=80&w=1400&auto=format&fit=crop"
          alt="Workers in PPE"
          className="rounded-xl h-72 md:h-[420px] w-full object-cover"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Our Commitment</h2>
          <ul className="mt-4 space-y-3">
            {items.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-700">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
