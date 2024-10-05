/*
  Warnings:

  - You are about to drop the column `projectId` on the `ProjectMember` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProjectMember" DROP CONSTRAINT "ProjectMember_projectId_fkey";

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "cover" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProjectMember" DROP COLUMN "projectId";
