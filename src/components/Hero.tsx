"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Decorative grid background */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-[100px]" />
        <div className="absolute -bottom-32 left-1/4 h-[400px] w-[400px] rounded-full bg-green-400/[0.05] blur-[100px]" />
      </div>

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-32 left-[10%] h-3 w-3 rounded-full bg-accent/20" />
        <div className="animate-float-delay absolute top-48 right-[15%] h-2 w-2 rounded-full bg-accent/30" />
        <div className="animate-float-delay-2 absolute bottom-40 left-[20%] h-4 w-4 rounded-sm bg-accent/10 rotate-45" />
        <div className="animate-float absolute bottom-32 right-[25%] h-2.5 w-2.5 rounded-full bg-green-400/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-soft/60 px-4 py-1.5 text-sm font-medium text-accent shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          AI-Powered Growth Systems
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-7xl lg:text-[5.25rem]"
        >
          Growth systems for{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            B2B companies
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          Blinkive empowers B2B companies to scale faster using automation and
          AI, without adding any additional headcount. We turn AI into revenue
          for businesses like yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a Free Call
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#pipeline"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-8 py-3.5 text-base font-medium text-foreground transition-all hover:border-accent/30 hover:bg-surface-light"
          >
            See How It Works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
