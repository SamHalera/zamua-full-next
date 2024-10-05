import React from "react";
import { UseFormRegister } from "react-hook-form";
import { ProjectMembersFormType } from "../projectMembers/ProjectmembersForm";
import { SelectOptions } from "@/types/types";

const CustomSelect = ({
  label,
  register,
  name,
  selectOptions,
  selectedValue,
  multiple,
}: {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  selectOptions: SelectOptions[];
  selectedValue?: string | string[];
  multiple: boolean;
}) => {
  return (
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text">Pick one project</span>
      </div>
      <select
        {...register(name)}
        className="select select-bordered"
        multiple={multiple}
      >
        <option disabled value={""}>
          Pick one
        </option>
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
