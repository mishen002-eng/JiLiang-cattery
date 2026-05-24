"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhotoUpload } from "./photo-upload";
import type { BreedingCat } from "@/lib/types";

interface CatFormProps {
  cat?: BreedingCat;
}

export function CatForm({ cat }: CatFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState(cat?.name || "");
  const [registeredName, setRegisteredName] = useState(cat?.registeredName || "");
  const [dob, setDob] = useState(cat?.dob || "");
  const [sex, setSex] = useState(cat?.sex || "");
  const [color, setColor] = useState(cat?.color || "");
  const [pattern, setPattern] = useState(cat?.pattern || "");
  const [location, setLocation] = useState(cat?.location || "");
  const [role, setRole] = useState(cat?.role || "");
  const [personality, setPersonality] = useState(cat?.personality || "");
  const [pedigreeNotes, setPedigreeNotes] = useState(cat?.pedigreeNotes || "");
  const [photos, setPhotos] = useState<string[]>(cat?.photos || ["/images/cats/placeholder.svg"]);
  const [healthTests, setHealthTests] = useState<string[]>(cat?.healthTests || []);
  const [titles, setTitles] = useState<string[]>(cat?.titles || []);
  const [newHealthTest, setNewHealthTest] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const addHealthTest = () => {
    if (newHealthTest.trim()) {
      setHealthTests([...healthTests, newHealthTest.trim()]);
      setNewHealthTest("");
    }
  };

  const addTitle = () => {
    if (newTitle.trim()) {
      setTitles([...titles, newTitle.trim()]);
      setNewTitle("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const body = {
      name, registeredName, dob, sex, color, pattern,
      location, role, personality, pedigreeNotes,
      photos, healthTests, titles,
    };

    const url = cat ? `/api/admin/cats/${cat.id}` : "/api/admin/cats";
    const method = cat ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.push("/admin/cats");
      router.refresh();
    }
    setSaving(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Photos</h2>
        <PhotoUpload photos={photos} onChange={setPhotos} />
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Basic Info</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Name *</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Registered Name</label>
            <Input value={registeredName} onChange={(e) => setRegisteredName(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Date of Birth *</label>
            <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Sex *</label>
            <Select value={sex} onValueChange={(v) => v && setSex(v)}>
              <SelectTrigger><SelectValue placeholder="Select sex" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Color *</label>
            <Input value={color} onChange={(e) => setColor(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Pattern *</label>
            <Input value={pattern} onChange={(e) => setPattern(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Location *</label>
            <Select value={location} onValueChange={(v) => v && setLocation(v)}>
              <SelectTrigger><SelectValue placeholder="Select location" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="atlanta">Atlanta</SelectItem>
                <SelectItem value="toronto">Toronto</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Role *</label>
            <Select value={role} onValueChange={(v) => v && setRole(v)}>
              <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="queen">Queen</SelectItem>
                <SelectItem value="king">King</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Health Tests</h2>
        <div className="flex flex-wrap gap-2">
          {healthTests.map((test, i) => (
            <span key={i} className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
              {test}
              <button type="button" onClick={() => setHealthTests(healthTests.filter((_, idx) => idx !== i))}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <Input
            value={newHealthTest}
            onChange={(e) => setNewHealthTest(e.target.value)}
            placeholder="e.g. HCM Normal"
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addHealthTest())}
          />
          <Button type="button" variant="outline" onClick={addHealthTest} className="shrink-0">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Titles</h2>
        <div className="flex flex-wrap gap-2">
          {titles.map((title, i) => (
            <span key={i} className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
              {title}
              <button type="button" onClick={() => setTitles(titles.filter((_, idx) => idx !== i))}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="e.g. Grand Champion"
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTitle())}
          />
          <Button type="button" variant="outline" onClick={addTitle} className="shrink-0">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Details</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Pedigree Notes</label>
            <Textarea value={pedigreeNotes} onChange={(e) => setPedigreeNotes(e.target.value)} rows={3} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Personality</label>
            <Textarea value={personality} onChange={(e) => setPersonality(e.target.value)} rows={3} />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="submit" className="bg-brand-brass hover:bg-brand-brass-dark" disabled={saving}>
          {saving ? "Saving..." : cat ? "Update Cat" : "Create Cat"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
