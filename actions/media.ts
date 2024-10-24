"use server";
import prisma from "@/db";
import { MediaType } from "@/types/types";

export const getAllMedia = async () => {
  try {
    const allMedia: MediaType[] = await prisma.media.findMany({
      include: {
        credit: true,
      },
    });
    return allMedia ?? [];
  } catch (error) {
    console.log("error retrieving all media==>", error);
  }
};
export const getAllMediaGallery = async () => {
  try {
    const allMediaGallery = await prisma.media.findMany({
      where: { isGalleryItem: true },
      include: {
        credit: true,
      },
    });
    return allMediaGallery ?? [];
  } catch (error) {
    console.log("error retrieving all media==>", error);
  }
};
