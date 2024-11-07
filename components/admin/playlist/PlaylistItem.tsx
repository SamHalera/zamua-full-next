import React from "react";
import {
  FieldArrayWithId,
  FieldErrors,
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
  errors,
}: {
  register: UseFormRegister<PlaylistFormType>;
  fields: FieldArrayWithId<PlaylistFormType, "playlists", "id">[];
  remove: UseFieldArrayRemove;
  setValue: UseFormSetValue<PlaylistFormType>;
  errors: FieldErrors<PlaylistFormType>;
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 flex-wrap w-full justify-center">
      {fields.map((field, index) => {
        let errorObject = undefined;
        if (errors?.playlists) {
          errorObject = errors?.playlists[index];
        }
        return (
          <PlaylistRow
            key={field.id}
            register={register}
            field={field}
            remove={remove}
            index={index}
            setValue={setValue}
            error={errorObject}
          />
        );
      })}
    </div>
  );
};

export default PlaylistItem;
