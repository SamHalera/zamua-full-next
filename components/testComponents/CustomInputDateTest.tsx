import { CustomInputDateProps } from "@/types/types";
import React from "react";

const CustomInputDateTest = ({
  label,
  register,
  value,

  name,
  error,
  required,
  setValue,
}: CustomInputDateProps) => {
  console.log("ici==>", value);
  return (
    <>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">
            {label}
            {required && <span className="text-red-400">*</span>}
            {error && (
              <span className=" text-red-400 text-sm ml-2">
                {error.message}
              </span>
            )}
          </span>
        </div>
        <input
          {...register(name)}
          onChange={(e) => {
            console.log("e.target.value==>", e.target.value);
            let valueToParse = "";
            if (!isNaN(new Date(e.target.value).getTime())) {
              valueToParse = e.target.value;
            } else {
              // valueToParse = new Date().toISOString();
              valueToParse = new Date().toISOString().substring(0, 16);
            }
            console.log("valueToParse inside==>", valueToParse);

            const timestamp = Date.parse(valueToParse);
            console.log("timestamp inside==>", timestamp);
            setValue(new Date(timestamp));
          }}
          // defaultValue={
          //   !isNaN(value.getTime())
          //     ? value.toISOString()
          //     : new Date().toISOString()
          // }
          value={
            !isNaN(value.getTime())
              ? value.toISOString().substring(0, 16)
              : new Date().toISOString().substring(0, 16)
          }
          type="datetime-local"
          placeholder="date"
          className="input input-bordered w-full"
        />
      </label>
    </>
  );
};

export default CustomInputDateTest;
