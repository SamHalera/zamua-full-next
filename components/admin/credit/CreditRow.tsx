import React from "react";
import { CreditFormType } from "./CreditForm";
import {
  FieldArrayWithId,
  FieldError,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import CustomInput from "../forms/CustomInput";
import { cn, extractErrorFieldFromErrorsObject } from "@/lib/utils";
import { Trash2 } from "lucide-react";

const CreditRow = ({
  register,
  field,
  index,
  remove,
  error,
}: {
  register: UseFormRegister<CreditFormType>;
  field: FieldArrayWithId<CreditFormType, "credits", "id">;
  index: number;
  remove: UseFieldArrayRemove;
  error: FieldError;
}) => {
  const errorFieldName = extractErrorFieldFromErrorsObject(error, "name");
  const errorFieldUrl = extractErrorFieldFromErrorsObject(error, "url");
  return (
    <div
      className={cn("flex flex-col gap-3 bg-slate-200 rounded-lg p-4 mb-6 ", {
        "border-2 border-primary shadow-lg": field?.name === "",
      })}
    >
      <Trash2
        onClick={() => {
          remove(index);
        }}
        className="size-8 text-red-400 self-end cursor-pointer"
      />
      <CustomInput
        register={register}
        name={`credits.${index}.id`}
        type="number"
        disabled={true}
        customClass="input input-bordered w-full"
      />
      <CustomInput
        register={register}
        name={`credits.${index}.name`}
        label="Credit name"
        placeholder="Credit Name"
        type="text"
        customClass="input input-bordered w-full"
        required={true}
        error={errorFieldName}
      />
      <CustomInput
        register={register}
        name={`credits.${index}.url`}
        label="Credit url"
        placeholder="https://.... "
        type="text"
        customClass="input input-bordered w-full"
        error={errorFieldUrl}
      />
    </div>
  );
};

export default CreditRow;
