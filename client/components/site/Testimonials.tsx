import { useEffect, useState } from "react";

type T = { quote: string; name: string; role: string; company: string };
const items: T[] = [
  { quote: "Aron exceeded our expectations in delivery and safety.", name: "Emeka O.", role: "Director", company: "Lagos Sports Commission" },
  { quote: "Professional, precise, and dependable.", name: "Aisha B.", role: "Facilities Lead", company: "Federal Polytechnic Kano" },
  { quote: "Our housing estate was delivered ahead of schedule with superb quality.", name: "Kunle A.", role: "Project Sponsor", company: "Lekki Development" },
];

export default function Testimonials(){
  const [i, setI] = useState(0);
  useEffect(()=>{ const id=setInterval(()=> setI(v => (v+1)%items.length), 4000); return ()=> clearInterval(id); },[]);
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <blockquote key={t.name} className={`rounded-xl border p-6 shadow-sm transition-opacity duration-700 ${idx===i?"opacity-100":"opacity-40"}`}>
              <p className="text-gray-800">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-gray-600">{t.name}, {t.role}, {t.company}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
