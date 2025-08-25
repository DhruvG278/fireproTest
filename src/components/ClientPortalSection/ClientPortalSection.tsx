"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Rocket,
  Bell,
  FileText,
  Camera,
  BarChart,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="w-8 h-8 text-[var(--color-logo)]" />,
    title: "Real-Time Chat with Designers",
    desc: "Connect instantly with our NICET IV-certified team, making and issue resolution.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-[var(--color-logo)]" />,
    title: "Automated Project Initiation",
    desc: "Start new projects with one click-submit job details, upload files, or request Instaquotes directly in the portal, cutting setup time and keeping your pipeline moving.",
  },
  {
    icon: <Bell className="w-8 h-8 text-[var(--color-logo)]" />,
    title: "Instant Design Status Updates",
    desc: "Track every phase of your fire alarm, sprinkler, or suppression system designs in real time, with Al-driven notifications alerting you to milestones, revisions, or approvals.",
  },
  {
    icon: <FileText className="w-8 h-8 text-[var(--color-logo)]" />,
    title: "Streamlined Submittal Tracking",
    desc: "Monitor permitting progress with automated updates, leveraging our advanced software to ensure 99% first-pass approval rates and up to 40% faster AHJ approvals, keeping your projects on schedule.",
  },
  {
    icon: <Camera className="w-8 h-8 text-[var(--color-logo)]" />,
    title: "Enhanced Site Visit Collaboration",
    desc: "Access geo-tagged photos, videos, and annotated reports from site assessments, automatically organized and shareable with your team, leveraging our advanced tools to reduce miscommunication and repeat visits while boosting transparency.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-[var(--color-logo)]" />,
    title: "Custom Analytics and Insights",
    desc: "Gain Al-powered insights into project efficiencies, cost savings, and performance metrics, helping you optimize workflows and impress stakeholders.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[var(--color-logo)]" />,
    title: "Resource Library",
    desc: "Download compliance guides, templates, site visit reports, and Algenerated submittal packages tailored to your projects, all in one secure place.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[var(--color-logo)]" />,
    title: "Secure, Multi-User Access",
    desc: "Enterprise-level encryption with role-based permissions ensures confidentiality while allowing your entire team to collaborate seamlessly.",
  },
];

const ClientPortalSection = () => {
  return (
    <section
      className="bg-[var(--color-primary)] text-[var(--color-text)] py-20 px-6 md:px-16"
      id="client"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        Client Portal Page
      </motion.h2>

      {/* Headline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200"
      >
        Your All-in-One Hub for Smarter Project Management
      </motion.p>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center text-base md:text-lg max-w-4xl mx-auto mb-16 text-gray-400"
      >
        Say goodbye to endless emails and hello to ProTech's secure, Al-powered
        client portal-designed to streamline collaboration, excite current
        partners, and make managing large-scale fire protection projects
        effortless.
      </motion.p>

      {/* Features */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-[#111] rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_var(--color-logo)] transition-all duration-300"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientPortalSection;
