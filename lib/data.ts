import fs from "node:fs";
import path from "node:path";
import type { Kitten, BreedingCat } from "./types";
import { kittens as seedKittens } from "./kittens";
import { breedingCats as seedCats } from "./cats";

const DATA_DIR = path.join(process.cwd(), "data");
const KITTENS_FILE = path.join(DATA_DIR, "kittens.json");
const CATS_FILE = path.join(DATA_DIR, "cats.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function readKittens(): Kitten[] {
  ensureDataDir();
  if (!fs.existsSync(KITTENS_FILE)) {
    fs.writeFileSync(KITTENS_FILE, JSON.stringify(seedKittens, null, 2));
    return seedKittens;
  }
  return JSON.parse(fs.readFileSync(KITTENS_FILE, "utf-8"));
}

export function writeKittens(kittens: Kitten[]) {
  ensureDataDir();
  fs.writeFileSync(KITTENS_FILE, JSON.stringify(kittens, null, 2));
}

export function readCats(): BreedingCat[] {
  ensureDataDir();
  if (!fs.existsSync(CATS_FILE)) {
    fs.writeFileSync(CATS_FILE, JSON.stringify(seedCats, null, 2));
    return seedCats;
  }
  return JSON.parse(fs.readFileSync(CATS_FILE, "utf-8"));
}

export function writeCats(cats: BreedingCat[]) {
  ensureDataDir();
  fs.writeFileSync(CATS_FILE, JSON.stringify(cats, null, 2));
}
