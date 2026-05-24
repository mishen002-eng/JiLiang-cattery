import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-narrow">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-ice">
            <Image
              src="/images/cats/placeholder.svg"
              alt="Founder of Jiliang Cattery with a British Shorthair"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2>Raised with Love, Bred with Purpose</h2>
            <p className="mt-4 leading-relaxed text-brand-slate">
              At Jiliang Cattery, every kitten is raised underfoot in our homes — socialized with
              children, dogs, and the everyday sounds of family life. We believe that a kitten's
              first weeks shape their entire personality, which is why we invest so much care into
              early socialization and enrichment.
            </p>
            <p className="mt-4 leading-relaxed text-brand-slate">
              Founded in Atlanta and recently expanded to Toronto, we are committed to preserving the
              British Shorthair breed's gentle temperament, robust health, and classic beauty. Every
              breeding cat in our program is health tested, titled, and chosen for both type and
              temperament.
            </p>
            <Button
              render={<Link href="/about" />}
              className="mt-6 bg-brand-brass hover:bg-brand-brass-dark"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
