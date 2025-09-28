import { Link } from "react-router-dom";

export default function QHSEHighlight() {
  return (
    <section className="bg-primary text-white">
      <div className="container py-14 grid md:grid-cols-[1fr_auto] items-center gap-6">
        <p className="text-lg md:text-xl font-semibold">
          “At Aron, safety and quality are non-negotiable. Our QHSE standards
          protect people, preserve environments, and guarantee excellence.”
        </p>
        <Link
          to="/qhse"
          className="justify-self-start md:justify-self-end rounded-full bg-black px-6 py-3 font-semibold hover:bg-black/90"
        >
          Read Full QHSE Policy
        </Link>
      </div>
    </section>
  );
}
