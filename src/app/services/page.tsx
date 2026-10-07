import type { Metadata } from "next";
import { Check } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { serviceGroups } from "@/data/work";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity, web design, creative development, and launch support — what PixelFlux does, in detail.",
  keywords: [
    "PixelFlux services",
    "creative development services",
    "web design agency services",
    "brand identity design",
    "WebGL development services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    title: "Services — PixelFlux",
    description:
      "Brand identity, web design, creative development, and launch support.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — PixelFlux",
    description:
      "Brand identity, web design, creative development, and launch support.",
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
      name: "Services",
      item: `${SITE.url}/services`,
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: serviceGroups.map((service, i) => ({
    "@type": "Service",
    position: i + 1,
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  })),
};

const faqItems = [
  {
    question: "Do you do branding and development, or just one?",
    answer:
      "Both, and usually together. Most projects start with brand or design work and carry straight into development with the same team, so nothing gets lost translating a static comp into a real build.",
  },
  {
    question: "What does a typical project cost?",
    answer:
      "It depends heavily on scope — a brand + marketing site is a different project than an interactive 3D experience. Tell us what you're building and we'll give you a real number, not a 'starting at' figure that never applies.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes, alongside more established brands. What matters more than company size is whether the project needs real craft — if it's a quick template job, we're probably not the right fit, and we'll tell you that honestly.",
  },
  {
    question: "Can you work with our existing brand and just build the site?",
    answer:
      "Yes. Plenty of projects start at the web design or development stage with a brand already in place. We'll work within your existing system rather than redesigning it unprompted.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes — performance tuning, content updates, feature additions. Some clients need a few hours a month, others want a retainer. We scope it based on what you actually need, not a fixed package.",
  },
];

export default function ServicesPage() {
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
          eyebrow="Services"
          breadcrumbLabel="Services"
          title="What we actually do"
          description="Four disciplines, usually working together rather than handed off between teams. Here's what each one covers."
        />

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="numbered-list">
              {serviceGroups.map((service, i) => (
                <ScrollReveal
                  key={service.slug}
                  delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
                >
                  <div className="numbered-item" id={service.slug}>
                    <span className="numbered-index mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="numbered-title">{service.title}</h3>
                      <p className="numbered-text">{service.description}</p>

                      <ul className="numbered-detail-list">
                        {service.details.map((detail) => (
                          <li key={detail}>
                            <Check size={16} strokeWidth={2} aria-hidden="true" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <ProcessSection tone="raised" />

        <FAQSection title="Common questions about working with us" items={faqItems} />

        <CTA secondaryHref="/work" secondaryLabel="See our work" />
      </main>

      <Footer />
    </>
  );
}
