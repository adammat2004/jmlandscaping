import Link from "next/link";
import type { Project } from "../../data/projects";
import WashedImage from "../ui/WashedImage";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import Footer from "../Footer";

export default function GalleryCaseStudy({ project }: { project: Project }) {
  return (
    <div className="bg-cream">
      <section className="relative">
        <div className="relative h-[52vh] min-h-[320px] max-h-[460px]">
          <WashedImage
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/15 to-ink/65" />
          <div className="absolute inset-0 max-w-[1280px] mx-auto flex flex-col justify-end px-6 md:px-16 pb-8 md:pb-11">
            <Link href="/projects" className="text-sm text-cream/85 mb-3.5 w-fit">
              &larr; Back to projects
            </Link>
            <h1 className="font-display text-3xl md:text-5xl leading-tight text-white max-w-[20ch]">
              {project.title}
              <span className="block text-lg md:text-2xl font-body font-normal text-cream/90 mt-2">
                {project.location}
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] gap-8 md:gap-14 items-start">
        <aside className="md:sticky md:top-24 flex flex-col gap-5">
          <div className="bg-surface rounded-lg p-5">
            <h3 className="font-display text-lg mb-4">Project details</h3>
            <div className="flex flex-col gap-3.5">
              <div>
                <div className="text-[11px] tracking-wide uppercase text-terracotta-700 font-semibold mb-1">
                  Location
                </div>
                <div className="text-sm font-semibold">{project.location}</div>
              </div>
              <div>
                <div className="text-[11px] tracking-wide uppercase text-terracotta-700 font-semibold mb-1">
                  Services
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.services.map((service) => (
                    <Tag key={service} variant="terracotta">
                      {service}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Button href="/contact" className="w-full">
            Start a project like this
          </Button>
        </aside>

        <div>
          {project.description.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/82 max-w-[68ch] mb-5 last:mb-9">
              {paragraph}
            </p>
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {project.gallery.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] rounded-md overflow-hidden"
              >
                <WashedImage src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>

          {project.extraSections?.map((section) => (
            <div key={section.heading} className="mt-10">
              <h2 className="font-display text-xl mb-4">{section.heading}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {section.images.map((image) => (
                  <div
                    key={image.src}
                    className="relative aspect-[4/3] rounded-md overflow-hidden"
                  >
                    <WashedImage src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-14 md:pb-24">
        <div className="bg-sage-100 rounded-[56px] px-6 md:px-16 py-10 md:py-16 flex items-center justify-between gap-8 flex-wrap">
          <div className="max-w-[44ch]">
            <h2 className="font-display text-2xl md:text-3xl mb-2.5">
              Got a project like this in mind?
            </h2>
            <p className="text-ink/78">
              We&rsquo;ll come out, take a look, and give you honest, free advice.
            </p>
          </div>
          <Button href="/contact">Get a Free Quote</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
