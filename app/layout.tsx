import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ehheducation.com";
const siteName = "Ecole Hôtelière Helvétique (EHH)";
const title =
  "Ecole Hôtelière Helvétique (EHH) - Shaping Tomorrow's Global Hospitality Leaders";
const description =
  "Swiss-inspired hospitality and culinary academy in Dubai, UAE. Real-world training with MAF Accor Hotels and Resorts. 70% practical, 30% academic excellence.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "hospitality management",
    "culinary arts",
    "Dubai hospitality school",
    "Swiss hospitality education",
    "hotel management Dubai",
    "culinary school UAE",
    "MAF Accor training",
    "hospitality career Dubai",
    "hospitality degree UAE",
    "culinary arts program",
    "hospitality business program",
    "real-world hospitality training",
    "Dubai culinary academy",
    "hospitality education Dubai",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: `${baseUrl}/main-logo-new.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${baseUrl}/main-logo-new.png`],
    creator: "@ehheducation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || null;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://ehheducation.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Ecole Hôtelière Helvétique (EHH)",
    alternateName: "EHH",
    description:
      "Swiss-inspired hospitality and culinary academy in Dubai, UAE. Real-world training with MAF Accor Hotels and Resorts.",
    url: baseUrl,
    logo: `${baseUrl}/main-logo-new.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Science Park - Al Barsha South",
      addressLocality: "Dubai",
      addressCountry: "AE",
      postalCode: "345025",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971-50-101-6067",
      contactType: "Admissions",
      email: "info@ehheducation.com",
      areaServed: "AE",
      availableLanguage: ["English", "French"],
    },
    sameAs: [
      "https://www.facebook.com/ecolehotelierehelvetique",
      "https://www.linkedin.com/company/ecole-hoteliere-helvetique/",
      "https://www.instagram.com/ehheducation/",
      "https://www.youtube.com/channel/UC_60J4DAFPrzJ3QczG5cOOg",
    ],
    offers: {
      "@type": "Offer",
      category: "Education",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
