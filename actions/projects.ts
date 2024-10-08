"use server";

import { ProjectFormType } from "@/components/admin/projects/CreateOrUpdateProjectForm";
import prisma from "@/db";
import { Project, ProjectMember } from "@prisma/client";

export const getProjects = async () => {
  const projects = await prisma.project.findMany({
    include: {
      projectMember: true,
    },
  });

  if (projects.length === 0) return null;

  return projects;
};
export const createProject = async () => {};
export const createOrUpdateProject = async (data: ProjectFormType) => {
  try {
    console.log("data createOrUpdateProject==>", data);

    if (data.id === 0) {
      const { id, ...dataToPersist } = data;
      console.log("creation", dataToPersist);
      const createProject = await prisma.project.create({
        data: {
          fullTitle: data.fullTitle,
          primaryTitleString: data.primaryTitleString,
          secondaryTitleString: data.secondaryTitleString,
          description: data.description,
        },
      });
      console.log("createProject==>", createProject);

      updateProjectMembersForProject(createProject.id, data.projectMember);
    } else {
      console.log("UPDATE");
      const updateProject = await prisma.project.update({
        where: {
          id: data.id,
        },
        data: {
          fullTitle: data.fullTitle,
          primaryTitleString: data.primaryTitleString,
          secondaryTitleString: data.secondaryTitleString,
          description: data.description,
        },
      });
      updateProjectMembersForProject(updateProject.id, data.projectMember);
    }

    return {
      success: "Project has been created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong. Project couldn't be created! Try again!",
    };
  }
};

const updateProjectMembersForProject = async (
  projectId: number,
  members: ProjectMember[]
) => {
  for (const member of members) {
    await prisma.projectMember.update({
      where: {
        id: parseFloat(member.id.toString()),
      },
      data: {
        project: {
          connect: {
            id: projectId,
          },
        },
      },
    });
  }
};
export const getProjectById = async (id: number) => {
  const project = await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      projectMember: true,
    },
  });

  // console.log("project after action==>", project);
  return project;
};

export const deleteProjectById = async (id: number) => {
  try {
    const deletedProject = await prisma.project.delete({
      where: {
        id,
      },
    });
    return {
      success: "Project has been deleted successfully",
    };
  } catch (error) {
    return {
      error: "Something went wrong. Project couldn't be deleted! Try again!",
    };
  }
};
