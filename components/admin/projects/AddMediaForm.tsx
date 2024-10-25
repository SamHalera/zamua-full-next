import { MediaType, ProjectAndMediaType } from "@/types/types";

import { CldUploadWidget } from "next-cloudinary";

import React, { useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import AddMediaRow from "./AddMediaRow";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";
import { useToast } from "@/hooks/use-toast";
import { handleMediaUpload } from "@/actions/admin/project";
export type UploadMediaFormType = {
  media: MediaType[];
};
const AddMediaForm = ({ project }: { project: ProjectAndMediaType }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();
  const { register, handleSubmit, control, formState } =
    useForm<UploadMediaFormType>({
      values: {
        media: project.media && project.media,
      },
    });

  const { fields, append, remove } = useFieldArray<
    UploadMediaFormType,
    "media",
    "id"
  >({ name: "media", control });

  const onSubmit: SubmitHandler<UploadMediaFormType> = async (values) => {
    setIsLoading(true);
    console.log("values from form==>", values);
    const { media } = values;
    const response = await handleMediaUpload(media, project);
    if (response?.success) {
      console.log("response==>", response);
      toast({
        title: "Good news!",
        description: response.success,
        variant: "default",
        style: {
          backgroundColor: "#FEC140",
          color: "black",
        },
      });
      setIsLoading(false);
    }
    if (response?.error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: response.error,
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <div className="text-2xl mb-8">
        Add media for <strong>{project.fullTitle.toUpperCase()} </strong>project
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {isLoading ? (
          <Loader />
        ) : (
          <div className=" flex gap-4">
            {fields.length > 0 &&
              fields.map((field, index) => {
                return (
                  <AddMediaRow
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
              projectId: project.id,
              caption: "",
              isGalleryItem: false,
              creditId: null,
              credit: null,
              // type: "PHOTO" as $Enums.TypeOfMedia,
            };
            append(mediaField);
          }}
          uploadPreset="lvfy5bk7"
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
          <Button
            className="flex gap-4"
            disabled={!formState.isDirty || formState.isSubmitting}
          >
            {formState.isSubmitting && (
              <span className="loading text-white loading-spinner loading-sm"></span>
            )}
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMediaForm;
