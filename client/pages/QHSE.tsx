import Hero from "@/components/site/Hero";
import QHSEPillars from "@/components/site/QHSEPillars";
import QHSECommitment from "@/components/site/QHSECommitment";
import LogosStripLight from "@/components/site/LogosStripLight";
import QHSECarousel from "@/components/site/QHSECarousel";
import CTAQHSEBlack from "@/components/site/CTAQHSEBlack";

export default function QHSE(){
  return (
    <main>
      <Hero
        title="QHSE Policy"
        subline="Quality • Health • Safety • Environment — Our Promise, Our Standard."
        image="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1600&auto=format&fit=crop"
        heightClass="h-[46vh] md:h-[56vh]"
      />

      <section className="bg-white">
        <div className="container py-12 text-center max-w-3xl">
          <p className="text-gray-700">At Aron Nigeria Limited, QHSE is not just a standard — it’s our foundation. We integrate quality assurance, occupational health, workplace safety, and environmental stewardship into every project we deliver.</p>
        </div>
      </section>

      <QHSEPillars />
      <QHSECommitment />
      <LogosStripLight />
      <QHSECarousel />
      <CTAQHSEBlack />
    </main>
  );
}
