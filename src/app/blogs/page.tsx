"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "@/utils/images";

interface Blog {
  id: number;
  title: string;
  image: string;
  date: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title:
      "ProTech Insights: AI-Enhanced Fire Protection for TSMC Arizona Fab Expansion",
    image: images.BLOG1,
    date: "2025-08-25",
  },
  {
    id: 2,
    title: "How AI Optimizes Fire Protection Design in Hazardous Environments",
    image: images.BLOG1,
    date: "2025-07-10",
  },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const filteredBlogs = blogs
    .filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "newest")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sort === "oldest")
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sort === "az") return a.title.localeCompare(b.title);
      if (sort === "za") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div className="min-h-screen bg-[var(--color-primary)] text-[var(--color-text)] px-6 py-12 flex flex-col items-center">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-[var(--color-logo)] mb-12 text-center tracking-wide"
      >
        ProTech Insights Blog
      </motion.h1>

      {/* Search + Sort */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12 max-w-6xl">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-5 py-3 rounded-lg bg-[#111]/70 border border-[var(--color-logo)] text-[var(--color-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-logo)] transition"
        />

        {/* Sort Dropdown */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-5 py-3 rounded-lg border border-[var(--color-logo)] bg-[#111]/70 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-logo)] cursor-pointer"
        >
          <option value="newest">📅 Date: Newest</option>
          <option value="oldest">📅 Date: Oldest</option>
          <option value="az">🔤 Title: A → Z</option>
          <option value="za">🔤 Title: Z → A</option>
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {filteredBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#111]/80 border border-[var(--color-logo)] shadow-lg rounded-2xl overflow-hidden hover:shadow-[0_0_25px_var(--color-logo)] transition-all duration-300 cursor-pointer"
          >
            <div className="overflow-hidden">
              <motion.img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover rounded-t-2xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[var(--color-logo)] mb-2 line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-400">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
