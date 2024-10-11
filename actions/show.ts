import prisma from "@/db";

export const getShows = async () => {
  try {
    const shows = await prisma.show.findMany();
    console.log(" shows from DB==>", shows);

    return shows;
  } catch (error) {
    console.log("error getting shows", error);
  }
};
