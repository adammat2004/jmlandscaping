import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "../../data/projects";
import { site } from "../../data/site";
import EditorialProject from "../../components/projects/EditorialProject";
import GalleryCaseStudy from "../../components/projects/GalleryCaseStudy";
import ProjectSchema from "../../components/ProjectSchema";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.title} | ${project.location}`;
  const description = project.description[0];
  const url = `${baseUrl}/projects/${project.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `${baseUrl}${project.coverImage.src}`,
          width: 1200,
          height: 630,
          alt: project.coverImage.alt,
        },
      ],
    },
    alternates: { canonical: url },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const category = site.serviceCategories.find((c) => c.slug === project.category);

  return (
    <>
      <BreadcrumbSchema
        items={[
          ...(category ? [{ name: category.name, path: `/${category.slug}` }] : []),
          { name: project.title, path: `/projects/${project.slug}` },
        ]}
      />
      <ProjectSchema project={project} />
      {project.template === "editorial" ? (
        <EditorialProject project={project} />
      ) : (
        <GalleryCaseStudy project={project} />
      )}
    </>
  );
}
