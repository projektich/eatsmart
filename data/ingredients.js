export const ingredients = [
  // EIWEISS-REICH
  
  // Eiweißreich - Vegan
  {
    id: 1,
    name: "Rote Linsen",
    category: "protein",
    subcategory: "vegan",
    image: "🫘",
    nutrition: { calories: 353, protein: 25, carbs: 63, fat: 3 },
    description: "Pflanzliches Eiweiß - schnell kochend",
    tags: ["vegan", "eiweiß", "günstig"],
    tips: ["Nur 20 Min kochen", "In Suppen & Dal", "Perfekt für Meal Prep"],
    source: "USDA Legume Data"
  },
  {
    id: 2,
    name: "Tofu (Seide)",
    category: "protein",
    subcategory: "vegan",
    image: "🟫",
    nutrition: { calories: 76, protein: 8, carbs: 1.6, fat: 4.8 },
    description: "Veganes Protein - vielseitig",
    tags: ["vegan", "eiweiß"],
    tips: ["Press Tofu vorher aus", "Marinieren für Geschmack", "Braten oder Kochen"],
    source: "USDA Soy Data"
  },
  {
    id: 3,
    name: "Kichererbsen",
    category: "protein",
    subcategory: "vegan",
    image: "🫘",
    nutrition: { calories: 364, protein: 19, carbs: 61, fat: 6 },
    description: "Vielseitiges pflanzliches Protein",
    tags: ["vegan", "eiweiß"],
    tips: ["In Salaten", "Für Hummus", "Rösten als Snack"],
    source: "USDA Legume Data"
  },
  {
    id: 4,
    name: "Seitan (Weizeneiweiß)",
    category: "protein",
    subcategory: "vegan",
    image: "🟫",
    nutrition: { calories: 110, protein: 25, carbs: 0, fat: 0.5 },
    description: "Das Fleisch für Veganer",
    tags: ["vegan", "eiweiß", "lowcarb"],
    tips: ["Wie Fleisch zubereiten", "Im Wok braten", "Sehr proteinreich"],
    source: "USDA Wheat Data"
  },
  {
    id: 5,
    name: "Edamame",
    category: "protein",
    subcategory: "vegan",
    image: "🫘",
    nutrition: { calories: 122, protein: 12, carbs: 10, fat: 5 },
    description: "Junge Sojabohnen - Protein-Snack",
    tags: ["vegan", "eiweiß"],
    tips: ["Mit Meersalz kochen", "Als Snack essen", "Im Salat"],
    source: "USDA Soy Data"
  },
  {
    id: 6,
    name: "Hanfsamen",
    category: "protein",
    subcategory: "vegan",
    image: "🌱",
    nutrition: { calories: 553, protein: 31, carbs: 12, fat: 49 },
    description: "Superfood - komplettes Aminosäure-Profil",
    tags: ["vegan", "eiweiß"],
    tips: ["In Smoothies", "Auf Salaten", "Im Joghurt"],
    source: "USDA Seed Data"
  },
  
  // Eiweißreich - Vegetarisch
  {
    id: 7,
    name: "Quark (Magerquark)",
    category: "protein",
    subcategory: "vegetarisch",
    image: "🥣",
    nutrition: { calories: 98, protein: 14, carbs: 4, fat: 4.5 },
    description: "Der Klassiker - günstig, hochwertig",
    tags: ["vegetarisch", "eiweiß"],
    tips: ["Mit Beeren süßen", "In Pancakes", "Mit Müsli"],
    source: "USDA Dairy Data"
  },
  {
    id: 8,
    name: "Griechischer Joghurt",
    category: "protein",
    subcategory: "vegetarisch",
    image: "🥣",
    nutrition: { calories: 101, protein: 10.2, carbs: 3.2, fat: 0 },
    description: "Doppeltes Eiweiß - cremig",
    tags: ["vegetarisch", "eiweiß"],
    tips: ["0% Fettgehalt wählen", "Mit Beeren kombinieren", "Als Basis für Dressings"],
    source: "USDA Dairy Data"
  },
  {
    id: 9,
    name: "Skyr Isländischer Joghurt",
    category: "protein",
    subcategory: "vegetarisch",
    image: "🥣",
    nutrition: { calories: 110, protein: 11, carbs: 4, fat: 0.5 },
    description: "Noch besser als griechisch",
    tags: ["vegetarisch", "eiweiß"],
    tips: ["Direkt essen", "Mit Müsli", "Im Dessert"],
    source: "USDA Yogurt Data"
  },
  {
    id: 10,
    name: "Cottage Cheese",
    category: "protein",
    subcategory: "vegetarisch",
    image: "🥣",
    nutrition: { calories: 110, protein: 13, carbs: 4, fat: 5 },
    description: "Unterschätzt - pure Proteinkraft",
    tags: ["vegetarisch", "eiweiß"],
    tips: ["Direkt essen", "Mit Früchten", "In Pfannkuchen"],
    source: "USDA Dairy Data"
  },
  {
    id: 11,
    name: "Eier",
    category: "protein",
    subcategory: "vegetarisch",
    image: "🥚",
    nutrition: { calories: 155, protein: 13, carbs: 1.1, fat: 11 },
    description: "Perfektes Protein - vielseitig",
    tags: ["vegetarisch", "eiweiß"],
    tips: ["Bio-Eier verwenden", "Ganzes Ei essen", "Kochen, braten, backen"],
    source: "USDA Egg Data"
  },
  {
    id: 12,
    name: "Käse (Parmesan/Grana)",
    category: "protein",
    subcategory: "vegetarisch",
    image: "🧀",
    nutrition: { calories: 430, protein: 40, carbs: 1, fat: 29 },
    description: "Würziger Protein-Kick",
    tags: ["vegetarisch", "eiweiß"],
    tips: ["Gerieben verwenden", "Weniger ist mehr", "Zu Pasta & Salat"],
    source: "USDA Cheese Data"
  },
  
  // Eiweißreich - Milchprodukte
  {
    id: 13,
    name: "Milch (Vollmilch)",
    category: "protein",
    subcategory: "milch",
    image: "🥛",
    nutrition: { calories: 64, protein: 3.2, carbs: 4.8, fat: 3.6 },
    description: "Basis - mit Protein & Calcium",
    tags: ["vegetarisch", "eiweiß"],
    tips: ["In Shakes", "Zum Backen", "Mit Kaffee"],
    source: "USDA Dairy Data"
  },
  {
    id: 14,
    name: "Käsequark",
    category: "protein",
    subcategory: "milch",
    image: "🧀",
    nutrition: { calories: 180, protein: 16, carbs: 4, fat: 12 },
    description: "Mix aus Quark & Käse",
    tags: ["vegetarisch", "eiweiß"],
    tips: ["Mit Früchten", "Im Müsli", "Direkt essen"],
    source: "USDA Dairy Data"
  },
  {
    id: 15,
    name: "Mozzarella",
    category: "protein",
    subcategory: "milch",
    image: "🧀",
    nutrition: { calories: 280, protein: 28, carbs: 3.1, fat: 17 },
    description: "Frischer Käse - lecker",
    tags: ["vegetarisch", "eiweiß"],
    tips: ["Im Salat", "Auf Pizza", "Mit Tomaten"],
    source: "USDA Cheese Data"
  },
  
  // Eiweißreich - Fisch
  {
    id: 16,
    name: "Hähnchenbrust",
    category: "protein",
    subcategory: "fisch",
    image: "🍗",
    nutrition: { calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    description: "Der Klassiker - mageres Fleisch",
    tags: ["eiweiß"],
    tips: ["Immer frisch/tiefgefroren lagern", "Vor dem Kochen kurz auftauen", "Mit Marinade würzen"],
    source: "USDA Chicken Data"
  },
  {
    id: 17,
    name: "Lachsfilet",
    category: "protein",
    subcategory: "fisch",
    image: "🐟",
    nutrition: { calories: 280, protein: 25, carbs: 0, fat: 17 },
    description: "Omega-3 Power - der Premium-Fisch",
    tags: ["eiweiß"],
    tips: ["Wildfang besser als Zucht", "Mit Zitrone würzen", "Schnell nach Kauf verarbeiten"],
    source: "USDA Fish Data"
  },
  {
    id: 18,
    name: "Thunfisch",
    category: "protein",
    subcategory: "fisch",
    image: "🐟",
    nutrition: { calories: 220, protein: 28, carbs: 0, fat: 12 },
    description: "Proteinreich & praktisch",
    tags: ["eiweiß"],
    tips: ["In Wasser statt Öl wählen", "Mit Gemüse essen", "Überall mitnehmen"],
    source: "USDA Fish Data"
  },
  {
    id: 19,
    name: "Putenbrust",
    category: "protein",
    subcategory: "fisch",
    image: "🍗",
    nutrition: { calories: 189, protein: 29, carbs: 0, fat: 7.4 },
    description: "Noch magerer als Hähnchen",
    tags: ["eiweiß"],
    tips: ["Sehr mager", "Schnell gegart", "Vielseitig"],
    source: "USDA Turkey Data"
  },
  {
    id: 20,
    name: "Hering",
    category: "protein",
    subcategory: "fisch",
    image: "🐟",
    nutrition: { calories: 207, protein: 20, carbs: 0, fat: 13 },
    description: "Omega-3 König - unterschätzt",
    tags: ["eiweiß"],
    tips: ["Super Omega-3", "Aus der Dose ok", "Mit Salat essen"],
    source: "USDA Fish Data"
  },
  
  // KALORIENARM
  
  // Kalorienarm - Vegan
  {
    id: 21,
    name: "Spinat",
    category: "lowcalorie",
    subcategory: "vegan",
    image: "🌱",
    nutrition: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
    description: "Low Carb, vitaminreich",
    tags: ["vegan", "lowcarb"],
    tips: ["Tiefgefroren genauso gut", "In Smoothies verstecken", "Mit Zitrone für Eisenaufnahme"],
    source: "USDA Vegetable Data"
  },
  {
    id: 22,
    name: "Brokkoli",
    category: "lowcalorie",
    subcategory: "vegan",
    image: "🥦",
    nutrition: { calories: 34, protein: 2.8, carbs: 7, fat: 0.4 },
    description: "Super-Gemüse - Anti-Krebs",
    tags: ["vegan", "lowcarb"],
    tips: ["Bissfest kochen", "Mit Olivenöl braten", "Vielseitig einsetzbar"],
    source: "USDA Vegetable Data"
  },
  {
    id: 23,
    name: "Gurke",
    category: "lowcalorie",
    subcategory: "vegan",
    image: "🥒",
    nutrition: { calories: 16, protein: 0.7, carbs: 3.6, fat: 0.2 },
    description: "Kalorienlos - perfekt für Salat",
    tags: ["vegan", "lowcarb"],
    tips: ["Im Wasser lagern", "Mit Salz würzen", "In Salaten perfekt"],
    source: "USDA Vegetable Data"
  },
  {
    id: 24,
    name: "Blumenkohl",
    category: "lowcalorie",
    subcategory: "vegan",
    image: "🥦",
    nutrition: { calories: 25, protein: 1.9, carbs: 5, fat: 0.3 },
    description: "Reis-Alternative - low carb",
    tags: ["vegan", "lowcarb"],
    tips: ["Als Reis-Ersatz", "Geröstet lecker", "Mit Curry"],
    source: "USDA Vegetable Data"
  },
  {
    id: 25,
    name: "Tomaten",
    category: "lowcalorie",
    subcategory: "vegan",
    image: "🍅",
    nutrition: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
    description: "Lycopin - Anti-Oxidantien",
    tags: ["vegan", "lowcarb"],
    tips: ["Reif kaufen", "Mit Öl für Lycopin-Aufnahme", "In Saucen"],
    source: "USDA Vegetable Data"
  },
  
  // Kalorienarm - Vegetarisch
  {
    id: 26,
    name: "Grüner Salat (Rucola)",
    category: "lowcalorie",
    subcategory: "vegetarisch",
    image: "🌱",
    nutrition: { calories: 25, protein: 2.6, carbs: 3.7, fat: 0.7 },
    description: "Basis für jede Mahlzeit",
    tags: ["vegetarisch", "lowcarb"],
    tips: ["Mit Dressing kombinieren", "Mit Protein pairen", "Fresh kaufen"],
    source: "USDA Vegetable Data"
  },
  {
    id: 27,
    name: "Champignons",
    category: "lowcalorie",
    subcategory: "vegetarisch",
    image: "🍄",
    nutrition: { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3 },
    description: "Fleisch-Ersatz Textur",
    tags: ["vegetarisch", "lowcarb"],
    tips: ["Gebraten Umami", "Mit Knoblauch", "In Suppen"],
    source: "USDA Vegetable Data"
  },
  {
    id: 28,
    name: "Paprika (Capsicum)",
    category: "lowcalorie",
    subcategory: "vegetarisch",
    image: "🌶️",
    nutrition: { calories: 31, protein: 1, carbs: 6, fat: 0.3 },
    description: "Vitamin C Boost",
    tags: ["vegetarisch", "lowcarb"],
    tips: ["Roh im Salat", "Gebraten süßer", "Mit Feta kombinieren"],
    source: "USDA Vegetable Data"
  },
  {
    id: 29,
    name: "Zucchini",
    category: "lowcalorie",
    subcategory: "vegetarisch",
    image: "🥒",
    nutrition: { calories: 21, protein: 1.5, carbs: 3.7, fat: 0.4 },
    description: "Flexibel - Nudel-Ersatz",
    tags: ["vegetarisch", "lowcarb"],
    tips: ["Als Zoodles", "Gebraten", "Gefüllt (siehe Rezepte)"],
    source: "USDA Vegetable Data"
  },
  
  // Kalorienarm - Milchprodukte
  {
    id: 30,
    name: "Magermilch",
    category: "lowcalorie",
    subcategory: "milch",
    image: "🥛",
    nutrition: { calories: 35, protein: 3.4, carbs: 5, fat: 0.1 },
    description: "Protein ohne Fett",
    tags: ["vegetarisch", "lowcalorie"],
    tips: ["In Shakes", "Mit Kaffee", "Zum Kochen"],
    source: "USDA Dairy Data"
  },
  {
    id: 31,
    name: "Hüttenkäse (Low Fat)",
    category: "lowcalorie",
    subcategory: "milch",
    image: "🧀",
    nutrition: { calories: 80, protein: 11, carbs: 4, fat: 4.3 },
    description: "Proteinreich & kalorienarm",
    tags: ["vegetarisch", "lowcalorie", "eiweiß"],
    tips: ["Mit Beeren", "Im Müsli", "Mit Honig"],
    source: "USDA Dairy Data"
  },
  {
    id: 32,
    name: "Mozzarella Light",
    category: "lowcalorie",
    subcategory: "milch",
    image: "🧀",
    nutrition: { calories: 170, protein: 28, carbs: 1, fat: 7 },
    description: "Fett reduziert",
    tags: ["vegetarisch", "lowcalorie"],
    tips: ["Im Salat", "Auf Pizza", "Mit Tomaten"],
    source: "USDA Cheese Data"
  },
  
  // Kalorienarm - Fisch
  {
    id: 33,
    name: "Kabeljau/Dorsch",
    category: "lowcalorie",
    subcategory: "fisch",
    image: "🐟",
    nutrition: { calories: 82, protein: 17.7, carbs: 0, fat: 0.7 },
    description: "Ultra magerer Fisch",
    tags: ["lowcalorie", "eiweiß"],
    tips: ["Mit Olivenöl zubereiten", "Mit Zitrone", "Kurz anbraten"],
    source: "USDA Fish Data"
  },
  {
    id: 34,
    name: "Forelle",
    category: "lowcalorie",
    subcategory: "fisch",
    image: "🐟",
    nutrition: { calories: 141, protein: 19.8, carbs: 0, fat: 6.3 },
    description: "Omega-3 mit moderaten Kalorien",
    tags: ["eiweiß"],
    tips: ["Ganz oder Filet", "Im Ofen", "Mit Kräutern"],
    source: "USDA Fish Data"
  },
  {
    id: 35,
    name: "Muscheln",
    category: "lowcalorie",
    subcategory: "fisch",
    image: "🐚",
    nutrition: { calories: 85, protein: 14, carbs: 2, fat: 1.5 },
    description: "Ultra kalorienarm & proteinreich",
    tags: ["lowcalorie", "eiweiß"],
    tips: ["Mit Knoblauch & Wein", "Super Zink-Quelle", "Aus der Dose ok"],
    source: "USDA Shellfish Data"
  }
];
