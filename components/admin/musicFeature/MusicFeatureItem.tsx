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

  errors: FieldErrors;
}) => {
  return (
    <div>
      {fields.map((field, index) => {
        return (
          <MusicFeatureRow
            key={field.id}
            register={register}
            field={field}
            index={index}
            remove={remove}
            setValue={setValue}
            errors={errors}
          />
        );
      })}
    </div>
  );
};

export default MusicFeatureItem;
