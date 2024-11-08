"use client";
import { Button } from "@/components/ui/button";
import { Show } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import ShowItems from "./ShowItems";
import { createOrUpdateShow } from "@/actions/admin/show";
import { useToast } from "@/hooks/use-toast";
import Loader from "@/components/Loader";
import { z } from "zod";
import { showSchema } from "@/types/zodSchemas/adminForms";
import { zodResolver } from "@hookform/resolvers/zod";
import { getShowsNotPast } from "@/actions/show";

export type ShowFormType = {
  shows: Show[];
};
const ShowForm = () => {
  const [showsData, setShowsData] = useState<Show[] | null>(null);
  const { toast } = useToast();
  const {
    reset,
    handleSubmit,
    control,
    register,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<z.infer<typeof showSchema>>({
    resolver: zodResolver(showSchema),
    defaultValues: {
      shows: showsData && showsData.length > 0 ? showsData : [],
    },
  });
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

  console.log("isDirty==>", isDirty);
  const onSubmit: SubmitHandler<ShowFormType> = async (
    values: z.infer<typeof showSchema>
  ) => {
    console.log("sumbit==>", values);
    const { shows } = values;
    const response = await createOrUpdateShow(shows);
    if (response?.error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: response.error,
        variant: "destructive",
      });
    }
    if (response?.success) {
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
  useEffect(() => {
    const fetchData = async () => {
      const shows = await getShowsNotPast();

      if (shows) setShowsData(shows);
      reset({ shows });
    };
    fetchData();
  }, [reset]);

  return !showsData || isSubmitting ? (
    <Loader />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <ShowItems
        register={register}
        fields={fields}
        remove={remove}
        errors={errors}
        // control={control}
      />
      <div
        onClick={() => {
          append(fieldToAppend);
        }}
        className="flex fixed bottom-20 items-center bg-slate-800 p-3 gap-3 text-white duration-500 hover:bg-slate-600 font-semibold cursor-pointer self-start rounded-md"
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
