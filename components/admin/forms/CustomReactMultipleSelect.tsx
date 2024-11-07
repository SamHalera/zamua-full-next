import React, { useState } from "react";
import {
  Control,
  Controller,
  FieldError,
  UseFormRegister,
} from "react-hook-form";

import { SelectOptions } from "@/types/types";

import Select from "react-select";

const CustomReactMultipleSelect = ({
  // register,
  selectOptions,
  selectedValue,
  control,
  // field,
  error,
  label,
  index,
  required,
}: {
  label: string;
  register: UseFormRegister<any>;

  selectOptions: SelectOptions[];
  selectedValue: { value: string; label: string }[] | null;
  control: Control<any>;
  // field: FieldArrayWithId<any, "projectMembers", "id">;
  index: number;
  error?: FieldError;
  required?: boolean;
}) => {
  const [selected] = useState(selectedValue);

  return (
    <Controller
      name={`projectMembers.${index}.project`}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <label>
            <div className="label flex flex-col items-start">
              <span className="label-text ">
                {label}
                {required && <span className="text-red-400">*</span>}
              </span>
              {required && error && (
                <span className=" text-red-400 text-sm">
                  {error.message ?? "Field required"}
                </span>
              )}
            </div>
          </label>
          <Select
            isMulti
            options={selectOptions}
            value={selectOptions.find((c) => c.value === value)}
            onChange={(val) => onChange(val.map((c) => c.value))}
            defaultValue={selected}
          />
        </>
      )}
    />
  );
};

export default CustomReactMultipleSelect;
