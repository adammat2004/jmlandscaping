import Link from "next/link";
import { site } from "../data/site";
import Button from "./ui/Button";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 pt-14 md:pt-16 pb-8">
        <div className="bg-sage-900/40 rounded-[40px] px-6 md:px-14 py-10 md:py-12 mb-12 flex items-center justify-between gap-8 flex-wrap">
          <h2 className="font-display text-2xl md:text-3xl text-white max-w-[24ch]">
            Have a project in mind? Let&rsquo;s talk it through.
          </h2>
          <Button href="/contact">Contact Us</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8">
          <div>
            <span className="block font-display text-xl text-white mb-2">{site.shortName}</span>
            <p className="text-[13.5px] leading-relaxed text-neutral-400 max-w-[34ch] mb-3.5">
              Family-owned landscaping and paving, based in {site.address.locality}, Co.{" "}
              {site.address.region} &mdash; building outdoor spaces across North Leinster for over{" "}
              {site.yearsInBusiness.replace("+", "")} years.
            </p>
            <div className="flex gap-2 flex-wrap">
              {site.credentials.map((credential) => (
                <span
                  key={credential}
                  className="text-[11px] rounded-full border border-neutral-700 text-neutral-200 px-3 py-1"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-wide uppercase text-neutral-400 mb-3.5">Services</h4>
            <div className="flex flex-col gap-2.5">
              {site.serviceCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="text-sm text-neutral-200 hover:text-terracotta-300 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-wide uppercase text-neutral-400 mb-3.5">Get in touch</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/about" className="text-neutral-200 hover:text-terracotta-300 transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-neutral-200 hover:text-terracotta-300 transition-colors">
                Projects
              </Link>
              <a href={site.phoneHref} className="text-neutral-200 hover:text-terracotta-300 transition-colors">
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-neutral-200 hover:text-terracotta-300 transition-colors"
              >
                {site.email}
              </a>
              <span className="text-neutral-400">
                {site.address.street}, Co. {site.address.region}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-neutral-800 text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
