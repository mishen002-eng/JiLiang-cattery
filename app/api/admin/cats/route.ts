import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { readCats, writeCats } from "@/lib/data";
import type { BreedingCat } from "@/lib/types";

export async function GET() {
  const cats = readCats();
  return NextResponse.json(cats);
}

export async function POST(request: Request) {
  const body = await request.json();
  const cats = readCats();

  const newCat: BreedingCat = {
    id: uuidv4(),
    name: body.name,
    registeredName: body.registeredName || "",
    sex: body.sex,
    dob: body.dob,
    color: body.color,
    pattern: body.pattern,
    location: body.location,
    photos: body.photos || ["/images/cats/placeholder.svg"],
    healthTests: body.healthTests || [],
    titles: body.titles || [],
    pedigreeNotes: body.pedigreeNotes || "",
    personality: body.personality || "",
    role: body.role,
  };

  cats.push(newCat);
  writeCats(cats);

  return NextResponse.json(newCat, { status: 201 });
}
