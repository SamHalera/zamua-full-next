"use server";
import { Playlist } from "@prisma/client";

import prisma from "@/db";
import { itemsToDelete } from "@/lib/serverActionHelpers";
import { revalidatePath } from "next/cache";

export const createOrUpdatePlaylist = async (values: Playlist[]) => {
  try {
    const existingPlaylists = await prisma.playlist.findMany();

    if (values.length == 0) {
      //DELETE ALL
      await prisma.playlist.deleteMany();
    } else if (existingPlaylists?.length > values.length) {
      //DELET SOME ITEMS
      const playlistsToDelete = itemsToDelete(existingPlaylists, values);
      playlistsToDelete.forEach(async (item: Playlist) => {
        await prisma.playlist.delete({
          where: { id: item.id },
        });
      });
    }
    const playlistsToCreate = values?.filter((item) => item.id === 0);
    const playlistsToUpdate = values?.filter((item) => item.id > 0);

    await createPlaylists(playlistsToCreate);
    await updatePlaylists(playlistsToUpdate);
    revalidatePath("/admin/playlists");
    return { success: "Playlists has been updated..." };
  } catch (error) {
    console.log("error updateOrCreate PLaylist==>", error);
    return { error: "Playlists could not be updated..." };
  }
};

export const createPlaylists = async (playlists: Playlist[]) => {
  try {
    const platlistsToPersist = playlists.map((item) => {
      const { id, ...partialItem } = item;
      return partialItem;
    });

    await prisma.playlist.createMany({
      data: platlistsToPersist,
    });
  } catch (error) {
    console.log("error cretze PLaylist==>", error);
    return { error: "Playlists could not be created..." };
  }
};
export const updatePlaylists = async (playlists: Playlist[]) => {
  try {
    playlists.forEach(async (item) => {
      await prisma.playlist.update({
        where: { id: item.id },
        data: item,
      });
    });
  } catch (error) {
    console.log("error cretze PLaylist==>", error);
    return { error: "Playlists could not be updated..." };
  }
};
