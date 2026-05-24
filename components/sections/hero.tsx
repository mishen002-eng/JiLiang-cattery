import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div className="container-wide flex min-h-[70vh] flex-col items-center gap-8 py-12 lg:flex-row lg:gap-12 lg:py-0">
        {/* Text Content */}
        <div className="relative z-10 flex-1 text-center lg:text-left">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-slate uppercase">
            British Shorthair. Exceptional by Nature.
          </p>
          <h1 className="mt-4 text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
            Premium Bloodlines.
            <br />
            Trusted Worldwide.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-brand-slate lg:mx-0">
            JILIANG CATTERY is a professional British Shorthair cattery dedicated to health,
            temperament and type. Our kittens are raised with love, science and experience — ready
            to bring joy to discerning families around the world.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button
              render={<Link href="/available" />}
              size="lg"
              className="rounded-full bg-brand-charcoal px-8 text-base hover:bg-brand-charcoal/90"
            >
              View Available Kittens &rarr;
            </Button>
            <Button
              render={<Link href="/about" />}
              variant="outline"
              size="lg"
              className="rounded-full border-brand-charcoal px-8 text-base text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
            >
              About Our Cattery
            </Button>
          </div>
        </div>

        {/* Cat Image */}
        <div className="relative flex flex-1 items-end justify-center lg:self-end">
          <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[500px]">
            <Image
              src="/images/cats/placeholder.svg"
              alt="Beautiful British Shorthair cat"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
          {/* Show Quality Badge */}
          <div className="absolute right-0 top-8 hidden flex-col items-center gap-1 rounded-2xl border border-brand-ice-dark bg-white/80 p-3 shadow-sm backdrop-blur lg:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream">
              <span className="text-lg">🏆</span>
            </div>
            <span className="text-xs font-semibold text-brand-charcoal">Show Quality</span>
            <span className="text-[10px] text-brand-slate">British Shorthair</span>
          </div>
        </div>
      </div>
    </section>
  );
}
