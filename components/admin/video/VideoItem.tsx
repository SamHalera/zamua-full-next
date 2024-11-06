import React from "react";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { VideoFormType } from "./VideoForm";
import VideoRow from "./VideoRow";

const VideoItem = ({
  register,
  fields,
  remove,
  errors,
}: {
  register: UseFormRegister<VideoFormType>;
  fields: FieldArrayWithId<VideoFormType, "videos", "id">[];
  remove: UseFieldArrayRemove;
  errors: FieldErrors<VideoFormType>;
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {fields.map((field, index) => {
        let errorObject = undefined;
        if (errors?.videos) {
          errorObject = errors?.videos[index];
        }
        return (
          <VideoRow
            key={field.id}
            field={field}
            index={index}
            remove={remove}
            register={register}
            error={errorObject}
          />
        );
      })}
    </div>
  );
};

export default VideoItem;
