import { useState } from "react";
import { PatternCard } from "./PatternCard";
import { patterns } from "@/data/patterns";

const categories = ["All Patterns", "Garments", "Homewares", "Accessories"];

export function PatternCatalogue() {
  const [active, setActive] = useState("All Patterns");

  const filtered =
    active === "All Patterns"
      ? patterns
      : patterns.filter((p) => p.category === active);

  return (
    <section id="catalogue" className="px-8 md:px-16 pb-48">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-32">
        {/* Section header spanning full width */}
        <div className="md:col-span-12 flex flex-col md:flex-row justify-between items-baseline border-b border-wool pb-4 mb-8">
          <h3 className="text-3xl font-serif text-stone">Pattern Index</h3>
          <div className="flex gap-6 text-xs uppercase tracking-widest mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`transition-colors ${
                  active === cat
                    ? "text-stone border-b border-stone/40 pb-1"
                    : "text-stone/50 hover:text-stone"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric masonry-style layout */}
        {filtered.map((p, i) => {
          // Alternate between different column spans for visual rhythm
          const layouts = [
            "md:col-span-4 md:col-start-2",
            "md:col-span-5 md:col-start-7 md:mt-32",
            "md:col-span-6 md:col-start-1",
            "md:col-span-3 md:col-start-9 md:mt-16",
            "md:col-span-5 md:col-start-2 md:mt-8",
            "md:col-span-4 md:col-start-8 md:mt-24",
          ];
          const layout = layouts[i % layouts.length];

          return (
            <article key={p.slug} className={layout}>
              <PatternCard {...p} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
