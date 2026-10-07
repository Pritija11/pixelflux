import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the PixelFlux website and our client project engagements.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/terms`,
    siteName: SITE.name,
    title: "Terms of Service — PixelFlux",
    description:
      "The terms that govern your use of the PixelFlux website and our client project engagements.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — PixelFlux",
    description:
      "The terms that govern your use of the PixelFlux website and our client project engagements.",
  },
  robots: {
    index: true,
    follow: true,
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
      name: "Terms of Service",
      item: `${SITE.url}/terms`,
    },
  ],
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Terms of Service"
          breadcrumbLabel="Terms of Service"
          title="Terms of Service"
        />

        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h2>Agreement</h2>
              <p>
                These Terms of Service govern your use of{" "}
                <strong>{SITE.url.replace("https://", "")}</strong>,
                operated by PixelFlux (&quot;PixelFlux&quot;,
                &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By
                using this website, you agree to these terms. They cover
                the website only — client projects are governed by a
                separate signed project agreement covering scope,
                deliverables, and payment.
              </p>

              <h2>Use of this website</h2>
              <p>
                This website describes PixelFlux and provides a way to
                contact us. You agree not to misuse it — for example, by
                attempting to disrupt it, scrape it at scale, or submit
                false information through our contact form.
              </p>

              <h2>No guarantee from website content</h2>
              <p>
                Descriptions of our work and services on this website are
                for informational purposes. They don&apos;t constitute a
                contractual commitment — actual scope, timeline, and
                pricing for a project are set out in a separate signed
                agreement before work begins.
              </p>

              <h2>Intellectual property</h2>
              <p>
                The content on this website — including text, visuals, and
                the PixelFlux name and mark — belongs to PixelFlux and may
                not be reproduced without permission. Work shown in our
                portfolio remains subject to the terms of the original
                client agreement.
              </p>

              <h2>Limitation of liability</h2>
              <p>
                This website and its content are provided &quot;as
                is.&quot; To the extent permitted by law, PixelFlux is not
                liable for indirect or consequential damages arising from
                your use of this website. This does not limit liability
                under a signed project agreement, which is governed by its
                own terms.
              </p>

              <h2>Changes to these terms</h2>
              <p>
                We may update these Terms of Service from time to time. If
                we make material changes, we&apos;ll update this page.
              </p>

              <h2>Contact us</h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
