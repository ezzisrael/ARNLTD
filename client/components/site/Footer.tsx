import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/news", label: "News" },
  { to: "/qhse", label: "QHSE" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="border-t-2 border-primary" />
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-sm bg-primary" />
          <div>
            <p className="font-extrabold tracking-wide">ARON NIGERIA</p>
            <p className="text-white/60 text-sm">Building since 1984</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-center">
          {quickLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-white/80 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="text-right space-y-1">
          <p className="font-semibold">Contact</p>
          <p className="text-white/80">+234 800 000 0000</p>
          <p className="text-white/80">info@aron.com.ng</p>
          <p className="text-white/80">ARON House, 6 Lagos Street, Ebute Metta, Lagos, Nigeria</p>
        </div>
      </div>
      <div className="container pb-10">
        <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10">
          <iframe
            title="Aron location map"
            className="w-full h-64 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent('ARON House, 6 Lagos Street, Ebute Metta, Lagos, Nigeria')}&output=embed`}
          />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 text-center text-white/60 text-sm">
          © 2025 Aron Nigeria Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
