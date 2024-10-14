"use server";

import prisma from "@/db";

export const getProjects = async () => {
  const projects = await prisma.project.findMany({
    include: {
      projectMember: true,
    },
  });

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
export const getProjectBySlug = async (slug: string) => {
  const project = await prisma.project.findFirst({
    where: {
      slug: slug[0],
    },
    include: {
      projectMember: true,
      media: true,
    },
  });

  return project;
};
