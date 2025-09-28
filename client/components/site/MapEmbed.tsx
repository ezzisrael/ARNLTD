import { useState } from "react";

const MAPS = {
  lagos:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7924.311830430669!2d3.389!3d6.454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMTQuNCJOIDPCsDIzJzIwLjQiRQ!5e0!3m2!1sen!2sng!4v1700000000000",
  abuja:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7898.532!2d7.489!3d9.057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOScwMyc0NS4yIk4gNyAyOScyMC40IkU!5e0!3m2!1sen!2sng!4v1700000000001",
};

export default function MapEmbed() {
  const [city, setCity] = useState<"lagos" | "abuja">("lagos");
  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setCity("lagos")}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${city === "lagos" ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            Lagos HQ
          </button>
          <button
            onClick={() => setCity("abuja")}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${city === "abuja" ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            Abuja Office
          </button>
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-sm">
          <iframe
            title="map"
            src={MAPS[city]}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full grayscale"
          />
        </div>
      </div>
    </section>
  );
}
