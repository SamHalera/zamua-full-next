"use client";
import { Button } from "@/components/ui/button";
import { Show } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import React from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import ShowItems from "./ShowItems";
import { createOrUpdateShow } from "@/actions/admin/show";
import { useToast } from "@/hooks/use-toast";
import Loader from "@/components/Loader";

export type ShowFormType = {
  shows: Show[];
};
const ShowForm = ({ shows }: { shows?: Show[] }) => {
  const { toast } = useToast();
  const {
    handleSubmit,
    control,
    register,
    getValues,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<ShowFormType>({
    values: {
      shows: shows && shows.length > 0 ? shows : [],
    },
  });

  const errorItems = errors;

  console.log("form values==>", getValues());
  console.log("errors==>", errors);
  //   if(errors.shows){
  //     for(const error of errors.shows.root){

  //     }
  //   }
  const { fields, append, remove } = useFieldArray<ShowFormType, "shows", "id">(
    { name: "shows", control }
  );

  const fieldToAppend = {
    id: 0,
    name: "",
    date: new Date(),
    venue: "",
    venueUrl: "",
    location: "",
    locationUrl: "",

    ticketsUrl: "",
  };

  const onSubmit: SubmitHandler<ShowFormType> = async (values) => {
    console.log("value from form==>", values);
    const { shows } = values;
    const response = await createOrUpdateShow(shows);
    if (response?.error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: response.error,
        variant: "destructive",
      });
      console.log("Response error==>", response.error);
    }
    if (response?.success) {
      console.log("Response success==>", response.success);
      toast({
        title: "Good news!",
        description: response.success,
        variant: "default",
        style: {
          backgroundColor: "#FEC140",
          color: "black",
        },
      });
    }
  };
  return !shows || isSubmitting ? (
    <Loader />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <ShowItems
        register={register}
        fields={fields}
        remove={remove}
        errorItems={errorItems}
      />
      <div
        onClick={() => {
          append(fieldToAppend);
        }}
        className="fixed bottom-10 flex items-center border border-primary p-3 gap-3 text-primary duration-500 hover:text-slate-700 hover:border-slate-700 hover:text-primary/80 font-semibold cursor-pointer self-start rounded-md"
      >
        <PlusCircle /> add a new show
      </div>

      <Button
        disabled={!isDirty || isSubmitting}
        className="self-end text-xl fixed bottom-10"
        type="submit"
      >
        {isSubmitting && (
          <span className="loading text-white loading-spinner loading-sm"></span>
        )}
        Submit
      </Button>
    </form>
  );
};

export default ShowForm;
