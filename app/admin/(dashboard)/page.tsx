import Link from "next/link";
import { readKittens } from "@/lib/data";
import { readCats } from "@/lib/data";

export default function AdminDashboardPage() {
  const kittens = readKittens();
  const cats = readCats();

  const available = kittens.filter((k) => k.status === "available").length;
  const reserved = kittens.filter((k) => k.status === "reserved").length;
  const upcoming = kittens.filter((k) => k.status === "upcoming").length;
  const adopted = kittens.filter((k) => k.status === "adopted").length;

  const stats = [
    { label: "Available Kittens", value: available, color: "bg-green-100 text-green-800" },
    { label: "Reserved", value: reserved, color: "bg-yellow-100 text-yellow-800" },
    { label: "Upcoming", value: upcoming, color: "bg-blue-100 text-blue-800" },
    { label: "Adopted", value: adopted, color: "bg-gray-100 text-gray-800" },
    { label: "Breeding Cats", value: cats.length, color: "bg-purple-100 text-purple-800" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex gap-4">
        <Link
          href="/admin/kittens/new"
          className="rounded-lg bg-brand-brass px-4 py-2 text-sm font-medium text-white hover:bg-brand-brass-dark"
        >
          Add Kitten
        </Link>
        <Link
          href="/admin/cats/new"
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Add Breeding Cat
        </Link>
      </div>
    </div>
  );
}
