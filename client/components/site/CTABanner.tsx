import { Link } from "react-router-dom";

type Props = { heading?: string; subline?: string; buttonLabel?: string; to?: string };
export default function CTABanner({ heading = "Ready to Build with Us?", subline = "Let’s turn vision into reality — together.", buttonLabel = "Contact Us", to = "/contact" }: Props) {
  return (
    <section className="bg-primary text-white">
      <div className="container py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">{heading}</h2>
        {subline && <p className="mt-2 text-white/90">{subline}</p>}
        <Link to={to} className="mt-6 inline-block rounded-full bg-black px-6 py-3 font-semibold text-white hover:bg-black/90">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
