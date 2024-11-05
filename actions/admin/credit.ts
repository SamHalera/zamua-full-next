"use server";
import prisma from "@/db";
import { itemsToDelete } from "@/lib/serverActionHelpers";
import { Credit } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createOrUpdateCredit = async (credits: Credit[]) => {
  try {
    const exixtingCredits = await prisma.credit.findMany();

    if (credits.length === 0) await prisma.credit.deleteMany();
    else if (exixtingCredits.length > credits.length) {
      const creditsToDelete = itemsToDelete(exixtingCredits, credits);

      creditsToDelete.forEach(async (item: Credit) => {
        await prisma.credit.delete({ where: { id: item.id } });
      });
    }

    const itemsToCreate = credits.filter((credit) => credit.id === 0);
    const itemsToUpdate = credits.filter((credit) => credit.id > 0);

    await createCredit(itemsToCreate);
    await updateCredit(itemsToUpdate);
    revalidatePath("/admin/credits");
    return { success: "Credit has been created " };
  } catch (error) {
    return { error: " CRedit could not be created" };
  }
};

export const createCredit = async (credits: Credit[]) => {
  try {
    const creditToPersist = credits.map((item) => {
      const { id, ...itemNoId } = item;
      return itemNoId;
    });

    await prisma.credit.createMany({ data: creditToPersist });
    return { success: "Credit has been created " };
  } catch (error) {
    return { error: " CRedit could not be created" };
  }
};
export const updateCredit = async (credits: Credit[]) => {
  try {
    {
      credits.forEach(async (item) => {
        await prisma.credit.update({ where: { id: item.id }, data: item });
      });
    }

    return { success: "Credit has been updated " };
  } catch (error) {
    return { error: " CRedit could not be updated" };
  }
};
export const deleteCredit = async (id: number) => {
  try {
    // await prisma.credit.delete({ where: { id } });
    return { success: "Credit has been creatied " };
  } catch (error) {
    return { error: " CRedit could not be created" };
  }
};
