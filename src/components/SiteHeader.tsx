import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="w-full max-w-[1440px] mx-auto px-8 lg:px-16 pt-10 pb-8 flex justify-between items-end border-b border-linen">
      <div className="flex flex-col gap-1">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/50">
          Established 1984
        </span>
        <Link to="/" className="text-3xl font-medium tracking-tight text-ink">
          Hearth &amp; Skein
        </Link>
      </div>
      <nav className="hidden md:flex gap-10 font-sans text-xs uppercase tracking-widest text-ink/70">
        <Link
          to="/"
          activeProps={{ className: "text-terracotta border-b border-terracotta/30 pb-1" }}
          className="transition-colors hover:text-ink"
        >
          The Archive
        </Link>
        <span className="cursor-pointer hover:text-ink transition-colors">Techniques</span>
        <span className="cursor-pointer hover:text-ink transition-colors">Yarn Weights</span>
        <span className="cursor-pointer hover:text-ink transition-colors">Journal</span>
      </nav>
    </header>
  );
}
