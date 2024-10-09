"use server";
import { MusicFeatureFormType } from "@/components/admin/musicFeature/MusicFeatureForm";

import prisma from "@/db";
import { MusicFeature } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getMusicFeatures = async () => {
  console.log("inside action");

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
    console.log("musicFeature==>", musicFeature);
    const existingMusicFeature = await getMusicFeatures();
    if (musicFeature.length === 0) {
      console.log("delete all");

      await prisma.musicFeature.deleteMany({});
    } else if (
      existingMusicFeature &&
      existingMusicFeature?.length > musicFeature.length
    ) {
      //remove
      console.log("remove");
      await removeMusicFeaturesOnUpdate(data, existingMusicFeature);
    }

    for (const item of musicFeature) {
      item.priority = parseFloat(item.priority.toString());
      if (item.id === 0) {
        const { id, ...musicFeatureToPersists } = item;
        const itemCreated = await prisma.musicFeature.create({
          data: musicFeatureToPersists,
        });
      } else {
        console.log("item to update");
        const itemUpdated = await prisma.musicFeature.update({
          where: {
            id: item.id,
          },
          data: item,
        });
      }
    }

    revalidatePath("/admin/music");
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
    const musicFeatureToRemove = existingMusicFeature
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
