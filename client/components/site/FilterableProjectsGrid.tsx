import { useMemo, useState } from "react";

type Project = {
  title: string;
  image: string;
  category: string;
  location: string;
  description: string;
};

const categories = ["All", "Housing", "Sports", "Education", "Infrastructure"];

const dataset: Project[] = [
  {
    title: "Lagos Waterfront Redevelopment",
    image:
      "https://images.unsplash.com/photo-1504306665854-6f20f2a6b9a3?q=80&w=1400&auto=format&fit=crop",
    category: "Infrastructure",
    location: "Lagos",
    description: "Coastal protection and mixed-use public realm.",
  },
  {
    title: "Abuja Highrise Complex",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
    category: "Housing",
    location: "Abuja",
    description: "Premium residential and office towers.",
  },
  {
    title: "National Stadium Renovation",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
    category: "Sports",
    location: "Lagos",
    description: "World-class upgrade to premier sports facility.",
  },
  {
    title: "Federal Polytechnic Expansion",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop",
    category: "Education",
    location: "Kano",
    description: "State-of-the-art labs and lecture halls.",
  },
  {
    title: "Port Harcourt Industrial Park",
    image:
      "https://images.unsplash.com/photo-1524159725254-5a2b22b789c2?q=80&w=1400&auto=format&fit=crop",
    category: "Infrastructure",
    location: "Rivers",
    description: "Manufacturing and logistics hub.",
  },
  {
    title: "Lekki Housing Estate",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1400&auto=format&fit=crop",
    category: "Housing",
    location: "Lagos",
    description: "500-unit contemporary residential community.",
  },
];

export default function FilterableProjectsGrid() {
  const [active, setActive] = useState("All");
  const items = useMemo(
    () =>
      active === "All" ? dataset : dataset.filter((d) => d.category === active),
    [active],
  );

  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${active === c ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl shadow-sm"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-white/80">
                  {p.location} — {p.description}
                </p>
              </div>
              <div className="absolute inset-0 hidden place-items-center group-hover:grid">
                <span className="rounded-full bg-primary px-4 py-2 font-semibold text-white">
                  View Details
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
