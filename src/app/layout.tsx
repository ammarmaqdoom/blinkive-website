import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

import {
  CONTACT_EMAIL,
  DEFAULT_TITLE,
  OG_IMAGE_CACHE_KEY,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SITE_TAGLINE,
} from "@/lib/site-config";

const ogImagePath = `/opengraph-image?${OG_IMAGE_CACHE_KEY}`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const keywords = [
  "B2B lead generation",
  "AI automation agency",
  "sales automation",
  "RevOps",
  "cold email automation",
  "AI outreach",
  "B2B growth systems",
  "CRM automation",
  "n8n Make automation",
  "outbound sales",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [
      {
        url: "/apple-touch-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: SITE_TAGLINE,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — AI growth systems for B2B`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE_TAGLINE,
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "business",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  email: CONTACT_EMAIL,
  logo: `${SITE_URL}/icon.svg`,
  sameAs: [] as string[],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
