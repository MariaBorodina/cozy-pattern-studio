export function HeroSection() {
  return (
    <section className="mb-24 flex flex-col lg:flex-row gap-16 items-center">
      <div className="flex-1 flex flex-col gap-6">
        <span className="font-sans text-xs font-medium uppercase tracking-widest text-sage">
          From the vault
        </span>
        <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-balance leading-[1.1] text-ink">
          The Cabled <br />Fisherman's Wrap
        </h2>
        <p className="text-lg text-ink/80 max-w-[45ch] text-pretty leading-relaxed mb-4">
          Originally transcribed in 1962 from a weathered notebook found in a
          coastal cottage. This pattern employs a complex twisted rib to block
          the salt winds.
        </p>
        <div className="flex items-center gap-6 font-sans text-sm">
          <button className="bg-terracotta text-cream px-6 py-3 hover:bg-leather transition-colors duration-300">
            View Pattern
          </button>
          <div className="flex gap-4 text-ink/60 border-l border-linen pl-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider mb-0.5">Needles</span>
              <span className="font-medium text-ink">US 8 (5.0mm)</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider mb-0.5">Yarn</span>
              <span className="font-medium text-ink">Worsted</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full bg-linen p-4 relative">
        {/* Decorative photo corners */}
        <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-leather/20" />
        <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-leather/20" />
        <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-leather/20" />
        <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-leather/20" />
        <img
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=900&h=600&fit=crop"
          className="w-full aspect-[4/3] object-cover sepia-[.30] contrast-125 mix-blend-multiply opacity-90"
          loading="lazy"
          alt="Featured knitting pattern"
        />
      </div>
    </section>
  );
}
