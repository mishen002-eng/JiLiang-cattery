"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { KittenCard } from "@/components/sections/kitten-card";
import { KittenDetailDialog } from "@/components/sections/kitten-detail-dialog";
import { useLocation } from "@/components/layout/location-provider";
import type { Kitten } from "@/lib/types";

export default function AvailableKittensPage() {
  const { location } = useLocation();
  const [kittens, setKittens] = useState<Kitten[]>([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [sexFilter, setSexFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");
  const [selectedKitten, setSelectedKitten] = useState<Kitten | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetch("/api/kittens").then((r) => r.json()).then(setKittens);
  }, []);

  const colors = useMemo(
    () => [...new Set(kittens.map((k) => k.color))].sort(),
    [kittens]
  );

  const filtered = useMemo(
    () =>
      kittens.filter((k) => {
        if (k.location !== location) return false;
        if (statusFilter !== "all" && k.status !== statusFilter) return false;
        if (sexFilter !== "all" && k.sex !== sexFilter) return false;
        if (colorFilter !== "all" && k.color !== colorFilter) return false;
        return true;
      }),
    [kittens, location, statusFilter, sexFilter, colorFilter]
  );

  const handleKittenClick = (kitten: Kitten) => {
    setSelectedKitten(kitten);
    setDialogOpen(true);
  };

  return (
    <>
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <h1 className="text-center">Available Kittens</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
            Browse our current and upcoming litters. Use the filters below to find your perfect
            match, or switch locations using the toggle in the header.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Select value={statusFilter} onValueChange={(v) => v && setStatusFilter(v)}>
              <SelectTrigger className="w-40 bg-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="reserved">Reserved</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sexFilter} onValueChange={(v) => v && setSexFilter(v)}>
              <SelectTrigger className="w-40 bg-white">
                <SelectValue placeholder="Sex" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="male">Boys</SelectItem>
                <SelectItem value="female">Girls</SelectItem>
              </SelectContent>
            </Select>

            <Select value={colorFilter} onValueChange={(v) => v && setColorFilter(v)}>
              <SelectTrigger className="w-40 bg-white">
                <SelectValue placeholder="Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Colors</SelectItem>
                {colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {filtered.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((kitten) => (
                <KittenCard
                  key={kitten.id}
                  kitten={kitten}
                  onClick={() => handleKittenClick(kitten)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-16 text-center">
              <p className="text-lg font-medium text-brand-charcoal">
                No kittens match your current filters.
              </p>
              <p className="mt-2 text-brand-slate">
                Try adjusting your filters, or join our waitlist to be notified when new litters
                arrive.
              </p>
              <Button
                render={<Link href="/apply" />}
                className="mt-6 bg-brand-brass hover:bg-brand-brass-dark"
              >
                Join the Waitlist
              </Button>
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
