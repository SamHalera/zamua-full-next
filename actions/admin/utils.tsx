"use server";
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
export const deleteAllCloudinaryFolders = async () => {
  try {
    console.log(process.env.NODE_ENV);

    const environment = process.env.NODE_ENV === "development" ? "dev" : "prod";
    const folder = `/zamua/${environment}`;
    const cloudinaryFolders = await cloudinary.v2.api.sub_folders(folder);
    console.log("response==>", cloudinaryFolders);
    return {
      success: "Cloudinary folders have been deleted",
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Oups! Something went wring. Try again...",
    };
  }
};
