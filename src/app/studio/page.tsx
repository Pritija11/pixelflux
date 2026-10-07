import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import PageHeader from "@/components/sections/PageHeader";
import Marquee from "@/components/sections/Marquee";
import ValuesSection from "@/components/sections/ValuesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";
import { stats, industries } from "@/data/work";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "PixelFlux is a creative development startup based in Lalitpur, Nepal — a small, deliberately senior team building motion-driven digital work.",
  keywords: [
    "PixelFlux studio",
    "creative agency Nepal",
    "web design studio Nepal",
    "about PixelFlux",
  ],
  alternates: {
    canonical: "/studio",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/studio`,
    siteName: SITE.name,
    title: "Studio — PixelFlux",
    description:
      "A creative development startup based in Lalitpur, Nepal — small, deliberately senior, motion-driven.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio — PixelFlux",
    description:
      "A creative development startup based in Lalitpur, Nepal — small, deliberately senior, motion-driven.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Studio",
      item: `${SITE.url}/studio`,
    },
  ],
};

const faqItems = [
  {
    question: "Is PixelFlux based in Nepal?",
    answer:
      "Yes. PixelFlux is a creative development startup founded and based in Lalitpur, Nepal, working with clients wherever they're building from.",
  },
  {
    question: "How big is the studio?",
    answer:
      "Small, on purpose. We'd rather turn down a project than staff it with people who aren't senior enough to do it justice. That caps how much we can take on at once — which is the point.",
  },
  {
    question: "Do you only take on big-budget projects?",
    answer:
      "No, but we're honest about fit. A project that needs real craft in motion and interaction is a fit regardless of company size. A project that just needs a fast template site probably isn't — and we'll say so.",
  },
  {
    question: "Who actually works on the project — you, or a subcontractor?",
    answer:
      "The team you talk to during scoping is the team that builds it. We don't subcontract core design or development work out to keep overhead low.",
  },
];

export default function StudioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Studio"
          breadcrumbLabel="Studio"
          title="A small studio, built from Lalitpur"
          description="PixelFlux is a creative development startup. We design and build digital work for brands who want the craft to actually show up in the final build, not just the pitch deck."
          webgl={{ colorA: "#8b5cf6", colorB: "#f472b6", offsetX: 1.6 }}
        />

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <ScrollReveal>
              <div className="stat-strip">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-strip-item">
                    <p className="stat-strip-value">{stat.value}</p>
                    <p className="stat-strip-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Our story</p>
            </div>

            <AnimatedHeading
              as="h2"
              text="Why PixelFlux exists"
              className="section-title"
            />

            <p
              className="section-description"
              style={{ marginTop: "1.5rem", maxWidth: "720px" }}
            >
              Most agency work gets designed by one team and built by
              another — a handoff where the motion, the interaction detail,
              and half the intent gets lost somewhere between Figma and
              production. We started PixelFlux because we were tired of
              watching that happen, from both sides of the handoff.
            </p>

            <p
              className="section-description"
              style={{ marginTop: "1.25rem", maxWidth: "720px" }}
            >
              So the people who design a project are the people who build
              it. It means we take on fewer projects than a larger agency
              would, and it means the ones we do take on come out the way
              they looked in the first good sketch — not a flattened,
              budget-constrained version of it.
            </p>

            <p
              className="section-description"
              style={{ marginTop: "1.25rem", maxWidth: "720px" }}
            >
              We&apos;re based in Lalitpur, Nepal, and work with clients
              wherever they&apos;re building from. Distance has never been
              the hard part — the handoff was.
            </p>

            <div
              className="img-slot"
              style={{
                marginTop: "var(--space-5)",
                aspectRatio: "16 / 7",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--bg-raised)",
                backgroundImage: "url(/images/studio.jpg)",
              }}
              aria-hidden="true"
            />
          </div>
        </section>

        <Marquee items={industries} />

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Who we work with</p>
            </div>

            <AnimatedHeading
              as="h2"
              text="Early-stage founders to established brands"
              className="section-title"
            />

            <p
              className="section-description"
              style={{ marginTop: "1.25rem", maxWidth: "720px" }}
            >
              Company size matters less to us than whether the project
              needs real craft in motion and interaction. A seed-stage
              startup launching a product and an established brand
              refreshing their site can both be the right fit — a quick
              template job usually isn&apos;t, for either of them, and
              we&apos;ll say so before taking your budget.
            </p>
          </div>
        </section>

        <ValuesSection tone="raised" />

        <FAQSection title="Common questions about the studio" items={faqItems} />

        <CTA secondaryHref="/services" secondaryLabel="See what we do" />
      </main>

      <Footer />
    </>
  );
}
