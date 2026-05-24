"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Cat, Home, LogOut, PawPrint } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: Home },
  { href: "/admin/kittens", label: "Kittens", icon: PawPrint },
  { href: "/admin/cats", label: "Breeding Cats", icon: Cat },
];

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <aside className="flex w-64 flex-col border-r border-gray-200 bg-white">
      <div className="border-b border-gray-200 p-6">
        <Link href="/admin" className="text-xl font-bold text-brand-charcoal">
          Jiliang Admin
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-brass/10 text-brand-brass"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-gray-200 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
        <Link
          href="/"
          className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:text-gray-600"
        >
          &larr; Back to site
        </Link>
      </div>
    </aside>
  );
}
