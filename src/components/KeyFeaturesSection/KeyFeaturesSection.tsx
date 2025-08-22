"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Parent container variants for stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

// Card animation variants
const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" } as { duration: number },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" } as { duration: number },
  },
};

const bottomVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } as { duration: number },
  },
};

// Handle 3D Tilt
const handleTilt = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 8; // max tilt
  const rotateY = ((x - centerX) / centerX) * 8;

  card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
};

const resetTilt = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  e.currentTarget.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
};

const KeyFeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="mt-5 lg:mt-10 p-4 lg:p-8 w-full flex flex-col items-center justify-center"
    >
      {/* Title */}
      <div className="flex w-full text-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl text-logo font-bold"
        >
          Why Choose ProTech ?
        </motion.p>
      </div>

      {/* Features */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col w-full  mt-[30px] lg:mt-[80px] gap-8 gap-y-16 items-center justify-center"
      >
        {/* First Pair */}
        <div className="w-full flex flex-wrap gap-8 gap-y-16 items-center justify-center">
          <motion.div
            className="feature-card w-full lg:w-[45%]"
            variants={leftVariant}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <p className="text-2xl font-bold text-text-primary underline">
              AI-Powered Design Excellence
            </p>
            <p className="text-lg text-text-primary mt-2">
              Leverage our NICET IV-certified team and AI algorithms for
              precise, error-free designs that adapt to complex project
              requirements in real-time.
            </p>
          </motion.div>

          <motion.div
            className="feature-card w-full lg:w-[45%]"
            variants={rightVariant}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <p className="text-2xl font-bold text-text-primary underline">
              Unrivaled Confidentiality and Customization
            </p>
            <p className="text-lg text-text-primary mt-2">
              We use your title blocks, details, and branding on all drawings.
              Your projects stay yours—we never advertise clients or share
              details.
            </p>
          </motion.div>
        </div>

        {/* Second Pair */}
        <div className="w-full flex flex-wrap gap-8 gap-y-16 items-center justify-center">
          <motion.div
            className="feature-card w-full lg:w-[45%]"
            variants={leftVariant}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <p className="text-2xl font-bold text-text-primary underline">
              Scalable Solutions for Big Contractors
            </p>
            <p className="text-lg text-text-primary mt-2">
              Say goodbye to in-house designers. We provide end-to-end services,
              from initial estimates to final approvals, at a fraction of the
              cost—handling unlimited revisions without extra fees.
            </p>
          </motion.div>

          <motion.div
            className="feature-card w-full lg:w-[45%]"
            variants={rightVariant}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <p className="text-2xl font-bold text-text-primary underline">
              Proven Track Record on Mega Projects
            </p>
            <p className="text-lg text-text-primary mt-2">
              From semiconductor plants and Amazon warehouses to military bases
              and casinos, our designs protect the world's most critical
              infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Last One (Bottom) */}
        <motion.div
          className="feature-card w-full lg:w-1/2"
          variants={bottomVariant}
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
        >
          <p className="text-2xl font-bold text-text-primary underline">
            Client Portal for Seamless Collaboration
          </p>
          <p className="text-lg text-text-primary mt-2">
            Ditch email back-and-forths for our secure, AI-powered portal. Enjoy
            real-time chat with designers, instant design status updates,
            automated project initiation, and streamlined submittal
            tracking—designed to save time and keep your team in sync.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default KeyFeaturesSection;
