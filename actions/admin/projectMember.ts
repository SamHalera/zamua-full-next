"use server";

import prisma from "@/db";
import { ProjectMemberEntityType } from "@/types/types";
import { revalidatePath } from "next/cache";

export const creatOrUpdateProjectMembers = async (
  formValues: ProjectMemberEntityType[]
) => {
  try {
    const existingProjectMembers = await prisma.projectMember.findMany();

    if (existingProjectMembers.length > formValues.length) {
      const projectMemberToDelete = existingProjectMembers.filter((elt) => {
        return !formValues.some((elt2) => elt2.id === elt.id);
      });

      projectMemberToDelete.forEach(async (item) => {
        await prisma.projectMember.delete({
          where: {
            id: item.id,
          },
        });
      });
    }
    const arrayOfProjectMembersToCreate = formValues?.filter(
      (item) => item.id === 0
    );
    const arrayOfProjectMembersToUpdate = formValues?.filter(
      (item) => item.id > 0
    );

    const responseUpdate = await createProjectMember(
      arrayOfProjectMembersToCreate
    );
    const responseCreate = await updateProjectMember(
      arrayOfProjectMembersToUpdate
    );
    revalidatePath("/admin/project-members");
    return { success: "Members list has been updated!" };
  } catch (error) {
    return { error: "Members list couldn't have been updated!" };
  }
};
export const createProjectMember = async (
  formValues: ProjectMemberEntityType[]
) => {
  try {
    formValues.forEach(async (item) => {
      const { id, ...itemToPersist } = item;

      const itemCreated = await prisma.projectMember.create({
        data: {
          name: item.name,
          features: item.features,
          project: {
            connect: item.project.map((elt) => {
              return { id: parseFloat(elt.toString()) };
            }),
          },
        },
        include: {
          project: true,
        },
      });

      return { success: "Members list has been created!" };
    });
  } catch (error) {
    console.log("Error item creation==>", error);
    return { error: "Members list couldn't have been created!" };
  }
};

export const updateProjectMember = async (
  formValues: ProjectMemberEntityType[]
) => {
  try {
    formValues.forEach(async (item) => {
      const projectMemberFromDB = await prisma.projectMember.findUnique({
        where: { id: item.id },
        include: { project: true },
      });

      let objectConnectDisconnect: {} = {};

      if (projectMemberFromDB) {
        if (item.project.length > projectMemberFromDB.project.length) {
          const projectIdsToADD: string[] = item.project
            .filter((elt) => {
              return !projectMemberFromDB.project.some(
                (elt2) => elt2.id.toString() === elt.toString()
              );
            })
            .map((elt3) => elt3.toString());

          objectConnectDisconnect = {
            connect: projectIdsToADD.map((item) => ({
              id: parseFloat(item.toString()),
            })),
          };
        } else if (item.project.length < projectMemberFromDB.project.length) {
          const projectIdsToRemove: string[] = projectMemberFromDB.project
            .filter((elt) => {
              return !item.project.some(
                (elt2) => elt2.toString() === elt.id.toString()
              );
            })
            .map((elt3) => elt3.id.toString());

          objectConnectDisconnect = {
            disconnect: projectIdsToRemove.map((item) => ({
              id: parseFloat(item.toString()),
            })),
          };
        }
      }

      await prisma.projectMember.update({
        where: { id: item.id },
        data: {
          name: item.name,
          features: item.features,
          project: objectConnectDisconnect,
        },
        include: { project: true },
      });
    });
    return { success: "Members list has been updated!" };
  } catch (error) {
    return { error: "Members list couldn't have been updated!" };
  }
};
export const deleteAllProjectMember = async () => {
  try {
    await prisma.projectMember.deleteMany();
    return { success: "Members list has been deleted!" };
  } catch (error) {
    return { error: "Members list couldn't have been deleted!" };
  }
};
