"use server";

import prisma from "@/db";

export const getProjects = async () => {
  const projects = await prisma.project.findMany({
    include: {
      projectMember: true,
    },
  });

  if (projects.length === 0) return null;

  return projects;
};

export const getProjectById = async (id: number) => {
  const project = await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      projectMember: true,
      media: true,
    },
  });

  return project;
};
