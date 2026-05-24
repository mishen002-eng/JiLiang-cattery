import { NextResponse } from "next/server";
import { readCats } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  const cats = readCats();
  return NextResponse.json(cats);
}
