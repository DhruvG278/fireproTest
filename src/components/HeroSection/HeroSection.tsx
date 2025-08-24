"use client";

import { images } from "@/utils/images";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import WelcomeSection from "./WelcomeSection";
import ParticlesBackground from "@/components/lightswind/ParticlesBackground";

const HeroSection = () => {
  return (
    <div>
      <ParticlesBackground />
      <div className="flex md:flex-row flex-col items-center justify-center p-5 md:p-6 bg-primary text-white">
        <motion.div
          className="w-full flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo/Text image */}
          <Image
            src={images.TEXT_ONLY}
            alt="ProTech CDS"
            width={800}
            height={200}
            className="w-full h-auto max-w-[800px]"
            priority
          />

          {/* Heading */}
          <motion.p
            className="text-3xl md:text-5xl text-center max-w-[800px] font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Revolutionizing Fire Protection Design with AI-Powered Precision
          </motion.p>

          {/* Sub-heading */}
          <motion.p
            className="text-lg md:text-xl max-w-[800px] text-center mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            At Fire Pro AI, we deliver cutting-edge fire protection engineering
            solutions that scale seamlessly for the world&apos;s largest
            projects. Partner with us to outsource your in-house design needs,
            reduce costs, and accelerate timelines — while achieving unmatched
            accuracy and compliance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="gap-4 w-full items-center justify-center mt-6 flex flex-col-reverse lg:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="px-6 py-2.5 border border-logo text-logo font-medium rounded-full relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(211, 187, 68, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <span className="relative z-10">Explore Our Client Portal</span>
              {/* shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </motion.button>

            <motion.button
              className="px-6 py-2.5 border border-logo text-logo font-medium rounded-full relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(211, 187, 68, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <span className="relative z-10">View Our Services</span>
              {/* shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Welcome Section */}
      <WelcomeSection />
    </div>
  );
};

export default HeroSection;
