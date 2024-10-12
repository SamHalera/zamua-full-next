import React, { useEffect, useState } from "react";
import { PlaylistFormType } from "./PlaylistForm";
import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import CustomInput from "../forms/CustomInput";
import { CldImage, CldUploadWidget } from "next-cloudinary";

const PlaylistRow = ({
  register,
  field,
  index,
  remove,
  setValue,
}: {
  register: UseFormRegister<PlaylistFormType>;
  field: FieldArrayWithId<PlaylistFormType, "playlists", "id">;
  index: number;
  remove: UseFieldArrayRemove;
  setValue: UseFormSetValue<PlaylistFormType>;
}) => {
  const [dataImage, setDataImage] = useState<string>(field.cover ?? "");
  const [slugValue, setSlugValue] = useState<string>("");
  const handleSlugOnChange = (value: string) => {
    const newStr = value.toLocaleLowerCase().split(" ").join("-");
    console.log("newStr==>", newStr);
    setSlugValue(`${newStr}`);
  };

  console.log("slugValue==>", slugValue);
  useEffect(() => {
    if (dataImage) {
      setValue(`playlists.${index}.cover`, dataImage, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
    if (slugValue) {
      setValue(`playlists.${index}.slug`, slugValue, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  }, [dataImage, slugValue, setValue]);
  return (
    <div
      className={cn(
        "flex flex-col gap-3 bg-slate-200 rounded-lg p-8 mb-6 w-2/3 mx-auto",
        {
          "border-2 border-primary shadow-lg": field?.title === "",
        }
      )}
    >
      <Trash2
        onClick={() => {
          remove(index);
        }}
        className="size-8 text-red-400 self-end cursor-pointer"
      />

      <div className="flex gap-4 w-full">
        <div className="w-1/3">
          {dataImage && (
            <>
              <CldImage
                width="200"
                height="200"
                src={dataImage}
                sizes="100vw"
                alt="Description of my image"
              />
              <CustomInput
                type="text"
                register={register}
                name={`playlists.${index}.cover`}
                label="Cover"
                customClass="input input-bordered w-full"
                required={true}
                value={field.cover ?? ""}
                disabled={true}
              />
            </>
          )}
          <CldUploadWidget
            onSuccess={(result: any) => {
              console.log(result?.info?.secure_url);

              setDataImage(result?.info?.secure_url);
            }}
            uploadPreset="nzr9uqpt"
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
        <div className="flex-1">
          <CustomInput
            type="text"
            register={register}
            name={`playlists.${index}.title`}
            label="Title"
            placeholder="A title for your plyalist"
            customClass="input input-bordered w-full"
            required={true}
            handleChangeValue={handleSlugOnChange}
            // value={field.title}
          />
          <CustomInput
            type="text"
            register={register}
            name={`playlists.${index}.slug`}
            label="Slug"
            placeholder="A slug for your plyalist"
            customClass="input input-bordered w-full"
            required={true}
            value={slugValue}
            disabled={true}
          />
          <CustomInput
            type="number"
            register={register}
            name={`playlists.${index}.priority`}
            label="Slug"
            placeholder="A slug for your plyalist"
            customClass="input input-bordered w-full"
            required={true}
            value={field.priority}
          />
          <div className="flex-1">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                {...register(`playlists.${index}.description`)}
                name={`playlists.${index}.description`}
                className="textarea textarea-bordered h-24"
                placeholder="Project description"
              ></textarea>
            </label>
          </div>
          <CustomInput
            type="text"
            register={register}
            name={`playlists.${index}.iframe`}
            label="Iframe"
            placeholder="Your plyalist's iframe"
            customClass="input input-bordered w-full"
            required={true}
            value={field.title}
          />
          <CustomInput
            type="text"
            register={register}
            name={`playlists.${index}.path`}
            label="Playlist URL"
            placeholder="Your plyalist's url"
            customClass="input input-bordered w-full"
            required={true}
            value={field.title}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaylistRow;
