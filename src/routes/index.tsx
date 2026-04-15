import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { PatternCatalogue } from "@/components/PatternCatalogue";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hearth & Skein — Knitting Pattern Archive" },
      {
        name: "description",
        content:
          "Explore a curated catalogue of heirloom knitting patterns. Designs rooted in the quiet rhythm of the stitch.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-dvh bg-linen text-stone antialiased selection:bg-moss/20">
      <SiteHeader />
      <main className="w-full max-w-[1440px] mx-auto">
        <HeroSection />
        <PatternCatalogue />
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
