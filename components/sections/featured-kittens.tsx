"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KittenCard } from "./kitten-card";
import { useLocation } from "@/components/layout/location-provider";
import type { Kitten } from "@/lib/types";

export function FeaturedKittens() {
  const { location } = useLocation();
  const [kittens, setKittens] = useState<Kitten[]>([]);

  useEffect(() => {
    fetch("/api/kittens").then((r) => r.json()).then(setKittens);
  }, []);

  const featured = kittens
    .filter((k) => k.location === location && (k.status === "available" || k.status === "upcoming"))
    .slice(0, 3);

  if (featured.length === 0) {
    const anyAvailable = kittens
      .filter((k) => k.status === "available" || k.status === "upcoming")
      .slice(0, 3);
    if (anyAvailable.length > 0) {
      return (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <h2 className="text-center">Featured Kittens</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
              No kittens currently available at your selected location. Here are some from our other
              cattery.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {anyAvailable.map((kitten) => (
                <KittenCard key={kitten.id} kitten={kitten} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button render={<Link href="/available" />} className="bg-brand-brass hover:bg-brand-brass-dark">
                View All Kittens
              </Button>
            </div>
          </div>
        </section>
      );
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <h2 className="text-center">Featured Kittens</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
          Meet some of our beautiful kittens looking for their forever homes.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((kitten) => (
            <KittenCard key={kitten.id} kitten={kitten} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button render={<Link href="/available" />} className="bg-brand-brass hover:bg-brand-brass-dark">
            View All Kittens
          </Button>
        </div>
      </div>
    </section>
  );
}
