import ScrollReveal from "@/components/ui/ScrollReveal";
import { quotes } from "@/data/work";

export default function QuotesSection() {
  return (
    <section className="section section-raised">
      <div className="container">
        <p className="eyebrow">What clients say</p>

        <div
          style={{
            display: "grid",
            gap: "var(--space-6)",
            marginTop: "var(--space-5)",
          }}
        >
          {quotes.map((quote, i) => (
            <ScrollReveal
              key={quote.role}
              delay={(((i % 3) + 1) as 1 | 2 | 3)}
            >
              <blockquote className="pull-quote">
                <p className="pull-quote-text">&ldquo;{quote.text}&rdquo;</p>
                <cite className="pull-quote-cite">— {quote.role}</cite>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
