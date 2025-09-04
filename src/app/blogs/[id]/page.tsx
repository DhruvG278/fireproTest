"use client";
import { blogs } from "@/dummyData/data";
import { useParams } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "@/components/common/Spinner";
import DOMPurify from "isomorphic-dompurify";
import { ThumbnailType } from "@/types/blog";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [currentBlog, setCurrentBlog] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const blog = blogs.find((b) => String(b.id) === String(id)); // ensure type-safe matching
  if (!blog)
    return (
      <p className="text-center py-20 text-[var(--color-text)]">
        Blog not found
      </p>
    );

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
  const renderBlogThumbnail = (data: ThumbnailType) => {
    if (data.type === "image") {
      return (
        <motion.img
          src={data.url}
          alt="Blog Thumbnail"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full h-auto rounded-3xl shadow-2xl mb-12 hover:shadow-[0_0_25px_var(--color-logo)] hover:scale-[1.01] transition-all duration-500"
        />
      );
    }
    if (data.type === "video") {
      console.log("data", data);
      return (
        <iframe
          src={data.url}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video rounded-2xl"
        ></iframe>
      );
    }
  };

  const renderContent = (block: any, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.001 }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(block.value),
            }}
            className=" text-lg md:text-lg leading-relaxed tracking-wide [&>h1]:text-3xl [&>h1]:font-bold 
              [&>h2]:text-2xl [&>h2]:font-semibold
              [&>h3]:text-xl [&>h3]:font-medium
              [&>ol]:list-disc [&>ol]:mb-2  [&>p]:text-text-primary
              [&>ul]:list-disc [&>ul]:ml-6 [&>li]:!text-lg"
          />
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
  if (loading) {
    return <Spinner />;
  }
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
        {blog.thumbnail && renderBlogThumbnail(blog.thumbnail)}

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
