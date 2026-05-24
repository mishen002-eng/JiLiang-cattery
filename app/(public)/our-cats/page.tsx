"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BreedingCatCard } from "@/components/sections/breeding-cat-card";
import { useLocation } from "@/components/layout/location-provider";
import type { BreedingCat } from "@/lib/types";

export default function OurCatsPage() {
  const { location } = useLocation();
  const [breedingCats, setBreedingCats] = useState<BreedingCat[]>([]);

  useEffect(() => {
    fetch("/api/cats").then((r) => r.json()).then(setBreedingCats);
  }, []);

  const atlantaQueens = breedingCats.filter((c) => c.location === "atlanta" && c.role === "queen");
  const atlantaKings = breedingCats.filter((c) => c.location === "atlanta" && c.role === "king");
  const torontoQueens = breedingCats.filter((c) => c.location === "toronto" && c.role === "queen");
  const torontoKings = breedingCats.filter((c) => c.location === "toronto" && c.role === "king");

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-wide">
        <h1 className="text-center">Our Cats</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
          Meet the queens and kings behind our breeding program. Every cat is health tested,
          TICA registered, and chosen for temperament, type, and genetic diversity.
        </p>

        <Tabs defaultValue={location} className="mt-12">
          <TabsList className="mx-auto flex w-fit">
            <TabsTrigger value="atlanta">Atlanta 🇺🇸</TabsTrigger>
            <TabsTrigger value="toronto">Toronto 🇨🇦</TabsTrigger>
          </TabsList>

          <TabsContent value="atlanta" className="mt-8">
            <h2 className="text-2xl">Our Queens</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {atlantaQueens.map((cat) => (
                <BreedingCatCard key={cat.id} cat={cat} />
              ))}
            </div>
            <h2 className="mt-12 text-2xl">Our King</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {atlantaKings.map((cat) => (
                <BreedingCatCard key={cat.id} cat={cat} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="toronto" className="mt-8">
            <h2 className="text-2xl">Our Queens</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {torontoQueens.map((cat) => (
                <BreedingCatCard key={cat.id} cat={cat} />
              ))}
            </div>
            <h2 className="mt-12 text-2xl">Our King</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {torontoKings.map((cat) => (
                <BreedingCatCard key={cat.id} cat={cat} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
