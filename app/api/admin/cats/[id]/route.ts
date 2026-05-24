import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { readCats, writeCats } from "@/lib/data";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  const cats = readCats();
  const index = cats.findIndex((c) => c.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Cat not found" }, { status: 404 });
  }

  cats[index] = { ...cats[index], ...body, id };
  writeCats(cats);

  return NextResponse.json(cats[index]);
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cats = readCats();
  const cat = cats.find((c) => c.id === id);

  if (!cat) {
    return NextResponse.json({ error: "Cat not found" }, { status: 404 });
  }

  for (const photo of cat.photos) {
    if (photo !== "/images/cats/placeholder.svg") {
      const filePath = path.join(process.cwd(), "public", photo);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
  }

  const filtered = cats.filter((c) => c.id !== id);
  writeCats(filtered);

  return NextResponse.json({ success: true });
}
