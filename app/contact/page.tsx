import type { Metadata } from "next";
import ContactForm from "./contactform";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joematthewslandscaping.com";
const title = "Contact Joe Matthews Landscaping & Paving";
const description =
  "Get in touch with Joe Matthews Landscaping for expert landscaping services in Meath, Dublin, Westmeath, Cavan and Louth. Reach out for a free consultation on patios, driveways, garden design, and more.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${baseUrl}/contact` },
  alternates: { canonical: `${baseUrl}/contact` },
};

export default function Page() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
