import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import type { FAQItem } from "@/types";

type FAQSectionProps = {
  eyebrow?: string;
  title: string;
  items: FAQItem[];
};

export default function FAQSection({
  eyebrow = "Frequently asked questions",
  title,
  items,
}: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">{eyebrow}</p>
        </ScrollReveal>

        <AnimatedHeading as="h2" text={title} className="heading-lg" />

        <div className="faq-list">
          {items.map((item, i) => (
            <ScrollReveal
              key={item.question}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
            >
              <div className="faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
