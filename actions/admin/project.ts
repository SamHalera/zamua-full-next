"use server";

import { ProjectFormType } from "@/components/admin/projects/CreateOrUpdateProjectForm";
import prisma from "@/db";
import { ProjectAndMediaType } from "@/types/types";
import { Media } from "@prisma/client";

import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const createOrUpdateProject = async (data: ProjectFormType) => {
  try {
    let message: string = "";
    if (data.id === 0) {
      const { id, ...dataToPersist } = data;
      console.log("creation", dataToPersist);
      const createProject = await prisma.project.create({
        data: {
          fullTitle: data.fullTitle,
          primaryTitleString: data.primaryTitleString,
          secondaryTitleString: data.secondaryTitleString,
          description: data.description,
          cover: data.cover,
        },
      });
      console.log("createProject==>", createProject);
      message = "Project has been created successfully";
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
          cover: data.cover,
        },
      });
      message = "Project has been updated successfully";
    }

    revalidatePath("/admin/projects");
    return {
      success: message,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong. Project couldn't be created! Try again!",
    };
  }
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

export const handleMediaUpload = async (
  dataImages: Media[],
  currentProject: ProjectAndMediaType
) => {
  if (dataImages.length === 0) {
    const deleteAllMedia = await deletAllMediaFromDBAndCloudinary(
      currentProject.media
    );
    return deleteAllMedia;
  } else if (dataImages.length > currentProject.media.length) {
    const createdMedia = await uploaAndCreatedMedia(
      dataImages,
      currentProject.media
    );
    return createdMedia;
  } else if (dataImages.length < currentProject.media.length) {
    const deleteSomeMedia = await deleteSomeMediaFromDBAndCloudinary(
      dataImages,
      currentProject.media
    );
    return deleteSomeMedia;
  }
};

export const deletAllMediaFromDBAndCloudinary = async (
  currentProjectMedia: Media[]
) => {
  try {
    const mediaPublicIDSArray = currentProjectMedia.map(
      (media) => media.publicId
    );

    const deleteResp = await cloudinary.api.delete_resources(
      mediaPublicIDSArray,
      {
        type: "upload",
        resource_type: "image",
      }
    );

    if (deleteResp) {
      await prisma.media.deleteMany();
    }
    return { success: "Media have been deleted!" };
  } catch (error) {
    console.log("error deletAllMediaFromDBAndCloudinary ==>", error);
    return { error: "Media couldn't be deleted. Try again!" };
  }
};
export const deleteSomeMediaFromDBAndCloudinary = async (
  dataImages: Media[],
  currentProjectMedia: Media[]
) => {
  try {
    const mediaToDelete = currentProjectMedia.filter((media) => {
      return !dataImages.some((media2) => media2.id === media.id);
    });

    //FIRST DELETE FROM CLOUDINARY
    const mediaToDeletePublicIDSArray = mediaToDelete.map(
      (media) => media.publicId
    );

    const deleteResp = await cloudinary.api.delete_resources(
      mediaToDeletePublicIDSArray,
      {
        type: "upload",
        resource_type: "image",
      }
    );
    if (deleteResp) {
      //THEN DELETE FROM DB

      mediaToDelete.forEach(async (itemMedia) => {
        await prisma.media.delete({
          where: { id: itemMedia.id },
        });
      });
    }
    return { success: "Media have been deleted!" };
  } catch (error) {
    console.log("error deleteSomeMediaFromDBAndCloudinary ==>", error);
    return { error: "Media couldn't be deleted. Try again!" };
  }
};
export const uploaAndCreatedMedia = async (
  dataImages: Media[],
  currentProjectMedia: Media[]
) => {
  try {
    const mediaToAdd = dataImages
      .map((elt) => {
        const { id, ...noIdMedia } = elt;
        return noIdMedia;
      })
      .filter((media) => {
        return !currentProjectMedia.some(
          (media2) => media2.source === media.source
        );
      });

    const createdMedia = await prisma.media.createMany({
      data: mediaToAdd,
    });
    return { success: "Media have been created!" };
  } catch (error) {
    console.log("error uploaAndCreatedMedia ==>", error);
    return { error: "Media couldn't be created. Try again!" };
  }
};