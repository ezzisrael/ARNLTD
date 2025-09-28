import { news } from "@/data/site";
import { Link } from "react-router-dom";

export default function NewsInsights() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">News & Insights</h2>
          <Link
            to="/news"
            className="text-primary font-semibold hover:underline"
          >
            Read More
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((n) => (
            <article
              key={n.title}
              className="group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition-all"
            >
              <img src={n.image} alt="" className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{n.excerpt}</p>
                <Link
                  to="/news"
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
