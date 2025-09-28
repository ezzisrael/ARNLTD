import { useEffect, useState } from "react";
import { heroSlides } from "@/data/site";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <img src={s.image} alt={s.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}
      <div className="relative z-10 h-full container flex flex-col items-start justify-center text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold max-w-3xl leading-tight">Building Nigeria’s Future Since 1984</h1>
        <p className="mt-4 text-primary text-lg md:text-xl font-semibold">Engineering trust, innovation, and excellence in construction.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/projects" className="rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90">View Projects</Link>
          <Link to="/about" className="rounded-full border border-white/30 px-6 py-3 text-white font-semibold hover:bg-white/10">About Us</Link>
        </div>
      </div>
    </section>
  );
}
