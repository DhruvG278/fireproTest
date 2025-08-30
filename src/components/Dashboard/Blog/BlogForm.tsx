"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BlogType } from "@/types/blog"; // assuming you keep interface in types
import { Input } from "@/components/common/Input";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import ThemedDatePicker from "@/components/common/DatePicker";

const BlogCreateForm = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [blog, setBlog] = useState<Omit<BlogType, "id">>({
    title: "",
    thumbnail: "",
    date: "", // user will set this
    content: [],
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

    console.log("Blog submitted:", blog);

    // Example API call (id will be generated in backend)
    // await axios.post("/api/blogs", blog);

    router.push("/blogs"); // Redirect after save
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 flex flex-col gap-5">
      <h2 className="text-2xl font-bold mb-6 text-logo">Create Blog</h2>

      {/* Blog Title */}
      <Input
        type="text"
        placeholder="Blog Title"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        className="w-full border p-3 rounded mb-4"
      />

      <div className="w-full">
        <p className="text-text-primary">Blog date</p>
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
