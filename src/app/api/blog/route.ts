import { prisma } from "@/lib/primsa";
import { NextResponse } from "next/server";
import { generateUniqueId, uploadToS3 } from "@/utils/helper";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const date = formData.get("date") as string;
    const contents = JSON.parse(formData.get("contents") as string);

    const thumbnailFile = formData.get("thumbnail") as File | null;

    let thumbnailUrl: string | null = null;
    if (thumbnailFile) {
      thumbnailUrl = await uploadToS3(thumbnailFile);
    }

    const processedContents = await Promise.all(
      contents.map(async (c: any, index: number) => {
        if (c.type === "image" && c.file) {
          const url = await uploadToS3(c.file); // file must be appended in formData
          return {
            id: generateUniqueId(),
            type: "image",
            value: url,
            orderIndex: index + 1,
          };
        }
        return {
          id: generateUniqueId(),
          type: c.type,
          value: c.value,
          orderIndex: index + 1,
        };
      })
    );

    const blog = await prisma.$transaction(async (tx) => {
      return tx.blog.create({
        data: {
          title,
          id: generateUniqueId(),
          thumbnail: thumbnailUrl,
          date: new Date(date),
          contents: { create: processedContents },
        },
        include: { contents: true },
      });
    });

    return NextResponse.json({ success: true, blog }, { status: 200 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      include: { contents: true },
    });
    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to retrieve blogs" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    const blog = await prisma.blog.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, blog }, { status: 200 });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
