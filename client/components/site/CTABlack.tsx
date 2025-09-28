import { Link } from "react-router-dom";

type Props = {
  heading?: string;
  subline?: string;
  buttonLabel?: string;
  to?: string;
};
export default function CTABlack({
  heading = "Together, we can build the future.",
  subline,
  buttonLabel = "Contact Us",
  to = "/contact",
}: Props) {
  return (
    <section className="bg-black text-white">
      <div className="container py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">{heading}</h2>
        {subline && (
          <p className="mt-2 text-primary font-semibold">{subline}</p>
        )}
        <Link
          to={to}
          className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
