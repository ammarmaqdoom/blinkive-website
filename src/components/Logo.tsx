import Image from "next/image";

const LOGO_SRC = "/brand/blinkive-mark.svg";

type LogoProps = {
  size?: "sm" | "md";
  showWordmark?: boolean;
};

const sizes = {
  sm: { height: 28, wordmark: "text-lg" },
  md: { height: 36, wordmark: "text-lg" },
} as const;

export default function Logo({ size = "md", showWordmark = true }: LogoProps) {
  const { height, wordmark } = sizes[size];
  const width = Math.round(height / 2.02);

  return (
    <a href="#" className="flex items-center gap-2.5">
      <Image
        src={LOGO_SRC}
        alt="Blinkive"
        width={width}
        height={height}
        className="h-auto w-auto shrink-0"
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
