"use server";
import prisma from "@/db";

export const getProjectMembers = async () => {
  const projectMembers = await prisma.projectMember.findMany();

  if (projectMembers.length === 0) {
    return null;
  }
  return projectMembers;
};
