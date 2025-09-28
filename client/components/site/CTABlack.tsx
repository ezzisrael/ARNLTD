import { Link } from "react-router-dom";

export default function CTABlack() {
  return (
    <section className="bg-black text-white">
      <div className="container py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Together, we can build the future.
        </h2>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
