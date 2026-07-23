import Link from "next/link";
import type { Project } from "../data/projects";
import WashedImage from "./ui/WashedImage";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[5/4] rounded-lg overflow-hidden shadow-[var(--shadow-organic-sm)]">
        <WashedImage
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          className="transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-lg text-ink">{project.title}</h3>
        <p className="text-sm text-ink/70 mt-1">{project.location}</p>
      </div>
    </Link>
  );
}
