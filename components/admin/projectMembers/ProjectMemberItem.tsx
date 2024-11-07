import React from "react";
import { ProjectMembersFormType } from "./ProjectmembersForm";
import {
  Control,
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import ProjectMembersRow from "./ProjectMembersRow";

const ProjectMemberItem = ({
  register,
  fields,
  remove,
  control,
}: {
  register: UseFormRegister<ProjectMembersFormType>;
  fields: FieldArrayWithId<ProjectMembersFormType, "projectMembers", "id">[];
  remove: UseFieldArrayRemove;
  control: Control<ProjectMembersFormType, any>;
}) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {fields.map((field, index) => {
        return (
          <ProjectMembersRow
            key={field.id}
            register={register}
            field={field}
            remove={remove}
            index={index}
            control={control}
          />
        );
      })}
    </div>
  );
};

export default ProjectMemberItem;
