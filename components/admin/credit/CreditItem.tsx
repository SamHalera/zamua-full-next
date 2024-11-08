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
  errors,
}: {
  register: UseFormRegister<CreditFormType>;
  fields: FieldArrayWithId<CreditFormType, "credits", "id">[];
  remove: UseFieldArrayRemove;
  errors: any;
}) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {fields.map((field, index) => {
        let errorObject = null;
        if (errors?.credits) {
          errorObject = errors?.credits[index];
        }

        return (
          <CreditRow
            key={field.id}
            register={register}
            remove={remove}
            index={index}
            field={field}
            error={errorObject}
          />
        );
      })}
    </div>
  );
};

export default CreditItem;
