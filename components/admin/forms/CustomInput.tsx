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
  let errorMessage;
  console.log("error==>", error, name);
  if (error) {
    errorMessage = "Champs obligatoire";
  }
  // console.log(name);
  return (
    <>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">
            {label}
            {required && <span className="text-red-400">*</span>}
            {required && error && (
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
              required: "This field is required",
              minLength: {
                value: 5,
                message: "This field cannotbe less than 5 characters!",
              },
              // pattern,
            })}
            defaultValue={value}
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            // required={required}
            className={customClass}
          />
        )}
      </label>
    </>
  );
};

export default CustomInput;
