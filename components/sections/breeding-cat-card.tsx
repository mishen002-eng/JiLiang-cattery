"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BreedingCat } from "@/lib/types";

export function BreedingCatCard({ cat }: { cat: BreedingCat }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="overflow-hidden border-brand-ice-dark">
      <div className="relative aspect-square bg-brand-ice">
        {cat.photos[0] ? (
          <Image
            src={cat.photos[0]}
            alt={`${cat.name} — ${cat.color} British Shorthair ${cat.role}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-brand-slate-light">
            <Image
              src="/images/cats/placeholder.svg"
              alt="Photo coming soon"
              width={64}
              height={64}
              className="opacity-40"
            />
            <span className="text-sm">British Shorthair</span>
            <span className="text-xs">Photo Coming Soon</span>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl">{cat.name}</h3>
        <p className="text-sm italic text-brand-slate">{cat.registeredName}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge variant="outline" className="text-xs">
            {cat.pattern === "Solid"
              ? cat.color.replace(/\bSolid\b\s*/g, "").trim()
              : cat.color.includes(cat.pattern) ? cat.color : `${cat.color} ${cat.pattern}`}
          </Badge>
          {cat.titles.map((title) => (
            <Badge key={title} className="bg-brand-brass/10 text-xs text-brand-brass">
              {title}
            </Badge>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {cat.healthTests.map((test) => (
            <Badge key={test} className="bg-emerald-50 text-xs text-emerald-700">
              {test}
            </Badge>
          ))}
        </div>

        {/* Mobile: clamp + expand. Desktop: always full text */}
        <p className={`mt-4 text-sm leading-snug tracking-tight text-brand-slate md:leading-relaxed md:tracking-normal md:line-clamp-none ${!expanded ? "line-clamp-3" : ""}`}>
          {cat.personality}
        </p>
        {/* Read more — mobile only */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 text-xs font-medium text-brand-charcoal transition-colors hover:text-brand-brass md:hidden"
        >
          {expanded ? "Read less ↑" : "Read more ↓"}
        </button>

        <p className="mt-3 text-xs text-brand-slate-light">{cat.pedigreeNotes}</p>
      </CardContent>
    </Card>
  );
}
