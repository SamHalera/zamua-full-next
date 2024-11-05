"use server";

import prisma from "@/db";
import { itemsToDelete } from "@/lib/serverActionHelpers";
import { MediaType } from "@/types/types";
import { Media } from "@prisma/client";

export const persistMedia = async (media: MediaType[]) => {
  try {
    const mediaFromDB = await prisma.media.findMany();

    if (media.length === 0) {
      await prisma.media.deleteMany();
    }
    if (mediaFromDB.length > media.length) {
      const mediaToDelete = itemsToDelete(mediaFromDB, media);

      mediaToDelete.forEach(async (item: Media) => {
        await prisma.media.delete({ where: { id: item.id } });
      });
    }

    const mediaToCreate = media.filter((item) => item.id === 0);
    const mediaToUpdate = media.filter((item) => item.id > 0);

    await uploaAndCreatedMedia(mediaToCreate);
    await updateMedia(mediaToUpdate);
    return { success: "Media have been uploaded!" };
  } catch (error) {
    return {
      error: "Something went wrong. Media couldn't be uploaded! Try again!",
    };
  }
};

const uploaAndCreatedMedia = async (media: MediaType[]) => {
  try {
    const mediaToAdd = media.map((elt) => {
      const { id, credit, ...noIdMedia } = elt;
      return noIdMedia;
    });
    await prisma.media.createMany({
      data: mediaToAdd,
    });
    return { success: "Media have been created!" };
  } catch (error) {
    console.log("error uploaAndCreatedMedia ==>", error);
    return { error: "Media couldn't be created. Try again!" };
  }
};

const updateMedia = async (media: MediaType[]) => {
  try {
    media.forEach(async (item) => {
      await prisma.media.update({
        where: { id: item.id },
        data: {
          caption: item.caption,
          isGalleryItem: item.isGalleryItem,
        },
      });
    });
    return { success: "Media have been updated!" };
  } catch (error) {
    console.log("error updateMedia ==>", error);
    return { error: "Media couldn't be updated. Try again!" };
  }
};
