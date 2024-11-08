"use server";
import uid2 from "uid2";
import SHA256 from "crypto-js/sha256";
import encBase64 from "crypto-js/enc-base64";
import prisma from "@/db";

export const createUser = async () => {
  try {
    const email = "samuel.halera@gmail.com";
    const salt = uid2(12);
    const password = SHA256("Zamulele15$" + salt).toString(encBase64);

    const user = await prisma.user.create({
      data: {
        email,
        password,
        salt,
      },
    });
    return { success: "created" };
  } catch (error) {
    console.log("error==>", error);
  }
};

export const getTestUser = async () => {
  try {
    const testUser = await prisma.user.findUnique({
      where: {
        email: "samuel.halera@gmail.com",
      },
    });

    const newHash = SHA256("test" + testUser?.salt).toString(encBase64);

    return testUser;
  } catch (error) {
    console.log("Erreur ==>", error);
  }
};
