import Hero from "@/components/site/Hero";
import FilterableProjectsGrid from "@/components/site/FilterableProjectsGrid";
import CaseStudy from "@/components/site/CaseStudy";
import StatsBanner from "@/components/site/StatsBanner";
import Testimonials from "@/components/site/Testimonials";
import CTABanner from "@/components/site/CTABanner";

export default function Projects() {
  return (
    <main>
      <Hero
        title="Our Projects"
        subline="Shaping cities, communities, and lives across Nigeria"
        image="https://images.unsplash.com/photo-1465804575741-338df8554e66?q=80&w=1600&auto=format&fit=crop"
        heightClass="h-[46vh] md:h-[56vh]"
      />
      <FilterableProjectsGrid />
      <CaseStudy />
      <StatsBanner />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
