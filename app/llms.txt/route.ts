import { site } from "../data/site";
import { getFeaturedProjects } from "../data/projects";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";

export function GET() {
  const featured = getFeaturedProjects();

  const lines = [
    `# ${site.name}`,
    "",
    `${site.name} is a family-owned landscaping and paving company based in ${site.address.street}, Co. ${site.address.region}, Ireland, serving ${site.areasServed.join(", ")} for over ${site.yearsInBusiness} years.`,
    "",
    `- Phone: ${site.phoneDisplay}`,
    `- Email: ${site.email}`,
    `- Hours: ${site.hours.days}, ${site.hours.open}–${site.hours.close}`,
    `- Credentials: ${site.credentials.join(", ")}`,
    "",
    "## Services",
    "",
    ...site.serviceCategories.map((c) => `- ${c.name}: ${baseUrl}/${c.slug}`),
    "",
    "## Representative projects",
    "",
    ...featured.map(
      (p) => `- ${p.title}, ${p.location}: ${baseUrl}/projects/${p.slug}`
    ),
    "",
    `## More`,
    "",
    `- Full project list: ${baseUrl}/projects`,
    `- About: ${baseUrl}/about`,
    `- Contact: ${baseUrl}/contact`,
    `- Sitemap: ${baseUrl}/sitemap.xml`,
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
