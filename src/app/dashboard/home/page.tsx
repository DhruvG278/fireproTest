"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { images } from "@/utils/images";

interface Blog {
  id: number;
  title: string;
  image: string;
  date: string; // ISO format
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
  {
    id: 3,
    title: "Fire Safety Innovations: The Role of AI in Risk Assessment",
    image: images.BLOG1,
    date: "2025-06-12",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const filteredBlogs = blogs
    .filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
    .filter((blog) => {
      if (startDate && new Date(blog.date) < new Date(startDate)) return false;
      if (endDate && new Date(blog.date) > new Date(endDate)) return false;
      return true;
    })
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
    <div className="min-h-screen bg-[var(--color-primary)] text-[var(--color-text)] px-6 py-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-[var(--color-logo)] mb-10 text-center"
      >
        All Blogs
      </motion.h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between max-w-6xl mx-auto mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-[#111]/70 border border-[var(--color-logo)] placeholder:text-gray-400 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-logo)]"
        />

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 rounded-lg border border-[var(--color-logo)] bg-[#111]/70 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-logo)]"
        >
          <option value="newest">📅 Date: Newest</option>
          <option value="oldest">📅 Date: Oldest</option>
          <option value="az">🔤 Title: A → Z</option>
          <option value="za">🔤 Title: Z → A</option>
        </select>

        {/* Date Range */}
        <div className="flex gap-4 items-center">
          <input
            type="date"
            value={startDate}
            ref={startDateRef}
            onClick={() => startDateRef.current?.showPicker()}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-3 cursor-pointer py-2 rounded-lg border border-[var(--color-logo)] bg-[#111]/70 text-[var(--color-text)] placeholder:text-text-primary"
          />
          <span>to</span>
          <input
            type="date"
            value={endDate}
            ref={endDateRef}
            onClick={() => endDateRef.current?.showPicker()}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-3 cursor-pointer py-2 rounded-lg border border-[var(--color-logo)] bg-[#111]/70 text-[var(--color-text)] placeholder:text-text-primary"
          />
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="w-full border-collapse rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-[var(--color-logo)] text-black text-left">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Thumbnail</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <motion.tr
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-700 hover:bg-[#222] transition"
                >
                  <td className="px-6 py-4">{blog.id}</td>
                  <td className="px-6 py-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-12 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4">{blog.title}</td>
                  <td className="px-6 py-4">
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-6 text-gray-400 italic"
                >
                  No blogs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
