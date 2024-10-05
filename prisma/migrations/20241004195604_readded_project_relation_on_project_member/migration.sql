-- AlterTable
ALTER TABLE "ProjectMember" ADD COLUMN     "projectId" INTEGER DEFAULT 1;

-- AddForeignKey
ALTER TABLE "ProjectMember" ADD CONSTRAINT "ProjectMember_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
