import { prisma } from "@/lib/primsa";
import { uploadToS3 } from "@/utils/helper";
import { NextResponse } from "next/server";

type Params = Promise<{ id: string }>;

export async function GET(req: Request, context: { params: Params }) {
  try {
    const { id } = await context.params;

    const blog = await prisma.blog.findUnique({
      where: { id },
      include: { contents: true },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to retrieve blog" },
      { status: 500 }
    );
  }
}

// export async function PUT(req: Request) {
//   try {
//     const formData = await req.formData();
//     const id = formData.get("id") as string;
//     const title = formData.get("title") as string;
//     const date = formData.get("date") as string;

//     // Thumbnail could be an existing URL or a new file
//     let thumbnail = formData.get("thumbnail") as string | File;
//     if (thumbnail instanceof File) {
//       thumbnail = await uploadToS3(thumbnail);
//     }

//     // Contents can have JSON + files
//     const rawContents = JSON.parse(formData.get("contents") as string) as any[];

//     // Replace file references with uploaded URLs
//     const contents = await Promise.all(
//       rawContents.map(async (c, index) => {
//         if (c.type === "image" && c.value instanceof File) {
//           const url = await uploadToS3(c.value);
//           return { type: "image", value: url, orderIndex: index + 1 };
//         } else {
//           return { ...c, orderIndex: index + 1 };
//         }
//       })
//     );

//     const blog = await prisma.$transaction(async (tx) => {
//       // Clear old contents
//       await tx.blogContent.deleteMany({ where: { blogId: id } });

//       // Update blog
//       return await tx.blog.update({
//         where: { id },
//         data: {
//           title,
//           id,
//           thumbnail: thumbnail as string,
//           date: new Date(date),
//           contents: {
//             create: contents,
//           },
//         },
//         include: { contents: true },
//       });
//     });

//     return NextResponse.json({ success: true, blog }, { status: 200 });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { error: "Failed to update blog" },
//       { status: 500 }
//     );
//   }
// }
