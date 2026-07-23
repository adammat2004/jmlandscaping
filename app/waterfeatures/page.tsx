import type { Metadata } from "next";
import { getProjectsByCategory } from "../data/projects";
import CategoryPageTemplate from "../components/CategoryPageTemplate";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";
const title = "Water Features & Garden Ponds | Joe Matthews Landscaping & Paving";
const description =
  "Design and installation of water features including ponds, waterfalls, and streams across Meath, Dublin, and Louth.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${baseUrl}/waterfeatures` },
  alternates: { canonical: `${baseUrl}/waterfeatures` },
};

export default function Page() {
  return (
    <CategoryPageTemplate
      title="Water Features"
      description={description}
      projects={getProjectsByCategory("waterfeatures")}
      path="/waterfeatures"
    />
  );
}
