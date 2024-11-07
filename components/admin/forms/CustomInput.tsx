import { CustomInputProps } from "@/types/types";
import React from "react";
import InputOnChange from "./InputOnChange";

const CustomInput = ({
  label,
  type,
  register,
  value,
  disabled,
  name,
  error,
  required,
  autoComplete,
  placeholder,
  handleChangeValue,
  customClass,
}: CustomInputProps) => {
  return (
    <>
      <label className="form-control w-full ">
        <div className="label flex flex-col items-start">
          <span className="label-text ">
            {label}
            {required && <span className="text-red-400">*</span>}
          </span>
          {required && error && (
            <span className=" text-red-400 text-sm">{error.message}</span>
          )}
        </div>
        {handleChangeValue ? (
          <InputOnChange
            type={type}
            value={value}
            handleChangeValue={handleChangeValue}
            placeholder={placeholder}
            register={register}
            name={name}
          />
        ) : (
          <input
            autoComplete={autoComplete ?? "on"}
            {...register(name)}
            defaultValue={value}
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            className={customClass}
          />
        )}
      </label>
    </>
  );
};

export default CustomInput;
