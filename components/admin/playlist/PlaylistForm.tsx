"use client";
import { getPlaylists } from "@/actions/playlist";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Playlist } from "@prisma/client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import PlaylistItem from "./PlaylistItem";
import { createOrUpdatePlaylist } from "@/actions/admin/playlist";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { playlistSchema } from "@/types/zodSchemas/adminForms";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonAppendFieldArray from "../forms/ButtonAppendFieldArray";
import SeedComponent from "../seed/SeedComponent";
import { createPlaylistsFromSeed } from "@/actions/admin/seeds";

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
    formState: { isDirty, isSubmitting, errors },
    reset,
    control,
    setValue,
  } = useForm<z.infer<typeof playlistSchema>>({
    resolver: zodResolver(playlistSchema),
    defaultValues: {
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

  const onSubmit: SubmitHandler<PlaylistFormType> = async (
    values: z.infer<typeof playlistSchema>
  ) => {
    const { playlists } = values;

    const response = await createOrUpdatePlaylist(playlists);

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

  const fieldToAppend = {
    id: 0,
    title: "",
    description: "",
    iframe: "",
    path: "",
    cover: "",
    slug: "",
    priority: "1",
  };
  useEffect(() => {
    const fecthData = async () => {
      const playlists = await getPlaylists();

      if (playlists) {
        setDataPlaylists(playlists);
        setIsLoading(false);
        reset({ playlists });
      }
    };

    fecthData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-4">
      <SeedComponent
        entityToSeed="Playlists"
        label="Seed"
        customClassButton="self-end"
        seedFunction={createPlaylistsFromSeed}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <PlaylistItem
          register={register}
          fields={fields}
          remove={remove}
          setValue={setValue}
          errors={errors}
        />

        <ButtonAppendFieldArray
          label="add a playlist"
          append={append}
          fieldToAppend={fieldToAppend}
        />

        <Button
          disabled={!isDirty || isSubmitting}
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
  );
};

export default PlaylistForm;
