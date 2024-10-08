"use server";
import { MusicFeatureFormType } from "@/components/admin/musicFeature/MusicFeatureForm";
import {
  ProjectMembersFormType,
  // ProjectMemberEntityType,
} from "@/components/admin/projectMembers/ProjectmembersForm";
import prisma from "@/db";
import { MusicFeature, Project, ProjectMember } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getProjectMembers } from "./projectMembers";
import { ProjectMemberEntityType } from "@/types/types";
import { getProjectById, getProjects } from "./projects";
import { object } from "zod";
import { disconnect } from "process";

export const createPage = async (data: {
  title: string;
  name: string;
  path: string;
}) => {};

export const getMusicFeatures = async () => {
  console.log("inside action");

  const musicFeatures = await prisma.musicFeature.findMany({
    orderBy: {
      priority: "asc",
    },
  });

  if (musicFeatures.length > 0) return musicFeatures;
  return null;
};

export const createOrUpdateMusicFeatures = async (
  data: MusicFeatureFormType
) => {
  try {
    const { musicFeature } = data;
    console.log("musicFeature==>", musicFeature);
    const existingMusicFeature = await getMusicFeatures();
    if (musicFeature.length === 0) {
      console.log("delete all");

      await prisma.musicFeature.deleteMany({});
    } else if (
      existingMusicFeature &&
      existingMusicFeature?.length > musicFeature.length
    ) {
      //remove
      console.log("remove");
      await removeMusicFeaturesOnUpdate(data, existingMusicFeature);
    }

    for (const item of musicFeature) {
      item.priority = parseFloat(item.priority.toString());
      if (item.id === 0) {
        const { id, ...musicFeatureToPersists } = item;
        const itemCreated = await prisma.musicFeature.create({
          data: musicFeatureToPersists,
        });
      } else {
        console.log("item to update");
        const itemUpdated = await prisma.musicFeature.update({
          where: {
            id: item.id,
          },
          data: item,
        });
      }
    }

    revalidatePath("/admin/music");
  } catch (error) {
    console.error("Error Music Feature create", error);
    return { error: "Oups something went wrong" };
  }
};

const removeMusicFeaturesOnUpdate = async (
  dataToPersist: MusicFeatureFormType,
  existingMusicFeature: MusicFeature[] | null
) => {
  if (existingMusicFeature && existingMusicFeature?.length > 0) {
    const musicFeatureToRemove = existingMusicFeature
      .filter(
        (obj1) =>
          !dataToPersist.musicFeature.some((obj2) => obj2.id === obj1.id)
      )
      .forEach(async (item) => {
        await prisma.musicFeature.delete({
          where: {
            id: item.id,
          },
        });
      });
  }
};

export const creatOrUpdateProjectMembers = async (
  data: ProjectMemberEntityType[]
) => {
  try {
    data;
    console.log("2 projectMembers inside action==>", data);

    const existingProjectMembers = await getProjectMembers();

    if (data.length === 0) {
      console.log("delete all projectMembers");

      await prisma.projectMember.deleteMany({});
    } else if (
      existingProjectMembers &&
      existingProjectMembers?.length > data.length
    ) {
      //remove
      console.log("remove");
      // await removeProjectMembersOnUpdate(data, existingProjectMembers);
    }

    for (let item of data) {
      if (item.id === 0) {
        console.log("item==>", item);
        const itemCreated = await createProjectMember(item);
        await updateProjectForProjectMembers(itemCreated, item.project);
      } else {
        const itemUpdated = await updateProjectMember(item);
        await updateProjectForProjectMembers(itemUpdated, item.project);
      }
    }

    revalidatePath("/admin/project-members");
  } catch (error) {
    console.error("Error ProjectMember create", error);
    return { error: "Oups something went wrong" };
  }
};

const createProjectMember = async (projectMember: ProjectMemberEntityType) => {
  console.log(" item.project==>", projectMember.project);
  const itemCreated = await prisma.projectMember.create({
    data: {
      name: projectMember.name,
      features: projectMember.features,
    },
    include: {
      project: true,
    },
  });
  // console.log("itemCreated==>", itemCreated);
  return itemCreated;
};
const updateProjectMember = async (projectMember: ProjectMemberEntityType) => {
  console.log("3 item to update");
  console.log(" item.project==>", projectMember.project);
  const itemUpdated = await prisma.projectMember.update({
    where: {
      id: projectMember.id,
    },
    data: {
      id: projectMember.id,
      name: projectMember.name,
      features: projectMember.features,
    },
    include: { project: true },
  });

  return itemUpdated;
};
const updateProjectForProjectMembers = async (
  projectMember: ProjectMemberEntityType,
  projectsValueFromForm: Project[]
) => {
  console.log("projectMember.project==>", projectMember.project);
  console.log("projectsValueFromForm==>", projectsValueFromForm);

  // si les ID de projectMember.project sont toujours dans projectsValueFromForm ==> on connect le project avec l'id courznt
  // si les ID ne sont plus dans projectsValueFromForm ==> disconnect le rpoject avec l'id courant
};

const removeProjectFromProjectMember = async (
  projectMember: ProjectMemberEntityType,
  projectsValueFromForm: Project[] | string[]
) => {
  console.log("projectMember projects==>", projectMember.project);

  projectMember.project.forEach(async (elt) => {
    if (!projectsValueFromForm.some((obj2) => obj2 === elt.id.toString())) {
      // const projectMemberAfterRemoveProjects =
      //   await prisma.projectMember.update({
      //     where: {
      //       id: projectMember.id,
      //     },
      //     data: {
      //       project: {
      //         disconnect: { id: elt.id },
      //       },
      //     },
      //     include: {
      //       project: true,
      //     },
      //   });
      return { disconnect: { id: elt.id } };
    }
    return;
  });
  // const arrayOfExistingProjectId = projectMember.project.map((item) =>
  //   item.id.toString()
  // );
  // console.log("projectsValueFromForm==>", projectsValueFromForm);
  // console.log("arrayOfExistingProjectId==>", arrayOfExistingProjectId);
  // const projectToRemove = arrayOfExistingProjectId.filter((obj1) => {
  //   return !projectsValueFromForm.some((obj2) => obj2 === obj1);
  // });

  // console.log("projectToRemove==>", projectToRemove);
};

// const removeProjectMembersOnUpdate = async (
//   dataToPersist: ProjectMemberEntityType,
//   existingProjectMembers: ProjectMember[] | null
// ) => {
//   console.log("dataToPersist==>", dataToPersist);
//   console.log("existingProjectMembers==>", existingProjectMembers);
//   // if (existingProjectMembers && existingProjectMembers?.length > 0) {
//   //   const projectMemberToRemove = existingProjectMembers
//   //     .filter(
//   //       (obj1) =>
//   //         !dataToPersist.projectMembers.some((obj2) => obj2.id === obj1.id)
//   //     )
//   //     .forEach(async (item) => {
//   //       await prisma.projectMember.delete({
//   //         where: {
//   //           id: item.id,
//   //         },
//   //       });
//   //     });
//   // }
// };
