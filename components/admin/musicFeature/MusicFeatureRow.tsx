"use client";
import React, { useEffect, useState } from "react";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { MusicFeatureFormType } from "./MusicFeatureForm";
import { Trash2 } from "lucide-react";
import CustomInput from "../forms/CustomInput";
import { CldUploadWidget } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { cn } from "@/lib/utils";

export type UploadResultType = {
  event: string | undefined;
  info: {
    secure_url: string;
  };
};
const MusicFeatureRow = ({
  register,
  field,
  remove,
  index,
  setValue,
}: // errors,
{
  register: UseFormRegister<MusicFeatureFormType>;
  field: FieldArrayWithId<MusicFeatureFormType, "musicFeature", "id">;
  remove: UseFieldArrayRemove;
  index: number;
  setValue: UseFormSetValue<MusicFeatureFormType>;

  errors: FieldErrors<MusicFeatureFormType>;
}) => {
  const [dataImage, setDataImage] = useState<string>(field.cover ?? "");

  useEffect(() => {
    if (dataImage) {
      setValue(`musicFeature.${index}.cover`, dataImage, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [dataImage, setValue]);

  return (
    <div
      className={cn("flex flex-col gap-3 bg-slate-200 rounded-lg p-8 mb-6", {
        "border-2 border-primary shadow-lg": field.title === "",
      })}
    >
      <Trash2
        onClick={() => {
          remove(index);
        }}
        className="size-8 text-red-400 self-end cursor-pointer"
      />
      <div className="flex flex-col md:flex-row gap-4">
        <CustomInput
          register={register}
          label="Title"
          name={`musicFeature.${index}.title`}
          type="text"
          customClass="input input-bordered w-full"
          placeholder="give a title"
        />
        <CustomInput
          register={register}
          label="Sub Title"
          name={`musicFeature.${index}.subTitle`}
          type="text"
          customClass="input input-bordered w-full"
          placeholder="Any sub title"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <CustomInput
          register={register}
          label="Album Iframe"
          name={`musicFeature.${index}.iframe`}
          type="texte"
          customClass="input input-bordered w-full"
          placeholder="Iframe"
        />
        <CustomInput
          register={register}
          label="Album url"
          name={`musicFeature.${index}.path`}
          type="text"
          customClass="input input-bordered w-full"
          placeholder="Url"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <CustomInput
          register={register}
          label="Display order in Front End"
          name={`musicFeature.${index}.priority`}
          type="number"
          customClass="input input-bordered w-full"
          placeholder="priority"
        />

        <CustomInput
          register={register}
          label="Cover"
          name={`musicFeature.${index}.cover`}
          type="text"
          customClass="input input-bordered w-full"
          placeholder="Cover"
          disabled={true}
        />
      </div>
      <div className="my-2">
        {dataImage && (
          <CldImage
            width="200"
            height="200"
            src={dataImage}
            sizes="100vw"
            alt="Description of my image"
          />
        )}

        <CldUploadWidget
          onSuccess={(result: any) => {
            setDataImage(result?.info?.secure_url);
          }}
          uploadPreset={`${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_ALBUMS}`}
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
      </div>
    </div>
  );
};

export default MusicFeatureRow;
