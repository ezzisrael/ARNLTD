import { values } from "@/data/site";

export default function CoreValues() {
  return (
    <section className="bg-white py-14">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {values.map((v) => (
            <div
              key={v.label}
              className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="text-3xl">{v.emoji}</div>
              <p className="mt-3 font-semibold">{v.label}</p>
              <p className="text-sm text-gray-500">
                We live this value in every project.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
