import { MapPin, Phone, Mail } from "lucide-react";

type Card = { title: string; address: string; phones: string[]; emails: string[] };

const cards: Card[] = [
  {
    title: "Head Office (Lagos)",
    address: "ARON House, 6 Lagos Street, Ebute Metta, Lagos, Nigeria",
    phones: ["0806 335 9603", "0803 307 2063", "0803 335 4567"],
    emails: [
      "info@aronnigeria.com.ng",
      "projects@aronnigeria.com.ng",
      "finance@aronnigeria.com.ng",
    ],
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-xl border bg-white p-6 shadow-sm md:col-span-3"
          >
            <h3 className="text-lg font-bold">{c.title}</h3>
            <div className="mt-3 space-y-3 text-sm text-gray-700">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>{c.address}</span>
              </p>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <div className="space-y-1">
                  {c.phones.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <div className="space-y-1">
                  {c.emails.map((e) => (
                    <p key={e}>{e}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
