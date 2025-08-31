"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const ContactUsSection = () => {
  return (
    <section
      id="contact"
      className="bg-[var(--color-primary)] text-[var(--color-text)] pt-20 px-6 md:px-16"
    >
      {/* Headline + Subheadline */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {" "}
          Let's Build Safer Futures Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 text-lg"
        >
          Reach out to discuss how ProTech CDS's innovative solutions and client
          portal can elevate your next project. We're ready to partner on your
          biggest challenges.
        </motion.p>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 bg-[#111] p-6 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-md bg-[#222] text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-[#222] text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full p-3 rounded-md bg-[#222] text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-3 rounded-md bg-[#222] text-white focus:outline-none"
          />
          <textarea
            placeholder="Project Details / Message"
            rows={4}
            className="w-full p-3 rounded-md bg-[#222] text-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-[var(--color-logo)] text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
          >
            Send Inquiry
          </button>
        </motion.form>

        {/* Company Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Contact Info */}
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-2">
              <Mail className="text-[var(--color-logo)]" size={18} />
              Email: admin@protechcds.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="text-[var(--color-logo)]" size={18} />
              Phone: (619) 860-0305
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="text-[var(--color-logo)]" size={18} />
              Address: 9187 Claremont Mesa Blvd, #6-566, San Diego, CA 92123
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="p-2 rounded-full bg-[#111] hover:bg-[var(--color-logo)] hover:text-black transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-[#111] hover:bg-[var(--color-logo)] hover:text-black transition"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#222]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.3609305373584!2d-117.13715!3d32.83212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbff44f1f0b2db%3A0xaaa!2s9187%20Claremont%20Mesa%20Blvd%20%236-566%2C%20San%20Diego%2C%20CA%2092123!5e0!3m2!1sen!2sus!4v0000000000000!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Final Note */}
          <p className="text-sm text-gray-400">
            Final Note: Expect a response within 24 hours. For urgent projects,
            call us directly.
          </p>
        </motion.div>
      </div>

      {/* Site-wide section */}
      <div className="border-t border-[#222] pt-8 pb-6 text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#client-portal">Client Portal</a>
          <a href="#contact">Contact</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-of-service">Terms of Service</a>
        </div>

        <p className="text-gray-500 text-xs mt-4">
          Copyright: 2025 ProTech CDS. All rights reserved.
        </p>

        <p className="text-[var(--color-logo)] text-sm font-semibold mt-2">
          Empowering Contractors with Al-Driven Fire Protection Excellence |
          Complete Design System
        </p>
      </div>
    </section>
  );
};

export default ContactUsSection;
