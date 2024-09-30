import prisma from "@/db";

export const testSeedUser = async () => {
  try {
    const user = await prisma.user.create({
      data: {
        email: "samuel.halera@gmail.com",
        password: "test",
      },
    });
    return user;
  } catch (error) {
    console.log("Erreur ==>", error);
  }
};

export const textGetUser = async () => {
  try {
    const testUser = await prisma.user.findUnique({
      where: {
        id: 1,
      },
    });
    return testUser;
  } catch (error) {
    console.log("Erreur ==>", error);
  }
};
