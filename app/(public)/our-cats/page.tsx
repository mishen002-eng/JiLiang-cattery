import type { Metadata } from "next";
import { BreedingCatCard } from "@/components/sections/breeding-cat-card";
import { readCats } from "@/lib/data";

// Read live data on every request (parity with the previous client fetch),
// while still emitting fully crawlable server-rendered HTML.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Our Cats",
  description:
    "Meet the TICA / CFA / WCF registered Queens and Kings behind Jiliang Cattery's British Shorthair program — health-screened breeding cats selected for temperament, breed type, and genetic diversity.",
  alternates: { canonical: "/our-cats" },
};

export default function OurCatsPage() {
  const breedingCats = readCats();
  const queens = breedingCats.filter((c) => c.role === "queen");
  const kings = breedingCats.filter((c) => c.role === "king");

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-brand-cream">
      <div className="container-wide">
        <h1 className="text-center">Our Cats</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-snug tracking-tight text-brand-slate md:leading-relaxed md:tracking-normal">
          Meet the Queens and Kings powering our program. Every breeding cat undergoes comprehensive
          health screening, and veterinary clearances, plus TICA/ CFA/ WCF registration. We select
          strictly for stable temperament, breed type, and low inbreeding coefficients to prioritize
          genetic diversity and long-term health.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl">Our Kings</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {queens.map((cat) => (
              <BreedingCatCard key={cat.id} cat={cat} />
            ))}
          </div>

          <h2 className="mt-12 text-2xl">Our Queens</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {kings.map((cat) => (
              <BreedingCatCard key={cat.id} cat={cat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
