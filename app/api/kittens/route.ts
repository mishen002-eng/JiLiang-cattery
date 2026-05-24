import { NextResponse } from "next/server";
import { readKittens } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  const kittens = readKittens();
  return NextResponse.json(kittens);
}
