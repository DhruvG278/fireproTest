"use client";
import BlogCreateForm from "@/components/Dashboard/Blog/BlogForm";
import { blogs } from "@/dummyData/data";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const BlogEditPage = () => {
  const { id } = useParams();
  const blogData = blogs.find((b) => b.id === id);
  const [loading, setLoading] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(blogData);
  const fetchSingleBlog = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/blog/${id}`);
      setCurrentBlog(response.data.blog);
    } catch (error) {
      toast.error("Failed to fetch blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <BlogCreateForm isCreate={false} blogData={blogData} />
    </div>
  );
};

export default BlogEditPage;
