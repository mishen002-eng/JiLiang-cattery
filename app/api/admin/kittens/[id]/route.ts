import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { readKittens, writeKittens } from "@/lib/data";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  const kittens = readKittens();
  const index = kittens.findIndex((k) => k.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Kitten not found" }, { status: 404 });
  }

  kittens[index] = { ...kittens[index], ...body, id };
  if (body.priceUSD) kittens[index].priceUSD = Number(body.priceUSD);
  if (body.priceCAD) kittens[index].priceCAD = Number(body.priceCAD);
  writeKittens(kittens);

  return NextResponse.json(kittens[index]);
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const kittens = readKittens();
  const kitten = kittens.find((k) => k.id === id);

  if (!kitten) {
    return NextResponse.json({ error: "Kitten not found" }, { status: 404 });
  }

  for (const photo of kitten.photos) {
    if (photo !== "/images/cats/placeholder.svg") {
      const filePath = path.join(process.cwd(), "public", photo);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
  }

  const filtered = kittens.filter((k) => k.id !== id);
  writeKittens(filtered);

  return NextResponse.json({ success: true });
}
