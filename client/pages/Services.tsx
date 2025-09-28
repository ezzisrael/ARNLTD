import Hero from "@/components/site/Hero";
import ServiceCards from "@/components/site/ServiceCards";
import ServicesAccordion from "@/components/site/ServicesAccordion";
import WhyChoose from "@/components/site/WhyChoose";
import ProcessTimeline from "@/components/site/ProcessTimeline";
import CTABanner from "@/components/site/CTABanner";

export default function Services() {
  return (
    <main>
      <Hero
        title="Our Services"
        subline="Engineering solutions that build tomorrow’s Nigeria"
        image="https://images.unsplash.com/photo-1465804575741-338df8554e66?q=80&w=1600&auto=format&fit=crop"
        heightClass="h-[46vh] md:h-[56vh]"
      />
      <ServiceCards />
      <ServicesAccordion />
      <WhyChoose />
      <ProcessTimeline />
      <CTABanner
        heading="Partner with us to bring your project to life."
        subline=""
        buttonLabel="Contact Us Today"
      />
    </main>
  );
}
