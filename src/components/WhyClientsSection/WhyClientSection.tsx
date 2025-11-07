"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Lock, Users } from "lucide-react";

const WhyClientsSection = () => {
  return (
    <section className="bg-[var(--color-primary)] text-[var(--color-text)] py-20 px-6 md:px-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        All-in-one platform
      </motion.h2>

      {/* Content Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-300 text-lg"
        >
          <p>
            If you're used to emailing back and forth, our portal is a
            game-changer. Instead of digging email chains, you'll have
            everything in one place-real-time chats, instant design updates, and
            automated project starts save hours of coordination.
          </p>
          <p>
            Our advanced tools for site visits and submittals mean no more
            delays or errors, with visual reports and 40% faster approvals
            keeping your projects ahead of schedule.
          </p>
          <p>
            The portal's intuitive design makes it easy to adopt, ensuring you
            feel confident and in control while enjoying a modern, efficient
            workflow that strengthens our long-term partnership.
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-full h-64 md:h-80 bg-[#111] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_var(--color-logo)] transition-all duration-300">
            <p className="text-gray-500">
              [ Screenshot mockups of portal interface ]
            </p>
          </div>
        </motion.div>
      </div>

      {/* How to Get Started */}

      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-[#111] rounded-2xl p-8 shadow-lg hover:shadow-[0_0_25px_var(--color-logo)] transition-all duration-300"
      >
        <Quote className="w-10 h-10 text-[var(--color-logo)] mb-4" />
        <p className="text-gray-200 italic mb-4">
          "The client portal eliminated our email overload. Real-time chats,
          design updates, and submittal tracking make working with Pro Tech CDS
          feel like an extension of our team-faster and smarter."
        </p>
        <p className="text-[var(--color-logo)] font-semibold">
          - Long-Term Client
        </p>
      </motion.div>

      {/* Extra Image Suggestions */}
      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="h-40 bg-[#111] rounded-2xl flex items-center justify-center shadow-md hover:shadow-[0_0_20px_var(--color-logo)]"
        >
          <Lock className="w-10 h-10 text-[var(--color-logo)]" />
          <p className="ml-2 text-gray-400 text-sm">Secure lock icons</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="h-40 bg-[#111] rounded-2xl flex items-center justify-center shadow-md hover:shadow-[0_0_20px_var(--color-logo)]"
        >
          <Users className="w-10 h-10 text-[var(--color-logo)]" />
          <p className="ml-2 text-gray-400 text-sm">
            Collaborative workflow diagrams
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="h-40 bg-[#111] rounded-2xl flex items-center justify-center shadow-md hover:shadow-[0_0_20px_var(--color-logo)]"
        >
          <p className="text-gray-500 text-sm text-center px-4">
            Screenshot mockups of chat, submittal tracking, and site visit
            reports
          </p>
        </motion.div>
      </div> */}
    </section>
  );
};

export default WhyClientsSection;
