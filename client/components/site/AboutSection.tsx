import { useEffect, useState } from "react";

const aboutSlides = [
  "https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520881363902-a0ff4e722963?q=80&w=1400&auto=format&fit=crop",
];

export default function AboutSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % aboutSlides.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative h-72 md:h-[420px] overflow-hidden rounded-xl">
          {aboutSlides.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="About Aron"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            AWe are a leading engineering and construction company in Nigeria with over 40 years of experience. Specializing in the delivery of high-quality construction projects, we have built numerous port facilities and successfully executed a wide range of government and private sector projects. At Aron Nigeria, we combine innovation, durability, and safety to contribute meaningfully to Nigeria’s infrastructure development. Our commitment to excellence ensures that every project meets the highest standards and stands the test of time.
          </p>
          <a
            href="/about"
            className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
