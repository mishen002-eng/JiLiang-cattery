"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import type { Kitten } from "@/lib/types";

interface KittenFormProps {
  kitten?: Kitten;
}

export function KittenForm({ kitten }: KittenFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState(kitten?.name || "");
  const [registeredName, setRegisteredName] = useState(kitten?.registeredName || "");
  const [dob, setDob] = useState(kitten?.dob || "");
  const [sex, setSex] = useState(kitten?.sex || "");
  const [color, setColor] = useState(kitten?.color || "");
  const [pattern, setPattern] = useState(kitten?.pattern || "");
  const [priceUSD, setPriceUSD] = useState(kitten?.priceUSD?.toString() || "");
  const [priceCAD, setPriceCAD] = useState(kitten?.priceCAD?.toString() || "");
  const [location, setLocation] = useState(kitten?.location || "");
  const [status, setStatus] = useState(kitten?.status || "available");
  const [sire, setSire] = useState(kitten?.sire || "");
  const [dam, setDam] = useState(kitten?.dam || "");
  const [personality, setPersonality] = useState(kitten?.personality || "");
  const [photos, setPhotos] = useState<string[]>(kitten?.photos || ["/images/cats/placeholder.svg"]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const body = {
      name, registeredName, dob, sex, color, pattern,
      priceUSD: Number(priceUSD), priceCAD: Number(priceCAD),
      location, status, sire, dam, personality, photos,
    };

    const url = kitten ? `/api/admin/kittens/${kitten.id}` : "/api/admin/kittens";
    const method = kitten ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.push("/admin/kittens");
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
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Pricing & Location</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Price USD *</label>
            <Input type="number" value={priceUSD} onChange={(e) => setPriceUSD(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Price CAD *</label>
            <Input type="number" value={priceCAD} onChange={(e) => setPriceCAD(e.target.value)} required />
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
            <label className="mb-1 block text-sm font-medium text-gray-700">Status *</label>
            <Select value={status} onValueChange={(v) => v && setStatus(v)}>
              <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="reserved">Reserved</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="adopted">Adopted</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Parentage & Personality</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Sire</label>
            <Input value={sire} onChange={(e) => setSire(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Dam</label>
            <Input value={dam} onChange={(e) => setDam(e.target.value)} />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">Personality</label>
          <Textarea value={personality} onChange={(e) => setPersonality(e.target.value)} rows={3} />
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="submit" className="bg-brand-brass hover:bg-brand-brass-dark" disabled={saving}>
          {saving ? "Saving..." : kitten ? "Update Kitten" : "Create Kitten"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
