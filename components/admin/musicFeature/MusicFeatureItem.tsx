import React from "react";

import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { MusicFeatureFormType } from "./MusicFeatureForm";

import MusicFeatureRow from "./MusicFeatureRow";

const MusicFeatureItem = ({
  register,
  fields,
  remove,
  setValue,

  errors,
}: {
  register: UseFormRegister<MusicFeatureFormType>;
  fields: FieldArrayWithId<MusicFeatureFormType, "musicFeature", "id">[];
  remove: UseFieldArrayRemove;
  setValue: UseFormSetValue<MusicFeatureFormType>;

  errors: FieldErrors<MusicFeatureFormType>;
}) => {
  // console.log("errors==>", errors.musicFeature);
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {fields.map((field, index) => {
        let errorObject = null;
        if (errors?.musicFeature) {
          errorObject = errors?.musicFeature[index];
        }

        return (
          <MusicFeatureRow
            key={field.id}
            register={register}
            field={field}
            index={index}
            remove={remove}
            setValue={setValue}
            error={errorObject}
          />
        );
      })}
    </div>
  );
};

export default MusicFeatureItem;
