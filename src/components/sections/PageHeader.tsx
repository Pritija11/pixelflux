import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ParticleCanvas from "@/components/three/ParticleCanvas";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbLabel: string;
  webgl?: { colorA: string; colorB: string; offsetX?: number };
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbLabel,
  webgl,
}: PageHeaderProps) {
  return (
    <section className="section page-header">
      {webgl && (
        <ParticleCanvas
          rootSelector=".page-header"
          colorA={webgl.colorA}
          colorB={webgl.colorB}
          offsetX={webgl.offsetX}
          maxCount={1100}
        />
      )}

      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{breadcrumbLabel}</span>
        </nav>

        <ScrollReveal>
          <p className="eyebrow">{eyebrow}</p>
        </ScrollReveal>

        <AnimatedHeading
          as="h1"
          text={title}
          className="heading-lg page-header-title"
        />

        {description && (
          <ScrollReveal delay={2}>
            <p className="page-header-description">{description}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
