import { Link } from "@tanstack/react-router";

interface PatternCardProps {
  slug: string;
  title: string;
  description: string;
  origin: string;
  difficulty: string;
  difficultyColor?: string;
  imageUrl: string;
}

export function PatternCard({
  slug,
  title,
  description,
  origin,
  difficulty,
  difficultyColor = "text-sage",
  imageUrl,
}: PatternCardProps) {
  return (
    <Link to="/patterns/$slug" params={{ slug }} className="flex flex-col group cursor-pointer no-underline">
      <div className="bg-linen p-3 mb-6 relative transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <div
          className={`absolute top-6 right-6 z-10 bg-paper/90 backdrop-blur-sm border border-linen px-2 py-1 font-sans text-[10px] uppercase tracking-widest ${difficultyColor}`}
        >
          {difficulty}
        </div>
        <div className="aspect-[3/4] bg-cream relative overflow-hidden">
          <img
            src={imageUrl}
            className="w-full h-full object-cover sepia-[.20] mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            alt={title}
          />
        </div>
      </div>
      <div className="flex flex-col px-2">
        <span className="font-sans text-[10px] uppercase tracking-widest text-terracotta mb-2">
          {origin}
        </span>
        <h4 className="text-2xl font-medium mb-1 leading-snug text-ink">{title}</h4>
        <p className="text-ink/70 italic text-sm">{description}</p>
      </div>
    </Link>
  );
}
