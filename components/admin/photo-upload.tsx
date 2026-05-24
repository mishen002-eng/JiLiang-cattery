"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhotoUploadProps {
  photos: string[];
  onChange: (photos: string[]) => void;
}

export function PhotoUpload({ photos, onChange }: PhotoUploadProps) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;

    setUploading(true);
    const newPhotos = [...photos];

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      if (res.ok) {
        const { path } = await res.json();
        newPhotos.push(path);
      }
    }

    // Remove placeholder if real photos were uploaded
    const filtered = newPhotos.filter(
      (p) => p !== "/images/cats/placeholder.svg" || newPhotos.length === 1
    );
    onChange(filtered.length > 0 ? filtered : newPhotos);
    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const removePhoto = (index: number) => {
    const updated = photos.filter((_, i) => i !== index);
    onChange(updated.length > 0 ? updated : ["/images/cats/placeholder.svg"]);
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        {photos.map((photo, i) => (
          <div key={`${photo}-${i}`} className="group relative h-24 w-24 overflow-hidden rounded-lg border">
            <Image src={photo} alt="" fill className="object-cover" />
            <button
              type="button"
              onClick={() => removePhoto(i)}
              className="absolute right-1 top-1 hidden rounded-full bg-red-500 p-0.5 text-white group-hover:block"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        onChange={handleUpload}
        className="hidden"
      />
      <Button
        type="button"
        variant="outline"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="gap-2"
      >
        <Upload className="h-4 w-4" />
        {uploading ? "Uploading..." : "Upload Photos"}
      </Button>
    </div>
  );
}
