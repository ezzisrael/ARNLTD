import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="bg-primary text-white">
      <div className="container py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">Ready to Build with Us?</h2>
        <p className="mt-2 text-white/90">Let’s turn vision into reality — together.</p>
        <Link to="/contact" className="mt-6 inline-block rounded-full bg-black px-6 py-3 font-semibold text-white hover:bg-black/90">Contact Us</Link>
      </div>
    </section>
  );
}
