import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BreedingCat } from "@/lib/types";

export function BreedingCatCard({ cat }: { cat: BreedingCat }) {
  return (
    <Card className="overflow-hidden border-brand-ice-dark">
      <div className="relative aspect-square bg-brand-ice">
        <Image
          src={cat.photos[0]}
          alt={`${cat.name} — ${cat.color} British Shorthair ${cat.role}`}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl">{cat.name}</h3>
        <p className="text-sm italic text-brand-slate">{cat.registeredName}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge variant="outline" className="text-xs">
            {cat.color} {cat.pattern}
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

        <p className="mt-4 text-sm leading-relaxed text-brand-slate">{cat.personality}</p>

        <p className="mt-3 text-xs text-brand-slate-light">{cat.pedigreeNotes}</p>
      </CardContent>
    </Card>
  );
}
