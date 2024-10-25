import React from "react";
import { UseFormRegister } from "react-hook-form";

const CustomCheckbox = ({
  label,
  register,
  name,
  defaultChecked,
}: {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  defaultChecked: boolean;
}) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer flex gap-4">
        <span className="label-text">{label}</span>
        <input
          {...register(name)}
          type="checkbox"
          defaultChecked={defaultChecked}
          className="checkbox"
        />
      </label>
    </div>
  );
};

export default CustomCheckbox;
