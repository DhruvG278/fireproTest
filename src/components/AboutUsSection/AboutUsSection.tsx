"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/utils/images";

const AboutSection = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="bg-[var(--color-primary)] text-[var(--color-text-primary)] px-6 md:px-12 lg:px-20 py-20"
      id="about"
    >
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[var(--color-logo)] opacity-20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pioneering the Future of Fire Protection with{" "}
          <span className="relative inline-block">
            {/* Highlight Sweep Animation */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-logo)]/40 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10 text-[var(--color-logo)]">
              AI Innovation
            </span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-6 text-lg md:text-xl max-w-3xl leading-relaxed text-center md:text-left mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Founded on decades of expertise, ProTech CDS (Complete Design System)
          is redefining industry standards by integrating artificial
          intelligence into every aspect of fire protection design and
          engineering.
        </motion.p>

        {/* Our Story */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-28 mt-28">
          {/* Text */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            {/* Animated Background Highlight */}
            <span className="absolute -top-6 left-0 text-7xl md:text-9xl font-bold text-[var(--color-logo)] opacity-10 animate-pulse select-none">
              STORY
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed relative z-10">
              ProTech CDS evolved from a trusted leader in fire protection
              design to an Al powerhouse, committed to scaling businesses like
              yours. With a large, dedicated team of designers and engineers,
              PE's and NICET certified specialists, we focus on large scale
              projects that demand precision and speed. Our journey began
              serving contractors on massive builds-high-rises, casinos,
              campuses, semiconductor facilities, big box retail, Amazon
              warehouses, military bases, office, shopping malls, and data
              centers. Today, we empower contractors by offering comprehensive
              services: take-offs, detailed engineering, and
              submittals/permitting and more. Our client portal revolutionizes
              how we work together, replacing outdated email workflows with real
              time collaboration, automated project tracking, billing and
              instant access to critical updates.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex-1 relative group"
          >
            <Image
              src={images.OUR_STORY}
              alt="Our Story"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-[0_0_25px_var(--color-logo)]"
            />
          </motion.div>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12">
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex-1 relative group"
          >
            <Image
              src={images.OUR_MiSSION}
              alt="Our Mission"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-[0_0_25px_var(--color-logo)]"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            {/* Animated Background Highlight */}
            <span className="absolute -top-6 left-0 text-7xl md:text-9xl font-bold text-[var(--color-logo)] opacity-10 animate-pulse select-none">
              MISSION
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed relative z-10">
              To make ProTech CDS the go-to partner for contractors
              worldwide, delivering Al enhanced solutions that save time, reduce
              costs, and exceed compliance standards. We envision a future where
              every major project relies on our expertise, making us your
              Complete Design Service provider fostering long term, proud
              partnerships.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
