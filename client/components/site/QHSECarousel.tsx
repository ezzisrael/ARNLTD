import { useEffect, useState } from "react";

type Slide = { image: string; text: string };
const slides: Slide[] = [
  { image: "https://images.unsplash.com/photo-1518607692857-1f7bd1b6f5f3?q=80&w=1600&auto=format&fit=crop", text: "Safety-first approach in Lagos Stadium Renovation" },
  { image: "https://images.unsplash.com/photo-1524159725254-5a2b22b789c2?q=80&w=1600&auto=format&fit=crop", text: "Environmental care in Housing Estate Abuja" },
  { image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop", text: "Quality assured delivery across critical infrastructure" },
];

export default function QHSECarousel(){
  const [i, setI] = useState(0);
  useEffect(()=>{ const id=setInterval(()=> setI(v => (v+1)%slides.length), 3500); return ()=> clearInterval(id); },[]);
  return (
    <section className="bg-white py-16">
      <div className="container relative h-64 md:h-96 overflow-hidden rounded-xl">
        {slides.map((s, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ${idx===i?"opacity-100":"opacity-0"}`}>
            <img src={s.image} alt="QHSE highlight" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-4 left-4 right-4 text-white font-semibold">
              <span className="rounded-full bg-primary px-3 py-1 mr-2">QHSE</span>
              {s.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
