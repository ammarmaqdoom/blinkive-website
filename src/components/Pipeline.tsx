"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const journeySteps = [
  {
    title: "AI-Powered Prospecting",
    description:
      "We build laser-targeted lead lists using AI to identify companies that match your ideal customer profile — filtering by intent signals, tech stack, industry, and company size.",
    tag: "We handle this",
  },
  {
    title: "Omnichannel Outreach",
    description:
      "We develop a comprehensive outreach plan combining cold email, LinkedIn, and automated sequences to reach your prospects at the right time on the right channel.",
    tag: "We handle this",
  },
  {
    title: "Lead Qualification",
    description:
      "Every reply is filtered through AI-driven qualification layers. Only genuinely interested prospects that fit your criteria land in your inbox or CRM.",
    tag: "We handle this",
  },
];

const yourStep = {
  title: "Close the deal",
  description:
    "Qualified conversations are handed off to your sales team — ready to be closed. You focus on selling, we handle everything else.",
  tag: "Your part",
};

const funnelStages = [
  {
    label: "Prospects",
    value: "Up to 10,000+",
    sublabel: "targeted leads per month",
    width: "100%",
    bg: "bg-accent",
    text: "text-white",
    isFeatured: true,
  },
  {
    label: "MQLs",
    value: "Up to 2,000+",
    sublabel: "marketing-qualified leads",
    width: "78%",
    bg: "bg-surface",
    text: "text-foreground",
    isFeatured: false,
  },
  {
    label: "SQLs",
    value: "100+",
    sublabel: "sales-qualified meetings",
    width: "56%",
    bg: "bg-surface",
    text: "text-foreground",
    isFeatured: false,
  },
  {
    label: "Opportunities",
    value: "20–40+",
    sublabel: "closed deals per quarter",
    width: "38%",
    bg: "bg-surface",
    text: "text-foreground",
    isFeatured: false,
  },
];

export default function Pipeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="pipeline"
      className="relative overflow-hidden bg-foreground py-24 text-white md:py-32"
    >
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            How your pipeline will look{" "}
            <br className="hidden sm:block" />
            with Blinkive
          </h2>
          <p className="mx-auto max-w-xl text-base text-white/60 md:text-lg">
            Focus on scaling your business while we deliver sales-ready B2B
            leads directly to your team.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — Journey accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Blinkive handles section */}
            <div className="mb-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 md:p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                We take care of the entire user journey
              </p>

              <div className="flex flex-col gap-2">
                {journeySteps.map((step, i) => {
                  const isActive = activeStep === i;
                  return (
                    <button
                      key={step.title}
                      onClick={() => setActiveStep(i)}
                      className={`w-full rounded-xl border text-left transition-all duration-300 ${
                        isActive
                          ? "border-white/[0.12] bg-white/[0.06] p-5"
                          : "border-transparent bg-white/[0.02] p-4 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-[15px] font-semibold">{step.title}</h4>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`shrink-0 text-white/40 transition-transform duration-300 ${
                            isActive ? "rotate-90" : ""
                          }`}
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </div>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 text-sm leading-relaxed text-white/50">
                              {step.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Your part section */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 md:p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                Your part in the process
              </p>
              <button
                onClick={() => setActiveStep(3)}
                className={`w-full rounded-xl border text-left transition-all duration-300 ${
                  activeStep === 3
                    ? "border-white/[0.12] bg-white/[0.06] p-5"
                    : "border-transparent bg-white/[0.02] p-4 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-[15px] font-semibold">{yourStep.title}</h4>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 text-white/40 transition-transform duration-300 ${
                      activeStep === 3 ? "rotate-90" : ""
                    }`}
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
                <AnimatePresence initial={false}>
                  {activeStep === 3 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm leading-relaxed text-white/50">
                        {yourStep.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>

          {/* Right — Funnel visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <p className="mb-6 text-center text-[11px] text-white/30">
              * Average outcomes. Results depend on multiple factors.
            </p>

            <div className="flex w-full max-w-md flex-col items-center gap-0">
              {funnelStages.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
                  className="flex flex-col items-center"
                  style={{ width: stage.width }}
                >
                  {/* Label badge */}
                  {i > 0 && (
                    <div className="mb-1 mt-3">
                      <span className="rounded-full bg-white/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/50">
                        {stage.label}
                      </span>
                    </div>
                  )}

                  {stage.isFeatured ? (
                    /* Top trapezoid shape */
                    <div className="relative w-full">
                      <div className="mb-1">
                        <span className="rounded-full bg-white/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/50">
                          {stage.label}
                        </span>
                      </div>
                      <div
                        className="relative overflow-hidden rounded-xl bg-accent px-6 py-7 text-center shadow-lg shadow-accent/20"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 92% 100%, 8% 100%)",
                        }}
                      >
                        <div className="text-xl font-extrabold text-white md:text-2xl">
                          {stage.value}
                        </div>
                        <div className="text-sm font-medium text-white/80">
                          {stage.sublabel}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Narrowing stages */
                    <div
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-5 text-center"
                    >
                      <div className="text-lg font-extrabold text-white md:text-xl">
                        {stage.value}
                      </div>
                      <div className="text-sm text-white/50">
                        {stage.sublabel}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
