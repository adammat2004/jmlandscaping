import type { Metadata } from "next";
import { getProjectsByCategory } from "../data/projects";
import CategoryPageTemplate from "../components/CategoryPageTemplate";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";
const title = "Landscaping Services | Joe Matthews Landscaping & Paving";
const description =
  "Professional landscape design and construction for residential and commercial properties across Meath, Dublin, and Louth.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${baseUrl}/landscaping-services` },
  alternates: { canonical: `${baseUrl}/landscaping-services` },
};

export default function Page() {
  return (
    <CategoryPageTemplate
      title="Landscaping Services"
      description={description}
      projects={getProjectsByCategory("landscaping-services")}
      path="/landscaping-services"
    />
  );
}
