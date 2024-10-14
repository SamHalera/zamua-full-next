"use client";
import { CldUploadWidget } from "next-cloudinary";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { UploadMediaFormType } from "../projects/AddMediaForm";
import { Media } from "@prisma/client";
import Loader from "@/components/Loader";
import { getAllMedia } from "@/actions/media";

import UploadMediaRow from "./UploadMediaRow";
import { useProjectStore } from "@/stores/projects";
import { getProjects } from "@/actions/projects";
import { Button } from "@/components/ui/button";
import { persistMedia } from "@/actions/admin/media";

const UploadMediaForm = () => {
  const [dataMedia, setDataMedia] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { setProjects } = useProjectStore();

  const {
    handleSubmit,
    register,
    control,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<UploadMediaFormType>({
    values: {
      media: dataMedia ? dataMedia : [],
    },
  });

  console.log("eeroors==>", errors.media);
  const { append, fields, remove } = useFieldArray<
    UploadMediaFormType,
    "media",
    "id"
  >({
    name: "media",
    control,
  });

  const onSubmit: SubmitHandler<UploadMediaFormType> = async (values) => {
    const { media } = values;
    console.log("media from form==>", media);

    try {
      await persistMedia(media);
    } catch (error) {
      console.log("error =+>", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const media = await getAllMedia();
      const projects = await getProjects();
      if (projects) setProjects(projects);
      if (media) setDataMedia(media);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" flex gap-4 flex-wrap">
          {fields.length > 0 &&
            fields.map((field, index) => {
              return (
                <UploadMediaRow
                  key={field.id}
                  register={register}
                  field={field}
                  index={index}
                  remove={remove}
                />
              );
            })}
        </div>
      )}
      <CldUploadWidget
        onSuccess={(result: any) => {
          const mediaField = {
            id: 0,
            source: result?.info?.secure_url,
            publicId: result.info.public_id,
            projectId: null,
            caption: "",
            isGalleryItem: true,
            creditId: null,
            // type: "PHOTO" TypeOfMedia,
          };
          append(mediaField);
        }}
        uploadPreset="ffihbzpb"
      >
        {({ open }) => {
          return (
            <button
              name="uploadButton"
              className="border border-primary bg-primary hover:bg-primary/40 text-xs duration-500 font-semibold self-center w-44 rounded-full py-4 mt-4"
              onClick={(e) => {
                open();
                e.preventDefault();
              }}
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
      <div className="self-end">
        <Button className="flex gap-4" disabled={!isDirty || isSubmitting}>
          {isSubmitting && (
            <span className="loading text-white loading-spinner loading-sm"></span>
          )}
          Submit
        </Button>
      </div>
    </form>
  );
};

export default UploadMediaForm;
