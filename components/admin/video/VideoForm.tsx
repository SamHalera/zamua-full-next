"use client";
import { getAllVideos } from "@/actions/video";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Videos } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import VideoItem from "./VideoItem";
import { createOrUpdateVideos } from "@/actions/admin/video";

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
    control,
    formState: { isDirty, isSubmitting },
  } = useForm<VideoFormType>({
    values: {
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
    priority: 1,
    projectId: null,
  };

  const onSubmit: SubmitHandler<VideoFormType> = async (values) => {
    try {
      console.log("values==>", values);
      const { videos } = values;
      const response = await createOrUpdateVideos(videos);
      if (response?.error) {
        console.log("response eeee==>", response);
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
      const videos = await getAllVideos();

      if (videos) setDataVideos(videos);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <VideoItem register={register} remove={remove} fields={fields} />
      <div
        onClick={() => {
          append(fieldToAppend);
        }}
        className="fixed bottom-10 flex items-center border border-primary p-3 gap-3 text-primary duration-500 hover:text-slate-700 hover:border-slate-700 hover:text-primary/80 font-semibold cursor-pointer self-start rounded-md"
      >
        <PlusCircle /> add a video source
      </div>

      <Button
        className="flex gap-4 fixed bottom-10 self-end"
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

export default VideoForm;
