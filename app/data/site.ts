// Single source of truth for the business's real contact/identity details.
// Imported by StructuredData.tsx, Footer.tsx, the contact page, and layout.tsx metadata
// so phone/email/address are never typed in more than one place.

export const site = {
  name: "Joe Matthews Landscaping & Paving",
  shortName: "Joe Matthews",
  tagline: "Landscaping & Paving",
  phoneDisplay: "087 250 4960",
  phoneE164: "+353872504960",
  phoneHref: "tel:+353872504960",
  email: "info@jmatthewslandscaping.ie",
  address: {
    street: "Castletown",
    locality: "Castletown",
    region: "Meath",
    country: "Ireland",
    countryCode: "IE",
  },
  geo: {
    latitude: 53.6531,
    longitude: -6.7128,
  },
  areasServed: ["Meath", "Dublin", "Louth", "Cavan", "Westmeath", "Kildare"],
  hours: {
    days: "Monday – Saturday",
    open: "08:00",
    close: "18:00",
  },
  yearsInBusiness: "20+",
  credentials: ["ALCI Accredited Member", "Fully Insured"],
  serviceCategories: [
    { slug: "landscaping-services", name: "Landscaping" },
    { slug: "paving", name: "Paving" },
    { slug: "garden-patios", name: "Patios" },
    { slug: "walling", name: "Walling" },
    { slug: "gazebos", name: "Gazebos" },
    { slug: "waterfeatures", name: "Water Features" },
  ],
} as const;
