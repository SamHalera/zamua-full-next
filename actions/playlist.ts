"use server";
import prisma from "@/db";

export const getPlaylists = async () => {
  try {
    const playlists = await prisma.playlist.findMany();

    return playlists;
  } catch (error) {
    console.log("error finding playlists==>", error);
  }
};

export const gePlaylistBySlug = async (slug: string) => {
  try {
    const playlist = await prisma.playlist.findFirst({
      where: { slug },
    });
    return playlist;
  } catch (error) {
    console.log("error finding playlists==>", error);
  }
};
