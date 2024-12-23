"use client";
import { Button } from "@/components/ui/button";
import { Credit } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import CreditItem from "./CreditItem";
import { createOrUpdateCredit } from "@/actions/admin/credit";
import { getCredits } from "@/actions/credits";
import Loader from "@/components/Loader";
import { useToast } from "@/hooks/use-toast";
import ButtonAppendFieldArray from "../forms/ButtonAppendFieldArray";
import { creditSchema } from "@/types/zodSchemas/adminForms";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type CreditFormType = {
  credits: Credit[];
};
const CreditForm = () => {
  const [dataCredits, setDataCredits] = useState<Credit[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<z.infer<typeof creditSchema>>({
    resolver: zodResolver(creditSchema),
    defaultValues: {
      credits: dataCredits ? dataCredits : [],
    },
  });

  const { fields, append, remove } = useFieldArray<
    CreditFormType,
    "credits",
    "id"
  >({
    name: "credits",
    control,
  });

  const fieldToAppend = {
    id: 0,
    name: "",
    url: "",
  };
  const onSubmit: SubmitHandler<CreditFormType> = async (
    values: z.infer<typeof creditSchema>
  ) => {
    const { credits } = values;

    try {
      const response = await createOrUpdateCredit(credits);
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const credits = await getCredits();

      if (credits) setDataCredits(credits);
      setIsLoading(false);
      reset({ credits });
    };
    fetchData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mx-auto"
    >
      <CreditItem
        register={register}
        fields={fields}
        remove={remove}
        errors={errors}
      />

      <ButtonAppendFieldArray
        label="add a new credit"
        append={append}
        fieldToAppend={fieldToAppend}
      />

      <Button
        className="self-end text-xl fixed bottom-20 btn btn-custom md:right-20"
        disabled={!isDirty || isSubmitting}
      >
        {isSubmitting && (
          <span className="loading text-white loading-spinner loading-sm"></span>
        )}
        Submit
      </Button>
    </form>
  );
};

export default CreditForm;
