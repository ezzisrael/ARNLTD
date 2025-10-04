import { useState } from "react";

const MAPS = {
  lagos: "https://www.google.com/maps?q=" + encodeURIComponent("ARON House, 6 Lagos Street, Ebute Metta, Lagos, Nigeria") + "&output=embed",
  abuja: "https://www.google.com/maps?q=" + encodeURIComponent("Abuja, Nigeria") + "&output=embed",
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
