"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlarmCheck,
  Sprout,
  Calculator,
  FileCheck,
  Box,
  Layers,
  Wrench,
  ClipboardCheck,
  BarChart3,
  FileText,
} from "lucide-react";
import { BorderBeam } from "../lightswind/border-beam";

const services = [
  {
    title: "AI Enhanced Fire Alarm Design",
    description:
      "Advanced systems including voice evacuation, mass communication, and integration with HVAC, security, and access control. Our AI optimizes layouts for maximum coverage complying wiht updated AHJ requirements",
    icon: AlarmCheck,
  },
  {
    title: "Sprinkler and Suppression Systems",
    description:
      "Design for fire sprinklers, pre-action systems (NOVEC), clean agents (FM-200), and VESDA. Enhanced design practices ensuring speed and quality.",
      icon: Sprout,
  },
  {
    title: "Takeoff and Sales Support",
    description:
      "Our AI-driven takeoffs deliver precise quantifications, detailed material specifications, and scope analysis aligned with NFPA 13/72, IFC, IBC, and OSHA. This empowers you to integrate your own costs and labor rates seamlessly",
    icon: Calculator,
  },
  {
    title: "Submittals for Approval",
    description:
      "Streamlined packages with NICET IV/PE reviews and seals, powered by advanced software that simplifies permitting and ensures compliance with local regulations.",
    icon: FileCheck,
    extra: [
      "🚀 <strong>Accelerated Approvals:</strong> Automated permit tracking and AHJ communication reduce approval times by up to 40%, keeping projects on schedule.",
      "✅ <strong>Error-Free Submissions:</strong> AI-driven checks ensure 99% first-pass approval rates, eliminating costly revisions.",
      "🌎 <strong>Nationwide Compliance Expertise:</strong> Stay compliant across 48 states with real-time updates on local and state codes.",
      "📊 <strong>Transparent Progress Tracking:</strong> Monitor submittal statuses and milestones through our client portal with automated notifications.",
    ],
  },
  {
    title: "BIM and 3D Modeling",
    description:
      "Integrated Building Information Modeling for clash detection and visualization, enhanced design practices for real time updates and coordination accuracy.",
    icon: Box,
  },
  {
    title: "Additional Integrated Designs",
    description:
      "Comprehensive integration of data/structured cabling, nurse call, CCTV, area of refuge/rescue, magnetic door holders, and more - all unified under one platform, a Complete Design Service.",
    icon: Layers,
  },
  {
    title: "Site Visits for Consulting and Retrofits",
    description:
      "Expert on-site verification and retrofit services to verify existing conditions for T.I's, ensuring accurate design.",
    icon: Wrench,
    extra: [
      "📷 <strong>Real-Time Photo & Video Sharing:</strong> Capture geo-tagged, time-stamped visuals to share instantly with your team for remote quality control.",
      "📝 <strong>Efficient Project Documentation:</strong> Automatically organize annotated project photos and generate professional before–after reports.",
      "🤝 <strong>Enhanced Collaboration & Transparency:</strong> Invite teams or subcontractors for shared visual updates, reducing travel and improving client trust.",
      "✔ <strong>Improved Accountability & Error Reduction:</strong> Use AI-assisted checklists and reports to boost accuracy by 15–20% and streamline assessments.",
    ],
  },
  {
    title: "AI Assisted NFPA Compliance Review Service",
    description:"Within 1 hour you get a third party review of fire alarm, sprinkler, or suppression system designs for NFPA 72/13 compliance before AHJ submission. Our AI flags potential issues early to reduce rejection rates and rework costs. With our system of checks and balances, your drawing will look impeccable.",
    icon: ClipboardCheck,
  },
  {
    title: "AI-Driven Bid Optimization and Estimation Service",
    description:
      "Optimized bids for fire protection projects using AI to analyze specs and suggest cost saving designs, material efficiencies, or system alternatives (like integrating VESDA or smoke control). Delivered as a detailed PDF with breakdowns and recommendations.",
    icon: BarChart3,
  },
  {
    title: "AI Generated Custom Project Reports and Cheat Sheets",
    description:`Tailored reports or cheat sheets on fire protection requirements by occupancy (e.g., including kitchen hoods, suppression, or BIM integration), pulling in real time updates from codes and AHJ requirements. We compile into a clean PDF with tables, checklists, and visuals within 1 hour.`, 
    icon: FileText,
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const spring = { type: "spring", damping: 10, stiffness: 100 };

  return (
    <section
      id={"services"}
      className="relative bg-[var(--color-primary)] text-[var(--color-text-primary)] py-20 px-6 overflow-hidden"
    >
      <motion.div
        className="absolute top-20 right-10 w-80 h-80 bg-[var(--color-logo)]/10 rounded-full blur-3xl"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Comprehensive{" "}
          <span className="text-[var(--color-logo)] relative">
            AI Driven
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-logo)]/40 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </span>{" "}
          Fire Protection Services
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg text-center text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          From concept to compliance, our AI powered solutions streamline design
          through submittals. This ensures faster approvals, fewer errors, and
          complete confidence in every project
        </motion.p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isOpen = expanded === idx;

            return (
              <motion.div
                key={idx}
                className="bg-black/30 border border-[var(--color-logo)]/40 rounded-2xl p-6 shadow-xl relative overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 8px 25px rgba(211, 187, 68, 0.35)",
                }}
                transition={{
                  default: { type: "spring", stiffness: 280, damping: 20 },
                  opacity: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: idx * 0.15,
                  },
                  y: { duration: 0.6, ease: "easeOut" },
                  scale: { type: "spring", stiffness: 300, damping: 18 },
                }}
              >
                <BorderBeam
                  colorFrom="var(--color-text)"
                  colorTo="var(--color-text)"
                  size={50}
                  duration={6}
                  borderThickness={2}
                  glowIntensity={3}
                />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-in-out" />

                <div className="bg-[var(--color-logo)] w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="text-black w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-[var(--color-logo)] group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                {service.extra && (
                  <div className="mt-4">
                    <button
                      onClick={() => setExpanded(isOpen ? null : idx)}
                      className="text-[var(--color-logo)] text-sm underline group-hover:text-white transition-colors duration-300"
                    >
                      {isOpen ? "Hide details" : "See details"}
                    </button>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-3 space-y-4 text-white/70 text-sm"
                      >
                        {service.extra.map((point, i) => (
                          <p
                            key={i}
                            dangerouslySetInnerHTML={{ __html: point }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center space-y-6">
          <h2 className="text-3xl font-bold text-[var(--color-logo)]">
            Why Choose Us
          </h2>
          <p className="max-w-4xl mx-auto text-white/80 text-lg">
            Scale effortlessly with AI-driven tools that reduce design errors by
            up to 90% and accelerate permitting by 40%. Experience real-time
            collaboration, predictive compliance insights, and transparent
            project tracking — all from a single client portal.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            💡 Transparent, project-based pricing. Contact us for a tailored
            quote — no extra fees for CSFM or data sheets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
