"use client";
import { Button } from "@/components/ui/button";
import { Credit } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import CreditItem from "./CreditItem";
import { createOrUpdateCredit } from "@/actions/admin/credit";
import { getCredits } from "@/actions/credits";
import Loader from "@/components/Loader";
import { useToast } from "@/hooks/use-toast";

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
    control,
    formState: { isDirty, isSubmitting },
  } = useForm<CreditFormType>({
    values: {
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
  const onSubmit: SubmitHandler<CreditFormType> = async (values) => {
    const { credits } = values;
    console.log("values credits form==>", values);

    try {
      const response = await createOrUpdateCredit(credits);
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const credits = await getCredits();
      console.log(credits);
      if (credits) setDataCredits(credits);
      setIsLoading(false);
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
      <CreditItem register={register} fields={fields} remove={remove} />
      <div
        onClick={() => {
          append(fieldToAppend);
        }}
        className="fixed bottom-10 flex items-center border border-primary p-3 gap-3 text-primary duration-500 hover:text-slate-700 hover:border-slate-700 hover:text-primary/80 font-semibold cursor-pointer self-start rounded-md"
      >
        <PlusCircle />
        add a new credit
      </div>

      <Button
        className="self-end fixed bottom-10"
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
