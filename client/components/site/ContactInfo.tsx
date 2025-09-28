import { MapPin, Phone, Mail } from "lucide-react";

type Card = { title: string; address: string; phone: string; email: string };

const cards: Card[] = [
  {
    title: "Lagos Office",
    address: "[Address]",
    phone: "+234 000 000 0000",
    email: "info@aronnigeria.com.ng",
  },
  {
    title: "Abuja Office",
    address: "[Address]",
    phone: "+234 000 000 0000",
    email: "abuja@aronnigeria.com.ng",
  },
  {
    title: "Regional/Project Offices",
    address: "Ibeju Lekki, Ibadan, others",
    phone: "+234 000 000 0000",
    email: "regional@aronnigeria.com.ng",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold">{c.title}</h3>
            <div className="mt-3 space-y-2 text-sm text-gray-700">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />{" "}
                <span>{c.address}</span>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5" />{" "}
                <span>{c.phone}</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5" />{" "}
                <span>{c.email}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
