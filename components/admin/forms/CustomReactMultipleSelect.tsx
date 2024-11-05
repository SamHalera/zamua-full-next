import React, { useState } from "react";
import {
  Control,
  Controller,
  FieldArrayWithId,
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
  label,
  index,
}: {
  label: string;
  register: UseFormRegister<any>;

  selectOptions: SelectOptions[];
  selectedValue: { value: string; label: string }[] | null;
  control: Control<any>;
  field: FieldArrayWithId<any, "projectMembers", "id">;
  index: number;
}) => {
  const [selected] = useState(selectedValue);

  return (
    <Controller
      name={`projectMembers.${index}.project`}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <label>{label}</label>
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
