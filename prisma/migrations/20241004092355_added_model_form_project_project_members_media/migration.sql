-- CreateEnum
CREATE TYPE "TypeOfMedia" AS ENUM ('PHOTO', 'VIDEO');

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "fullTitle" TEXT NOT NULL,
    "primaryTitleString" TEXT NOT NULL,
    "secondaryTitleString" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectMember" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "ProjectMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "type" "TypeOfMedia" NOT NULL,
    "source" TEXT NOT NULL,
    "priority" INTEGER,
    "projectId" INTEGER,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectMember" ADD CONSTRAINT "ProjectMember_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
