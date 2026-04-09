"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Conor Aucion",
    role: "Co-Founder, Bonner Travels",
    quote:
      "Partnering with Abubakr and Blinkive helped us implement precise, market-aligned outreach systems that got us multiple revenue streams globally. We've been able to connect with top travel businesses worldwide, with seamless onboarding and value from day one.",
    initials: "CA",
    color: "bg-accent/15 text-accent",
  },
  {
    name: "Philip George",
    role: "Founder, Pierconsultinguk",
    quote:
      "Working with Blinkive was seamless. After just one short call, they onboarded and delivered a tailored outreach system that consistently brought us leads from companies actively searching for recruitment help. Couldn't recommend them more.",
    initials: "PG",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Kelvin Lux",
    role: "Founder, Lux House Solutions",
    quote:
      "The setup was fast, the results were immediate. Abubakr helped us launch a content engine that does everything — generate, schedule, and post — without lifting a finger. Total peace of mind.",
    initials: "KL",
    color: "bg-blue-100 text-blue-700",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-soft/60 px-4 py-1.5 text-sm font-medium text-accent"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Reviews
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          What our clients say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-14 max-w-2xl text-lg text-muted"
        >
          Real results from real businesses. Here&apos;s what founders and
          operators say about working with Blinkive.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all hover:border-accent/20 hover:shadow-lg"
            >
              <div>
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-8 text-[15px] leading-relaxed text-muted italic">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3.5 border-t border-border/60 pt-6">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${review.color}`}>
                  {review.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{review.name}</div>
                  <div className="text-xs text-muted">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
