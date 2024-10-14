"use server";
import prisma from "@/db";

export const getCredits = async () => {
  try {
    const credits = await prisma.credit.findMany();
    return credits;
  } catch (error) {
    console.log("Errorr getting credits==>", error);
  }
};
export const getCreditById = async (id: number) => {
  try {
    const credit = await prisma.credit.findUnique({ where: { id } });
    return credit;
  } catch (error) {
    console.log("Errorr getting credits==>", error);
  }
};
