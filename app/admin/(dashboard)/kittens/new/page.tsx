import { KittenForm } from "@/components/admin/kitten-form";

export default function NewKittenPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Add Kitten</h1>
      <div className="mt-6">
        <KittenForm />
      </div>
    </div>
  );
}
