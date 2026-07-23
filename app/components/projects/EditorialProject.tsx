import Link from "next/link";
import type { Project } from "../../data/projects";
import WashedImage from "../ui/WashedImage";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import Footer from "../Footer";

export default function EditorialProject({ project }: { project: Project }) {
  const [leadImages, restImages] = [project.gallery.slice(0, 2), project.gallery.slice(2)];

  return (
    <div className="bg-cream">
      <section className="relative">
        <div className="relative h-[min(86vh,720px)] min-h-[440px]">
          <WashedImage src={project.coverImage.src} alt={project.coverImage.alt} sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/15 to-ink/70" />
          <div className="absolute inset-0 max-w-[1100px] mx-auto flex flex-col justify-end px-6 md:px-16 pb-9 md:pb-14">
            <Link href="/projects" className="text-sm text-cream/85 mb-3.5 w-fit">
              &larr; Back to projects
            </Link>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.services.map((service) => (
                <Tag key={service} variant="outline" className="!border-cream/50 !text-cream">
                  {service}
                </Tag>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.1] text-white max-w-[18ch]">
              {project.title}
            </h1>
            <p className="text-cream/90 mt-3 text-lg">{project.location}</p>
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-6 md:px-16 py-10 md:py-16">
        <span className="block text-[13px] tracking-wide uppercase font-semibold text-terracotta-700 mb-3">
          The brief
        </span>
        {project.description.map((paragraph, i) => (
          <p
            key={i}
            className={`leading-relaxed text-ink/85 max-w-[64ch] mb-4 last:mb-0 ${
              i === 0 ? "text-xl md:text-2xl font-display" : "text-lg"
            }`}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {project.video && (
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-14 md:pb-20">
          <video
            src={project.video.src}
            controls
            loop
            className="w-full rounded-[calc(var(--radius-lg)*1.15)] shadow-[var(--shadow-organic-lg)] max-h-[70vh] object-cover"
          />
        </section>
      )}

      <section className="max-w-[1100px] mx-auto px-6 md:px-16 flex flex-col gap-14 md:gap-24 pb-14 md:pb-24">
        {leadImages.map((image, i) => (
          <div
            key={image.src}
            className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-14 items-center"
          >
            <div
              className={`washed rounded-[calc(var(--radius-lg)*1.15)] overflow-hidden relative aspect-[4/5] md:aspect-[6/7] ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <WashedImage src={image.src} alt={image.alt} />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <span className="block font-display text-terracotta-300 text-4xl md:text-5xl mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg md:text-xl leading-relaxed text-ink/85 max-w-[36ch]">{image.alt}</p>
            </div>
          </div>
        ))}
      </section>

      {restImages.length > 0 && (
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-14 md:pb-24">
          <span className="block text-[13px] tracking-wide uppercase font-semibold text-terracotta-700 mb-6">
            More from this project
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {restImages.map((image) => (
              <div
                key={image.src}
                className="washed rounded-lg overflow-hidden relative aspect-[4/3]"
              >
                <WashedImage src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-16 md:pb-24">
        <div className="bg-sage-100 rounded-[56px] px-6 md:px-16 py-10 md:py-16 flex items-center justify-between gap-8 flex-wrap">
          <div className="max-w-[44ch]">
            <h2 className="font-display text-2xl md:text-3xl mb-2.5">
              Planning something similar?
            </h2>
            <p className="text-ink/78">
              We&rsquo;d be glad to walk the site and talk through what&rsquo;s possible &mdash; free, no obligation.
            </p>
          </div>
          <Button href="/contact">Get a Free Quote</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
