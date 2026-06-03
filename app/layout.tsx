import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://elevia-agence.com"),
  title: "Elevia Agency — Sites Shopify, vitrines & image de marque | Dès 170€",
  description:
    "Agence web : boutiques Shopify, sites vitrines et identité de marque clé en main. +200 clients accompagnés, 97% satisfaits, 1M+€ générés. Packs dès 170€.",
  keywords: [
    "agence shopify",
    "création site ecommerce",
    "boutique shopify france",
    "elevia agency",
    "création site vitrine",
    "identité visuelle",
    "image de marque",
    "site web professionnel",
  ],
  openGraph: {
    title: "Elevia Agency — Sites Shopify, vitrines & image de marque",
    description:
      "Boutiques Shopify, sites vitrines & branding clé en main. +200 clients, 97% satisfaits, 1M+€ générés.",
    url: "https://elevia-agence.com",
    siteName: "Elevia Agency",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://elevia-agence.com" },
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
              name: "Elevia Agency",
              url: "https://elevia-agence.com",
              logo: "https://elevia-agence.com/images/logo-white.png",
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
