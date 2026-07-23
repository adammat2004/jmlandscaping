import type { Metadata } from "next";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";
const title = "Our Projects | Joe Matthews Landscaping & Paving";
const description =
  "Explore real landscaping projects by Joe Matthews Landscaping across Meath, Dublin, and Louth. See our patios, driveways, garden designs, and water features — quality craftsmanship and attention to detail in every project.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${baseUrl}/projects` },
  alternates: { canonical: `${baseUrl}/projects` },
};

export default function Page() {
  return (
    <div className="bg-cream">
      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pt-36 md:pt-44 pb-10 md:pb-14">
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-4 max-w-[20ch]">
          Our Projects
        </h1>
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
