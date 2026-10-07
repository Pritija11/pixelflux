import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { SITE } from "@/lib/constants";

type CTAProps = {
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTA({
  secondaryHref = "/work",
  secondaryLabel = "See our work",
}: CTAProps) {
  return (
    <section className="section">
      <div className="container cta">
        <ScrollReveal>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Start a project
          </p>
        </ScrollReveal>

        <AnimatedHeading
          as="h2"
          text="Got something worth building well?"
          className="cta-title"
          emphasisFrom={3}
        />

        <ScrollReveal delay={2}>
          <p className="cta-desc">
            Tell us what you&apos;re working on. If it&apos;s a good fit,
            you&apos;ll hear back from the studio directly — not an account
            manager.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="cta-actions">
            <Link href={`mailto:${SITE.email}`} className="btn btn-primary">
              Start a project
            </Link>

            <Link href={secondaryHref} className="btn btn-secondary">
              {secondaryLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
