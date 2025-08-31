"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { blogs } from "@/dummyData/data";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const navigation = useRouter();
  const [allBlogs, setAllBlogs] = useState(blogs);

  const blogsPerPage = 12;

  // filter + sort
  const filteredBlogs = allBlogs
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

  // pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );
  const fetchAllBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setAllBlogs(response.data.blogs);
    } catch (error) {
      toast.error("Failed to fetch blogs");
    }
  };
  return (
    <div className="min-h-screen bg-[var(--color-primary)] text-[var(--color-text)] px-6 py-12 flex flex-col items-center">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-[var(--color-logo)] mb-12 text-center tracking-wide"
      >
        ProTech Insights
      </motion.h1>

      {/* Search + Sort */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12 max-w-6xl">
        <input
          type="text"
          placeholder="🔍 Search blogs..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset page on search
          }}
          className="w-full md:w-1/2 px-5 py-3 rounded-lg bg-[#111]/70 border border-[var(--color-logo)] text-[var(--color-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-logo)] transition"
        />

        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setCurrentPage(1); // reset page on sort
          }}
          className="px-5 py-3 rounded-lg border border-[var(--color-logo)] bg-[#111]/70 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-logo)] cursor-pointer"
        >
          <option value="newest">📅 Date: Newest</option>
          <option value="oldest">📅 Date: Oldest</option>
          <option value="az">🔤 Title: A → Z</option>
          <option value="za">🔤 Title: Z → A</option>
        </select>
      </div>
      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
        {currentBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => navigation.push(`/blogs/${blog.id}`)}
            className="bg-[#111]/80 border border-[var(--color-logo)] shadow-lg rounded-2xl overflow-hidden hover:shadow-[0_0_25px_var(--color-logo)] transition-all duration-300 cursor-pointer"
          >
            <div className="overflow-hidden">
              <motion.img
                src={blog.thumbnail}
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
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center gap-3 mt-12">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 rounded-lg border border-[var(--color-logo)] disabled:opacity-40"
          >
            ⬅ Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg border border-[var(--color-logo)] ${
                currentPage === i + 1
                  ? "bg-[var(--color-logo)] text-black font-bold"
                  : "bg-[#111]/70 text-[var(--color-text)]"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 rounded-lg border border-[var(--color-logo)] disabled:opacity-40"
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
}
