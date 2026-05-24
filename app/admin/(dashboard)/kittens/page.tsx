"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeleteDialog } from "@/components/admin/delete-dialog";
import type { Kitten } from "@/lib/types";

const statusColors: Record<string, string> = {
  available: "bg-green-100 text-green-800",
  reserved: "bg-yellow-100 text-yellow-800",
  upcoming: "bg-blue-100 text-blue-800",
  adopted: "bg-gray-100 text-gray-800",
};

export default function AdminKittensPage() {
  const [kittens, setKittens] = useState<Kitten[]>([]);
  const [deleteTarget, setDeleteTarget] = useState<Kitten | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/kittens")
      .then((res) => res.json())
      .then(setKittens);
  }, []);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    await fetch(`/api/admin/kittens/${deleteTarget.id}`, { method: "DELETE" });
    setKittens((prev) => prev.filter((k) => k.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Kittens</h1>
        <Button
          render={<Link href="/admin/kittens/new" />}
          className="gap-2 bg-brand-brass hover:bg-brand-brass-dark"
        >
          <Plus className="h-4 w-4" />
          Add Kitten
        </Button>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Color</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Sex</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Location</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Price (USD)</th>
              <th className="px-4 py-3 text-right font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {kittens.map((kitten) => (
              <tr key={kitten.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{kitten.name}</td>
                <td className="px-4 py-3 text-gray-600">{kitten.color}</td>
                <td className="px-4 py-3 text-gray-600 capitalize">{kitten.sex}</td>
                <td className="px-4 py-3 text-gray-600 capitalize">{kitten.location}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusColors[kitten.status] || ""}`}>
                    {kitten.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">${kitten.priceUSD.toLocaleString()}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => router.push(`/admin/kittens/${kitten.id}/edit`)}
                      className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setDeleteTarget(kitten)}
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
        {kittens.length === 0 && (
          <p className="px-4 py-8 text-center text-gray-500">No kittens yet. Add your first kitten to get started.</p>
        )}
      </div>

      <DeleteDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Kitten"
        description={`Are you sure you want to delete ${deleteTarget?.name}? This action cannot be undone.`}
      />
    </div>
  );
}
