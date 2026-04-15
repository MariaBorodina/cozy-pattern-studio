import { Link } from "@tanstack/react-router";

interface PatternCardProps {
  slug: string;
  title: string;
  description: string;
  origin: string;
  difficulty: string;
  difficultyColor?: string;
  imageUrl: string;
  yarnWeight?: string;
}

export function PatternCard({
  slug,
  title,
  origin,
  difficulty,
  imageUrl,
  yarnWeight,
}: PatternCardProps) {
  return (
    <Link
      to="/patterns/$slug"
      params={{ slug }}
      className="flex flex-col group cursor-pointer no-underline"
    >
      <div className="bg-wool aspect-[3/4] overflow-hidden mb-6">
        <img
          src={imageUrl}
          className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000"
          loading="lazy"
          alt={title}
        />
      </div>
      <div className="flex justify-between items-baseline mb-2">
        <h4 className="text-xl font-serif text-stone">{title}</h4>
      </div>
      <div className="flex justify-between items-center text-xs text-stone/60 uppercase tracking-widest">
        <span>{yarnWeight ?? origin}</span>
        <span>{difficulty}</span>
      </div>
    </Link>
  );
}
