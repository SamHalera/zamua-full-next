import React from "react";
import { ProjectMembersFormType } from "./ProjectmembersForm";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import ProjectMembersRow from "./ProjectMembersRow";

const ProjectMemberItem = ({
  register,
  fields,
  remove,

  errors,
}: {
  register: UseFormRegister<ProjectMembersFormType>;
  fields: FieldArrayWithId<ProjectMembersFormType, "projectMembers", "id">[];
  remove: UseFieldArrayRemove;

  errors: FieldErrors;
}) => {
  return (
    <div>
      {fields.map((field, index) => {
        return (
          <ProjectMembersRow
            key={field.id}
            register={register}
            field={field}
            errors={errors}
            remove={remove}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default ProjectMemberItem;
