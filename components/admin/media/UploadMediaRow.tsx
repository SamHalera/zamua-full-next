import React from "react";
import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { UploadMediaFormType } from "../projects/AddMediaForm";
import { cn } from "@/lib/utils";
import CustomInput from "../forms/CustomInput";
import { CldImage } from "next-cloudinary";
import { Trash2 } from "lucide-react";
import CustomCheckbox from "../forms/CustomCheckbox";

const UploadMediaRow = ({
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
        "flex flex-col gap-3 items-center p-5 bg-slate-200 rounded-md shadow-md w-1/3",
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
        disabled={true}
      />
      <CustomInput
        register={register}
        name={`media.${index}.caption`}
        label="Media caption"
        type="text"
        customClass="input input-bordered w-full"
        required={false}
      />
      <CustomCheckbox
        label="Is this photo part of Gallery Section?"
        register={register}
        name={`media.${index}.isGalleryItem`}
        defaultChecked={field.isGalleryItem}
      />
    </div>
  );
};

export default UploadMediaRow;
