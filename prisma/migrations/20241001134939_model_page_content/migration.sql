-- CreateTable
CREATE TABLE "PageContent" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "bgHero" TEXT NOT NULL,

    CONSTRAINT "PageContent_pkey" PRIMARY KEY ("id")
);
