import type { Metadata } from "next";
import { getProjectsByCategory } from "../data/projects";
import CategoryPageTemplate from "../components/CategoryPageTemplate";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";
const title = "Custom Gazebo Design & Installation | Joe Matthews Landscaping & Paving";
const description =
  "Custom gazebo design and installation for outdoor living spaces across Meath, Dublin, and Louth.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${baseUrl}/gazebos` },
  alternates: { canonical: `${baseUrl}/gazebos` },
};

export default function Page() {
  return (
    <CategoryPageTemplate
      title="Gazebos"
      description={description}
      projects={getProjectsByCategory("gazebos")}
      path="/gazebos"
    />
  );
}
