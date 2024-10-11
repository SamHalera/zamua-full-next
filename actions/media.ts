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
