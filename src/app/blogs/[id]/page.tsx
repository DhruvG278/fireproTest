"use client";
import { blogs } from "@/dummyData/data";
import { useParams } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => String(b.id) === String(id)); // ensure type-safe matching
  if (!blog)
    return (
      <p className="text-center py-20 text-[var(--color-text)]">
        Blog not found
      </p>
    );

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" } as any,
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" } as any,
    },
  };

  const renderContent = (block: any, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <motion.p
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="indent-8 text-lg md:text-xl leading-relaxed text-gray-300 tracking-wide"
          >
            {block.value}
          </motion.p>
        );

      case "image":
        return (
          <motion.img
            key={index}
            src={block.value}
            alt="Blog Content"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full h-auto rounded-3xl shadow-lg hover:shadow-[0_0_20px_var(--color-logo)] hover:scale-[1.02] transition-all duration-500"
          />
        );

      case "video":
        return (
          <motion.iframe
            key={index}
            src={block.value}
            title="Video"
            frameBorder="0"
            allowFullScreen
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full h-80 md:h-96 rounded-3xl shadow-lg"
          />
        );

      case "list":
        return (
          <motion.ul
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="list-disc list-inside space-y-2 text-gray-300 pl-6"
          >
            {block.value.map((item: string, i: number) => (
              <li
                key={i}
                className="hover:text-[var(--color-logo)] transition-colors duration-300"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-primary)] text-[var(--color-text)] px-6 py-12">
      <section className="w-full max-w-4xl mx-auto">
        {/* Title + Date */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="relative w-full mb-12 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--color-logo)] mb-6 leading-snug tracking-tight">
            {blog.title}
          </h1>
          <div className="w-20 h-1 bg-[var(--color-logo)] mx-auto rounded-full mb-6"></div>
          <p className="text-sm text-gray-400 italic">
            {new Date(blog.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </motion.div>

        {/* Thumbnail */}
        {blog.thumbnail && (
          <motion.img
            src={blog.thumbnail}
            alt="Blog Thumbnail"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-auto rounded-3xl shadow-2xl mb-12 hover:shadow-[0_0_25px_var(--color-logo)] hover:scale-[1.01] transition-all duration-500"
          />
        )}

        {/* Blog Content */}
        <div className="flex flex-col gap-10 lg:gap-14">
          {blog.content?.map((block, index) => (
            <div key={index}>{renderContent(block, index)}</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
