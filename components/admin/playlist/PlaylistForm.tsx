"use client";
import { getPlaylists } from "@/actions/playlist";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Playlist } from "@prisma/client";

import { PlusCircle } from "lucide-react";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import PlaylistItem from "./PlaylistItem";
import { createOrUpdatePlaylist } from "@/actions/admin/playlist";
import { useToast } from "@/hooks/use-toast";

export type PlaylistFormType = {
  playlists: Playlist[];
};

const PlaylistForm = () => {
  const [dataPlaylists, setDataPlaylists] = useState<Playlist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitting },
    control,
    setValue,
  } = useForm<PlaylistFormType>({
    values: {
      playlists: dataPlaylists ? dataPlaylists : [],
    },
  });

  const { fields, append, remove } = useFieldArray<
    PlaylistFormType,
    "playlists",
    "id"
  >({
    name: "playlists",
    control,
  });

  const onSubmit: SubmitHandler<PlaylistFormType> = async (values) => {
    const { playlists } = values;
    console.log("playlists values==>", playlists);
    const response = await createOrUpdatePlaylist(playlists);

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

    console.log("response==>", response);
  };

  const fieldToAppend = {
    id: 0,
    title: "",
    description: "",
    iframe: "",
    path: "",
    cover: "",
    slug: "",
    priority: 1,
  };
  useEffect(() => {
    const fecthData = async () => {
      const playlists = await getPlaylists();
      console.log("fetch playlists==>", playlists);
      if (playlists) {
        setDataPlaylists(playlists);
        setIsLoading(false);
      }
    };

    fecthData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <PlaylistItem
          register={register}
          fields={fields}
          remove={remove}
          setValue={setValue}
        />
        <div
          onClick={() => {
            append(fieldToAppend);
          }}
          className="flex items-center border border-primary p-3 gap-3 text-primary duration-500 hover:text-slate-700 hover:border-slate-700 hover:text-primary/80 font-semibold cursor-pointer self-start rounded-md"
        >
          <PlusCircle /> add a project member
        </div>

        <Button
          disabled={!isDirty || isSubmitting}
          className="self-end text-xl "
          type="submit"
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

export default PlaylistForm;
