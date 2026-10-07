import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PixelFlux collects, uses, and protects your information when you use our website and contact us.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/privacy`,
    siteName: SITE.name,
    title: "Privacy Policy — PixelFlux",
    description:
      "How PixelFlux collects, uses, and protects your information when you use our website and contact us.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — PixelFlux",
    description:
      "How PixelFlux collects, uses, and protects your information when you use our website and contact us.",
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
      name: "Privacy Policy",
      item: `${SITE.url}/privacy`,
    },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Privacy Policy"
          breadcrumbLabel="Privacy Policy"
          title="Privacy Policy"
        />

        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h2>Introduction</h2>
              <p>
                PixelFlux (&quot;PixelFlux&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;) is a creative
                development startup based in {SITE.address}. This Privacy
                Policy explains what information we collect through{" "}
                <strong>{SITE.url.replace("https://", "")}</strong>, how we
                use it, and the choices you have. It applies to this
                website only — information you share with us as part of a
                client project is governed separately by the project
                agreement we sign with you.
              </p>

              <h2>Information we collect</h2>
              <p>
                When you fill out our contact form, we collect your name,
                email address, and whatever you include about your
                project — including budget, if you choose to share it. We
                don&apos;t require an account to use this website, and we
                don&apos;t collect payment information through it.
              </p>

              <h2>How we use your information</h2>
              <p>
                We use the information you submit to respond to your
                inquiry, scope a potential project, and follow up about
                our services. We don&apos;t sell or rent your information
                to third parties, and we don&apos;t use it for
                advertising.
              </p>

              <h2>Cookies and analytics</h2>
              <p>
                This website may use basic, privacy-respecting analytics to
                understand overall traffic patterns. We don&apos;t use
                third-party advertising trackers.
              </p>

              <h2>Data retention</h2>
              <p>
                We retain contact form submissions for as long as needed to
                respond to your inquiry and for a reasonable period
                afterward for our records. You can request deletion at any
                time by emailing us.
              </p>

              <h2>Your rights</h2>
              <ul>
                <li>Request a copy of the information we hold about you</li>
                <li>Ask us to correct inaccurate information</li>
                <li>Ask us to delete your information</li>
                <li>Withdraw consent for us to contact you</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we
                make material changes, we&apos;ll update this page.
              </p>

              <h2>Contact us</h2>
              <p>
                Questions about this Privacy Policy can be sent to{" "}
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
