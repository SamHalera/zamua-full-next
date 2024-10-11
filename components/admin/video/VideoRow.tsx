import React from "react";
import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { VideoFormType } from "./VideoForm";
import { cn } from "@/lib/utils";
import CustomInput from "../forms/CustomInput";
import { Trash2 } from "lucide-react";

const VideoRow = ({
  register,
  field,
  index,
  remove,
}: {
  register: UseFormRegister<VideoFormType>;
  field: FieldArrayWithId<VideoFormType, "videos", "id">;
  index: number;
  remove: UseFieldArrayRemove;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 bg-slate-200 rounded-lg p-8 mb-6 w-2/3 mx-auto",
        {
          "border-2 border-primary shadow-lg": field?.iframe === "",
        }
      )}
    >
      <Trash2
        className="size-8 text-red-400 self-end cursor-pointer"
        onClick={() => {
          remove(index);
        }}
      />

      {field.iframe && (
        <div
          className="w-full mx-a"
          dangerouslySetInnerHTML={{ __html: field.iframe }}
        />
      )}

      <CustomInput
        name={`videos.${index}.iframe`}
        label="Iframe of the video"
        type="text"
        register={register}
        required={true}
        placeholder="<iframe....></iframe>"
        customClass="input input-bordered w-full"
        value={field.iframe}
      />
      <CustomInput
        name={`videos.${index}.priority`}
        label="Display priority on front-end"
        type="number"
        register={register}
        required={true}
        placeholder=""
        customClass="input input-bordered w-full"
        value={field.priority}
      />
    </div>
  );
};

export default VideoRow;
