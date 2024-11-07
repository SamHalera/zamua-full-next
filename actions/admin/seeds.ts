"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";
import {
  musicData,
  playlistsData,
  projectData,
  videosData,
} from "./data/data-to-seed";
import { createOrUpdateMusicFeatures } from "./musicFeature";
import { createOrUpdateVideos } from "./video";
import { createOrUpdatePlaylist } from "./playlist";

const isValidSeedAction = (secretKey: FormDataEntryValue | null) => {
  return secretKey && secretKey === process.env.SEED_SECRET_KEY;
};
export const createProjectFromSeeds = async (
  prevState: any,
  formData: FormData
) => {
  const secretKey = formData.get("secretKey");

  try {
    if (!isValidSeedAction(secretKey)) {
      return {
        ...prevState,
        error: "Please enter a valid secret key",
        success: null,
      };
    } else {
      await prisma.project.createMany({
        data: projectData,
      });
      revalidatePath("/admin/projects");
      revalidatePath("/projects");
      return {
        ...prevState,
        error: null,
        success: "Data have been persisted to DB",
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const createMusicFeatureFromSeeds = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const secretKey = formData.get("secretKey");
    if (!isValidSeedAction(secretKey)) {
      return {
        ...prevState,
        error: "Please enter a valid secret key",
        success: null,
      };
    } else {
      await createOrUpdateMusicFeatures({ musicFeature: musicData });
      revalidatePath("/admin/musics");
      revalidatePath("/music");

      return {
        ...prevState,
        error: null,
        success: "Data have been persisted to DB",
      };
    }
  } catch (error) {
    return {
      ...prevState,
      error: "Something went wrong! Please try again...",
      success: null,
    };
  }
};

export const createVideoFromSeed = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const secretKey = formData.get("secretKey");
    if (!isValidSeedAction(secretKey)) {
      return {
        ...prevState,
        error: "Please enter a valid secret key",
        success: null,
      };
    } else {
      await createOrUpdateVideos(videosData);
      revalidatePath("/admin/media/videos");
      revalidatePath("/videos");

      return {
        ...prevState,
        error: null,
        success: "Data have been persisted to DB",
      };
    }
  } catch (error) {
    return {
      ...prevState,
      error: "Something went wrong! Please try again...",
      success: null,
    };
  }
};

export const createPlaylistsFromSeed = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const secretKey = formData.get("secretKey");
    if (!isValidSeedAction(secretKey)) {
      return {
        ...prevState,
        error: "Please enter a valid secret key",
        success: null,
      };
    } else {
      await createOrUpdatePlaylist(playlistsData);
      revalidatePath("/admin/playlists");
      revalidatePath("/playlists");

      return {
        ...prevState,
        error: null,
        success: "Data have been persisted to DB",
      };
    }
  } catch (error) {
    return {
      ...prevState,
      error: "Something went wrong! Please try again...",
      success: null,
    };
  }
};
