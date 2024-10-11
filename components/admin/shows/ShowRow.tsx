import React from "react";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { ShowFormType } from "./ShowForm";
import CustomInput from "../forms/CustomInput";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import dayjs from "dayjs";

const ShowRow = ({
  register,
  field,
  index,
  remove,
  errorItems,
}: {
  register: UseFormRegister<ShowFormType>;
  field: FieldArrayWithId<ShowFormType, "shows", "id">;
  index: number;
  remove: UseFieldArrayRemove;
  errorItems?: FieldErrors<ShowFormType>;
}) => {
  if (errorItems?.shows) console.log("here==>", errorItems?.shows[index]);
  return (
    <div
      className={cn(
        "flex flex-col gap-3 bg-slate-200 rounded-lg p-8 mb-6 flex-1",
        {
          "border-2 border-primary shadow-lg": field?.name === "",
        }
      )}
    >
      <Trash2
        onClick={() => {
          remove(index);
        }}
        className="size-8 text-red-400 self-end cursor-pointer"
      />
      <div className=" flex gap-4">
        <CustomInput
          register={register}
          name={`shows.${index}.name`}
          label="Show Name"
          type="text"
          placeholder="show's name"
          customClass="input input-bordered w-full"
          required={true}
          value={field.name}
          error={errorItems?.shows ? errorItems?.shows[index]?.name : undefined}
        />

        <CustomInput
          register={register}
          name={`shows.${index}.date`}
          label={`Date and time : ${dayjs(field.date).format(
            "YYYY-MM-DD HH:mm"
          )}`}
          type="datetime-local"
          placeholder=""
          customClass="input input-bordered w-full"
          required={true}
          value={dayjs(field.date).format("YYYY-MM-DD HH:mm")}
          error={errorItems?.shows ? errorItems?.shows[index]?.date : undefined}
        />
      </div>
      <div className="flex gap-4">
        <CustomInput
          register={register}
          name={`shows.${index}.venue`}
          label="Venue Name"
          type="text"
          placeholder="show's venue"
          customClass="input input-bordered w-full"
          required={true}
          value={field.venue}
          error={
            errorItems?.shows ? errorItems?.shows[index]?.venue : undefined
          }
        />

        <CustomInput
          register={register}
          name={`shows.${index}.venueUrl`}
          label="Venue's URL"
          type="text"
          value={field.venueUrl ?? ""}
          placeholder="https://..."
          customClass="input input-bordered w-full"
          pattern={/^https:\/\/[a-z1-9]+-?_?\.?[a-z1-9]+.[a-z]{2,4}/gm}
        />
      </div>
      <div className="flex gap-4">
        <CustomInput
          register={register}
          name={`shows.${index}.location`}
          label="Location Name"
          type="text"
          placeholder="show's location"
          customClass="input input-bordered w-full"
          required={true}
          value={field.location ?? ""}
          error={
            errorItems?.shows ? errorItems?.shows[index]?.location : undefined
          }
        />
        <CustomInput
          register={register}
          name={`shows.${index}.locationUrl`}
          label="Location's URL"
          type="text"
          value={field.locationUrl ?? ""}
          placeholder="https://..."
          customClass="input input-bordered w-full"
          pattern={/^https:\/\/[a-z1-9]+-?_?\.?[a-z1-9]+.[a-z]{2,4}/gm}
        />
        <CustomInput
          register={register}
          name={`shows.${index}.ticketsUrl`}
          label="Ticket's URL"
          type="text"
          value={field.ticketsUrl ?? ""}
          placeholder="https://..."
          customClass="input input-bordered w-full"
          pattern={/^https:\/\/[a-z1-9]+-?_?\.?[a-z1-9]+.[a-z]{2,4}/gm}
        />
      </div>
    </div>
  );
};

export default ShowRow;
