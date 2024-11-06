"use server";
import { MusicFeatureFormType } from "@/components/admin/musicFeature/MusicFeatureForm";

import prisma from "@/db";
import { MusicFeatureType } from "@/types/types";
import { MusicFeature } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getMusicFeatures = async () => {
  const musicFeatures = await prisma.musicFeature.findMany({
    orderBy: {
      priority: "asc",
    },
  });

  if (musicFeatures.length > 0) return musicFeatures;
  return null;
};

export const createOrUpdateMusicFeatures = async (
  data: MusicFeatureFormType
) => {
  try {
    const { musicFeature } = data;

    const existingMusicFeature = await getMusicFeatures();
    if (musicFeature.length === 0) {
      await prisma.musicFeature.deleteMany({});
    } else if (
      existingMusicFeature &&
      existingMusicFeature?.length > musicFeature.length
    ) {
      await removeMusicFeaturesOnUpdate(data, existingMusicFeature);
    }

    for (const item of musicFeature) {
      item.title = item.title.trim();

      if (item.id === 0) {
        const { id, ...musicFeatureToPersists } = item;

        await prisma.musicFeature.create({
          data: musicFeatureToPersists,
        });
      } else {
        await prisma.musicFeature.update({
          where: {
            id: item.id,
          },
          data: item,
        });
      }
    }

    revalidatePath("/admin/music");
    return { success: "Album list has been updated!" };
  } catch (error) {
    console.error("Error Music Feature create", error);
    return { error: "Oups something went wrong" };
  }
};

const removeMusicFeaturesOnUpdate = async (
  dataToPersist: MusicFeatureFormType,
  existingMusicFeature: MusicFeature[] | null
) => {
  if (existingMusicFeature && existingMusicFeature?.length > 0) {
    existingMusicFeature
      .filter(
        (obj1) =>
          !dataToPersist.musicFeature.some((obj2) => obj2.id === obj1.id)
      )
      .forEach(async (item) => {
        await prisma.musicFeature.delete({
          where: {
            id: item.id,
          },
        });
      });
  }
};
