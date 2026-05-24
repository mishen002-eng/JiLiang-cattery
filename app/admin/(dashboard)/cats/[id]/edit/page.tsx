"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { CatForm } from "@/components/admin/cat-form";
import type { BreedingCat } from "@/lib/types";

export default function EditCatPage() {
  const { id } = useParams<{ id: string }>();
  const [cat, setCat] = useState<BreedingCat | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/cats")
      .then((res) => res.json())
      .then((cats: BreedingCat[]) => {
        const found = cats.find((c) => c.id === id);
        setCat(found || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  if (!cat) {
    return <p className="text-red-600">Cat not found.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Edit {cat.name}</h1>
      <div className="mt-6">
        <CatForm cat={cat} />
      </div>
    </div>
  );
}
