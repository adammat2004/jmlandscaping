import type { Project } from "../data/projects";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";

export default function ProjectSchema({ project }: { project: Project }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.title}, ${project.location}`,
    description: project.description[0],
    url: `${baseUrl}/projects/${project.slug}`,
    image: [project.coverImage, ...project.gallery].map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${baseUrl}${image.src}`,
      description: image.alt,
    })),
    about: project.services.join(", "),
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
