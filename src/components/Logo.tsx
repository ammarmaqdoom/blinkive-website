import Image from "next/image";

const LOGO_SRC = "/brand/blinkive-mark.svg";

/** Intrinsic mark ratio from blinkive-mark.svg viewBox (312.63 × 608.98) */
const MARK_ASPECT = 312.63 / 608.98;

type LogoProps = {
  size?: "sm" | "md";
  showWordmark?: boolean;
};

const sizes = {
  sm: { height: 28, wordmark: "text-base" },
  md: { height: 36, wordmark: "text-lg" },
} as const;

export default function Logo({ size = "md", showWordmark = true }: LogoProps) {
  const { height, wordmark } = sizes[size];
  const width = Math.round(height * MARK_ASPECT);

  return (
    <a href="#" className="flex items-center gap-2.5">
      <Image
        src={LOGO_SRC}
        alt="Blinkive"
        width={width}
        height={height}
        className="shrink-0"
        style={{ height, width: "auto" }}
        priority
      />
      {showWordmark && (
        <span className={`${wordmark} font-bold tracking-tight text-foreground`}>
          blinkive
        </span>
      )}
    </a>
  );
}

export { LOGO_SRC };
