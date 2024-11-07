"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import MusicFeatureItem from "./MusicFeatureItem";

import Loader from "@/components/Loader";
import {
  createOrUpdateMusicFeatures,
  getMusicFeatures,
} from "@/actions/admin/musicFeature";
import { useToast } from "@/hooks/use-toast";
import { MusicFeatureType } from "@/types/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { musicFeatureSchema } from "@/types/zodSchemas/adminForms";
import ButtonAppendFieldArray from "../forms/ButtonAppendFieldArray";
import SeedComponent from "../seed/SeedComponent";
import { createMusicFeatureFromSeeds } from "@/actions/admin/seeds";

export type MusicFeatureFormType = {
  musicFeature: MusicFeatureType[];
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
    formState: { isSubmitSuccessful, errors, isDirty, isSubmitting },
    control,
    reset,
  } = useForm<z.infer<typeof musicFeatureSchema>>({
    resolver: zodResolver(musicFeatureSchema),
    defaultValues: {
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
    priority: "1",
    cover: "",
  };

  const onSubmit: SubmitHandler<MusicFeatureFormType> = async (
    values: z.infer<typeof musicFeatureSchema>
  ) => {
    try {
      const response = await createOrUpdateMusicFeatures(values);

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
      console.error("Erreur onSubmit", error);
    }
  };

  useEffect(() => {
    const fetchData: () => void = async () => {
      const musicFeatures = await getMusicFeatures();

      setDataMusicFeatures(musicFeatures);
      setIsLoading(false);
      if (musicFeatures) reset({ musicFeature: musicFeatures });
    };
    fetchData();
  }, [isSubmitSuccessful, reset]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4">
          <SeedComponent
            customClassButton="self-end"
            entityToSeed="Albums"
            seedFunction={createMusicFeatureFromSeeds}
            label="Seed"
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <MusicFeatureItem
              register={register}
              setValue={setValue}
              fields={fields}
              remove={remove}
              errors={errors}
            />
            {/* <div
            onClick={() => {
              append(fieldToAppend);
            }}
            className="flex fixed bottom-20 md:left-20 items-center bg-slate-800 p-3 gap-3 text-white duration-500 hover:bg-slate-600 font-semibold cursor-pointer self-start rounded-md"
          >
            <PlusCircle /> Ajouter un album
          </div> */}
            <ButtonAppendFieldArray
              label="ajouter un album"
              append={append}
              fieldToAppend={fieldToAppend}
            />
            <Button
              disabled={!isDirty}
              className="self-end text-xl fixed bottom-20 btn btn-custom md:right-20"
              type="submit"
            >
              {isSubmitting && (
                <span className="loading text-white loading-spinner loading-sm"></span>
              )}
              Submit
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MusicFeatureForm;
