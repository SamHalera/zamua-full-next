import React from "react";
import { ProjectMembersFormType } from "./ProjectmembersForm";
import {
  Control,
  FieldArrayWithId,
  // FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import ProjectMembersRow from "./ProjectMembersRow";

const ProjectMemberItem = ({
  register,
  fields,
  remove,

  // errors,
  control,
}: {
  register: UseFormRegister<ProjectMembersFormType>;
  fields: FieldArrayWithId<ProjectMembersFormType, "projectMembers", "id">[];
  remove: UseFieldArrayRemove;

  // errors: FieldErrors;
  control: Control<ProjectMembersFormType, any>;
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {fields.map((field, index) => {
        return (
          <ProjectMembersRow
            key={field.id}
            register={register}
            field={field}
            // errors={errors}
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
