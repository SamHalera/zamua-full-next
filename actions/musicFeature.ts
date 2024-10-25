"use serveur";
import prisma from "@/db";

export const getMusicFeatures = async () => {
  console.log("inside action");

  const musicFeatures = await prisma.musicFeature.findMany();

  if (musicFeatures.length === 0) return null;
  return musicFeatures;
};
