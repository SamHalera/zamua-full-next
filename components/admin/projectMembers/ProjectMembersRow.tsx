import React from "react";
import {
  Control,
  FieldArrayWithId,
  // FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { ProjectMembersFormType } from "./ProjectmembersForm";
import { Trash2 } from "lucide-react";
import CustomInput from "../forms/CustomInput";

import { useProjectStore } from "@/stores/projects";
import { SelectOptions } from "@/types/types";

import CustomReactMultipleSelect from "../forms/CustomReactMultipleSelect";
import { cn } from "@/lib/utils";

const ProjectMembersRow = ({
  register,
  field,
  index,
  remove,
  // errors,

  control,
}: {
  register: UseFormRegister<ProjectMembersFormType>;
  field: FieldArrayWithId<ProjectMembersFormType, "projectMembers", "id">;
  index: number;
  remove: UseFieldArrayRemove;

  // errors: FieldErrors<ProjectMembersFormType>;

  control: Control<ProjectMembersFormType, any>;
}) => {
  const { projects } = useProjectStore();

  const projectOptions: SelectOptions[] = [];
  if (projects) {
    projects.forEach((item) => {
      const objOption: SelectOptions = {
        value: item.id.toString(),
        label: item.fullTitle,
      };
      projectOptions.push(objOption);
    });
  }

  let selectedValue: { value: string; label: string }[] | null = [
    { value: "", label: "" },
  ];
  if (field.project.length === 1 && field.project[0].id === 0) {
    selectedValue = null;
  } else {
    selectedValue = field.project.map((item) => {
      return {
        value: item.id?.toString() ?? "",
        label: item.fullTitle ?? "",
      };
    });
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3 bg-slate-200 rounded-lg p-8 mb-6 mx-auto flex-1",
        {
          "border-2 border-primary shadow-lg": field?.name === "",
        }
      )}
    >
      <Trash2
        onClick={() => {
          remove(index);
        }}
        className="size-8 text-red-400 self-end cursor-pointer"
      />

      <div className="flex flex-col md:flex-row gap-4">
        <CustomInput
          type="text"
          register={register}
          name={`projectMembers.${index}.name`}
          label="Member's name"
          placeholder="project member's name"
          customClass="input input-bordered w-full"
          required={true}
          value={field.name}
        />
        <CustomInput
          type="text"
          register={register}
          name={`projectMembers.${index}.features`}
          label="Member's features"
          placeholder="project member's features"
          customClass="input input-bordered w-full"
          required={true}
          value={field.features}
        />
      </div>
      <CustomReactMultipleSelect
        control={control}
        register={register}
        label="Pick some projects"
        selectOptions={projectOptions}
        selectedValue={selectedValue}
        field={field}
        index={index}
      />
    </div>
  );
};

export default ProjectMembersRow;
