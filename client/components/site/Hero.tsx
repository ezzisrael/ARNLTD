type Props = { title: string; subline?: string; image: string; heightClass?: string; center?: boolean };
export default function Hero({ title, subline, image, heightClass = "h-[36vh] md:h-[48vh]", center = true }: Props){
  return (
    <section className={`relative w-full ${heightClass} overflow-hidden bg-black`}>
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-black/50" />
      <div className={`relative z-10 container h-full flex ${center ? "items-center" : "items-end"}`}>
        <div className="max-w-4xl py-10">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">{title}</h1>
          {subline && <p className="mt-3 text-primary text-lg md:text-xl font-semibold">{subline}</p>}
        </div>
      </div>
    </section>
  );
}
