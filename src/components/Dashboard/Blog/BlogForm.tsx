"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BlogType } from "@/types/blog"; // assuming you keep interface in types
import { Input } from "@/components/common/Input";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import ThemedDatePicker from "@/components/common/DatePicker";
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
    thumbnail: blogData?.thumbnail,
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
    if (!blog.thumbnail?.url) {
      setError("Thumbnail is required");
      return;
    }
    setError("");
    console.log(blog);

    // Example API call structure
    try {
      const formData = new FormData();
      formData.append("title", blog.title);
      formData.append("date", blog.date);

      // Handle Thumbnail
      if (blog.thumbnail?.type === "image") {
        // If it's a base64 string, you may need to handle file separately
        formData.append("thumbnailType", "image");
        formData.append("thumbnailUrl", blog.thumbnail.url);
      } else if (blog.thumbnail?.type === "video") {
        formData.append("thumbnailType", "video");
        formData.append("thumbnailUrl", blog.thumbnail.url);
      }

      // Serialize contents
      const contentPayload: any[] = blog.content.map((block) => ({
        type: block.type,
        value: block.value,
      }));
      formData.append("contents", JSON.stringify(contentPayload));

      if (isCreate) {
        await axios.post("/api/blog", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        if (!blogData?.id) throw new Error("Blog ID is missing for update");
        formData.append("id", blogData?.id);
        await axios.put(`/api/blog/${blogData?.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      router.push("/dashboard");
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

      {/* Blog Date */}
      <div className="w-full">
        <p className="text-text-primary mb-1">Blog date</p>
        <ThemedDatePicker
          value={blog.date ? new Date(blog.date) : null}
          onChange={(date) =>
            setBlog({ ...blog, date: date ? date.toISOString() : "" })
          }
        />
      </div>

      {/* Thumbnail */}
      <div className="w-full text-text-primary">
        <p className="text-text-primary mb-1">Thumbnail</p>
        <div className="flex items-center gap-4 mb-3">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="thumbnailType"
              value="image"
              checked={blog.thumbnail?.type === "image"}
              onChange={() =>
                setBlog({ ...blog, thumbnail: { type: "image", url: "" } })
              }
            />
            Image
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="thumbnailType"
              value="video"
              checked={blog.thumbnail?.type === "video"}
              onChange={() =>
                setBlog({ ...blog, thumbnail: { type: "video", url: "" } })
              }
            />
            Video
          </label>
        </div>

        {/* Image Thumbnail */}
        {blog.thumbnail?.type === "image" && (
          <div className="flex flex-col gap-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    setBlog({
                      ...blog,
                      thumbnail: {
                        type: "image",
                        url: reader.result as string,
                      },
                    });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="w-full border p-2 rounded"
            />
            {blog.thumbnail?.url && (
              <img
                src={blog.thumbnail.url}
                alt="Thumbnail Preview"
                className="max-h-60 rounded shadow"
              />
            )}
          </div>
        )}

        {/* Video Thumbnail */}
        {blog.thumbnail?.type === "video" && (
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter video URL (e.g., YouTube)"
              value={blog.thumbnail?.url || ""}
              onChange={(e) =>
                setBlog({
                  ...blog,
                  thumbnail: { type: "video", url: e.target.value },
                })
              }
              className="w-full border p-2 rounded"
            />
            {blog.thumbnail?.url && (
              <iframe
                src={blog.thumbnail.url.replace("watch?v=", "embed/")}
                className="w-full aspect-video rounded"
                allowFullScreen
              />
            )}
          </div>
        )}
      </div>

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
