import React from "react";
import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { CreditFormType } from "./CreditForm";
import CreditRow from "./CreditRow";

const CreditItem = ({
  register,
  fields,
  remove,
}: {
  register: UseFormRegister<CreditFormType>;
  fields: FieldArrayWithId<CreditFormType, "credits", "id">[];
  remove: UseFieldArrayRemove;
}) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {fields.map((field, index) => {
        return (
          <CreditRow
            key={field.id}
            register={register}
            remove={remove}
            index={index}
            field={field}
          />
        );
      })}
    </div>
  );
};

export default CreditItem;
