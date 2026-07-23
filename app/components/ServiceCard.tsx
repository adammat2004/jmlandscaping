import Link from "next/link";
import WashedImage from "./ui/WashedImage";

export default function ServiceCard({
  title,
  description,
  href,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <Link href={href} className="group block bg-surface rounded-lg overflow-hidden shadow-[var(--shadow-organic-sm)]">
      <div className="relative aspect-[5/4] overflow-hidden">
        <WashedImage
          src={image}
          alt={imageAlt}
          className="transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="px-5 pt-5 pb-6">
        <h3 className="font-display text-lg text-ink mb-2">{title}</h3>
        <p className="text-sm text-ink/75 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
