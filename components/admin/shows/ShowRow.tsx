import React, { useState } from "react";
import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { ShowFormType } from "./ShowForm";
import CustomInput from "../forms/CustomInput";
import { cn, extractErrorFieldFromErrorsObject } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import CustomInputDate from "../forms/CustomInputDate";

const ShowRow = ({
  register,
  field,
  index,
  remove,
  error,
}: {
  field: FieldArrayWithId<ShowFormType, "shows", "id">;
  index: number;
  remove: UseFieldArrayRemove;
  error: any;
  register: UseFormRegister<ShowFormType>;
}) => {
  const [dateValue, setDateValue] = useState<string>(
    field.date instanceof Date && !isNaN(field.date.getTime())
      ? field.date.toISOString().substring(0, 16)
      : ""
  );

  const errorFieldName = extractErrorFieldFromErrorsObject(error, "name");
  const errorFieldDate = extractErrorFieldFromErrorsObject(error, "date");
  const errorFieldVenue = extractErrorFieldFromErrorsObject(error, "venue");
  const errorFieldLocation = extractErrorFieldFromErrorsObject(
    error,
    "location"
  );
  const errorFieldVenueUrl = extractErrorFieldFromErrorsObject(
    error,
    "venueUrl"
  );
  const errorFieldLocationUrl = extractErrorFieldFromErrorsObject(
    error,
    "locationUrl"
  );
  const errorFieldTicketsUrl = extractErrorFieldFromErrorsObject(
    error,
    "ticketsUrl"
  );

  return (
    <div
      className={cn("flex flex-col gap-3 bg-slate-200 rounded-lg p-8 mb-6", {
        "border-2 border-primary shadow-lg": field?.name === "",
      })}
    >
      <Trash2
        onClick={() => {
          remove(index);
        }}
        className="size-8 text-red-400 self-end cursor-pointer"
      />
      <div className="flex gap-4">
        <CustomInput
          register={register}
          name={`shows.${index}.name`}
          label="Show Name"
          type="text"
          placeholder="show's name"
          customClass="input input-bordered w-full"
          required={true}
          value={field.name}
          error={errorFieldName}
        />
      </div>
      <div>
        <CustomInputDate
          date={dateValue}
          register={register}
          name={`shows.${index}.date`}
          label="Date and time"
          setDate={setDateValue}
          error={errorFieldDate}
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <CustomInput
          register={register}
          name={`shows.${index}.venue`}
          label="Venue Name"
          type="text"
          placeholder="show's venue"
          customClass="input input-bordered w-full"
          required={true}
          value={field.venue}
          error={errorFieldVenue}
        />

        <CustomInput
          register={register}
          name={`shows.${index}.venueUrl`}
          label="Venue's URL"
          type="text"
          value={field.venueUrl ?? ""}
          placeholder="https://..."
          customClass="input input-bordered w-full"
          error={errorFieldVenueUrl}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <CustomInput
          register={register}
          name={`shows.${index}.location`}
          label="Location Name"
          type="text"
          placeholder="show's location"
          customClass="input input-bordered w-full"
          required={true}
          value={field.location ?? ""}
          error={errorFieldLocation}
        />
        <CustomInput
          register={register}
          name={`shows.${index}.locationUrl`}
          label="Location's URL"
          type="text"
          value={field.locationUrl ?? ""}
          placeholder="https://..."
          customClass="input input-bordered w-full"
          error={errorFieldLocationUrl}
        />
      </div>
      <div>
        <CustomInput
          register={register}
          name={`shows.${index}.ticketsUrl`}
          label="Ticket's URL"
          type="text"
          value={field.ticketsUrl ?? ""}
          placeholder="https://..."
          customClass="input input-bordered w-full"
          error={errorFieldTicketsUrl}
        />
      </div>
    </div>
  );
};

export default ShowRow;
