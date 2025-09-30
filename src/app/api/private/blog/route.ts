import { prisma } from "@/lib/primsa";
import { NextResponse } from "next/server";
import { generateUniqueId, s3, uploadToS3 } from "@/utils/helper";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const date = formData.get("date") as string;

    const thumbnailType = formData.get("thumbnailType") as "image" | "video";

    let mediaId: string | null = null;
    console.log("thumbnailType", thumbnailType);
    if (thumbnailType === "image") {
      const file = formData.get("thumbnail") as File | null;
      if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const fileName = `blogs/${Date.now()}-${file.name}`;

        const uploadParams = {
          Bucket: process.env.AWS_S3_BUCKET!,
          Key: fileName,
          Body: buffer,
          ContentType: file.type,
        };
        await s3.send(new PutObjectCommand(uploadParams));
        const uploadedUrl = fileName;

        const media = await prisma.media.create({
          data: {
            url: uploadedUrl,
            type: "image",
          },
        });
        mediaId = media.id;
      }
    } else if (thumbnailType === "video") {
      const videoURL = formData.get("thumbnailURL") as string;
      const thumbnailFile = formData.get("videoThumbnail") as File;
      let uploadedUrl = null;
      if (videoURL) {
        if (thumbnailFile) {
          const bytes = await thumbnailFile.arrayBuffer();
          const buffer = Buffer.from(bytes);

          const fileName = `blogs/${Date.now()}-${thumbnailFile.name}`;

          const uploadParams = {
            Bucket: process.env.AWS_S3_BUCKET!,
            Key: fileName,
            Body: buffer,
            ContentType: thumbnailFile.type,
          };
          await s3.send(new PutObjectCommand(uploadParams));
          uploadedUrl = fileName;
        }
        const media = await prisma.media.create({
          data: {
            url: videoURL,
            type: "video",
            thumbnail: uploadedUrl, // you can generate a video thumbnail if needed
          },
        });
        mediaId = media.id;
      }
    }
    console.log("mediaId", mediaId);
    const contents: any[] = [];
    const contentKeys = Array.from(formData.keys()).filter((k) =>
      k.startsWith("contents[")
    );

    // Extract all content blocks
    const blockIndices = Array.from(
      new Set(contentKeys.map((k) => k.match(/contents\[(\d+)\]/)?.[1]))
    ).sort((a, b) => Number(a) - Number(b));

    for (const index of blockIndices) {
      const type = formData.get(`contents[${index}][type]`) as string;

      if (type === "image") {
        const file = formData.get(`contents[${index}][file]`) as File | null;
        if (file) {
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);

          const fileName = `blogs/${Date.now()}-${file.name}`;

          const uploadParams = {
            Bucket: process.env.AWS_S3_BUCKET!,
            Key: fileName,
            Body: buffer,
            ContentType: file.type,
          };
          await s3.send(new PutObjectCommand(uploadParams));
          contents.push({ type: "image", value: fileName });
        }
      } else {
        const value = formData.get(`contents[${index}][value]`) as string;
        contents.push({ type, value });
      }
    }
    console.log("content", contents);

    const blog = await prisma.blog.create({
      data: {
        title,
        date: new Date(date),
        thumbnailId: mediaId, // link to Media
        contents: {
          create: contents.map((c: any, i: number) => ({
            type: c.type,
            value: c.value,
            orderIndex: i,
          })),
        },
      },
      include: { contents: true, thumbnail: true },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error: any) {
    console.error("Blog create error:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      include: { contents: true, thumbnail: true },
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
