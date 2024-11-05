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
  errorItems,
}: {
  register: UseFormRegister<ShowFormType>;
  fields: FieldArrayWithId<ShowFormType, "shows", "id">[];
  remove: UseFieldArrayRemove;
  errorItems?: FieldErrors<ShowFormType>;
}) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {fields.map((field, index) => {
        return (
          <ShowRow
            key={field.id}
            register={register}
            index={index}
            field={field}
            remove={remove}
            errorItems={errorItems}
          />
        );
      })}
    </div>
  );
};

export default ShowItems;
