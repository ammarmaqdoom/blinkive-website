"use client";

import { motion } from "framer-motion";

const tools: { name: string; file: string }[] = [
  { name: "Instantly.ai", file: "instantly.svg" },
  { name: "n8n", file: "n8n.png" },
  { name: "Make", file: "make.png" },
  { name: "Apify", file: "apify.svg" },
  { name: "Clay", file: "clay.webp" },
  { name: "Apollo", file: "apollo.png" },
  { name: "LinkedIn Sales Navigator", file: "linkedin-sales.png" },
  { name: "PlusVibe.ai", file: "plusvibe.svg" },
];

function ToolLogo({ tool }: { tool: (typeof tools)[number] }) {
  const src = `/tools/${tool.file}`;

  return (
    <div className="flex h-14 w-[152px] shrink-0 items-center justify-center px-3 sm:h-16 sm:w-[168px] sm:px-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={160}
        height={40}
        className="h-8 w-auto max-h-8 max-w-[140px] object-contain object-center sm:h-9 sm:max-h-9 sm:max-w-[152px]"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function ToolStack() {
  const row = [...tools, ...tools, ...tools];

  return (
    <section className="relative border-y border-border/60 bg-surface py-14">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted"
        >
          Our Tech Stack — Tools We Use
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-surface to-transparent" />

          <div className="animate-marquee flex w-max items-center gap-3 sm:gap-4">
            {row.map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="flex shrink-0 items-center rounded-2xl border border-border/60 bg-background px-1 py-1 shadow-sm transition-colors hover:border-accent/25"
                title={tool.name}
              >
                <ToolLogo tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
