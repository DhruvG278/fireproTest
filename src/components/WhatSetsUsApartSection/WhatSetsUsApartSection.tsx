"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Users, Globe2 } from "lucide-react"; // example icons
import { images } from "@/utils/images";

const features = [
  // {
  //   title: "AI Integration",
  //   description:
  //     "Our proprietary tools use machine learning for predictive hazard analysis, automated code compliance checks, and optimized system layouts — delivering designs 3x faster than traditional methods.",
  //   icon: Cpu,
  // },
  {
    title: "Expert Team",
    description:
      "Large design team with experience in fire alarm, sprinkler, pre-action, VESDA, voice evacuation systems, and beyond. We're not just designers, we're strategic partners. Replace that with this",
    icon: Users,
  },
  {
    title: "Client Centric Approach",
    description:"a.	More than just design, we offer additional services like take-offs, plan review and AHJ submittals. We handle the entire design phase. Replace this with this",
    icon: ShieldCheck,
  },
  {
    title: "Commitment to Excellence",
    description:"Always leveling up speed and quality. Our platform's real time features make collaboration effortless, efficiently outpacing competitors",
    icon: Globe2,
  },
];

const teamHighlights = [
  "Led by industry veterans.",
  "AI development collaboration for hybrid solutions.",
  "Global reach, serving clients across the U.S. and beyond.",
];

const WhatSetsUsApart = () => {
  return (
    <section className="relative bg-[var(--color-primary)] text-[var(--color-text-primary)] py-20 px-6 overflow-hidden">
      {/* Animated Background Text */}
      <motion.h1
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="absolute top-10 left-0 text-[8rem] font-bold text-white/5 whitespace-nowrap pointer-events-none"
      >
        INNOVATION • STRATEGY • EXCELLENCE
      </motion.h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left - Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-[var(--color-logo)]">What</span> Sets Us Apart
          </h2>

          <div className="space-y-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="bg-[var(--color-logo)] p-3 rounded-xl w-fit h-fit">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Team Highlights */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-logo)]">
              Team Highlights
            </h3>
            <ul className="space-y-2 text-sm text-white/80 list-disc pl-5">
              {teamHighlights.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right - Image / Illustration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <img
            src={images.AI_BRAIN} // 🔥 replace with your actual image (team photo with AI overlays)
            alt="Our Team with AI overlays"
            className="rounded-2xl shadow-2xl border border-[var(--color-logo)]"
          />

          {/* Floating animated background highlight */}
          <motion.div
            className="absolute -z-10 w-72 h-72 rounded-full bg-[var(--color-logo)]/20 blur-3xl"
            animate={{
              x: [0, 40, -40, 0],
              y: [0, -30, 30, 0],
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
