import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";

import { SelectOptions } from "@/types/types";

const CustomSelectMultiple = ({
  label,
  register,
  name,
  selectOptions,
  selectedValue,
  multiple,
  disabled,
}: {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  selectOptions: SelectOptions[];
  selectedValue: string | number | readonly string[] | undefined;
  multiple: boolean;
  disabled: boolean;
}) => {
  const [selected] = useState(selectedValue);

  return (
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        {...register(name)}
        className="select select-bordered"
        multiple={multiple}
        defaultValue={selected}
        disabled={disabled}
      >
        {selectOptions.map((item: SelectOptions) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default CustomSelectMultiple;
