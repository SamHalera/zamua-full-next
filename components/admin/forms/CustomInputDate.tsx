import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

const CustomInputDate = ({
  date,
  register,
  label,
  name,
  setDate,
  error,
  required,
}: {
  date: string;
  register: UseFormRegister<any>;
  label: string;
  name: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  error: FieldError;
  required: boolean;
}) => {
  return (
    <>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text ">
            {label}
            {required && <span className="text-red-400">*</span>}
          </span>
          {error && (
            <span className=" text-red-400 text-sm">{error.message}</span>
          )}
        </div>

        <input
          {...register(name, {
            value: date,
            onChange: (e) => {
              console.log("value onChange==>", e.target.value);
              setDate(e.target.value);
            },
          })}
          type="datetime-local"
          placeholder="date"
          className="input input-bordered w-full"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
    </>
  );
};

export default CustomInputDate;
