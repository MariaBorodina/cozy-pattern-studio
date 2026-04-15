import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPatternBySlug } from "@/data/patterns";

function NotFoundPattern() {
  return (
    <div className="min-h-dvh bg-paper text-ink font-serif flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-medium mb-4">Pattern Not Found</h1>
        <p className="text-ink/60 italic mb-8">This pattern may have been lost to time.</p>
        <Link to="/" className="font-sans text-xs uppercase tracking-widest text-terracotta hover:text-leather transition-colors">
          ← Return to Archive
        </Link>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/patterns/$slug")({
  component: PatternDetail,
  notFoundComponent: NotFoundPattern,
  head: ({ params }) => {
    const pattern = getPatternBySlug(params.slug);
    return {
      meta: [
        { title: pattern ? `${pattern.title} — Hearth & Skein` : "Pattern Not Found" },
        {
          name: "description",
          content: pattern?.description ?? "Knitting pattern from the Hearth & Skein archive.",
        },
        { property: "og:title", content: pattern ? `${pattern.title} — Hearth & Skein` : "Pattern Not Found" },
        { property: "og:description", content: pattern?.description ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const pattern = getPatternBySlug(params.slug);
    if (!pattern) throw notFound();
    return pattern;
  },
});

function PatternDetail() {
  const pattern = Route.useLoaderData();

  const difficultyDescription: Record<string, string> = {
    Apprentice: "Suitable for beginners. Basic stitches and simple construction.",
    Journeyman: "Intermediate skills required. Includes shaping and texture patterns.",
    Master: "Advanced techniques. Requires experience with complex stitch patterns.",
  };

  return (
    <div className="min-h-dvh bg-paper text-ink font-serif antialiased selection:bg-terracotta/20">
      {/* Header */}
      <header className="w-full max-w-[1440px] mx-auto px-8 lg:px-16 py-6">
        <Link
          to="/"
          className="font-sans text-xs uppercase tracking-widest text-ink/50 hover:text-terracotta transition-colors"
        >
          ← Back to Archive
        </Link>
      </header>

      <main className="w-full max-w-[1440px] mx-auto px-8 lg:px-16 pb-16">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className="bg-linen p-3">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={pattern.imageUrl}
                alt={pattern.title}
                className="w-full h-full object-cover sepia-[.20] mix-blend-multiply"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-sans text-[10px] uppercase tracking-widest text-terracotta mb-3">
              {pattern.origin}
            </span>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-4 text-ink">
              {pattern.title}
            </h1>
            <p className="text-lg italic text-ink/70 mb-8">{pattern.description}</p>

            {/* Difficulty */}
            <div className="border-t border-linen pt-6 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-sans text-[10px] uppercase tracking-widest text-ink/50">
                  Difficulty
                </span>
                <span className={`font-sans text-xs uppercase tracking-widest font-medium ${pattern.difficultyColor}`}>
                  {pattern.difficulty}
                </span>
              </div>
              <p className="text-sm text-ink/60 italic">
                {difficultyDescription[pattern.difficulty]}
              </p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-linen pt-6">
              {[
                ["Yarn Weight", pattern.yarnWeight],
                ["Yardage", pattern.yarnAmount],
                ["Needles", pattern.needleSize],
                ["Gauge", pattern.gauge],
                ["Finished Size", pattern.finishedSize],
                ["Category", pattern.category],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-sans text-[10px] uppercase tracking-widest text-ink/50 mb-1">
                    {label}
                  </dt>
                  <dd className="text-sm text-ink/80">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium tracking-tight text-ink mb-2">Instructions</h2>
          <p className="text-ink/50 italic text-sm mb-10">
            Follow each step carefully. Refer to gauge swatch before beginning.
          </p>

          <ol className="space-y-8">
            {pattern.instructions.map((step, i) => (
              <li key={i} className="flex gap-6">
                <span className="font-sans text-xs text-terracotta/60 font-medium tabular-nums pt-1 shrink-0 w-6 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-ink/80 leading-relaxed border-b border-linen/80 pb-8 flex-1">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="w-full max-w-[1440px] mx-auto px-8 lg:px-16 py-12 border-t border-linen">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs text-ink/40">
          <span>© 2026 Hearth &amp; Skein. All patterns archived with care.</span>
          <span className="uppercase tracking-widest">Made with wool &amp; patience</span>
        </div>
      </footer>
    </div>
  );
}
