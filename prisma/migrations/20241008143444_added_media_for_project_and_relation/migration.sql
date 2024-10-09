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
ALTER TABLE "Media" ADD CONSTRAINT "Media_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
