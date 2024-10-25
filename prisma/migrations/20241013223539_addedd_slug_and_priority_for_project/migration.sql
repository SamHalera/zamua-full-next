-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "slug" TEXT NOT NULL DEFAULT 'my-project';
