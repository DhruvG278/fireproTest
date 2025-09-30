-- CreateEnum
CREATE TYPE "public"."ContentType" AS ENUM ('paragraph', 'image', 'video');

-- CreateEnum
CREATE TYPE "public"."ThumbnailType" AS ENUM ('image', 'video');

-- CreateEnum
CREATE TYPE "public"."MediaType" AS ENUM ('image', 'video', 'file');

-- CreateTable
CREATE TABLE "public"."Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT,
    "thumbnailType" "public"."ThumbnailType",
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BlogContent" (
    "id" TEXT NOT NULL,
    "type" "public"."ContentType" NOT NULL,
    "value" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,
    "blogId" TEXT NOT NULL,

    CONSTRAINT "BlogContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Media" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "public"."MediaType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."BlogContent" ADD CONSTRAINT "BlogContent_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "public"."Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
