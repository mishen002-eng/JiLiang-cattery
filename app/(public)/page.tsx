import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ParentCats } from "@/components/sections/two-locations";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { HomepageFAQ } from "@/components/sections/homepage-faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ParentCats />
      <HowItWorks />
      <TestimonialsSection />
      <HomepageFAQ />
      <FinalCTA />
    </>
  );
}
