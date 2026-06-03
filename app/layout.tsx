import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://target-agency-llc.com"),
  title: "Target Agency — Sites Shopify, vitrines & image de marque | Dès 170€",
  description:
    "Agence web : boutiques Shopify, sites vitrines et identité de marque clé en main. +200 clients accompagnés, 97% satisfaits, 1M+€ générés. Packs dès 170€.",
  keywords: [
    "agence shopify",
    "création site ecommerce",
    "boutique shopify france",
    "target agency",
    "création site vitrine",
    "identité visuelle",
    "image de marque",
    "site web professionnel",
  ],
  openGraph: {
    title: "Target Agency — Sites Shopify, vitrines & image de marque",
    description:
      "Boutiques Shopify, sites vitrines & branding clé en main. +200 clients, 97% satisfaits, 1M+€ générés.",
    url: "https://target-agency-llc.com",
    siteName: "Target Agency",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://target-agency-llc.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Target Agency",
              url: "https://target-agency-llc.com",
              logo: "https://target-agency-llc.com/images/logo-target.png",
              description:
                "Agence web spécialisée en boutiques Shopify, sites vitrines et identité de marque clé en main.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-6-88-74-02-42",
                contactType: "customer service",
                availableLanguage: "French",
              },
              sameAs: [
                "https://www.instagram.com/elevia_agence",
                "https://www.snapchat.com/add/elevia_agency",
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <CustomCursor />
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
