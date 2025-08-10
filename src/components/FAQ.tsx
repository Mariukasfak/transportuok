import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  /** If true, do not emit FAQPage JSON-LD (useful when page already injects it) */
  suppressSchema?: boolean;
  /** Strip HTML tags from answers in structured data (keeps visual HTML). Default true. */
  sanitizeAnswers?: boolean;
}

const FAQ: React.FC<FAQProps> = ({
  items,
  title = "Dažniausiai užduodami klausimai",
  suppressSchema = false,
  sanitizeAnswers = true
}) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const stripTags = (html: string) => html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const structuredData = !suppressSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        // Use sanitized text for JSON-LD to avoid embedding raw HTML
        "text": sanitizeAnswers ? stripTags(item.answer) : item.answer
      }
    }))
  } : null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!suppressSchema && structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}

        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg pr-8">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-green-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-green-600 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div
                  className="px-6 pb-4 prose prose-green max-w-none"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;