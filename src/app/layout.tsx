import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: {
    default: "Anderson Carl - UK Documents Specialist & Life in UK Consultation Services",
    template: "%s | Anderson Carl UK Documents"
  },
  description: "Professional UK document consultation services. Expert assistance with passports, driver licences, IELTS/PTE certificates, civil documents, and immigration services. Fast, reliable, and hassle-free UK document processing with 99% success rate. No tests required for most services.",
  keywords: [
    "UK documents specialist",
    "passport application UK",
    "UK driver licence no test",
    "IELTS certificate UK",
    "PTE certificate UK",
    "UK birth certificate",
    "UK marriage certificate",
    "UK death certificate",
    "visa renewal UK",
    "resident permit UK",
    "Life in UK consultant",
    "Anderson Carl documents",
    "UK immigration services",
    "document consultation UK",
    "UK certificate services"
  ],
  authors: [{ name: "Anderson Carl", url: "https://andersoncarlconsultancy.uk" }],
  creator: "Anderson Carl",
  publisher: "Anderson Carl Consultancy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://andersoncarlconsultancy.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Anderson Carl - UK Documents Specialist & Life in UK Consultation Services",
    description: "Professional UK document consultation services. Expert assistance with passports, driver licences, IELTS/PTE certificates, civil documents, and immigration services. Fast, reliable, and hassle-free UK document processing with 99% success rate.",
    url: 'https://andersoncarlconsultancy.uk',
    siteName: 'Anderson Carl UK Documents',
    images: [
      {
        url: '/headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Anderson Carl - UK Documents Specialist',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anderson Carl - UK Documents Specialist & Life in UK Consultation Services",
    description: "Professional UK document consultation services. Expert assistance with passports, driver licences, IELTS/PTE certificates, civil documents, and immigration services.",
    images: ['/headshot.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here', // Replace with actual verification code
    other: {
      'msvalidate.01': 'bing-verification-code-here', // Replace with actual verification code
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://andersoncarlconsultancy.uk/#business",
        "name": "Anderson Carl UK Documents Consultancy",
        "alternateName": "Anderson Carl Life in UK Documents Specialist",
        "description": "Professional UK document consultation services specializing in passports, driver licences, IELTS/PTE certificates, civil documents, and immigration services.",
        "url": "https://andersoncarlconsultancy.uk",
        "telephone": "+44 7940 233536",
        "email": "support@andersoncarlconsultancy.uk",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "GB",
          "addressRegion": "England"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "51.5074",
          "longitude": "-0.1278"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "priceRange": "£65-£1500",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
        "currenciesAccepted": "GBP",
        "serviceArea": {
          "@type": "Country",
          "name": "United Kingdom"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "United Kingdom"
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
            "reviewBody": "Anderson Carl made the entire process smooth and hassle-free. His professional consultation was excellent and very thorough!"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://andersoncarlconsultancy.uk/#person",
        "name": "Anderson Carl",
        "jobTitle": "UK Documents Specialist",
        "worksFor": {
          "@id": "https://andersoncarlconsultancy.uk/#business"
        },
        "url": "https://andersoncarlconsultancy.uk",
        "image": "https://andersoncarlconsultancy.uk/headshot.jpg",
        "sameAs": [
          "https://andersoncarlconsultancy.uk"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://andersoncarlconsultancy.uk/#website",
        "url": "https://andersoncarlconsultancy.uk",
        "name": "Anderson Carl UK Documents",
        "description": "Professional UK document consultation services",
        "publisher": {
          "@id": "https://andersoncarlconsultancy.uk/#business"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": "https://andersoncarlconsultancy.uk/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en-GB">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://andersoncarlconsultancy.uk" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body>
        <Analytics />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
