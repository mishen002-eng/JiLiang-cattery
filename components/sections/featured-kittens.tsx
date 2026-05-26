"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KittenCard } from "./kitten-card";
import type { Kitten } from "@/lib/types";

export function FeaturedKittens() {
  const [kittens, setKittens] = useState<Kitten[]>([]);

  useEffect(() => {
    fetch("/api/kittens")
      .then((r) => r.json())
      .then(setKittens);
  }, []);

  const families = kittens.filter((k) => k.status === "at_home").slice(0, 3);

  if (families.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <h2 className="text-center">JILIANG Families</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
          Meet the kittens who have found their forever homes. Each one carries a piece of Jiliang
          with them.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {families.map((kitten) => (
            <KittenCard key={kitten.id} kitten={kitten} variant="family" />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button
            render={<Link href="/available" />}
            className="bg-brand-brass hover:bg-brand-brass-dark"
          >
            View Past Litters
          </Button>
        </div>
      </div>
    </section>
  );
}
