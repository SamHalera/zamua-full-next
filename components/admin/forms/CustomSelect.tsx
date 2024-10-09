import React from "react";
import { UseFormRegister } from "react-hook-form";

import { SelectOptions } from "@/types/types";

const CustomSelect = ({
  register,
  name,
  selectOptions,
  selectedValue,
  multiple,
  label,
}: {
  register: UseFormRegister<any>;
  name: string;
  selectOptions: SelectOptions[];
  selectedValue?: string;
  multiple: boolean;
  label: string;
}) => {
  return (
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        {...register(name)}
        className="select select-bordered"
        multiple={multiple}
      >
        {selectOptions.map((item: SelectOptions) => {
          return (
            <option
              key={item.value}
              value={item.value}
              defaultValue={
                selectedValue?.includes(item.value) ? item.value : ""
              }
            >
              {item.label}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default CustomSelect;
