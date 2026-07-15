import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";

export const runtime = "edge";

export const alt = `${SITE_NAME} — AI growth systems for B2B companies`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function BrandMark({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 188C71.2 188 88 171.2 88 148V118C88 108.5 84.5 99.8 78.5 93.5L48 68L17.5 93.5C11.5 99.8 8 108.5 8 118V148C8 171.2 24.8 188 48 188Z"
        fill="#5C1A06"
        stroke="#000"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M48 118C65.7 118 80 103.7 80 86V62C80 54.2 76.8 46.9 71.5 41.8L48 22L24.5 41.8C19.2 46.9 16 54.2 16 62V86C16 103.7 30.3 118 48 118Z"
        fill="#B8460C"
        stroke="#000"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M48 58C58.5 58 67 49.5 67 39V22C67 16.5 64.5 11.5 60.5 8.2L48 2L35.5 8.2C31.5 11.5 29 16.5 29 22V39C29 49.5 37.5 58 48 58Z"
        fill="#F57600"
        stroke="#000"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
          <BrandMark width={56} height={113} />
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
