"use client";

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "@/utils/images";

const testimonials = [
  {
    quote:
      "Can you please provide a proposal for the following design and counts. This is a design build, so now cad files but we’ve laid it out on this drawing. Also, I just wanted to say that we really appreciate how quickly you get these proposals back to me and then get the drawings completed. Its really been the differentiating factor to the company we use. Due the time difference and location, we’ve struggled with the time difference communication and response factor.Keep up the awsome work that you and your team are doing! Regards",
    author: "Senior Project Manager",
    company: "Major General Contractor",
    image: images.PROFILE3, // ✅ your testimonial avatar/logo
  },
  {
    quote:
      "I’m interviewing a guy Friday to help me start an alarm division. Within 6 months we will have something going on that front and I don’t plan on hiring designers. You’ll be my go to design department for alarms 100%.",
    author: "Director of Engineering",
    company: "National Construction Firm",
    image: images.PROFILE2,
  },
  {
    quote:
      "I just wanted to take a moment and thank you for your excellent service. Your quotes and design work have been prompt, cost effective, accurate and completed in a timely manner. I very much appreciate it, and when possible will continue to send work your way. Thank you..",
    author: "Architect",
    company: "Leading Design Group",
    image: images.PROFILE1,
  },
  {
    quote:
      "I think I talked my counterpart area manager in firing their fire alarm designer and switching to you full time. They do way more alarm work than me even.",
    author: "Architect",
    company: "Leading Design Group",
    image: images.PROFILE1,
  },
  {
    quote:
      "FYI, I just sent you ino, along with some examples and references to my boss, VP, branch offices across the US and the corporate Alarm & Detection Manager. I recommended that they send something out to all offices recommending to start using you.",
    author: "Architect",
    company: "Leading Design Group",
    image: images.PROFILE1,
  },
  {
    quote: "Your plans always look great! \n Thank you",
    author: "Architect",
    company: "Leading Design Group",
    image: images.PROFILE1,
  },
  {
    quote:
      "Nope no questions at this time, they just looked really good, so I was continuous, Thank you...",
    author: "Architect",
    company: "Leading Design Group",
    image: images.PROFILE1,
  },
  {
    quote: "I absolutely applaud how you did this! The drawings look great.",
    author: "Architect",
    company: "Leading Design Group",
    image: images.PROFILE1,
  },
  {
    quote:
      "Your company was just plugged in our weekly leadership meeting. Our team in Dallas is speaking very highly about your work and I am hoping we can setup a time to introduce ourselves and reach out some upcoming needs. Our hope is  we can reach out to you with CAD and engineering help in the future.",
    author: "Architect",
    company: "Leading Design Group",
    image: images.PROFILE1,
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: true,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="!m-0"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-[var(--color-logo)] opacity-50 hover:opacity-100 transition-opacity" />
    ),
  };

  return (
    <section className="relative py-16 sm:py-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/assets/building.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-logo)] mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
              className="px-2 sm:px-4 lg:py-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 6px 25px rgba(211,187,68,0.35)",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="bg-black/50 border border-[var(--color-logo)]/40 rounded-2xl shadow-xl p-6 sm:p-8 relative overflow-hidden flex flex-col items-center"
              >
                {/* Avatar / Image */}
                {/* {t.image && (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[var(--color-logo)] mb-4 shadow-md">
                    <Image
                      src={t.image}
                      alt={t.author}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )} */}

                {/* Quote */}
                <p className="text-base sm:text-lg md:text-xl text-white/90 italic leading-relaxed">
                  "{t.quote}"
                </p>

                {/* Author */}
                {/* <div className="mt-6 text-[var(--color-logo)] font-semibold text-sm sm:text-base">
                  — {t.author}, {t.company}
                </div> */}
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Custom slick dots styling */}
      <style jsx global>{`
        .slick-dots {
          bottom: -40px;
        }
        .slick-dots li {
          margin: 0 6px;
        }
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li.slick-active div {
          opacity: 1 !important;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;
