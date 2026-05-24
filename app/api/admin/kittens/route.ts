import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { readKittens, writeKittens } from "@/lib/data";
import type { Kitten } from "@/lib/types";

export async function GET() {
  const kittens = readKittens();
  return NextResponse.json(kittens);
}

export async function POST(request: Request) {
  const body = await request.json();
  const kittens = readKittens();

  const newKitten: Kitten = {
    id: uuidv4(),
    name: body.name,
    dob: body.dob,
    sex: body.sex,
    color: body.color,
    pattern: body.pattern,
    priceUSD: Number(body.priceUSD),
    priceCAD: Number(body.priceCAD),
    location: body.location,
    status: body.status || "available",
    photos: body.photos || ["/images/cats/placeholder.svg"],
    sire: body.sire || "",
    dam: body.dam || "",
    personality: body.personality || "",
    registeredName: body.registeredName || "",
  };

  kittens.push(newKitten);
  writeKittens(kittens);

  return NextResponse.json(newKitten, { status: 201 });
}
