import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";
import WorkGrid from "@/components/sections/WorkGrid";
import CTA from "@/components/sections/CTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import CoverArt from "@/components/ui/CoverArt";
import { projects } from "@/data/work";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from PixelFlux — brand identity, web design, interactive builds, and 3D/WebGL experiences for startups and brands.",
  keywords: [
    "PixelFlux work",
    "creative agency portfolio",
    "web design case studies",
    "interactive experience design",
    "WebGL portfolio",
  ],
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/work`,
    siteName: SITE.name,
    title: "Work — PixelFlux",
    description:
      "Selected work — brand identity, web design, interactive builds, and 3D/WebGL experiences.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — PixelFlux",
    description:
      "Selected work — brand identity, web design, interactive builds, and 3D/WebGL experiences.",
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
      name: "Work",
      item: `${SITE.url}/work`,
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projects.map((project, i) => ({
    "@type": "CreativeWork",
    position: i + 1,
    name: project.title,
    description: project.description,
  })),
};

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Work"
          breadcrumbLabel="Work"
          title="Selected work"
          description="A handful of the projects we've shipped — spanning brand, web, interactive, and 3D/WebGL work. Filter by discipline, or scroll through all of it below."
          webgl={{ colorA: "#22d3ee", colorB: "#f472b6", offsetX: -1.6 }}
        />

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <WorkGrid withFilters />
          </div>
        </section>

        <section className="section section-raised">
          <div className="container">
            <p className="eyebrow">In detail</p>
            <AnimatedHeading
              as="h2"
              text="Each project, a little closer."
              className="heading-lg section-header"
            />

            <div style={{ marginTop: "var(--space-6)" }}>
              {projects.map((project) => (
                <div className="case-study" key={project.slug} id={project.slug}>
                  <div className="case-study-head">
                    <h3>{project.title}</h3>

                    <div className="case-study-meta mono">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                      <span>{project.timeline}</span>
                    </div>
                  </div>

                  <p className="numbered-text" style={{ maxWidth: "720px" }}>
                    {project.description}
                  </p>

                  <div className="case-study-visual">
                    <CoverArt
                      pattern={project.pattern}
                      colors={project.colors as [string, string]}
                      image={project.image}
                    />
                  </div>

                  <div className="case-study-body">
                    <ScrollReveal delay={1} className="case-study-col">
                      <p className="case-study-col-label mono">Challenge</p>
                      <p>{project.challenge}</p>
                    </ScrollReveal>

                    <ScrollReveal delay={2} className="case-study-col">
                      <p className="case-study-col-label mono">Approach</p>
                      <p>{project.approach}</p>
                    </ScrollReveal>

                    <ScrollReveal delay={3} className="case-study-col">
                      <p className="case-study-col-label mono">Outcome</p>
                      <p>{project.outcome}</p>
                    </ScrollReveal>
                  </div>

                  <div className="case-study-services">
                    {project.services.map((service) => (
                      <span key={service} className="case-study-service-tag">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
