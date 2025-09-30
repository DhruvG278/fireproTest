import { prisma } from "@/lib/primsa";
import { NextResponse } from "next/server";

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
