"use client";

import { useState, useEffect } from "react";
import { KittenCard } from "@/components/sections/kitten-card";
import { KittenDetailDialog } from "@/components/sections/kitten-detail-dialog";
import type { Kitten } from "@/lib/types";

export default function JiliangFamiliesPage() {
  const [kittens, setKittens] = useState<Kitten[]>([]);
  const [selectedKitten, setSelectedKitten] = useState<Kitten | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetch("/api/kittens")
      .then((r) => r.json())
      .then(setKittens);
  }, []);

  const families = kittens.filter((k) => k.status === "at_home");

  const handleKittenClick = (kitten: Kitten) => {
    setSelectedKitten(kitten);
    setDialogOpen(true);
  };

  return (
    <>
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <h1 className="text-center">Past Litters</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
            Meet the kittens who have found their forever homes. Each one carries a piece of Jiliang
            with them.
          </p>

          {families.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {families.map((kitten) => (
                <KittenCard
                  key={kitten.id}
                  kitten={kitten}
                  variant="family"
                  onClick={() => handleKittenClick(kitten)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-16 text-center">
              <p className="text-lg font-medium text-brand-charcoal">
                Stories coming soon.
              </p>
              <p className="mt-2 text-brand-slate">
                Check back as our kittens find their forever homes.
              </p>
            </div>
          )}
        </div>
      </section>

      <KittenDetailDialog
        kitten={selectedKitten}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
