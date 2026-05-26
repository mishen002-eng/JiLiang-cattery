"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn, getAge } from "@/lib/utils";
import type { Kitten } from "@/lib/types";


interface KittenCardProps {
  kitten: Kitten;
  onClick?: () => void;
  variant?: "sale" | "family";
}

export function KittenCard({ kitten, onClick, variant = "sale" }: KittenCardProps) {
  if (variant === "family") {
    return (
      <Card
        className={cn(
          "group overflow-hidden rounded-2xl border-brand-ice-dark transition-shadow hover:shadow-lg",
          onClick && "cursor-pointer"
        )}
        onClick={onClick}
      >
        <div className="relative h-56 bg-brand-ice">
          <Image
            src={kitten.photos[0]}
            alt={`${kitten.name} — ${kitten.color} British Shorthair`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-brand-charcoal">{kitten.name}</h3>
          <p className="text-sm text-brand-slate">
            {kitten.color} {kitten.pattern} &middot; {kitten.sex === "male" ? "Boy" : "Girl"}
          </p>
          {kitten.homeDate && (
            <p className="mt-1 text-xs text-brand-slate">
              Home:{" "}
              {new Date(kitten.homeDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          {kitten.familyStory && (
            <p className="mt-2 text-sm leading-relaxed text-brand-slate line-clamp-2">
              {kitten.familyStory}
            </p>
          )}
          <div className="mt-3 text-xs text-brand-slate-light">
            {kitten.location === "atlanta" ? "🇺🇸 Atlanta" : "🇨🇦 Toronto"}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "group overflow-hidden rounded-2xl border-brand-ice-dark transition-shadow hover:shadow-lg",
        onClick && "cursor-pointer"
      )}
      onClick={onClick}
    >
      <div className="relative h-56 bg-brand-ice">
        <Image
          src={kitten.photos[0]}
          alt={`${kitten.name} — ${kitten.color} British Shorthair kitten`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-brand-charcoal">{kitten.name}</h3>
        <p className="text-sm text-brand-slate">
          {kitten.color} {kitten.pattern} &middot; {kitten.sex === "male" ? "Boy" : "Girl"} &middot;{" "}
          {getAge(kitten.dob)}
        </p>
        {kitten.personality && (
          <p className="mt-2 text-sm leading-relaxed text-brand-slate line-clamp-2">
            {kitten.personality}
          </p>
        )}
        <div className="mt-3 text-xs text-brand-slate-light">
          {kitten.location === "atlanta" ? "🇺🇸 Atlanta" : "🇨🇦 Toronto"}
        </div>
      </CardContent>
    </Card>
  );
}
