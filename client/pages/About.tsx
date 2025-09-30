import Hero from "@/components/site/Hero";
import MissionVisionValues from "@/components/site/MissionVisionValues";
import LeadershipGrid from "@/components/site/LeadershipGrid";
import QHSEHighlight from "@/components/site/QHSEHighlight";
import CTABlack from "@/components/site/CTABlack";

export default function About() {
  return (
    <main>
      <Hero
        title="Who We Are"
        subline="Building with precision, integrity, and trust since 1984"
        image="https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?q=80&w=1600&auto=format&fit=crop"
        heightClass="h-[46vh] md:h-[56vh]"
      />

      <section className="bg-white py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-80 md:h-[420px]">
            <img
              className="col-span-2 row-span-2 object-cover w-full h-full rounded-lg"
              src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop"
              alt="Workers"
            />
            <img
              className="object-cover w-full h-full rounded-lg"
              src="https://images.unsplash.com/photo-1504306665854-6f20f2a6b9a3?q=80&w=800&auto=format&fit=crop"
              alt="Equipment"
            />
            <img
              className="object-cover w-full h-full rounded-lg"
              src="https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=800&auto=format&fit=crop"
              alt="Completed building"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are a leading engineering and construction company in Nigeria with over 40 years of experience. Specializing in delivering high-quality projects, we have built numerous port facilities and successfully executed a wide range of government and private sector developments. At Aron Nigeria, we combine innovation, durability, and safety to contribute meaningfully to Nigeria’s infrastructure growth. Our commitment to excellence ensures that every project meets the highest standards and stands the test of time.
            </p>
            <a
              href="/about"
              className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <MissionVisionValues />
      <LeadershipGrid />
      <QHSEHighlight />
      <CTABlack />
    </main>
  );
}
