"use client";
import { getAllVideos } from "@/actions/video";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Videos } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import VideoItem from "./VideoItem";
import { createOrUpdateVideos } from "@/actions/admin/video";
import { videoSchema } from "@/types/zodSchemas/adminForms";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonAppendFieldArray from "../forms/ButtonAppendFieldArray";
import SeedComponent from "../seed/SeedComponent";
import { createVideoFromSeed } from "@/actions/admin/seeds";

export type VideoFormType = {
  videos: Videos[];
};
const VideoForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataVideos, setDataVideos] = useState<Videos[]>([]);
  const { toast } = useToast();

  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<z.infer<typeof videoSchema>>({
    resolver: zodResolver(videoSchema),
    defaultValues: {
      videos: dataVideos ? dataVideos : [],
    },
  });

  const { fields, append, remove } = useFieldArray<
    VideoFormType,
    "videos",
    "id"
  >({
    name: "videos",
    control,
  });

  const fieldToAppend = {
    id: 0,
    iframe: "",
    priority: "1",
    projectId: null,
  };

  const onSubmit: SubmitHandler<VideoFormType> = async (
    values: z.infer<typeof videoSchema>
  ) => {
    try {
      setIsLoading(true);
      const { videos } = values;
      const response = await createOrUpdateVideos(videos);
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
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const videos = await getAllVideos();

      if (videos) setDataVideos(videos);
      setIsLoading(false);

      reset({ videos });
    };
    fetchData();
  }, [reset, isLoading]);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-4">
      <SeedComponent
        entityToSeed="Videos"
        label="Seed"
        customClassButton="self-end"
        seedFunction={createVideoFromSeed}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <VideoItem
          register={register}
          remove={remove}
          fields={fields}
          errors={errors}
        />

        <ButtonAppendFieldArray
          label="add a video source"
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
    </div>
  );
};

export default VideoForm;
