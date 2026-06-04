"use client";

import { useState, useEffect } from "react";
import { BreedingCatCard } from "@/components/sections/breeding-cat-card";
import type { BreedingCat } from "@/lib/types";

export default function OurCatsPage() {
  const [breedingCats, setBreedingCats] = useState<BreedingCat[]>([]);

  useEffect(() => {
    fetch("/api/cats").then((r) => r.json()).then(setBreedingCats);
  }, []);

  const queens = breedingCats.filter((c) => c.role === "queen");
  const kings = breedingCats.filter((c) => c.role === "king");

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-wide">
        <h1 className="text-center">Our Cats</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
          Meet the Queens and Kings powering our program. Every breeding cat undergoes comprehensive
          health screening, and veterinary clearances, plus TICA/ CFA/ WCF registration. We select
          strictly for stable temperament, breed type, and low inbreeding coefficients to prioritize
          genetic diversity and long-term health.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl">Our Queens</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {queens.map((cat) => (
              <BreedingCatCard key={cat.id} cat={cat} />
            ))}
          </div>

          <h2 className="mt-12 text-2xl">Our Kings</h2>
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
