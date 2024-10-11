import React from "react";
import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { VideoFormType } from "./VideoForm";
import VideoRow from "./VideoRow";

const VideoItem = ({
  register,
  fields,
  remove,
}: {
  register: UseFormRegister<VideoFormType>;
  fields: FieldArrayWithId<VideoFormType, "videos", "id">[];
  remove: UseFieldArrayRemove;
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {fields.map((field, index) => {
        return (
          <VideoRow
            key={field.id}
            field={field}
            index={index}
            remove={remove}
            register={register}
          />
        );
      })}
    </div>
  );
};

export default VideoItem;
