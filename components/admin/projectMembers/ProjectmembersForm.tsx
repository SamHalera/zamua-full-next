"use client";
import { getProjectMembers } from "@/actions/projectMembers";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";

import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import ProjectMemberItem from "./ProjectMemberItem";

import { getProjects } from "@/actions/projects";
import { useProjectStore } from "@/stores/projects";

import { ProjectMemberEntityType } from "@/types/types";
import {
  creatOrUpdateProjectMembers,
  deleteAllProjectMember,
} from "@/actions/admin/projectMember";
import { useToast } from "@/hooks/use-toast";

export type ProjectMembersFormType = {
  projectMembers: ProjectMemberEntityType[];
};

const ProjectmembersForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [dataProjectMember, setDataProjectMember] = useState<
    ProjectMemberEntityType[] | null
  >();

  const { setProjects } = useProjectStore();
  const { toast } = useToast();
  const {
    register,
    control,
    handleSubmit,

    formState: { isDirty, isSubmitting },
  } = useForm<ProjectMembersFormType>({
    values: {
      projectMembers: dataProjectMember ? dataProjectMember : [],
    },
  });

  const { fields, append, remove } = useFieldArray<
    ProjectMembersFormType,
    "projectMembers",
    "id"
  >({
    name: "projectMembers",
    control,
  });

  const onSubmit: SubmitHandler<ProjectMembersFormType> = async (values) => {
    try {
      const { projectMembers } = values;

      let response: any;
      if (projectMembers?.length === 0) {
        response = await deleteAllProjectMember();
      } else {
        response = await creatOrUpdateProjectMembers(projectMembers);
      }
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

  const fieldToAppend = {
    id: 0,
    name: "",
    features: "",
    project: [
      {
        id: 0,
        fullTitle: "",
        primaryTitleString: "",
        secondaryTitleString: "",
        cover: "",
        description: "",
        slug: "",
        priority: 1,
      },
    ],
  };
  useEffect(() => {
    const fecthData = async () => {
      const projectMembers = await getProjectMembers();
      const projects = await getProjects();

      setDataProjectMember(projectMembers);
      if (projects) {
        setProjects(projects);
      }

      setIsLoading(false);
    };
    fecthData();
  }, []);

  return isLoading || isSubmitting ? (
    <Loader />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <ProjectMemberItem
        register={register}
        fields={fields}
        remove={remove}
        // errors={errors}

        control={control}
      />
      <div
        onClick={() => {
          append(fieldToAppend);
        }}
        className="flex fixed bottom-20 items-center bg-slate-800 p-3 gap-3 text-white duration-500 hover:bg-slate-600 font-semibold cursor-pointer self-start rounded-md"
      >
        <PlusCircle /> add a project member
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

export default ProjectmembersForm;
