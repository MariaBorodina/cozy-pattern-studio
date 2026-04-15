import heroImage from "@/assets/hero-knitting.jpg";

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-12 px-8 md:px-16 pt-16 pb-32 items-start">
      <div className="md:col-span-5 md:col-start-2 pt-24">
        <p className="text-xs uppercase tracking-[0.2em] text-moss mb-8">
          &mdash; Volume IV
        </p>
        <h1 className="text-5xl md:text-6xl text-balance leading-[1.15] mb-12 font-serif text-stone">
          Formed by hand,<br />shaped by time.
        </h1>
        <p className="text-stone/70 text-lg leading-relaxed max-w-[40ch] text-pretty font-light mb-16">
          Embrace the quiet rhythm of the stitch. A collection of knitwear
          patterns inspired by the subtle irregularities of nature and the
          warmth of unbleached fibers.
        </p>
        <a
          href="#catalogue"
          className="text-sm uppercase tracking-[0.15em] border-b border-stone/30 pb-2 hover:border-stone transition-colors inline-block"
        >
          Explore the collection
        </a>
      </div>
      <div className="md:col-span-5 md:col-start-8 md:-mt-8">
        <div className="bg-wool aspect-[4/5] overflow-hidden">
          <img
            src={heroImage}
            loading="lazy"
            alt="Knitted texture detail"
            className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-[2s] ease-out"
          />
        </div>
        <div className="text-right mt-4 text-xs tracking-wider text-stone/60">
          01. Raw wool, undyed.
        </div>
      </div>
    </section>
  );
}
