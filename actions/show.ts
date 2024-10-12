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
export const getShowsNotPast = async () => {
  try {
    const showsNotPast = await prisma.show.findMany({
      where: {
        date: {
          gt: new Date(),
        },
      },
    });
    return showsNotPast;
  } catch (error) {
    console.log("error getting shows", error);
  }
};
