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
          "Explore a curated catalogue of heirloom knitting patterns. Cozy designs rooted in tradition, from Shetland cables to Nordic colorwork.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-dvh bg-paper text-ink font-serif antialiased selection:bg-terracotta/20">
      <SiteHeader />
      <main className="w-full max-w-[1440px] mx-auto px-8 lg:px-16 py-16">
        <HeroSection />
        <PatternCatalogue />
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
