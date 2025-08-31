"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BlogType } from "@/types/blog"; // assuming you keep interface in types
import { Input } from "@/components/common/Input";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import ThemedDatePicker from "@/components/common/DatePicker";
import DOMPurify from "dompurify";
import axios from "axios";

// ✅ dynamically import ReactQuill (no SSR)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const BlogCreateForm = ({
  isCreate,
  blogData,
}: {
  isCreate: boolean;
  blogData?: BlogType;
}) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [blog, setBlog] = useState<Omit<BlogType, "id">>({
    title: blogData?.title ?? "",
    thumbnail: blogData?.thumbnail ?? "",
    date: blogData?.date ?? "",
    content: blogData?.content ?? [],
  });

  const [error, setError] = useState("");

  // Add new block
  const addContentBlock = (type: BlogType["content"][0]["type"]) => {
    setBlog((prev) => ({
      ...prev,
      content: [...prev.content, { type, value: "" }],
    }));
  };

  // Update block value
  const updateBlock = (index: number, value: any) => {
    const updated = [...blog.content];
    updated[index].value = value;
    setBlog((prev) => ({ ...prev, content: updated }));
  };

  // Remove block
  const removeBlock = (index: number) => {
    const updated = [...blog.content];
    updated.splice(index, 1);
    setBlog((prev) => ({ ...prev, content: updated }));
  };

  const handleSubmit = async () => {
    if (!blog.title.trim()) {
      setError("Title is required");
      return;
    }
    if (!blog.date) {
      setError("Date is required");
      return;
    }
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", blog.title);
      formData.append("date", blog.date);

      // Thumbnail
      if (blog.thumbnail instanceof File) {
        formData.append("thumbnail", blog.thumbnail); // file
      } else if (typeof blog.thumbnail === "string" && blog.thumbnail) {
        formData.append("thumbnail", blog.thumbnail); // keep existing URL
      }

      // Serialize contents but keep files separate
      const contentPayload: any[] = [];
      blog.content.forEach((block, index) => {
        if (block.type === "image") {
          if (block.value instanceof File) {
            // Attach file
            const key = `content-file-${index}`;
            formData.append(key, block.value);
            contentPayload.push({ type: "image", value: key }); // mark reference
          } else {
            contentPayload.push({ type: "image", value: block.value }); // existing URL
          }
        } else {
          // paragraph, video, list, etc.
          contentPayload.push({ type: block.type, value: block.value });
        }
      });

      formData.append("contents", JSON.stringify(contentPayload));
      if (isCreate) {
        const res = await axios.post("/api/Blog", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        if (!blogData?.id) throw new Error("Blog ID is missing for update");
        formData.append("id", blogData?.id);
        const res = await axios.put(`/api/blog/${blogData?.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      // console.log("Blog saved:", result);

      router.push("/dashboard"); // redirect after save
    } catch (err) {
      console.error(err);
      setError("Failed to save blog");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 flex flex-col gap-5">
      <h2 className="text-2xl font-bold mb-6 text-logo">
        {isCreate ? "Create" : "Edit"} Blog
      </h2>

      {/* Blog Title */}
      <div>
        <Input
          type="text"
          placeholder="Title"
          label="Blog Title"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          className="w-full border p-3 rounded mb-4"
        />
      </div>

      <div className="w-full">
        <p className="text-text-primary mb-1">Blog date</p>
        {/* Blog Date */}
        <ThemedDatePicker
          value={blog.date ? new Date(blog.date) : null}
          onChange={(date) =>
            setBlog({ ...blog, date: date ? date.toISOString() : "" })
          }
        />
      </div>

      {/* Thumbnail */}
      <Input
        type="file"
        label="Thumbnail"
        onChange={(e) =>
          setBlog({ ...blog, thumbnail: (e.target as HTMLInputElement).value })
        }
        className="w-full border p-3 rounded mb-6"
      />

      {/* Content Blocks */}
      <div className="space-y-4">
        {blog.content.map((block, index) => (
          <div key={index} className="border py-4 rounded bg-primary">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold capitalize text-text-primary">
                {block.type}
              </p>
              <button
                type="button"
                onClick={() => removeBlock(index)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>

            {mounted && block.type === "paragraph" && (
              <ReactQuill
                theme="snow"
                value={block.value}
                onChange={(val) => updateBlock(index, val)}
                className="bg-white text-black rounded"
                placeholder="Write your paragraph here..."
              />
            )}

            {block.type === "image" && (
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        updateBlock(index, reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full border p-2 rounded text-text-primary"
                />
                {block.value && (
                  <img
                    src={block.value}
                    alt="Uploaded preview"
                    className="max-h-60 rounded shadow"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Content Buttons */}
      <div className="flex gap-3 mt-6">
        <button
          type="button"
          onClick={() => addContentBlock("paragraph")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          + Paragraph
        </button>
        <button
          type="button"
          onClick={() => addContentBlock("image")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          + Image
        </button>
      </div>

      {/* Error */}
      {error && <p className="text-red-600 mt-4">{error}</p>}

      {/* Submit */}
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full mt-6 bg-logo text-white py-3 rounded font-semibold cursor-pointer"
      >
        Submit Blog
      </button>
    </div>
  );
};

export default BlogCreateForm;
