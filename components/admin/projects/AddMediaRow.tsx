"use client";
import React from "react";
import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { UploadMediaFormType } from "./AddMediaForm";
import CustomInput from "../forms/CustomInput";

import { CldImage } from "next-cloudinary";

import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";

const AddMediaRow = ({
  register,
  field,
  index,
  remove,
}: {
  register: UseFormRegister<UploadMediaFormType>;
  field: FieldArrayWithId<UploadMediaFormType, "media", "id">;
  index: number;
  remove: UseFieldArrayRemove;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 w-1/3 items-center p-5 bg-slate-200 rounded-md shadow-md",
        {
          "border-2 border-primary": field.source === "",
        }
      )}
    >
      <Trash2
        onClick={() => {
          remove(index);
        }}
        className="size-6 text-red-400 self-end cursor-pointer"
      />

      <CldImage
        key={field.id}
        width="200"
        height="200"
        src={field.source}
        crop="fill"
        sizes="100vw"
        alt="Description of my image"
      />

      <CustomInput
        register={register}
        name={`media.${index}.source`}
        label="Media source"
        type="text"
        customClass="input input-bordered w-full"
      />
      <CustomInput
        register={register}
        name={`media.${index}.caption`}
        label="Media caption"
        type="text"
        customClass="input input-bordered w-full"
      />
      <CustomInput
        register={register}
        name={`media.${index}.publicId`}
        label="Public Id"
        type="text"
        customClass="input input-bordered w-full"
        disabled={true}
      />
    </div>
  );
};

export default AddMediaRow;
