import { CustomInputProps } from "@/types/types";
import React from "react";

const InputOnChange = ({
  type,
  register,
  value,
  disabled,
  name,
  autoComplete,
  placeholder,
  handleChangeValue,
}: CustomInputProps) => {
  if (!handleChangeValue) return;

  return (
    <>
      <input
        autoComplete={autoComplete ?? "on"}
        {...register(name, {
          onChange: (e) => {
            handleChangeValue(e.target.value);
          },
        })}
        value={value}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </>
  );
};

export default InputOnChange;
