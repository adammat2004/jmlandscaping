export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://joematthewslandscaping.com';

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Joe Matthews Landscaping & Paving",
    "image": `${baseUrl}/newjob/pic_2.jpg`,
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": "+353872504960",
    "email": "info@jmatthewslandscaping.ie",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Castletown Kilpatrick",
      "addressLocality": "Castletown",
      "addressRegion": "Meath",
      "addressCountry": "IE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.6531",
      "longitude": "-6.7128"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Meath"
      },
      {
        "@type": "City",
        "name": "Dublin"
      },
      {
        "@type": "City",
        "name": "Louth"
      },
      {
        "@type": "City",
        "name": "Cavan"
      },
      {
        "@type": "City",
        "name": "Westmeath"
      },
      {
        "@type": "City",
        "name": "Kildare"
      }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Landscaping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscaping Services",
            "description": "Professional landscape design and construction for residential and commercial properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paving Services",
            "description": "Expert paving services for driveways, patios, and garden paths"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Patio Design & Installation",
            "description": "Custom patio design and installation using high-quality materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garden Walling",
            "description": "Professional walling services for garden walls, retaining walls, and boundary walls"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gazebo Design & Installation",
            "description": "Custom gazebo design and installation for outdoor living spaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Features",
            "description": "Design and installation of water features including ponds, waterfalls, and streams"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
