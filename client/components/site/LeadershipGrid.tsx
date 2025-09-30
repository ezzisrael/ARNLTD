type Leader = { name: string; role: string; bio: string; photo: string };
const leaders: Leader[] = [
  {
    name: "Otunba Fatai Arowolo",
    role: "Chief Executive Officer",
    bio: "Three decades leading large infrastructure programs across Nigeria.",
    photo:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Chioma Okafor",
    role: "Director of Projects",
    bio: "Expert in stadiums, bridges, and public works delivery.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Ibrahim Musa",
    role: "QHSE Lead",
    bio: "Champion of zero-incident culture and environmental stewardship.",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Zainab Bello",
    role: "Head of Engineering",
    bio: "Specialist in structural systems and design-to-execution integration.",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
  },
];

export default function LeadershipGrid() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {leaders.map((l) => (
            <div
              key={l.name}
              className="rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <img
                src={l.photo}
                alt={l.name}
                className="h-52 w-full object-cover grayscale hover:grayscale-0 transition"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-[18px]"><strong>{l.name}</strong></h3>
                <p className="text-sm text-primary">{l.role}</p>
                <p className="mt-2 text-sm text-gray-600">{l.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
