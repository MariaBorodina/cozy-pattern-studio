import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="flex justify-between items-center px-8 md:px-16 pt-12 pb-8">
      <div className="text-2xl tracking-wide font-serif text-stone">
        <Link to="/" className="no-underline text-stone">
          Hearth &amp; Skein
        </Link>
      </div>
      <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-stone/70 font-medium">
        <Link
          to="/"
          activeProps={{ className: "text-stone border-b border-stone/40 pb-1" }}
          className="transition-colors hover:text-stone"
        >
          Catalogue
        </Link>
        <span className="cursor-pointer hover:text-stone transition-colors">Journal</span>
        <span className="cursor-pointer hover:text-stone transition-colors">About</span>
      </nav>
    </header>
  );
}
