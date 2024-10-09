import { ProjectType } from "@/types/types";
import { Project } from "@prisma/client";
import { create } from "zustand";

type ProjectStore = {
  projects: ProjectType[] | null;
  setProjects: (projectList: ProjectType[]) => void;
  project: ProjectType | null;
  setProject: (project: ProjectType) => void;
};

export const useProjectStore = create<ProjectStore>()((set) => ({
  projects: null,
  project: null,
  setProjects: (projectList: ProjectType[]) => {
    set({ projects: projectList });
  },
  setProject: (project: ProjectType) => {
    set({ project });
  },
}));
