import type { BreedingCat } from "./types";

export const breedingCats: BreedingCat[] = [
  // Atlanta Queens
  {
    id: "atl-q1",
    name: "Duchess Willow",
    registeredName: "GC Jiliang's Duchess Willow",
    sex: "female",
    dob: "2022-06-15",
    color: "Blue",
    pattern: "Solid",
    location: "atlanta",
    photos: ["/images/cats/placeholder.svg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: ["Grand Champion"],
    pedigreeNotes:
      "Willow comes from champion European lines with five generations of health-tested ancestors.",
    personality:
      "Willow is the heart of our Atlanta cattery. She is an exceptional mother — calm, attentive, and endlessly patient. She adores belly rubs and will greet visitors at the door with a slow blink.",
    role: "queen",
  },
  {
    id: "atl-q2",
    name: "Lady Primrose",
    registeredName: "CH Jiliang's Lady Primrose",
    sex: "female",
    dob: "2023-04-10",
    color: "Cinnamon",
    pattern: "Solid",
    location: "atlanta",
    photos: ["/images/cats/placeholder.svg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: ["Champion"],
    pedigreeNotes:
      "Primrose carries rare cinnamon genetics and descends from award-winning British lines imported from the UK.",
    personality:
      "Primrose is a spirited, playful queen with a warm cinnamon coat that turns heads. She is social, confident, and raises kittens who are wonderfully well-adjusted.",
    role: "queen",
  },
  // Atlanta King
  {
    id: "atl-k1",
    name: "Lord Ashton",
    registeredName: "GC RW Jiliang's Lord Ashton",
    sex: "male",
    dob: "2021-09-20",
    color: "Blue",
    pattern: "Solid",
    location: "atlanta",
    photos: ["/images/cats/placeholder.svg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: ["Grand Champion", "Regional Winner"],
    pedigreeNotes:
      "Ashton is our foundation sire with an outstanding pedigree tracing back to top UK and European bloodlines.",
    personality:
      "Ashton is the gentle giant of our cattery. Weighing in at 16 pounds of pure muscle and fluff, he has the sweetest disposition. He loves supervising household activities and is remarkably gentle with kittens.",
    role: "king",
  },
  // Toronto Queens
  {
    id: "tor-q1",
    name: "Belle of Toronto",
    registeredName: "GC Jiliang's Belle of Toronto",
    sex: "female",
    dob: "2023-01-12",
    color: "Golden Shaded",
    pattern: "Shaded",
    location: "toronto",
    photos: ["/images/cats/placeholder.svg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: ["Grand Champion"],
    pedigreeNotes:
      "Belle carries the coveted golden shaded gene and comes from top Canadian and European lines.",
    personality:
      "Belle is a stunning queen with a shimmering golden coat. She is nurturing, elegant, and produces kittens with exceptional temperaments. She enjoys perching on her cat tree and surveying her domain.",
    role: "queen",
  },
  {
    id: "tor-q2",
    name: "Countess Aurora",
    registeredName: "CH Jiliang's Countess Aurora",
    sex: "female",
    dob: "2023-08-05",
    color: "Lilac",
    pattern: "Solid",
    location: "toronto",
    photos: ["/images/cats/placeholder.svg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: ["Champion"],
    pedigreeNotes:
      "Aurora brings beautiful lilac dilution genetics to our Toronto program, imported from a respected European cattery.",
    personality:
      "Aurora is a sweet, gentle queen who loves nothing more than snuggling on the couch. Her kittens inherit her calm, even-tempered nature and her gorgeous lilac coloring.",
    role: "queen",
  },
  // Toronto King
  {
    id: "tor-k1",
    name: "Grand Duke Sterling",
    registeredName: "GC Jiliang's Grand Duke Sterling",
    sex: "male",
    dob: "2022-03-18",
    color: "Blue",
    pattern: "Solid",
    location: "toronto",
    photos: ["/images/cats/placeholder.svg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: ["Grand Champion"],
    pedigreeNotes:
      "Sterling was imported from a top Canadian breeding program and brings exceptional bone structure and coat density to our lines.",
    personality:
      "Sterling is a majestic, regal boy who commands attention wherever he goes. Despite his imposing presence, he is incredibly affectionate and loves to be brushed. He is a wonderful father to his kittens.",
    role: "king",
  },
];
