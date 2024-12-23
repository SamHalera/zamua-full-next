import { CustomInputProps } from "@/types/types";
import React from "react";
import InputOnChange from "./InputOnChange";

const CustomInputTest = ({
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
  let errorMessage;
  if (error?.type === "required") {
    errorMessage = "Champs obligatoire";
  } else if (error?.message) {
    errorMessage = error?.message;
  }
  return (
    <>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">
            {label}
            {required && <span className="text-red-400">*</span>}
            {error && (
              <span className=" text-red-400 text-sm ml-2">{errorMessage}</span>
            )}
          </span>
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
            {...register(name, {
              required,
              // pattern,
            })}
            value={value}
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

export default CustomInputTest;
