"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { KittenForm } from "@/components/admin/kitten-form";
import type { Kitten } from "@/lib/types";

export default function EditKittenPage() {
  const { id } = useParams<{ id: string }>();
  const [kitten, setKitten] = useState<Kitten | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/kittens")
      .then((res) => res.json())
      .then((kittens: Kitten[]) => {
        const found = kittens.find((k) => k.id === id);
        setKitten(found || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  if (!kitten) {
    return <p className="text-red-600">Kitten not found.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Edit {kitten.name}</h1>
      <div className="mt-6">
        <KittenForm kitten={kitten} />
      </div>
    </div>
  );
}
