"use server";
import prisma from "@/db";

export const getAllVideos = async () => {
  try {
    const allVideos = await prisma.videos.findMany();
    return allVideos ?? [];
  } catch (error) {
    console.log("error retrieving all media==>", error);
  }
};
