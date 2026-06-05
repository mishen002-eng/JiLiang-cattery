import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-brand-brass">
      <div className="container-narrow text-center">
        <h2 className="text-white">Ready to Find Your Perfect Kitten?</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-snug tracking-tight text-white/80 md:text-lg md:leading-relaxed md:tracking-normal">
          Join our waitlist and be the first to know when new litters are expected. We would love to
          help you find the ideal British Shorthair companion for your family.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:mt-8 md:items-center md:gap-4">
          <Button
            render={<Link href="/apply" />}
            size="lg"
            className="h-auto w-full justify-center rounded-full border border-white bg-white/30 px-8 py-3.5 text-sm md:text-base text-white hover:bg-white/50 sm:w-auto md:bg-white md:text-base md:text-brand-brass md:hover:bg-brand-cream"
          >
            Apply Now
          </Button>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="h-auto w-full justify-center rounded-full border border-white bg-transparent px-8 py-3.5 text-sm md:text-base text-white hover:bg-white hover:text-brand-brass sm:w-auto md:text-base"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
