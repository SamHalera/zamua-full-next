-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "creditId" INTEGER;

-- CreateTable
CREATE TABLE "Credit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Credit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_creditId_fkey" FOREIGN KEY ("creditId") REFERENCES "Credit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
