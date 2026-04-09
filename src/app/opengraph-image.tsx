import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";

export const runtime = "edge";

export const alt = `${SITE_NAME} — AI growth systems for B2B companies`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #f5f5f5 0%, #ebebeb 50%, #fff4ec 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#f15900",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                fill="white"
                stroke="white"
                strokeWidth="0.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#1f1f1f",
              letterSpacing: "-0.02em",
            }}
          >
            blinkive
          </span>
        </div>
        <div
          style={{
            fontSize: 46,
            fontWeight: 700,
            color: "#1f1f1f",
            lineHeight: 1.2,
            maxWidth: 900,
            letterSpacing: "-0.02em",
          }}
        >
          AI growth systems for B2B companies
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#525252",
            maxWidth: 920,
            lineHeight: 1.45,
          }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  );
}
