"use server";

import prisma from "@/db";
import { itemsToDelete } from "@/lib/serverActionhepelrs";
import { Media } from "@prisma/client";

export const persistMedia = async (media: Media[]) => {
  try {
    console.log("media from form inside action==>", media);

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

const uploaAndCreatedMedia = async (media: Media[]) => {
  try {
    console.log("mediaToCreate==>", media);
    const mediaToAdd = media.map((elt) => {
      const { id, ...noIdMedia } = elt;
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

const updateMedia = async (media: Media[]) => {
  try {
    console.log("mediaToUpdate==>", media);
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
