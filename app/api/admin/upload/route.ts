import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import fs from "node:fs";
import path from "node:path";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: "Invalid file type. Use JPG, PNG, or WebP." }, { status: 400 });
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "File too large. Maximum 5MB." }, { status: 400 });
  }

  const ext = file.name.split(".").pop() || "jpg";
  const filename = `${uuidv4()}.${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "images", "cats");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(path.join(uploadDir, filename), buffer);

  return NextResponse.json({ path: `/images/cats/${filename}` });
}
