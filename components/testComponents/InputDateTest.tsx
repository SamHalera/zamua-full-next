import React from "react";
import { UseFormRegister } from "react-hook-form";

const InputDateTest = ({
  date,
  register,
  label,
  name,
  setDate,
}: {
  date: string;
  register: UseFormRegister<any>;
  label: string;
  name: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}) => {
  //format for datetime-local input ==> 2024-11-07T14:30

  return (
    <>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">
            {label} : {date}
          </span>
        </div>
        {/* <Controller
          name={name}
          control={control}
          defaultValue={date}
          render={({ field }) => (
            <input
              type="datetime-local"
              placeholder="date"
              className="input input-bordered w-full"
              {...field}
              onChange={(e) => {
                field.onChange(e); // Notify React Hook Form of the change
                setDate(e.target.value); // Update the state with the new date
              }}
            />
          )}
        /> */}
        <input
          {...register(name, {
            // value: date,
            // onChange: (e) => {
            //   console.log("value onChange==>", e.target.value);
            //   setDate(e.target.value);
            // },
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

export default InputDateTest;
