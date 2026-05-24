"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeleteDialog } from "@/components/admin/delete-dialog";
import type { BreedingCat } from "@/lib/types";

export default function AdminCatsPage() {
  const [cats, setCats] = useState<BreedingCat[]>([]);
  const [deleteTarget, setDeleteTarget] = useState<BreedingCat | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/cats")
      .then((res) => res.json())
      .then(setCats);
  }, []);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    await fetch(`/api/admin/cats/${deleteTarget.id}`, { method: "DELETE" });
    setCats((prev) => prev.filter((c) => c.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Breeding Cats</h1>
        <Button
          render={<Link href="/admin/cats/new" />}
          className="gap-2 bg-brand-brass hover:bg-brand-brass-dark"
        >
          <Plus className="h-4 w-4" />
          Add Cat
        </Button>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Color</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Role</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Location</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Titles</th>
              <th className="px-4 py-3 text-right font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {cats.map((cat) => (
              <tr key={cat.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{cat.name}</td>
                <td className="px-4 py-3 text-gray-600">{cat.color}</td>
                <td className="px-4 py-3 text-gray-600 capitalize">{cat.role}</td>
                <td className="px-4 py-3 text-gray-600 capitalize">{cat.location}</td>
                <td className="px-4 py-3 text-gray-600">{cat.titles.join(", ") || "—"}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => router.push(`/admin/cats/${cat.id}/edit`)}
                      className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setDeleteTarget(cat)}
                      className="rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {cats.length === 0 && (
          <p className="px-4 py-8 text-center text-gray-500">No breeding cats yet.</p>
        )}
      </div>

      <DeleteDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Cat"
        description={`Are you sure you want to delete ${deleteTarget?.name}? This action cannot be undone.`}
      />
    </div>
  );
}
