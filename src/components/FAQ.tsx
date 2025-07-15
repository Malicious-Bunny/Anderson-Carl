'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  items: FAQItem[]
  serviceType?: string
}

export default function FAQ({ title = "Frequently Asked Questions", items, serviceType }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <section className="py-16 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {title}
            </h2>
            {serviceType && (
              <p className="text-xl text-gray-600">
                Common questions about {serviceType} services
              </p>
            )}
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <span className="text-blue-900 text-xl font-bold flex-shrink-0">
                    {openItems.includes(index) ? '−' : '+'}
                  </span>
                </button>
                {openItems.includes(index) && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-4"
                  >
                    <div className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our expert team is here to help you with personalized consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block"
                >
                  Get Free Consultation
                </a>
                <a
                  href={`https://wa.me/447940233536?text=Hello, I have questions about ${serviceType || 'your services'}`}
                  className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
