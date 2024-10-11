import React from "react";
import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { PlaylistFormType } from "./PlaylistForm";
import PlaylistRow from "./PlaylistRow";

const PlaylistItem = ({
  register,
  fields,
  remove,
  setValue,
}: {
  register: UseFormRegister<PlaylistFormType>;
  fields: FieldArrayWithId<PlaylistFormType, "playlists", "id">[];
  remove: UseFieldArrayRemove;
  setValue: UseFormSetValue<PlaylistFormType>;
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {fields.map((field, index) => {
        return (
          <PlaylistRow
            key={field.id}
            register={register}
            field={field}
            remove={remove}
            index={index}
            setValue={setValue}
          />
        );
      })}
    </div>
  );
};

export default PlaylistItem;
