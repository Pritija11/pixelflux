import Link from "next/link";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import AnimatedLines from "@/components/ui/AnimatedLines";
import ParticleCanvas from "@/components/three/ParticleCanvas";

export default function Hero() {
  return (
    <section className="hero">
      <ParticleCanvas rootSelector=".hero" colorA="#8b5cf6" colorB="#22d3ee" />
      <div className="hero-blob" aria-hidden="true" />
      <div className="hero-diagonal d1" aria-hidden="true" />
      <div className="hero-diagonal d2" aria-hidden="true" />

      <div className="container">
        <div className="hero-eyebrow-row">
          <p className="eyebrow">Creative development startup</p>
        </div>

        <AnimatedHeading
          as="h1"
          text="We build things that move."
          className="hero-title"
          emphasisFrom={3}
        />

        <AnimatedLines
          className="hero-description"
          lines={[
            "PixelFlux is a creative development startup —",
            "websites, interactive experiences, and",
            "motion-driven digital work for brands who",
            "want more than a template with their logo on it.",
          ]}
        />

        <div className="hero-actions">
          <Link href="/work" className="btn btn-primary">
            View our work
          </Link>

          <Link href="/contact" className="btn btn-secondary">
            Start a project
          </Link>
        </div>

        <div className="hero-foot">
          <div>
            <p className="hero-foot-label mono">Based in</p>
            <p className="hero-foot-value">Lalitpur, Nepal</p>
          </div>

          <div>
            <p className="hero-foot-label mono">Services</p>
            <p className="hero-foot-value">
              Brand · Web · Interactive · 3D/WebGL
            </p>
          </div>

          <div>
            <p className="hero-foot-label mono">Available</p>
            <p className="hero-foot-value">Q1 2027</p>
          </div>
        </div>
      </div>
    </section>
  );
}
