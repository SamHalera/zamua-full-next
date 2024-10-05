import React from "react";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { ProjectMembersFormType } from "./ProjectmembersForm";
import { Trash2 } from "lucide-react";
import CustomInput from "../forms/CustomInput";
import CustomSelect from "../forms/CustomSelect";
import { useProjectStore } from "@/stores/projects";
import { SelectOptions } from "@/types/types";
import { Project } from "@prisma/client";

const ProjectMembersRow = ({
  register,
  field,
  index,
  remove,
  errors,
}: {
  register: UseFormRegister<ProjectMembersFormType>;
  field: FieldArrayWithId<ProjectMembersFormType, "projectMembers", "id">;
  index: number;
  remove: UseFieldArrayRemove;
  errors: FieldErrors<ProjectMembersFormType>;
}) => {
  const { projects } = useProjectStore();

  console.log("project from store==>", projects);
  console.log("field", field);
  let projectOptions: SelectOptions[] = [];
  if (projects) {
    projects.forEach((item) => {
      const objOption: SelectOptions = {
        value: item.id.toString(),
        label: item.fullTitle,
      };
      projectOptions.push(objOption);
    });
  }
  return (
    <div className="flex flex-col gap-3 bg-slate-200 rounded-lg p-8 mb-6">
      <Trash2
        onClick={() => {
          remove(index);
        }}
        className="size-8 text-red-400 self-end cursor-pointer"
      />

      <div className="flex gap-7">
        <CustomInput
          type="text"
          register={register}
          name={`projectMembers.${index}.name`}
          label="Member's name"
          placeholder="project member's name"
          customClass="input input-bordered w-full"
        />
        <CustomInput
          type="text"
          register={register}
          name={`projectMembers.${index}.features`}
          label="Member's features"
          placeholder="project member's features"
          customClass="input input-bordered w-full"
        />
        <CustomSelect
          label="Projects"
          register={register}
          name={`projectMembers.${index}.projectId`}
          selectedValue={field.projectId?.toString() ?? ""}
          selectOptions={projectOptions}
          multiple={false}
        />
      </div>
    </div>
  );
};

export default ProjectMembersRow;
