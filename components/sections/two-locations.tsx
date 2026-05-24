"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import type { BreedingCat } from "@/lib/types";

export function ParentCats() {
  const [cats, setCats] = useState<BreedingCat[]>([]);

  useEffect(() => {
    fetch("/api/cats")
      .then((r) => r.json())
      .then(setCats);
  }, []);

  const featured = cats.slice(0, 4);

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-wide">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
          {/* Text */}
          <div className="lg:max-w-xs">
            <h2 className="text-3xl md:text-4xl">Our Parent Cats</h2>
            <p className="mt-4 leading-relaxed text-brand-slate">
              Carefully selected for outstanding type, excellent health and stable temperament.
            </p>
            <Button
              render={<Link href="/our-cats" />}
              variant="outline"
              className="mt-6 rounded-full border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
            >
              Meet Our Cats &rarr;
            </Button>
          </div>

          {/* Cat Cards */}
          <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-4">
            {featured.map((cat) => (
              <div key={cat.id} className="group text-center">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-brand-ice">
                  <Image
                    src={cat.photos[0] || "/images/cats/placeholder.svg"}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-xs font-semibold tracking-wider text-brand-charcoal uppercase">
                    {cat.name}
                  </p>
                  <p className="mt-0.5 text-xs text-brand-slate">
                    {cat.titles?.[0] || "Champion Line"} &middot; {cat.color} &middot;{" "}
                    {cat.role === "queen" ? "Female" : "Male"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
