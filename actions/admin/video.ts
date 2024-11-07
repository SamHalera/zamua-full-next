"use server";

import prisma from "@/db";
import { itemsToDelete } from "@/lib/serverActionHelpers";
import { Videos } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createOrUpdateVideos = async (videos: Videos[]) => {
  try {
    const existingVideos = await prisma.videos.findMany();

    if (videos.length === 0) {
      await prisma.videos.deleteMany();
    } else {
      if (existingVideos.length > videos.length) {
        const videosToDelete = itemsToDelete(existingVideos, videos);

        videosToDelete.forEach(async (item: Videos) => {
          await prisma.videos.delete({
            where: { id: item.id },
          });
        });
      }
    }

    const videosToCreate = videos.filter((item) => item.id === 0);
    const videosToUpdate = videos.filter((item) => item.id > 0);

    const responseCreate = await createVideos(videosToCreate);
    const responseUpdate = await updateVideos(videosToUpdate);
    if (responseCreate.error || responseUpdate.error) {
      return {
        error: "Something went wrong. Videos couldn't be uploaded! Try again!",
      };
    } else {
      revalidatePath("/admin/media/videos");
      return { success: "Videos have been uploaded!" };
    }
  } catch (error) {
    return {
      error: "Something went wrong. Videos couldn't be uploaded! Try again!",
    };
  }
};

const createVideos = async (videos: Videos[]) => {
  try {
    const videosWithoutIDs = videos.map((item) => {
      const { id, ...noIdVideo } = item;

      return noIdVideo;
    });
    await prisma.videos.createMany({
      data: videosWithoutIDs,
    });
    revalidatePath("/admin/media/videos");
    return { success: "Videos have been Created!" };
  } catch (error) {
    console.log("error creation videos==>", error);
    return {
      error: "Something went wrong. Videos couldn't be creted! Try again!",
    };
  }
};

const updateVideos = async (videos: Videos[]) => {
  try {
    videos.forEach(async (item) => {
      await prisma.videos.update({
        where: { id: item.id },
        data: item,
      });
    });
    revalidatePath("/admin/media/videos");
    return { success: "Videos have been updated!" };
  } catch (error) {
    console.log("error update videos==>", error);
    return {
      error: "Something went wrong. Videos couldn't be updated! Try again!",
    };
  }
};
