/*
  Warnings:

  - Added the required column `name` to the `PageContent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PageContent" ADD COLUMN     "name" TEXT NOT NULL;
