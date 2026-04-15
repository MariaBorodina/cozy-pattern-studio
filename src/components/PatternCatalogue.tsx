import { useState } from "react";
import { PatternCard } from "./PatternCard";
import { patterns } from "@/data/patterns";

const categories = ["All Patterns", "Garments", "Homewares", "Accessories"];

export function PatternCatalogue() {
  const [active, setActive] = useState("All Patterns");

  const filtered = active === "All Patterns"
    ? patterns
    : patterns.filter((p) => p.category === active);

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
        {filtered.map((p) => (
          <PatternCard key={p.slug} {...p} />
        ))}
      </div>
    </section>
  );
}
