"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$2M+", label: "Revenue Generated" },
  { value: "50+", label: "B2B Clients Served" },
  { value: "10x", label: "Average ROI" },
  { value: "< 14", label: "Days to Launch" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-border/50 bg-surface/50 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="mb-2 text-4xl font-bold text-accent md:text-5xl">
              {stat.value}
            </div>
            <div className="text-sm text-muted">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
