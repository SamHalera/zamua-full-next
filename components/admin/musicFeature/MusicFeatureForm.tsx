"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import MusicFeatureItem from "./MusicFeatureItem";

import Loader from "@/components/Loader";
import { PlusCircle } from "lucide-react";
import {
  createOrUpdateMusicFeatures,
  getMusicFeatures,
} from "@/actions/admin/musicFeature";
import { useToast } from "@/hooks/use-toast";

export type MusicFeatureFormType = {
  musicFeature: MusicFeatureType[];
};
type MusicFeatureType = {
  id: number;
  title: string;
  subTitle: string | null;
  iframe: string;
  path: string;
  priority: number;
  cover: string | null;
};
const MusicFeatureForm = () => {
  const [dataMusicFeatures, setDataMusicFeatures] = useState<
    MusicFeatureType[] | null
  >();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitSuccessful, errors, isDirty },
    control,
  } = useForm<MusicFeatureFormType>({
    values: {
      musicFeature: dataMusicFeatures ? dataMusicFeatures : [],
    },
  });

  const { fields, append, remove } = useFieldArray<
    MusicFeatureFormType,
    "musicFeature",
    "id"
  >({
    name: "musicFeature",
    control,
  });

  const fieldToAppend = {
    id: 0,
    title: "",
    subTitle: "",
    iframe: "",
    path: "",
    priority: 1,
    cover: "",
  };

  const onSubmit: SubmitHandler<MusicFeatureFormType> = async (values) => {
    try {
      console.log("values form=>", values);
      const response = await createOrUpdateMusicFeatures(values);

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
      console.error("Erreur onSubmit", error);
    }
  };

  useEffect(() => {
    const fetchData: () => void = async () => {
      const musicFeatures = await getMusicFeatures();
      console.log("musicFeatures", musicFeatures);

      setDataMusicFeatures(musicFeatures);
      setIsLoading(false);
    };
    fetchData();
  }, [isSubmitSuccessful]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <MusicFeatureItem
            register={register}
            setValue={setValue}
            fields={fields}
            remove={remove}
            errors={errors}
          />
          <div
            onClick={() => {
              append(fieldToAppend);
            }}
            className="flex items-center border border-primary p-3 gap-3 text-primary duration-500 hover:text-slate-700 hover:border-slate-700 hover:text-primary/80 font-semibold cursor-pointer self-start rounded-md"
          >
            <PlusCircle /> Ajouter un album
          </div>
          <Button
            disabled={!isDirty}
            className="self-end text-xl fixed bottom-20 btn btn-custom"
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default MusicFeatureForm;
