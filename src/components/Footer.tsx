"use client";

import { motion } from "framer-motion";

const companyLinks = [
  { label: "Services", href: "#services" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book a call", href: "#cta" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-light shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                blinkive
              </span>
            </div>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-muted">
              Blinkive is an AI-driven growth optimization agency that uses
              cutting-edge technology to scale your B2B company.
            </p>
            <a
              href="mailto:abubakr@blinkive.com"
              className="text-sm font-medium text-accent hover:underline"
            >
              abubakr@blinkive.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-8 text-sm text-muted">
          <span className="text-foreground/70">
            &copy; {new Date().getFullYear()} Blinkive. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
