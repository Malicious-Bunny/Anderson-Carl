import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://andersoncarlconsultancy.uk${item.href}` })
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      <section className="py-4 bg-gray-50">
        <div className="container">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              {items.map((item, index) => (
                <li key={index} className={index > 0 ? "before:content-['/'] before:mx-2" : ""}>
                  {item.current ? (
                    <span className="text-blue-900 font-semibold" aria-current="page">
                      {item.label}
                    </span>
                  ) : item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-blue-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>
    </>
  );
}
