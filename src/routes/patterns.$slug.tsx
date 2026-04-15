import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPatternBySlug, type Pattern } from "@/data/patterns";

function NotFoundPattern() {
  return (
    <div className="min-h-dvh bg-linen text-stone flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-serif mb-4">Pattern Not Found</h1>
        <p className="text-stone/60 mb-8">This pattern may have been lost to time.</p>
        <Link
          to="/"
          className="text-sm uppercase tracking-[0.15em] border-b border-stone/30 pb-2 hover:border-stone transition-colors"
        >
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
  const pattern = Route.useLoaderData() as Pattern;

  return (
    <div className="min-h-dvh bg-linen text-stone antialiased selection:bg-moss/20">
      {/* Back link */}
      <header className="px-8 md:px-16 pt-12 pb-8">
        <Link
          to="/"
          className="text-sm uppercase tracking-[0.15em] text-stone/50 hover:text-stone transition-colors"
        >
          ← Back to Archive
        </Link>
      </header>

      <main className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pb-16">
        {/* Hero grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          {/* Image */}
          <div className="md:col-span-6 md:col-start-1">
            <div className="bg-wool aspect-[4/5] overflow-hidden">
              <img
                src={pattern.imageUrl}
                alt={pattern.title}
                className="w-full h-full object-cover grayscale-[15%]"
              />
            </div>
            <div className="text-right mt-4 text-xs tracking-wider text-stone/50">
              {pattern.origin}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-moss mb-6">
              &mdash; {pattern.category}
            </p>
            <h1 className="text-4xl md:text-5xl leading-[1.15] mb-6 font-serif text-stone">
              {pattern.title}
            </h1>
            <p className="text-stone/70 text-lg leading-relaxed mb-12 font-light">
              {pattern.description}
            </p>

            {/* Specs */}
            <dl className="space-y-4 border-t border-wool pt-8">
              {[
                ["Difficulty", pattern.difficulty],
                ["Yarn Weight", pattern.yarnWeight],
                ["Yardage", pattern.yarnAmount],
                ["Needles", pattern.needleSize],
                ["Gauge", pattern.gauge],
                ["Finished Size", pattern.finishedSize],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-baseline">
                  <dt className="text-xs uppercase tracking-widest text-stone/50">
                    {label}
                  </dt>
                  <dd className="text-sm text-stone/80 text-right max-w-[60%]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Instructions */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone mb-2">Instructions</h2>
          <p className="text-stone/50 text-sm mb-12">
            Follow each step carefully. Refer to gauge swatch before beginning.
          </p>

          <ol className="space-y-8">
            {pattern.instructions.map((step: string, i: number) => (
              <li key={i} className="flex gap-8">
                <span className="text-xs text-moss tabular-nums pt-1 shrink-0 w-6 text-right tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-stone/70 leading-relaxed border-b border-wool/60 pb-8 flex-1">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="w-full max-w-[1440px] mx-auto px-8 md:px-16 py-12 border-t border-wool">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone/40 tracking-wider">
          <span>© 2026 Hearth &amp; Skein. All patterns archived with care.</span>
          <span className="uppercase">Made with wool &amp; patience</span>
        </div>
      </footer>
    </div>
  );
}
