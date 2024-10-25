/*
  Warnings:

  - You are about to drop the `PageContent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PageContent";

-- CreateTable
CREATE TABLE "MusicFeature" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "cover" TEXT,
    "iframe" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "MusicFeature_pkey" PRIMARY KEY ("id")
);
