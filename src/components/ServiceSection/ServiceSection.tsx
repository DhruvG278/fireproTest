"use client";

import React, { useState } from "react";
import { motion, time } from "framer-motion";
import {
  AlarmCheck,
  Sprout,
  Calculator,
  FileCheck,
  Box,
  Layers,
  Wrench,
} from "lucide-react";
import { BorderBeam } from "../lightswind/border-beam";

const services = [
  {
    title: "AI-Enhanced Fire Alarm Design",
    description:
      "Advanced systems including voice evacuation, mass communication, and integration with HVAC, security, and access control. Our AI optimizes layouts for maximum coverage.",
    icon: AlarmCheck,
  },
  {
    title: "Sprinkler and Suppression Systems",
    description:
      "Design for sprinklers, pre-action, NOVEC, FM-200, suppression, VESDA, and smoke control. AI provided optimized feedback foolproof design and performance. ",
    icon: Sprout,
  },
  {
    title: "Estimating and Sales Support",
    description:
      "Accurate, data-driven take-offs using AI analytics and up-to-date AHJ requirements to win bids.",
    icon: Calculator,
  },
  {
    title: "Optimized Permitting",
    description:
      "Streamlined with NICET IV/PE reviews and seals as required. We handle the AHJ permitting process for you while providing optimized status tracking. ",
    icon: FileCheck,
    extra: [
      "<strong> 🚀 Accelerated Approvals (40% faster permitting)</strong>",
      "<strong>✅ Error-Free Submissions (99% first-pass approval)</strong>",
      "<strong>🌎 Nationwide Compliance Expertise</strong>",
      "<strong>📊 Transparent Progress Tracking</strong>",
    ],
  },
  // {
  //   title: "BIM and 3D Modeling",
  //   description:
  //     "Integrated Building Information Modeling for clash detection and visualization, enhanced by AI for real-time updates.",
  //   icon: Box,
  // },
  // {
  //   title: "Additional Integrated Designs",
  //   description:
  //     "Data/structured cabling, nurse call, CCTV, area of refuge/rescue, magnetic door holders, and more — all unified under one AI platform.",
  //   icon: Layers,
  // },
  {
    title: "Consulting and Retrofits",
    description:
      "Expert upgrades with AI predictive modeling to forecast risks. Enhanced by real-time photo/video sharing and smart documentation. with this: Retrofit Site Visits Expert on-site verification of existing conditions and upgrades to fire protection systems. Enhanced by real-time photo/video sharing and smart documentation to enhance efficient communication. ",
    icon: Wrench,
    extra: [
      `📷 <strong>Real-Time Photo & Video Sharing:</strong> Capture geo-tagged, time-stamped visuals during assessments to instantly share progress and issues with your team, reducing miscommunication and enabling remote quality control.​`,
      `📝 <strong>Efficient Project Documentation:</strong> Automatically organize photos by project, with markup tools to annotate hazards, circle problem areas, and add comments — creating professional before-and-after reports for seamless retrofits.​`,
      `🤝 <strong>Enhanced Collaboration & Transparency:</strong> Invite team members or subcontractors to view and contribute, building client trust through visual updates and minimizing the need for repeat visits, which saves time and cuts travel costs.​`,
      `✔ <strong>Improved Accountability & Error Reduction:</strong> Use checklists and PDF reports to track tasks, ensure nothing is missed, and provide a second set of eyes from the office — leading to higher accuracy in assessments and faster decision-making, with 15–20% overall error reduction.`,
    ],
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <section
      id={"services"}
      className="relative bg-[var(--color-primary)] text-[var(--color-text-primary)] py-20 px-6 overflow-hidden"
    >
      {/* Floating Accent Background */}
      <motion.div
        className="absolute top-20 right-10 w-80 h-80 bg-[var(--color-logo)]/10 rounded-full blur-3xl"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Comprehensive,{" "}
          <span className="text-[var(--color-logo)] relative">
            AI-Driven
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-logo)]/40 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </span>{" "}
          Fire Protection Services
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg text-center text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          From concept to compliance, our services cover every phase — powered
          by AI for superior efficiency and accuracy. Outsource with confidence
          and watch your projects thrive.
        </motion.p>

        {/* Service Grid */}
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
                {/* Shimmer overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-in-out" />

                {/* Icon */}
                <div className="bg-[var(--color-logo)] w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="text-black w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--color-logo)] group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                {/* Expandable extra list */}
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

        {/* Benefits Section */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-3xl font-bold text-[var(--color-logo)]">
            Why Choose Us
          </h2>
          <p className="max-w-4xl mx-auto text-white/80 text-lg">
            For Big Contractors: Scale effortlessly with AI-driven tools that
            cut errors by 90% and speed permitting by 40%. <br />
            For Current Partners: Move beyond email chaos with our client
            portal's real-time chat, automated project starts, and instant
            updates. <br />
            Competitors envy our predictive insights, automation, and unmatched
            efficiency.
          </p>
        </div>

        {/* Pricing Note */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            💡 Transparent, project-based pricing. No extras for CSFM, data
            sheets. Contact us for a tailored quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
