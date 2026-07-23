import type { Metadata } from "next";
import { getProjectsByCategory } from "../data/projects";
import CategoryPageTemplate from "../components/CategoryPageTemplate";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";
const title = "Garden Walling | Joe Matthews Landscaping & Paving";
const description =
  "Professional walling services for garden walls, retaining walls, and boundary walls across Meath, Dublin, and Louth.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${baseUrl}/walling` },
  alternates: { canonical: `${baseUrl}/walling` },
};

export default function Page() {
  return (
    <CategoryPageTemplate
      title="Walling"
      description={description}
      projects={getProjectsByCategory("walling")}
      path="/walling"
    />
  );
}
