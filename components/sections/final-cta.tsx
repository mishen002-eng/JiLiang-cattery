import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="bg-brand-brass section-padding">
      <div className="container-narrow text-center">
        <h2 className="text-white">Ready to Find Your Perfect Kitten?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Join our waitlist and be the first to know when new litters are expected. We would love to
          help you find the ideal British Shorthair companion for your family.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            render={<Link href="/apply" />}
            size="lg"
            className="bg-white text-base text-brand-brass hover:bg-brand-cream"
          >
            Apply Now
          </Button>
          <Button
            render={<Link href="/contact" />}
            variant="outline"
            size="lg"
            className="border-white text-base text-white hover:bg-white/10"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
