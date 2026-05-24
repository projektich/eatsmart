# 🍽️ EATSMART - Professioneller Ernährungsguide

## ✨ Was ist EATSMART?

EATSMART ist eine **vollständige, wissenschaftlich fundierte Ernährungsguide-Webseite** mit:

- **50+ hochwertige Rezepte** (sortiert nach Zeit)
- **30 Fertigprodukte** mit Reviews und Nährwerten
- **35 Lebensmitteltipps** intelligent kategorisiert
- **Vollständige Nährwertberechnung** (USDA Datenbank)
- **Suche & Filter** für schnelle Navigation
- **Dark Mode** für angenehmes Lesen
- **Responsive Design** - funktioniert überall

---

## 🚀 Quick Start - So deployst du es

### Option 1: Vercel (Empfohlen - Kostenlos)

1. **GitHub Account** erstellen (falls noch nicht vorhanden)
   - https://github.com/signup

2. **Dieses Projekt zu GitHub pushen**
   ```bash
   git init
   git add .
   git commit -m "Initial EATSMART"
   git branch -M main
   git remote add origin https://github.com/DEIN_USERNAME/eatsmart.git
   git push -u origin main
   ```

3. **Auf Vercel deployen**
   - Gehe zu: https://vercel.com
   - "Sign up" → GitHub verbinden
   - "New Project" → EATSMART Repository wählen
   - "Deploy"
   - **Fertig!** 🎉

   Deine App ist jetzt LIVE auf: `eatsmart.vercel.app`

### Option 2: Eigene Domain

1. **Domain kaufen** (z.B. auf Namecheap, GoDaddy)
   - Kosten: ~10-15€/Jahr

2. **Bei Vercel Projekt öffnen**
   - Settings → Domains
   - Domain eingeben
   - DNS-Einstellungen folgen

---

## 📁 Projekt Struktur

```
eatsmart-nextjs/
├── app/
│   ├── layout.js          # Header, Navigation, Footer
│   ├── page.js            # Homepage
│   ├── rezepte/
│   │   └── page.js        # Rezepte Seite
│   ├── produkte/
│   │   └── page.js        # Fertigprodukte Seite
│   └── lebensmittel/
│       └── page.js        # Lebensmitteltipps Seite
├── data/
│   ├── recipes.js         # 50 Rezepte mit Nährwerten
│   ├── products.js        # 30 Fertigprodukte
│   └── ingredients.js     # 35 Lebensmitteltipps
├── package.json           # Dependencies
├── tailwind.config.js     # Design System
└── README.md              # Diese Datei
```

---

## 📝 Wie du neue Inhalte hinzufügst

### Neues Rezept hinzufügen

In `data/recipes.js`:

```javascript
{
  id: 51,
  title: "Dein Rezept",
  time: "15 min",
  servings: 1,
  difficulty: "einfach",
  category: "quickmeals",
  image: "🍳",
  nutrition: { calories: 300, protein: 30, carbs: 20, fat: 10 },
  tags: ["vegetarisch", "eiweiß"],
  ingredients: ["Zutat 1", "Zutat 2"],
  instructions: ["Schritt 1", "Schritt 2"],
  sources: ["USDA Datenbank"],
  variations: ["Mit Variante"],
  tips: ["Pro Tipp"]
}
```

### Neues Produkt hinzufügen

In `data/products.js`:

```javascript
{
  id: 31,
  name: "Produkt Name",
  brand: "Marke",
  price: "€2-3",
  category: "protein-shakes",
  image: "💪",
  nutrition: { calories: 150, protein: 25, carbs: 5, fat: 2 },
  rating: 4.5,
  description: "Kurze Beschreibung",
  pros: ["Vorteil 1", "Vorteil 2"],
  cons: ["Nachteil"],
  where: ["Amazon", "Supermarkt"],
  source: "Offizieller Nährwert"
}
```

### Neues Lebensmittel hinzufügen

In `data/ingredients.js`:

```javascript
{
  id: 36,
  name: "Lebensmittel Name",
  category: "protein",           // oder "lowcalorie"
  subcategory: "vegan",          // vegan, vegetarisch, milch, fisch
  image: "🥬",
  nutrition: { calories: 50, protein: 5, carbs: 8, fat: 2 },
  description: "Beschreibung",
  tags: ["vegan", "eiweiß"],
  tips: ["Tipp 1", "Tipp 2"],
  source: "USDA Datenbank"
}
```

---

## 🌍 Kategorien Übersicht

### Rezepte
- **5-10 Min**: Ultra schnelle Mahlzeiten
- **10-20 Min**: Schnelle Meals
- **20-45 Min**: Normale Rezepte

### Fertigprodukte
- Protein Shakes
- Protein Riegel
- Tiefkühlt
- Dosen & Gläser
- Joghurts
- Milchprodukte
- Getränke
- Saucen

### Lebensmitteltipps
**Eiweißreich:**
- 🌿 Vegan
- 🌱 Vegetarisch
- 🥛 Milchprodukte
- 🐟 Fisch

**Kalorienarm:**
- 🌿 Vegan
- 🌱 Vegetarisch
- 🥛 Milchprodukte
- 🐟 Fisch

---

## 🔬 Wissenschaftliche Quellen

Alle Nährwerte basieren auf:

- **USDA FoodData Central**: https://fdc.nal.usda.gov/
- **MyFitnessPal Database**: https://www.myfitnesspal.com/
- **Google Scholar**: https://scholar.google.de/
- **Offizielle Verpackungsangaben**

---

## 🛠️ Lokales Entwickeln

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Browser: http://localhost:3000
```

---

## 💡 Tipps für Updates

### Neuen Artikel schreiben
1. Daten in entsprechender Datei hinzufügen
2. Lokal testen: `npm run dev`
3. In GitHub pushen
4. Vercel deployed automatisch! ✅

### Bilder ändern
- Verwende nur Emoji oder Unsplash URLs
- Alle Bilder sind lizenzfrei
- Format: `image: "🍳"` oder `image: "https://images.unsplash.com/..."`

---

## 🎨 Design Customization

### Farbe ändern
In allen `.js` Dateien: `teal-600` → deine Farbe

Beispiel: `bg-blue-600`, `text-orange-500`, etc.

### Font ändern
In `tailwind.config.js`:
```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Neue Font', 'sans-serif']
    }
  }
}
```

---

## 📱 Mobile Optimiert

- Responsive auf allen Geräten
- Dark Mode auf Mobil
- Touch-freundliche Buttons
- Schnell auf 4G

---

## 🔒 Disclaimer

```
Alle Inhalte dienen zu Informationszwecken.
Konsultiere einen Ernährungsberater vor signifikanten Diätveränderungen.
```

---

## 📧 Support

Bei Fragen:
1. Überprüf die README nochmal
2. Schreib mir eine Nachricht
3. Ich update die App sofort!

---

## 🎉 Viel Erfolg!

EATSMART ist jetzt live und ready to go! 🚀

Vergiss nicht:
- ⭐ Domain mit Vercel verbinden (optional)
- 📝 Neue Rezepte regelmäßig hinzufügen
- 🔄 Regelmäßig aktualisieren

---

**Built with ❤️ using Next.js, React & Tailwind CSS**
