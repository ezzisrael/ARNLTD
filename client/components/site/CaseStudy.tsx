import { useEffect, useState } from "react";

const imgs = [
  "https://images.unsplash.com/photo-1521540216272-a50305cd4421?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1400&auto=format&fit=crop",
];

export default function CaseStudy(){
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(()=> setI(v => (v+1)%imgs.length), 3500); return () => clearInterval(id); }, []);

  return (
    <section className="bg-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative h-72 md:h-[420px] overflow-hidden rounded-xl">
          {imgs.map((src, idx) => (
            <img key={src} src={src} alt="Case study" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx===i?"opacity-100":"opacity-0"}`} />
          ))}
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">National Stadium Renovation, Lagos</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">Aron Nigeria Limited delivered a state-of-the-art upgrade to Nigeria’s premier sports facility, ensuring international standards and long-term sustainability. Our integrated design and execution teams completed the works with zero lost-time incidents.</p>
          <a href="/projects" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90">Explore More Case Studies</a>
        </div>
      </div>
    </section>
  );
}
