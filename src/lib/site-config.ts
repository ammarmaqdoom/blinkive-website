/**
 * Public site URL for metadata, sitemap, and structured data.
 * Set NEXT_PUBLIC_SITE_URL in env when the production domain differs.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://blinkive.com";

export const SITE_NAME = "Blinkive";

/** Primary meta description (~155 chars for SERPs) */
export const SITE_DESCRIPTION =
  "Blinkive builds AI-powered growth systems for B2B: lead gen, sales automation, RevOps & custom workflows. Scale revenue without extra headcount. Book a free systems chat.";

export const DEFAULT_TITLE = `${SITE_NAME} | AI Growth Systems for B2B Companies`;

/** Shorter line for Open Graph / sharing */
export const SITE_TAGLINE =
  "Lead generation, sales automation, and RevOps powered by AI—built for B2B teams ready to scale.";

export const CONTACT_EMAIL = "abubakr@blinkive.com";
