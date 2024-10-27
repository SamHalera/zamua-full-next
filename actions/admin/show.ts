"use server";
import prisma from "@/db";
import { Show } from "@prisma/client";
import { getShows } from "../show";

export const createOrUpdateShow = async (showsData: Show[]) => {
  try {
    const existingShows = await getShows();
    if (showsData.length === 0) {
      await prisma.show.deleteMany();
    } else if (existingShows && existingShows?.length > showsData.length) {
      const showsToDelete = existingShows.filter((show) => {
        return !showsData.some((show2) => show2.id === show.id);
      });

      showsToDelete.forEach(async (item) => {
        await prisma.show.delete({
          where: { id: item.id },
        });
      });
    }
    const showsToCreate = showsData.filter((show) => show.id === 0);
    const showsToUpdate = showsData.filter((show) => show.id > 0);
    createShows(showsToCreate);
    updateShows(showsToUpdate);

    return { success: "Shows list has been updated!" };
  } catch (error) {
    return { error: "Shows list hasn't been updated!" };
  }
};

const createShows = async (showsToCreate: Show[]) => {
  try {
    const showsToPersist = showsToCreate.map((item) => {
      const { id, ...remaininItem } = item;
      remaininItem.date = new Date(remaininItem.date);
      return remaininItem;
    });

    await prisma.show.createMany({
      data: showsToPersist,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateShows = async (showsToUpdate: Show[]) => {
  try {
    showsToUpdate.forEach(async (item) => {
      item.date = new Date(item.date);

      await prisma.show.update({
        where: { id: item.id },
        data: item,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
