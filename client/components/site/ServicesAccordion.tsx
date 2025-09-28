import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ServicesAccordion(){
  return (
    <section className="bg-white py-4 md:py-8">
      <div className="container">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">Building, Civil & Structural Engineering</AccordionTrigger>
            <AccordionContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5">
                <li>Residential Homes & Office Blocks</li>
                <li>Road & Steel-Framed Structures</li>
                <li>Rail Sliding & Bridges</li>
                <li>Petroleum Service Stations</li>
                <li>Irrigation Engineering</li>
                <li>Agro-Industrial Constructions</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">Mechanical Engineering</AccordionTrigger>
            <AccordionContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5">
                <li>Plumbing & Sanitary Systems</li>
                <li>Medical Equipment Installations</li>
                <li>Cold Rooms & Refrigeration</li>
                <li>Kitchen & Laundry Equipment</li>
                <li>Pipeline Works</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">Electrical Engineering & Security Systems</AccordionTrigger>
            <AccordionContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5">
                <li>Power Distribution Networks</li>
                <li>HVAC Systems</li>
                <li>Fire Detection & Alarm</li>
                <li>Security & Access Control</li>
                <li>Integrated Communications</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
