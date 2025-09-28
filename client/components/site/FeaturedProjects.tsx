import { Link } from "react-router-dom";
import { projects } from "@/data/site";

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <Link
            to="/projects"
            className="text-primary font-semibold hover:underline"
          >
            View All Projects
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl shadow-sm"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors" />
              <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-transparent group-hover:text-primary transition-colors">
                {p.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
