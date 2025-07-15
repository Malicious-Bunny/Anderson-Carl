interface LocalSEOProps {
  businessName?: string;
  description?: string;
  address?: {
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
  phone?: string;
  email?: string;
  website?: string;
  serviceName?: string;
  servicePrice?: {
    min: number;
    max: number;
    currency: string;
  };
}

export default function LocalSEO({
  businessName = "Anderson Carl UK Documents Consultancy",
  description = "Professional UK document consultation services specializing in passports, driver licences, IELTS/PTE certificates, civil documents, and immigration services.",
  address = {
    city: "London",
    region: "England",
    country: "United Kingdom"
  },
  phone = "+44 7940 233536",
  email = "support@andersoncarlconsultancy.uk",
  website = "https://andersoncarlconsultancy.uk",
  serviceName,
  servicePrice = { min: 65, max: 1500, currency: "GBP" }
}: LocalSEOProps) {

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${website}/#business`,
    "name": businessName,
    "alternateName": "Anderson Carl Life in UK Documents Specialist",
    "description": description,
    "url": website,
    "telephone": phone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street || "",
      "addressLocality": address.city || "London",
      "addressRegion": address.region || "England",
      "postalCode": address.postalCode || "",
      "addressCountry": address.country || "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "openingHours": [
      "Mo-Su 00:00-23:59"
    ],
    "priceRange": `£${servicePrice.min}-£${servicePrice.max}`,
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Online Payment"],
    "currenciesAccepted": servicePrice.currency,
    "serviceArea": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "AdministrativeArea",
        "name": "England"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Scotland"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Wales"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Northern Ireland"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UK Documents Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UK Passport Application Service",
            "description": "Professional passport application assistance with 4-day processing time"
          },
          "price": "1500",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UK Driver Licence Service",
            "description": "Driver licence assistance with no test required"
          },
          "price": "65",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IELTS Certificate Service",
            "description": "IELTS certificate processing with no test required"
          },
          "price": "600",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PTE Certificate Service",
            "description": "PTE certificate processing with no test required"
          },
          "price": "620",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UK Death Certificate Service",
            "description": "Death certificate processing with 1-2 working days"
          },
          "price": "1000",
          "priceCurrency": "GBP"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Williams"
        },
        "reviewBody": "Anderson Carl made the entire process smooth and hassle-free. His professional consultation was excellent and very thorough!",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael Johnson"
        },
        "reviewBody": "I was skeptical at first, but Anderson Carl delivered as promised. Highly recommended for UK document assistance!",
        "datePublished": "2024-01-10"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Emma Thompson"
        },
        "reviewBody": "Professional service with clear guidance. Anderson Carl helped me get my documents without any issues or delays.",
        "datePublished": "2024-01-05"
      }
    ],
    "sameAs": [
      website
    ],
    "logo": {
      "@type": "ImageObject",
      "url": `${website}/headshot.jpg`,
      "width": "400",
      "height": "400"
    },
    "image": `${website}/headshot.jpg`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData)
      }}
    />
  );
}
