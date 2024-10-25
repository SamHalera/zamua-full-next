import { Project, ProjectMember } from "@prisma/client";
import { create } from "zustand";

type ProjectMemberStore = {
  projectMembers: ProjectMember[] | null;
  setProjectMembers: (projectMembersList: ProjectMember[]) => void;
  projectMember: ProjectMember | null;
  setProjectMember: (projectMember: ProjectMember) => void;
};

export const useProjectMemberStore = create<ProjectMemberStore>()((set) => ({
  projectMembers: null,
  projectMember: null,
  setProjectMembers: (projectMembersList: ProjectMember[]) => {
    set({ projectMembers: projectMembersList });
  },
  setProjectMember: (projectMember: ProjectMember) => {
    set({ projectMember });
  },
}));
