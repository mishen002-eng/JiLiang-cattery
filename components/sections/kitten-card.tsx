"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn, formatPrice, getAge } from "@/lib/utils";
import { useLocation } from "@/components/layout/location-provider";
import type { Kitten } from "@/lib/types";

const statusColors: Record<string, string> = {
  available: "bg-emerald-100 text-emerald-800",
  reserved: "bg-amber-100 text-amber-800",
  adopted: "bg-gray-100 text-gray-600",
  upcoming: "bg-blue-100 text-blue-800",
};

interface KittenCardProps {
  kitten: Kitten;
  onClick?: () => void;
}

export function KittenCard({ kitten, onClick }: KittenCardProps) {
  const { currency } = useLocation();

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
        <Badge className={cn("absolute top-3 right-3", statusColors[kitten.status])}>
          {kitten.status.charAt(0).toUpperCase() + kitten.status.slice(1)}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-brand-charcoal">{kitten.name}</h3>
            <p className="text-sm text-brand-slate">
              {kitten.color} {kitten.pattern} &middot; {kitten.sex === "male" ? "Boy" : "Girl"}{" "}
              &middot; {getAge(kitten.dob)}
            </p>
          </div>
          <span className="text-sm font-semibold text-brand-brass">
            {formatPrice(kitten, currency)}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-brand-slate line-clamp-2">
          {kitten.personality}
        </p>
        <div className="mt-3 flex items-center gap-1 text-xs text-brand-slate-light">
          {kitten.location === "atlanta" ? "🇺🇸 Atlanta" : "🇨🇦 Toronto"}
        </div>
      </CardContent>
    </Card>
  );
}
