import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelflux.ltd"),

  title: {
    default: "PixelFlux — Creative Development Studio",
    template: "%s — PixelFlux",
  },

  description:
    "PixelFlux is a creative development startup building websites, interactive experiences, and motion-driven digital work for ambitious brands.",

  keywords: [
    "PixelFlux",
    "creative development agency",
    "web design studio",
    "interactive experiences",
    "creative coding",
    "WebGL development",
    "animation studio",
    "digital agency Nepal",
    "brand identity design",
  ],

  applicationName: "PixelFlux",

  authors: [
    {
      name: "PixelFlux",
      url: "https://pixelflux.ltd",
    },
  ],

  creator: "PixelFlux",
  publisher: "PixelFlux",

  category: "Design",

  alternates: {
    canonical: "https://pixelflux.ltd",
  },

  openGraph: {
    type: "website",
    url: "https://pixelflux.ltd",
    siteName: "PixelFlux",
    title: "PixelFlux — Creative Development Studio",
    description:
      "Websites, interactive experiences, and motion-driven digital work for ambitious brands.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "PixelFlux — Creative Development Studio",
    description:
      "Websites, interactive experiences, and motion-driven digital work for ambitious brands.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PixelFlux",
  url: "https://pixelflux.ltd",
  description:
    "PixelFlux is a creative development startup building websites, interactive experiences, and motion-driven digital work for ambitious brands.",
  email: "hello@pixelflux.ltd",
  telephone: "+977 01-5536214",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Patan Dhoka",
    addressLocality: "Lalitpur",
    addressCountry: "NP",
  },
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lalitpur",
      addressCountry: "NP",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PixelFlux",
  url: "https://pixelflux.ltd",
  description: "PixelFlux — Creative Development Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
