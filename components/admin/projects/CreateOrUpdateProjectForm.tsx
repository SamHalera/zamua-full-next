"use client";
import { Button } from "@/components/ui/button";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import CustomInput from "../forms/CustomInput";
import { useProjectStore } from "@/stores/projects";
import { createOrUpdateProject } from "@/actions/projects";
import { redirect, useRouter } from "next/navigation";
import { Project, ProjectMember } from "@prisma/client";
import { ArrowLeft } from "lucide-react";
import { useProjectMemberStore } from "@/stores/projectMembers";
import { getProjectMembers } from "@/actions/projectMembers";
import { SelectOptions } from "@/types/types";
import CustomSelect from "../forms/CustomSelect";

export type ProjectFormType = {
  id: number;
  fullTitle: string;
  primaryTitleString: string;
  secondaryTitleString: string;
  // cover: string;
  description: string;
  projectMember: ProjectMember[];
};
const CreateOrUpdateProjectForm = ({
  project,
}: {
  project?: Project | null;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { projectMembers, setProjectMembers } = useProjectMemberStore();
  const router = useRouter();

  console.log("project", project);
  const { register, handleSubmit } = useForm<ProjectFormType>({
    values: {
      id: project?.id ?? 0,
      fullTitle: project?.fullTitle ?? "",
      primaryTitleString: project?.primaryTitleString ?? "",
      secondaryTitleString: project?.secondaryTitleString ?? "",
      description: project?.description ?? "",
      projectMember:
        projectMembers && projectMembers.length > 0 ? projectMembers : [],
    },
  });

  const onSubmit: SubmitHandler<ProjectFormType> = async (values) => {
    try {
      console.log("values==>", values);
      const response = await createOrUpdateProject(values);
      console.log(response);
      if (response?.error) {
        console.log("Response error==>", response.error);
      }
      if (response?.success) {
        console.log("Response success==>", response.success);
        router.push("/admin/projects");
      }
    } catch (error) {
      console.log("Error on new project submit ==> ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const projectMembersDB = await getProjectMembers();
      projectMembersDB && setProjectMembers(projectMembersDB);
    };
    fetchData();
  }, []);
  console.log("projectMembers", projectMembers);

  const selectOptions: SelectOptions[] = [];
  projectMembers &&
    projectMembers.forEach((item) => {
      const obj: SelectOptions = {
        value: item.id.toString(),
        label: item.name,
      };
      selectOptions.push(obj);
    });

  const projectMembersIdArray = projectMembers?.map((item) => {
    return item.id.toString();
  });

  console.log("projectMembersIdArray==>", projectMembersIdArray);
  return (
    <div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          router.push("/admin/projects");
        }}
        className="mb-10 bg-orange-400 h-10"
      >
        <ArrowLeft className="mr-4" /> back to project list
      </Button>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <CustomInput
          label="Project ID"
          type="number"
          name="id"
          register={register}
          placeholder=""
          customClass="input input-bordered w-full"
          disabled
        />
        <CustomInput
          label="Project name"
          type="text"
          name="fullTitle"
          register={register}
          placeholder="name your project"
          customClass="input input-bordered w-full"
        />
        <CustomInput
          label="First part of title"
          type="text"
          name="primaryTitleString"
          register={register}
          placeholder="First part of title"
          customClass="input input-bordered w-full"
        />
        <CustomInput
          label="Second part of title"
          type="text"
          name="secondaryTitleString"
          register={register}
          placeholder="Second part of title"
          customClass="input input-bordered w-full"
        />

        <div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              {...register("description")}
              name="description"
              className="textarea textarea-bordered h-24"
              placeholder="Project description"
            ></textarea>
          </label>
        </div>
        <CustomSelect
          selectOptions={selectOptions}
          register={register}
          name={"projectMembers"}
          label="Project members"
          multiple
          selectedValue={projectMembersIdArray}
        />
        <Button className="self-end" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateOrUpdateProjectForm;
