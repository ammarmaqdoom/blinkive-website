"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Lead Generation Systems",
    description:
      "AI-powered prospecting that finds, qualifies, and reaches your ideal customers at scale, 24/7.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    gradient: "from-accent/15 to-accent/5",
    iconBg: "bg-accent/10 text-accent",
    borderHover: "hover:border-accent/35",
    span: "md:col-span-2 md:row-span-2",
    featured: true,
    metrics: [
      { label: "Avg. reply rate", value: "12%" },
      { label: "Leads per month", value: "200+" },
    ],
  },
  {
    title: "Revenue Operations",
    description:
      "End-to-end CRM automation, pipeline management, and deal tracking.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    gradient: "from-emerald-500/10 to-green-500/10",
    iconBg: "bg-emerald-100 text-emerald-600",
    borderHover: "hover:border-emerald-300",
    span: "",
    featured: false,
  },
  {
    title: "AI Content Engine",
    description:
      "Generate, schedule, and post across all channels. Consistent brand voice, zero effort.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h8M8 9h2" />
      </svg>
    ),
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-100 text-blue-600",
    borderHover: "hover:border-blue-300",
    span: "",
    featured: false,
  },
  {
    title: "Smart Outreach",
    description:
      "Personalized cold email campaigns — infrastructure, copywriting, and sending at scale.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    gradient: "from-orange-500/10 to-amber-500/10",
    iconBg: "bg-orange-100 text-orange-600",
    borderHover: "hover:border-orange-300",
    span: "",
    featured: false,
  },
  {
    title: "Custom AI Workflows",
    description:
      "Bespoke automation pipelines that integrate all your tools into one intelligent system.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <rect width="6" height="6" x="3" y="3" rx="1" />
        <rect width="6" height="6" x="15" y="3" rx="1" />
        <rect width="6" height="6" x="3" y="15" rx="1" />
        <rect width="6" height="6" x="15" y="15" rx="1" />
      </svg>
    ),
    gradient: "from-pink-500/10 to-rose-500/10",
    iconBg: "bg-pink-100 text-pink-600",
    borderHover: "hover:border-pink-300",
    span: "",
    featured: false,
  },
  {
    title: "AI Strategy & Training",
    description:
      "We train your team on the latest AI tools and build a growth roadmap.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    gradient: "from-teal-500/10 to-cyan-500/10",
    iconBg: "bg-teal-100 text-teal-600",
    borderHover: "hover:border-teal-300",
    span: "",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-soft/60 px-4 py-1.5 text-sm font-medium text-accent"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Our Services
        </motion.div>

        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-3 text-4xl font-extrabold tracking-tight md:text-5xl"
            >
              What we specialize in
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-lg text-lg text-muted"
            >
              End-to-end AI systems that generate leads, close deals, and scale
              operations.
            </motion.p>
          </div>
          <motion.a
            href="#cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
          >
            Get started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-4 md:grid-cols-3 md:auto-rows-[minmax(200px,auto)]"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all ${service.borderHover} hover:shadow-lg ${service.span} ${service.featured ? "flex flex-col justify-between" : ""}`}
            >
              {/* Gradient overlay on hover */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              {/* Decorative corner accent */}
              {service.featured && (
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/[0.06] blur-[40px]" />
              )}

              <div className="relative z-10">
                <div className={`mb-5 inline-flex rounded-xl p-3 ${service.iconBg} transition-transform duration-200 group-hover:scale-110`}>
                  {service.icon}
                </div>
                <h3 className={`mb-2 font-bold tracking-tight ${service.featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed text-muted ${service.featured ? "text-base md:text-lg" : "text-sm"}`}>
                  {service.description}
                </p>
              </div>

              {service.featured && service.metrics && (
                <div className="relative z-10 mt-8 flex gap-6 border-t border-border/60 pt-6">
                  {service.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold text-accent">{metric.value}</div>
                      <div className="text-xs text-muted">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
