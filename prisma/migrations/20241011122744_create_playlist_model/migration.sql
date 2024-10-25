-- CreateTable
CREATE TABLE "Playlist" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "iframe" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);
