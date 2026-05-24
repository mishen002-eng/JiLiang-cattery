import { AdminNav } from "@/components/admin/admin-nav";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full min-h-screen">
      <AdminNav />
      <div className="flex-1 overflow-auto bg-gray-50 p-8">{children}</div>
    </div>
  );
}
