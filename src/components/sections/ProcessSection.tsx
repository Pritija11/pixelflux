import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { process } from "@/data/work";

type ProcessSectionProps = {
  tone?: "default" | "raised";
};

export default function ProcessSection({
  tone = "default",
}: ProcessSectionProps) {
  return (
    <section
      className={`section ${tone === "raised" ? "section-raised" : ""}`.trim()}
    >
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">How we work</p>
        </ScrollReveal>

        <AnimatedHeading
          as="h2"
          text="Design, develop, launch — without a handoff in between."
          className="heading-lg section-header"
        />

        <div className="numbered-list">
          {process.map((step, i) => (
            <ScrollReveal
              key={step.number}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
            >
              <div className="numbered-item">
                <span className="numbered-index">{step.number}</span>
                <div>
                  <h3 className="numbered-title">{step.title}</h3>
                  <p className="numbered-text">{step.description}</p>
                  <p
                    className="numbered-text"
                    style={{ marginTop: "0.6rem", fontSize: "0.9rem" }}
                  >
                    {step.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
