"use client";

import { motion } from "framer-motion";

const CAL_IFRAME_SRC =
  "https://cal.com/blinkive-ai-ehdh3s/1-1-systems-chat-with-blinkive?embed=true&layout=month_view&hideBranding=true&theme=dark";

const CAL_EXTERNAL =
  "https://cal.com/blinkive-ai-ehdh3s/1-1-systems-chat-with-blinkive?overlayCalendar=true";

export default function CTA() {
  return (
    <section id="cta" className="relative border-t border-border/60 bg-background py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm"
        >
          <div className="grid gap-0 md:grid-cols-2 md:gap-0">
            {/* Left column — copy */}
            <div className="flex flex-col justify-center border-b border-border p-8 md:border-b-0 md:border-r md:p-10 lg:p-12">
              <div className="mb-5 inline-flex w-fit items-center justify-center rounded-2xl bg-accent/10 p-3.5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-accent"
                  strokeLinecap="round"
                >
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>

              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Ready to scale with AI?
              </h2>

              <p className="mb-6 text-base leading-relaxed text-muted md:text-lg">
                Book a free systems chat — we&apos;ll map where automation and
                AI can move the needle for your funnel. Pick a time on the
                calendar, or reach out by email.
              </p>

              <p className="mb-2 text-sm font-medium text-foreground">
                Prefer email?
              </p>
              <a
                href="mailto:abubakr@blinkive.com"
                className="mb-6 text-base font-semibold text-accent underline-offset-4 hover:underline"
              >
                abubakr@blinkive.com
              </a>

              <a
                href={CAL_EXTERNAL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
              >
                Open scheduler in a new tab →
              </a>
            </div>

            {/* Right column — Cal.com embed on charcoal */}
            <div className="flex flex-col bg-[#1f1f1f] p-4 sm:p-5 md:p-6 md:pl-5">
              <div
                className="relative isolate w-full overflow-hidden rounded-xl border border-white/10 bg-[#1f1f1f] shadow-inner"
                style={{ minHeight: "min(640px, 85vh)" }}
              >
                <iframe
                  src={CAL_IFRAME_SRC}
                  title="Schedule a call with Blinkive"
                  className="block w-full border-0 bg-[#1f1f1f]"
                  style={{ height: "640px" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
