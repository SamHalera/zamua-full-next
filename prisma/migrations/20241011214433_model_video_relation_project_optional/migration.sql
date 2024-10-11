-- CreateTable
CREATE TABLE "Videos" (
    "id" SERIAL NOT NULL,
    "iframe" TEXT NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 1,
    "projectId" INTEGER,

    CONSTRAINT "Videos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Videos" ADD CONSTRAINT "Videos_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
