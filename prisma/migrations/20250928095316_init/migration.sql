/*
  Warnings:

  - You are about to drop the column `thumbnail` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnailType` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Blog" DROP COLUMN "thumbnail",
DROP COLUMN "thumbnailType",
ADD COLUMN     "thumbnailId" TEXT;

-- AlterTable
ALTER TABLE "public"."Media" ADD COLUMN     "thumbnail" TEXT;

-- DropEnum
DROP TYPE "public"."ThumbnailType";

-- AddForeignKey
ALTER TABLE "public"."Blog" ADD CONSTRAINT "Blog_thumbnailId_fkey" FOREIGN KEY ("thumbnailId") REFERENCES "public"."Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
