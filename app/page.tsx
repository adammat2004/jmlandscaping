import Link from "next/link";
import type { Metadata } from "next";
import ScrollingBackground from "./components/ScrollingBackground";
import ServiceCard from "./components/ServiceCard";
import Button from "./components/ui/Button";
import Tag from "./components/ui/Tag";
import Footer from "./components/Footer";
import { site } from "./data/site";
import { getProjectBySlug } from "./data/projects";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";
const title = "Joe Matthews Landscaping & Paving | Professional Landscaping Services in Meath, Dublin & Louth";
const description =
  "Joe Matthews Landscaping & Paving is a family-owned landscaping company based in Castletown, Co. Meath, Ireland. We specialize in landscape design and construction for both residential and commercial clients, offering services such as garden design, paving, patios, walling, gazebos, and water features in Meath, Dublin, Cavan, Louth, and Westmeath.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: baseUrl },
  alternates: { canonical: baseUrl },
};

const services = [
  {
    title: "Landscaping",
    description: "Garden design, planting and lawns for spaces that grow with your family.",
    href: "/landscaping-services",
    image: "/domestic_4.jpg",
    imageAlt: "Landscaped garden with structured planting",
  },
  {
    title: "Paving",
    description: "Driveways and paths in natural stone, granite setts and block paving.",
    href: "/paving",
    image: "/mainImages/mainpaving.jpg",
    imageAlt: "Granite driveway paving at a modern home",
  },
  {
    title: "Patios",
    description: "Granite, porcelain and natural stone patios built for Irish weather.",
    href: "/garden-patios",
    image: "/patio3/IMG_8576.jpg",
    imageAlt: "Circular granite patio surrounded by planting",
  },
  {
    title: "Walling",
    description: "Retaining walls, boundary walling and fencing, built to last.",
    href: "/walling",
    image: "/walling2/IMG-1259.jpg",
    imageAlt: "Stone walling and fencing project",
  },
  {
    title: "Gazebos",
    description: "Bespoke gazebos and outdoor kitchens for entertaining, whatever the weather.",
    href: "/gazebos",
    image: "/ourgazebo/IMG_8691.jpg",
    imageAlt: "Custom timber gazebo with paving and landscaping",
  },
  {
    title: "Water Features",
    description: "Ponds and waterfalls that bring a garden to life.",
    href: "/waterfeatures",
    image: "/waterfall2/mainimage.jpg",
    imageAlt: "Sandstone waterfall garden feature",
  },
];

const trustPoints = [
  "20+ years serving North Leinster",
  "ALCI accredited contractor",
  "Fully insured & qualified team",
  "Family-owned & fully Irish",
];

export default function Home() {
  const flagship = getProjectBySlug("full-outdoor-transformation-collinstown");

  return (
    <div className="bg-cream">
      <section className="relative">
        <ScrollingBackground />
        <div className="absolute inset-0 max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col justify-end pb-10 md:pb-20">
          <span className="text-[13px] tracking-wide uppercase font-semibold text-terracotta-200 mb-4">
            {site.address.locality}, Co. {site.address.region}
          </span>
          <h1 className="font-display text-4xl md:text-6xl leading-tight text-white max-w-[16ch]">
            Outdoor spaces built to feel like home.
          </h1>
          <p className="text-lg text-white/88 max-w-[56ch] mt-5">
            A family-run landscaping and paving company serving {site.areasServed.slice(0, -1).join(", ")} and{" "}
            {site.areasServed[site.areasServed.length - 1]} for over {site.yearsInBusiness} years &mdash; from the
            first sketch to the last stone laid.
          </p>
          <div className="flex gap-3.5 flex-wrap mt-8">
            <Button href="/contact">Get a Free Quote</Button>
            <Button href="#services" variant="secondary" className="!border-white/40 !text-white">
              See Our Services
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-9 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {trustPoints.map((point) => (
          <div key={point} className="flex items-center gap-3">
            <span className="w-10 h-10 shrink-0 rounded-full bg-terracotta-100 text-terracotta-700 grid place-items-center">
              &#10003;
            </span>
            <span className="text-sm font-semibold leading-tight">{point}</span>
          </div>
        ))}
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
        <div className="washed rounded-[calc(var(--radius-lg)*1.15)] overflow-hidden order-2 md:order-1 relative aspect-[4/5]">
          <img src="/dunshauglingazebo/IMG_5111(1).jpg" alt="Granite patio and planting built by Joe Matthews Landscaping & Paving" className="w-full h-full object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <span className="block text-[13px] tracking-wide uppercase font-semibold text-terracotta-700 mb-3.5">
            Our story
          </span>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4.5">
            A garden design &amp; build company, still in the family
          </h2>
          <p className="text-base leading-relaxed text-ink/82 mb-4">
            Joe Matthews Landscaping &amp; Paving specialise in landscape and garden design as well as patio and
            paving for both private and commercial clients throughout Ireland. We have been satisfying the needs of
            our individual clientele across North Leinster for over 20 years.
          </p>
          <p className="text-base leading-relaxed text-ink/82 mb-6">
            From intimate urban courtyards to expansive rural estates, our team approaches each project with
            sensitivity to its context and a passion for craftsmanship &mdash; blending natural beauty with
            functional design to elevate outdoor living across Ireland.
          </p>
          <Button href="/about" variant="secondary">
            More about us
          </Button>
        </div>
      </section>

      <section id="services" className="max-w-[1280px] mx-auto px-6 md:px-16 py-6 md:py-10 pb-14 md:pb-20">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-9 md:mb-11">
          <div>
            <span className="block text-[13px] tracking-wide uppercase font-semibold text-terracotta-700 mb-3.5">
              What we do
            </span>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Design and build, from the ground up
            </h2>
            <p className="text-base text-ink/82 mt-3 max-w-[48ch]">
              Landscaping, paving and outdoor structures across North Leinster.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-terracotta-700 hover:text-terracotta-800 underline-offset-4 hover:underline shrink-0"
          >
            View projects
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </section>

      {flagship && (
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-14 md:pb-20">
          <Link
            href={`/projects/${flagship.slug}`}
            className="washed relative block rounded-[calc(var(--radius-lg)*1.15)] overflow-hidden h-[min(56vh,520px)]"
          >
            <img src={flagship.coverImage.src} alt={flagship.coverImage.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
            <div className="absolute left-0 right-0 bottom-0 p-6 md:p-9">
              <span className="block text-xs tracking-wide uppercase font-semibold text-white/85 mb-2">
                Recently completed
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-white">
                {flagship.title}, {flagship.location}
              </h3>
            </div>
          </Link>
        </section>
      )}

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-14 md:pb-20 text-center">
        <span className="block text-[13px] tracking-wide uppercase font-semibold text-sage-700 mb-4">
          Where we work
        </span>
        <div className="flex gap-2.5 flex-wrap justify-center">
          {site.areasServed.map((area) => (
            <Tag key={area} variant="sage" className="!text-[13px] !px-4.5 !py-2">
              {area}
            </Tag>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-16 md:pb-24">
        <div className="bg-sage-100 rounded-[56px] px-6 md:px-16 py-10 md:py-16 flex items-center justify-between gap-8 flex-wrap">
          <div className="max-w-[44ch]">
            <h2 className="font-display text-2xl md:text-3xl mb-2.5">Have a project in mind?</h2>
            <p className="text-ink/78">
              Get in touch for a free, no-obligation consultation &mdash; we&rsquo;ll come out, take a look, and talk
              through what&rsquo;s possible.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <a href={site.phoneHref} className="flex items-center gap-2 text-base font-semibold text-ink">
              {site.phoneDisplay}
            </a>
            <Button href="/contact">Request a Quote</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
