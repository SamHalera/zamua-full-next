"use server";
import prisma from "@/db";

export const getAllMedia = async () => {
  try {
    const allMedia = await prisma.media.findMany();
    return allMedia ?? [];
  } catch (error) {
    console.log("error retrieving all media==>", error);
  }
};
export const getAllMediaGallery = async () => {
  try {
    const allMediaGallery = await prisma.media.findMany({
      where: { isGalleryItem: true },
    });
    return allMediaGallery ?? [];
  } catch (error) {
    console.log("error retrieving all media==>", error);
  }
};
