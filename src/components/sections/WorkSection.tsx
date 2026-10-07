import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import WorkGrid from "@/components/sections/WorkGrid";

export default function WorkSection() {
  return (
    <section id="work" className="section">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">Selected work</p>
        </ScrollReveal>

        <AnimatedHeading
          as="h2"
          text="A few things we've shipped."
          className="heading-lg section-header"
        />

        <WorkGrid limit={4} />

        <ScrollReveal delay={5}>
          <Link
            href="/work"
            className="btn btn-secondary"
            style={{ marginTop: "var(--space-5)" }}
          >
            See all work
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
