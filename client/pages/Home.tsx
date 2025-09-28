import HeroSlider from "@/components/site/HeroSlider";
import CoreValues from "@/components/site/CoreValues";
import FeaturedProjects from "@/components/site/FeaturedProjects";
import AboutSection from "@/components/site/AboutSection";
import ClientsStrip from "@/components/site/ClientsStrip";
import NewsInsights from "@/components/site/NewsInsights";
import CTABanner from "@/components/site/CTABanner";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <CoreValues />
      <FeaturedProjects />
      <AboutSection />
      <ClientsStrip />
      <NewsInsights />
      <CTABanner />
    </main>
  );
}
