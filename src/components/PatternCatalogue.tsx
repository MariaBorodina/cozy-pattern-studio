import { useState } from "react";
import { PatternCard } from "./PatternCard";

const categories = ["All Patterns", "Garments", "Homewares", "Accessories"];

const patterns = [
  {
    title: "The Moss Stitch Vest",
    description: "A layering piece favored by highland shepherds.",
    origin: "Circa 1920 • Shetland",
    difficulty: "Journeyman",
    difficultyColor: "text-sage",
    imageUrl: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop",
  },
  {
    title: "Nordic Colorwork Socks",
    description: "Intricate stranded knitting utilizing three shades.",
    origin: "Circa 1955 • Oslo",
    difficulty: "Master",
    difficultyColor: "text-terracotta",
    imageUrl: "https://images.unsplash.com/photo-1586462373553-0f3a2e4b5c9a?w=600&h=800&fit=crop",
  },
  {
    title: "Heirloom Ribbed Blanket",
    description: "A forgiving, rhythmic pattern for heavy wools.",
    origin: "Circa 1980 • Vermont",
    difficulty: "Apprentice",
    difficultyColor: "text-ink/60",
    imageUrl: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&h=800&fit=crop",
  },
  {
    title: "Aran Cable Cardigan",
    description: "Traditional Irish cables with a modern silhouette.",
    origin: "Circa 1940 • Galway",
    difficulty: "Master",
    difficultyColor: "text-terracotta",
    imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a60?w=600&h=800&fit=crop",
  },
  {
    title: "Heather Lace Shawl",
    description: "Delicate openwork inspired by moorland wildflowers.",
    origin: "Circa 1910 • Yorkshire",
    difficulty: "Master",
    difficultyColor: "text-terracotta",
    imageUrl: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop",
  },
  {
    title: "Seedling Mittens",
    description: "Quick-knit accessories with a textured seed stitch.",
    origin: "Circa 1975 • Maine",
    difficulty: "Apprentice",
    difficultyColor: "text-ink/60",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=800&fit=crop",
  },
];

export function PatternCatalogue() {
  const [active, setActive] = useState("All Patterns");

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-linen pb-4">
        <h3 className="text-3xl font-medium tracking-tight text-ink">Pattern Index</h3>
        <div className="flex gap-6 font-sans text-xs uppercase tracking-widest mt-6 md:mt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`transition-colors ${
                active === cat ? "text-terracotta" : "text-ink/50 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {patterns.map((p) => (
          <PatternCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
