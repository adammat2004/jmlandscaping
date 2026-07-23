import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
import BreadcrumbSchema from "./BreadcrumbSchema";
import ServiceSchema from "./ServiceSchema";

export default function CategoryPageTemplate({
  title,
  description,
  projects,
  path,
}: {
  title: string;
  description: string;
  projects: Project[];
  path: string;
}) {
  return (
    <div className="bg-cream">
      <BreadcrumbSchema items={[{ name: title, path }]} />
      <ServiceSchema name={title} description={description} path={path} />
      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pt-36 md:pt-44 pb-10 md:pb-14">
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-4 max-w-[18ch]">{title}</h1>
        <p className="text-lg text-ink/78 max-w-[60ch]">{description}</p>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
