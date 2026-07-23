import type { Metadata } from "next";
import Button from "../components/ui/Button";
import Footer from "../components/Footer";
import { site } from "../data/site";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";
const title = "About Joe Matthews Landscaping & Paving";
const description =
  "Learn about Joe Matthews Landscaping, a trusted landscaping business serving Meath, Dublin, and Louth. With years of experience in landscaping, we provide professional, high-quality services like patios, garden design, and more.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${baseUrl}/about` },
  alternates: { canonical: `${baseUrl}/about` },
};

const features = [
  {
    title: "Professionalism & attention to detail",
    body: "We pride ourselves on our professionalism, reliability, and attention to detail on every project we take on.",
  },
  {
    title: "Quality materials, insured team",
    body: "We source high-quality materials from leading Irish and international manufacturers, and our team is fully qualified and insured.",
  },
  {
    title: "Competitive, honest pricing",
    body: "We deliver results that exceed expectations while maintaining competitive, straightforward pricing.",
  },
];

const serviceGroups = [
  {
    title: "Domestic Landscaping",
    body: "From garden design and planting to patio and driveway installations, we transform outdoor spaces into functional and beautiful areas for relaxation and entertainment.",
  },
  {
    title: "Commercial Landscaping",
    body: "We provide landscaping solutions for businesses, public spaces, and local authorities, enhancing the aesthetic appeal and functionality of commercial properties.",
  },
  {
    title: "Patios & Paving",
    body: "Specialising in brick paving, natural stone paving, and timber decking, we create durable and stylish outdoor surfaces that complement your property's design.",
  },
];

export default function Page() {
  return (
    <div className="bg-cream">
      <section className="relative">
        <div className="relative h-[min(46vh,420px)] min-h-[280px]">
          <img src="/patio3/IMG_8576.jpg" alt="Circular granite patio built by Joe Matthews" className="washed w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/25 to-ink/65" />
          <div className="absolute inset-0 max-w-[1280px] mx-auto flex flex-col justify-end px-6 md:px-16 pb-8 md:pb-12">
            <span className="text-[13px] tracking-wide uppercase font-semibold text-terracotta-200 mb-3.5">
              About us
            </span>
            <h1 className="font-display text-4xl md:text-6xl leading-tight text-white max-w-[18ch]">
              {site.yearsInBusiness} years of building outdoors, together
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-10 md:py-20">
        <span className="block text-[13px] tracking-wide uppercase font-semibold text-terracotta-700 mb-3.5">
          Our story
        </span>
        <h2 className="font-display text-3xl md:text-4xl leading-tight mb-5 max-w-[30ch]">
          Established over two decades ago in Castletown
        </h2>
        <div className="max-w-[70ch] flex flex-col gap-4">
          <p className="text-base md:text-lg leading-relaxed text-ink/82">
            Established over two decades ago, Joe Matthews Landscaping &amp; Paving has become a trusted name in
            landscape design and construction throughout Meath, Dublin, Kildare, Louth, and Cavan. Based in{" "}
            {site.address.street}, Co. {site.address.region}, our family-owned business has built a reputation for
            delivering high-quality, bespoke landscaping solutions for both residential and commercial clients.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-ink/82">
            Our commitment to excellence is reflected in our membership with the Association of Landscape
            Contractors of Ireland (ALCI), ensuring that every project meets the highest industry standards.
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-14 md:pb-20">
        <span className="block text-[13px] tracking-wide uppercase font-semibold text-terracotta-700 mb-6">
          Why choose us
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="w-11 h-11 rounded-full bg-terracotta-100 text-terracotta-700 grid place-items-center mb-4 font-display">
                &#10003;
              </div>
              <h3 className="font-display text-xl mb-2.5">{feature.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink/78">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-14 md:pb-20">
        <div className="bg-surface rounded-[calc(var(--radius-lg)*1.15)] px-6 md:px-12 py-9 md:py-11">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            <div>
              <div className="font-display text-3xl text-terracotta-700">{site.yearsInBusiness}</div>
              <div className="text-[13px] text-ink/70 mt-1">Years in business</div>
            </div>
            <div>
              <div className="font-display text-2xl text-terracotta-700">ALCI</div>
              <div className="text-[13px] text-ink/70 mt-1">Accredited member</div>
            </div>
            <div>
              <div className="font-display text-2xl text-terracotta-700">Fully</div>
              <div className="text-[13px] text-ink/70 mt-1">Insured &amp; qualified</div>
            </div>
            <div>
              <div className="font-display text-2xl text-terracotta-700">100%</div>
              <div className="text-[13px] text-ink/70 mt-1">Irish-owned</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-14 md:pb-20">
        <span className="block text-[13px] tracking-wide uppercase font-semibold text-terracotta-700 mb-6">
          Our services
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {serviceGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-xl mb-2.5">{group.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink/78">{group.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 pb-16 md:pb-24">
        <div className="bg-sage-100 rounded-[56px] px-6 md:px-16 py-10 md:py-16 flex items-center justify-between gap-8 flex-wrap">
          <div className="max-w-[44ch]">
            <h2 className="font-display text-2xl md:text-3xl mb-2.5">Let&rsquo;s talk about your garden</h2>
            <p className="text-ink/78">
              Whatever the size of the project, we&rsquo;re happy to come out and give honest, free advice.
            </p>
          </div>
          <Button href="/contact">Get in touch</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
