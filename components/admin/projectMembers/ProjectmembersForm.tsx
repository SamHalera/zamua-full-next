"use client";
import { getProjectMembers } from "@/actions/projectMembers";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Project, ProjectMember } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import ProjectMemberItem from "./ProjectMemberItem";
import { features } from "process";
import { number } from "zod";
import { getProjects } from "@/actions/projects";
import { useProjectStore } from "@/stores/projects";
import { creatOrUpdateProjectMembers } from "@/actions/admin";

export type ProjectMembersFormType = {
  projectMembers: ProjectMemberType[];
};
export type ProjectMemberType = {
  id: number;
  name: string;
  features: string;
  projectId: number;
};
const ProjectmembersForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataProjectMember, setDataProjectMember] = useState<
    ProjectMember[] | null
  >();

  const { setProjects } = useProjectStore();
  const {
    register,
    control,
    handleSubmit,
    formState: { isDirty, errors },
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
      console.log("values=>", values);
      await creatOrUpdateProjectMembers(values);
    } catch (error) {
      console.error("Erreur onSubmit", error);
    }
  };

  const fieldToAppend = {
    id: 0,
    name: "",
    features: "",
    projectId: 0,
  };
  useEffect(() => {
    const fecthData = async () => {
      const projectMembers = await getProjectMembers();
      const projects = await getProjects();
      console.log("projects from useeffect==>", projects);

      setDataProjectMember(projectMembers);
      projects && setProjects(projects);

      setIsLoading(false);
    };
    fecthData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <ProjectMemberItem
        register={register}
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
        <PlusCircle /> add a project member
      </div>

      <Button disabled={!isDirty} className="self-end text-xl " type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ProjectmembersForm;
