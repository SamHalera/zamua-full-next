-- CreateTable
CREATE TABLE "Show" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "venue" TEXT NOT NULL,
    "venueUrl" TEXT,
    "location" TEXT NOT NULL,
    "locationUrl" TEXT,
    "ticketsUrl" TEXT,

    CONSTRAINT "Show_pkey" PRIMARY KEY ("id")
);
