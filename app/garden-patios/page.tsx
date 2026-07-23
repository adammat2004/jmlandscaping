import type { Metadata } from "next";
import { getProjectsByCategory } from "../data/projects";
import CategoryPageTemplate from "../components/CategoryPageTemplate";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";
const title = "Patio Design & Installation | Joe Matthews Landscaping & Paving";
const description =
  "Custom patio design and installation using high-quality materials, across Meath, Dublin, and Louth.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${baseUrl}/garden-patios` },
  alternates: { canonical: `${baseUrl}/garden-patios` },
};

export default function Page() {
  return (
    <CategoryPageTemplate
      title="Garden Patios"
      description={description}
      projects={getProjectsByCategory("garden-patios")}
      path="/garden-patios"
    />
  );
}
