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
