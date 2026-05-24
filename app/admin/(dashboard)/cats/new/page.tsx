import { CatForm } from "@/components/admin/cat-form";

export default function NewCatPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Add Breeding Cat</h1>
      <div className="mt-6">
        <CatForm />
      </div>
    </div>
  );
}
