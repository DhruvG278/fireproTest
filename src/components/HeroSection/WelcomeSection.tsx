"use client";

import { images } from "@/utils/images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState, useEffect } from "react";

const WelcomeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  // ---------------- Typing Effect ----------------
  const fullText =
    "Welcome to Pro Tech CDS, where innovation meets expertise in fire protection systems design and engineering. As leaders in AI-driven solutions, we specialize in large-scale projects for top contractors, architects, and engineers. Our proprietary AI tools ensure rapid turnarounds, flawless designs, and strict adherence to confidentiality. Whether you're building high-rise towers, data centers, or sprawling campuses, we handle everything — empowering you to focus on what you do best. Our state-of-the-art client portal transforms collaboration, replacing endless email chains with realtime updates, seamless communication, and automated project initiation.";

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!inView) return; // start only when section is visible
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 25); // typing speed (lower = faster)
      return () => clearTimeout(timeout);
    }
  }, [index, inView]);

  return (
    <motion.section
      ref={ref}
      className="flex flex-col gap-1 lg:gap-10 p-2 lg:p-8 mt-6 lg:mt-0"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Header */}
      <motion.header
        className="flex items-center justify-center gap-4"
        variants={itemVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl text-text-primary font-semibold transition-colors duration-300 hover:text-opacity-80"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Welcome
        </motion.h1>

        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image
            src={images.ONLY_LOGO}
            alt="Company Logo"
            width={40}
            height={40}
            className="w-[40px] h-auto"
          />
        </motion.div>
      </motion.header>

      {/* Content */}
      <motion.main
        variants={itemVariants}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="w-full flex flex-col-reverse p-4 lg:flex-row items-center justify-center gap-4 lg:gap-8 mt-4 lg:mt-8">
          {/* Text */}
          <motion.div
            className="w-full lg:w-1/2 group"
            variants={slideInLeft}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg p-6 lg:p-8 bg-black/5"
              whileHover={{
                backgroundColor: "rgba(0,0,0,0.08)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Shine accent */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Typing Text with Cursor */}
              <p className="text-lg text-text-primary text-center lg:text-justify leading-relaxed relative z-10 whitespace-pre-wrap">
                {displayedText}
                <span className="animate-pulse inline-block w-[2px] h-5 bg-text-primary ml-1 align-middle"></span>
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center items-center group"
            variants={slideInRight}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <motion.div className="relative overflow-hidden rounded-2xl shadow-lg transition-shadow duration-500 flex items-center justify-center py-8 group">
              {/* Just the shadow hover */}
              <Image
                src={images.HERO_SECTION_IMAGE}
                alt="Hero Section"
                width={800}
                height={500}
                className="w-full lg:w-[80%] h-auto rounded-2xl relative z-0 
               transition-shadow duration-500 group-hover:shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    </motion.section>
  );
};

export default WelcomeSection;
