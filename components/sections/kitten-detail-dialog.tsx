"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { getAge } from "@/lib/utils";
import type { Kitten } from "@/lib/types";

const statusColors: Record<string, string> = {
  available: "bg-emerald-100 text-emerald-800",
  reserved: "bg-amber-100 text-amber-800",
  adopted: "bg-gray-100 text-gray-600",
  at_home: "bg-rose-100 text-rose-700",
  upcoming: "bg-blue-100 text-blue-800",
};

interface KittenDetailDialogProps {
  kitten: Kitten | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function KittenDetailDialog({ kitten, open, onOpenChange }: KittenDetailDialogProps) {
  if (!kitten) return null;

  const isAtHome = kitten.status === "at_home";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">{kitten.name}</DialogTitle>
          <DialogDescription className="text-brand-slate">
            {kitten.registeredName || `${kitten.color} ${kitten.pattern} British Shorthair`}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-brand-ice">
            <Image
              src={kitten.photos[0]}
              alt={`${kitten.name} — ${kitten.color} British Shorthair`}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className={statusColors[kitten.status]}>
              {isAtHome
                ? "At Home"
                : kitten.status.charAt(0).toUpperCase() + kitten.status.slice(1)}
            </Badge>
            <Badge variant="outline">{kitten.sex === "male" ? "Boy" : "Girl"}</Badge>
            <Badge variant="outline">
              {kitten.color} {kitten.pattern}
            </Badge>
            {!isAtHome && <Badge variant="outline">{getAge(kitten.dob)}</Badge>}
            <Badge variant="outline">
              {kitten.location === "atlanta" ? "🇺🇸 Atlanta" : "🇨🇦 Toronto"}
            </Badge>
          </div>

          {isAtHome ? (
            <>
              {kitten.homeDate && (
                <div>
                  <p className="text-sm font-medium text-brand-charcoal">Home Date</p>
                  <p className="text-sm text-brand-slate">
                    {new Date(kitten.homeDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              )}
              {kitten.familyStory && (
                <div>
                  <p className="text-sm font-medium text-brand-charcoal">Family Story</p>
                  <p className="mt-1 leading-relaxed text-brand-slate">{kitten.familyStory}</p>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-brand-charcoal">Date of Birth</p>
                  <p className="text-sm text-brand-slate">
                    {new Date(kitten.dob).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-charcoal">Age</p>
                  <p className="text-sm text-brand-slate">{getAge(kitten.dob)}</p>
                </div>
              </div>

              {kitten.personality && (
                <div>
                  <p className="text-sm font-medium text-brand-charcoal">Personality</p>
                  <p className="mt-1 leading-relaxed text-brand-slate">{kitten.personality}</p>
                </div>
              )}

              {(kitten.status === "available" || kitten.status === "upcoming") && (
                <Button
                  render={<Link href="/apply" />}
                  className="w-full bg-brand-brass hover:bg-brand-brass-dark"
                >
                  Inquire About {kitten.name}
                </Button>
              )}
              {kitten.status === "reserved" && (
                <p className="text-center text-sm text-brand-slate">
                  This kitten has been reserved.{" "}
                  <Link href="/apply" className="text-brand-brass underline">
                    Join our waitlist
                  </Link>{" "}
                  for future litters.
                </p>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
