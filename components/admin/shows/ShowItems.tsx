import React from "react";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { ShowFormType } from "./ShowForm";
import ShowRow from "./ShowRow";

const ShowItems = ({
  register,
  fields,
  remove,
  errors,
}: {
  register: UseFormRegister<ShowFormType>;
  fields: FieldArrayWithId<ShowFormType, "shows", "id">[];
  remove: UseFieldArrayRemove;
  errors?: FieldErrors<ShowFormType>;
}) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {fields.map((field, index) => {
        let errorObject = undefined;
        if (errors?.shows) {
          errorObject = errors?.shows[index];
        }
        return (
          <ShowRow
            key={field.id}
            register={register}
            index={index}
            field={field}
            remove={remove}
            error={errorObject}
          />
        );
      })}
    </div>
  );
};

export default ShowItems;
