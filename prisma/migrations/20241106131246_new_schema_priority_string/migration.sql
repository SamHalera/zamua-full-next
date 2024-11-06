-- AlterTable
ALTER TABLE "MusicFeature" ALTER COLUMN "priority" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Playlist" ALTER COLUMN "priority" SET DEFAULT '1',
ALTER COLUMN "priority" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "priority" SET DEFAULT '1',
ALTER COLUMN "priority" SET DATA TYPE TEXT;
