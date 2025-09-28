import Hero from "@/components/site/Hero";
import ContactInfo from "@/components/site/ContactInfo";
import ContactForm from "@/components/site/ContactForm";
import MapEmbed from "@/components/site/MapEmbed";
import CTABlack from "@/components/site/CTABlack";

export default function Contact() {
  return (
    <main>
      <Hero
        title="Get in Touch with Aron Nigeria Limited"
        subline="We’re here to build, support, and partner with you."
        image="https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=1600&auto=format&fit=crop"
        heightClass="h-[46vh] md:h-[56vh]"
      />
      <ContactInfo />
      <ContactForm />
      <MapEmbed />
      <CTABlack
        heading="Let’s Build Together."
        subline="Your vision, our expertise."
        buttonLabel="Request a Consultation"
        to="/contact"
      />
    </main>
  );
}
