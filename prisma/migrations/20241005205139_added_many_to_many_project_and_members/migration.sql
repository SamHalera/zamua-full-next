/*
  Warnings:

  - You are about to drop the column `projectId` on the `ProjectMember` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProjectMember" DROP CONSTRAINT "ProjectMember_projectId_fkey";

-- AlterTable
ALTER TABLE "ProjectMember" DROP COLUMN "projectId";

-- CreateTable
CREATE TABLE "_ProjectToProjectMember" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToProjectMember_AB_unique" ON "_ProjectToProjectMember"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToProjectMember_B_index" ON "_ProjectToProjectMember"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToProjectMember" ADD CONSTRAINT "_ProjectToProjectMember_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToProjectMember" ADD CONSTRAINT "_ProjectToProjectMember_B_fkey" FOREIGN KEY ("B") REFERENCES "ProjectMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;
