"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { blogs } from "@/dummyData/data";
import { MoreVertical } from "lucide-react"; // for 3 dots icon
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [actionMenu, setActionMenu] = useState<string>(); // track open menu

  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [allBlogs, setAllBlogs] = useState(blogs);
  const router = useRouter();
  const blogsPerPage = 12;

  // filter + sort
  const filteredBlogs = allBlogs
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

  // pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  // handlers
  const handleEdit = (id: string) => {
    router.push(`/dashboard/blog/edit/${id}`);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      alert(`Deleted blog ${id}`);
    }
  };

  const fetchAllBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/blog");
      setAllBlogs(response.data.blogs);
    } catch (error) {
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

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
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-[#111]/70 border border-[var(--color-logo)] placeholder:text-gray-400 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-logo)]"
        />

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setCurrentPage(1);
          }}
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
            onChange={(e) => {
              setStartDate(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 cursor-pointer py-2 rounded-lg border border-[var(--color-logo)] bg-[#111]/70 text-[var(--color-text)]"
          />
          <span>to</span>
          <input
            type="date"
            value={endDate}
            ref={endDateRef}
            onClick={() => endDateRef.current?.showPicker()}
            onChange={(e) => {
              setEndDate(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 cursor-pointer py-2 rounded-lg border border-[var(--color-logo)] bg-[#111]/70 text-[var(--color-text)]"
          />
        </div>
      </div>
      {/* Data Table */}
      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="w-full border-collapse rounded-xl ">
          <thead>
            <tr className="bg-[var(--color-logo)] text-black text-left">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Thumbnail</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog, index) => (
                <motion.tr
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-700 hover:bg-[#222] transition relative"
                >
                  <td className="px-6 py-4">{blog.id}</td>
                  <td className="px-6 py-4">
                    <img
                      src={
                        blog.thumbnail?.type === "image"
                          ? blog.thumbnail.url
                          : blog.thumbnail?.thumbnail
                      }
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
                  <td className="px-6 py-4 relative">
                    <button
                      onClick={() =>
                        setActionMenu(
                          actionMenu === blog.id ? undefined : blog.id
                        )
                      }
                      className="p-2 rounded-full hover:bg-[#333]"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>

                    {actionMenu === blog.id && (
                      <div className="absolute right-6 p-2 mt-2 w-32 bg-[#111] border border-[var(--color-logo)] rounded-lg shadow-lg z-10">
                        <button
                          onClick={() => handleEdit(blog.id ?? "")}
                          className="block w-full text-left px-4 py-2 hover:bg-[#222]"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id ?? "")}
                          className="block w-full text-left px-4 py-2 hover:bg-[#222] text-red-400"
                        >
                          🗑 Delete
                        </button>
                      </div>
                    )}
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-6 text-gray-400 italic"
                >
                  No blogs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center gap-3 justify-center mt-10">
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
