import type { BreedingCat } from "./types";

export const breedingCats: BreedingCat[] = [
  // Atlanta Queens
  {
    id: "atl-q1",
    name: "Big White",
    registeredName: "Mo Li Bie Long Ma of Ji Liang",
    sex: "female",
    dob: "2022-06-15",
    color: "Solid White",
    pattern: "Solid",
    location: "atlanta",
    photos: ["/images/cats/parent-cat-1.jpg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: [],
    pedigreeNotes:
      "Fully health screened (HCM echo, PKD, genetics, BAER test) and TICA/CFA/WCF registered, he consistently passes on strong type, stable temperament, and superior coat quality.",
    personality:
      "Big White is a traditional American bloodline solid white British Shorthair with a powerful cobby build, strong-boned limbs, massive round head, and full chubby cheeks. His coat is short and even, exceptionally dense, with a firm, crisp, resilient texture that stands away from the body — plush yet structured, rare among solid whites.",
    role: "queen",
  },
  {
    id: "atl-q2",
    name: "Thank You",
    registeredName: "CH MO LI LIANHAI XIE OF JI LIANG",
    sex: "female",
    dob: "2023-04-10",
    color: "Solid Blue",
    pattern: "Solid",
    location: "atlanta",
    photos: ["/images/cats/parent-cat-2.jpg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: [],
    pedigreeNotes:
      "Fully health screened and TICA/CFA/WCF registered, he consistently passes strong type, gentle temperament, and superior coat quality.",
    personality:
      "Thank You is a traditional Australian bloodline solid blue British Shorthair with a compact, powerful cobby build and a sweet, adorable expression. He possesses a massive round head and full, chubby cheeks that create his unforgettable teddy-bear look. His coat is short and even, exceptionally dense, with a firm, crisp, resilient texture — plush yet structured.",
    role: "queen",
  },
  // Atlanta King
  {
    id: "atl-k1",
    name: "Fa Tong",
    registeredName: "Jiliang's Iris Bloom",
    sex: "male",
    dob: "2021-09-20",
    color: "White",
    pattern: "Odd-eyed",
    location: "atlanta",
    photos: ["/images/cats/DSC09602.jpg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: [],
    pedigreeNotes:
      "Fully health screened and TICA/CFA/WCF registered, Fa Tong adds valuable genetic diversity and proven breeding potential to our lines.",
    personality:
      "Fa Tong is a young Queen and rising member of our breeding program. She stands out with her rare odd-eyed trait, set against a pristine snow-white coat. As a blend of premium European and American bloodlines, she combines a sweet expressive face, gentle and affectionate temperament, sturdy limbs with strong bone and muscle, and a luxurious silky coat.",
    role: "king",
  },
  // Toronto Queens
  {
    id: "tor-q1",
    name: "Niu Huang",
    registeredName: "CH MO LI NIOHURU CREAM OF JI LIANG",
    sex: "female",
    dob: "2023-01-12",
    color: "Cream",
    pattern: "Solid",
    location: "toronto",
    photos: ["/images/cats/DSC01070.jpg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: [],
    pedigreeNotes:
      "Fully health screened and TICA/CFA/WCF registered, he consistently produces strong type, robust health, and superior coat quality.",
    personality:
      "Niu Huang is a pure cream male British Shorthair of traditional European bloodlines, known for his substantial size and powerful presence. He displays a massive, heavily boned cobby build with strong muscle tone, excellent bone structure, and a broad round head with full cheeks. His coat is short, exceptionally dense, with a firm, crisp, and resilient texture that enhances his overall impressive look.",
    role: "queen",
  },
  {
    id: "tor-q2",
    name: "Feng Feng",
    registeredName: "JR. Instaneko's Fengfeng",
    sex: "female",
    dob: "2023-08-05",
    color: "Golden Shaded",
    pattern: "Shaded",
    location: "toronto",
    photos: ["/images/cats/parent-cat-3.jpg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: [],
    pedigreeNotes:
      "Fully health screened and TICA/CFA/WCF registered, he consistently passes on large size, robust bone, and vivid golden color.",
    personality:
      "Feng Feng is a golden shaded (ny12) male British Shorthair of traditional European bloodlines. He features a massive, heavily boned cobby build with powerful, thick limbs, strong muscle tone, and substantial bone structure. His coat displays bright, saturated golden shading with strong color depth and contrast, paired with striking emerald green eyes that create a memorable expression.",
    role: "queen",
  },
  {
    id: "tor-q3",
    name: "Wu Hei Hei",
    registeredName: "CH MO LI WU HEIHEI OF JI LIANG",
    sex: "female",
    dob: "2023-05-20",
    color: "Blue",
    pattern: "Solid",
    location: "toronto",
    photos: ["/images/cats/DSC010701.jpg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: [],
    pedigreeNotes:
      "Fully health screened and TICA/CFA/WCF registered, he has a notably gentle and affectionate temperament. He consistently passes on strong bone, excellent type, and stable, sweet personality.",
    personality:
      "Wu Hei Hei is a solid blue male British Shorthair of traditional American bloodlines with a powerful cobby build and strong, robust limbs. He possesses a massive round head, full chubby cheeks, and sweet facial features that create his unforgettable, endearing expression.",
    role: "queen",
  },
  {
    id: "tor-q4",
    name: "May",
    registeredName: "MO LI NIU COBALU MEI",
    sex: "female",
    dob: "2024-02-14",
    color: "Tortoiseshell",
    pattern: "Solid",
    location: "toronto",
    photos: ["/images/cats/DSC00169.jpg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: [],
    pedigreeNotes:
      "Fully health screened and TICA/CFA/WCF registered, May contributes fresh Australian genetics and strong breeding potential to our lines.",
    personality:
      "May is a young Queen in our solid color British Shorthair program. She is a rich black-red tortoiseshell imported from strong Australian lines, featuring premium dense coat quality, compact and substantial limbs, a rounded cobby body, and excellent facial bone structure. Her standout copper eyes create a vibrant, eye-catching contrast against her deep tortoiseshell coat.",
    role: "king",
  },
  // Toronto Kings
  {
    id: "tor-k1",
    name: "Little Peep",
    registeredName: "Jiliang's Eleanor Goldenpeep",
    sex: "male",
    dob: "2022-03-18",
    color: "Golden Shaded",
    pattern: "Shaded",
    location: "toronto",
    photos: ["/images/cats/DSC010706.jpg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: [],
    pedigreeNotes:
      "Fully health screened and TICA/CFA/WCF registered, Little Peep brings fresh genetic diversity and strong breeding potential.",
    personality:
      "Little Peep is a young Queen and key member of our shaded series breeding program. She is a striking golden shaded with an exceptionally sweet face, captivating emerald-green eyes, and superior ear set paired with strong facial bone structure. Her gentle, affectionate temperament makes her an ideal addition to our lines.",
    role: "king",
  },
  {
    id: "tor-k2",
    name: "Southwest",
    registeredName: "MO LI SOUTH WEST",
    sex: "male",
    dob: "2023-03-10",
    color: "Blue-Cream",
    pattern: "Solid",
    location: "toronto",
    photos: ["/images/cats/DSC010720.jpg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: [],
    pedigreeNotes:
      "Fully health screened and TICA/CFA/WCF registered, Southwest adds valuable Australian genetics and reliable breeding potential to our lines.",
    personality:
      "Southwest is a young Queen in our solid color British Shorthair program. Imported from quality Australian lines, this Blue-Cream features plush, high-quality coat texture, compact and powerful limbs, a well-rounded cobby build, and strong facial bone structure. What truly sets her apart is the vivid copper eyes that pop dramatically against her unique blue-cream coloration, giving her an exceptionally bright and lively expression.",
    role: "king",
  },
  {
    id: "tor-k4",
    name: "Little J",
    registeredName: "Jiliang's Juno",
    sex: "male",
    dob: "2023-11-05",
    color: "Golden Shaded",
    pattern: "Shaded",
    location: "toronto",
    photos: ["/images/cats/DSC0107099.jpg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: [],
    pedigreeNotes:
      "Fully health screened and TICA/CFA/WCF registered, Little J delivers proven genetics and valuable maternal strength to our lines.",
    personality:
      "Little J is a Queen and foundational member of our shaded series breeding program. As the mother of Little Peep, she passes on her exceptional golden shaded type with an extremely sweet expressive face, striking emerald-green eyes, superior ear set, and strong facial bone structure. She also offers a gentle, affectionate temperament that makes her an outstanding breeding female.",
    role: "king",
  },
  {
    id: "tor-k5",
    name: "Super Star",
    registeredName: "MO LI Superstar",
    sex: "female",
    dob: "2024-04-08",
    color: "Blue",
    pattern: "Solid",
    location: "toronto",
    photos: ["/images/cats/图片_20260603184926_218_4.jpg"],
    healthTests: ["HCM Normal", "PKD Negative", "FeLV/FIV Negative", "Blood Type A"],
    titles: [],
    pedigreeNotes:
      "Fully health screened and TICA/CFA/WCF registered, Superstar brings valuable European genetics and strong structural breeding potential to our lines.",
    personality:
      "Superstar is a young Queen in our solid color British Shorthair program. Imported from strong European lines, she excels with well-developed limbs, powerful overall bone and muscle structure, an excellent head-to-body ratio, rounded cobby build, and superior facial bone structure. Her coat is truly outstanding — short, even, and exceptionally dense with a firm, crisp, resilient texture that feels plush yet structured.",
    role: "king",
  },
];
