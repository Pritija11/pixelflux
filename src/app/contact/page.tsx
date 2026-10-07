import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  InstagramIcon,
  DribbbleIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with PixelFlux, a creative development startup based in Lalitpur, Nepal.",
  keywords: [
    "contact PixelFlux",
    "PixelFlux Lalitpur",
    "hire creative development agency",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/contact`,
    siteName: SITE.name,
    title: "Contact — PixelFlux",
    description:
      "Start a project with PixelFlux, a creative development startup based in Lalitpur, Nepal.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — PixelFlux",
    description:
      "Start a project with PixelFlux, a creative development startup based in Lalitpur, Nepal.",
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
      name: "Contact",
      item: `${SITE.url}/contact`,
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact PixelFlux",
  url: `${SITE.url}/contact`,
  about: {
    "@type": "Organization",
    name: SITE.name,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Patan Dhoka",
      addressLocality: "Lalitpur",
      addressCountry: "NP",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Contact"
          breadcrumbLabel="Contact"
          title="Tell us what you're building"
          description="PixelFlux is a creative development startup based in Lalitpur, Nepal. Send us a message with what you're working on, and someone from the studio will get back to you directly."
        />

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="contact-info-label">Studio</p>
                    <p>{SITE.address}</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="contact-info-label">Phone</p>
                    <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>
                      {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="contact-info-label">Email</p>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <InstagramIcon size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="contact-info-label">Elsewhere</p>
                    <div className="contact-social-row">
                      <span aria-label="Instagram">
                        <InstagramIcon size={18} strokeWidth={1.7} />
                      </span>
                      <span aria-label="Dribbble">
                        <DribbbleIcon size={18} strokeWidth={1.7} />
                      </span>
                      <span aria-label="LinkedIn">
                        <LinkedinIcon size={18} strokeWidth={1.7} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
