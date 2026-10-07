import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { values } from "@/data/work";

type ValuesSectionProps = {
  tone?: "default" | "raised";
};

export default function ValuesSection({
  tone = "default",
}: ValuesSectionProps) {
  return (
    <section
      className={`section ${tone === "raised" ? "section-raised" : ""}`.trim()}
    >
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">What we believe</p>
        </ScrollReveal>

        <AnimatedHeading
          as="h2"
          text="A few things that don't change per project."
          className="heading-lg section-header"
        />

        <div className="value-grid">
          {values.map((value, i) => (
            <ScrollReveal
              key={value.title}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
              className="value-item"
            >
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
