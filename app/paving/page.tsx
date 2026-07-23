import type { Metadata } from "next";
import { getProjectsByCategory } from "../data/projects";
import CategoryPageTemplate from "../components/CategoryPageTemplate";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";
const title = "Paving Services | Joe Matthews Landscaping & Paving";
const description =
  "Expert paving services for driveways, patios, and garden paths across Meath, Dublin, and Louth.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${baseUrl}/paving` },
  alternates: { canonical: `${baseUrl}/paving` },
};

export default function Page() {
  return (
    <CategoryPageTemplate
      title="Paving"
      description={description}
      projects={getProjectsByCategory("paving")}
      path="/paving"
    />
  );
}
