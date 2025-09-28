import { Link } from "react-router-dom";

export default function CTAQHSEBlack() {
  return (
    <section className="bg-black text-white">
      <div className="container py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          QHSE is Our Culture.
        </h2>
        <p className="mt-2 text-primary font-semibold">
          Partner with us for safe, sustainable, and high-quality delivery.
        </p>
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
