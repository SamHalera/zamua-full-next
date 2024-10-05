"use client";
import { getProjectById, getProjects } from "@/actions/projects";
import Loader from "@/components/Loader";
import { useProjectStore } from "@/stores/projects";
import React, { useEffect, useState } from "react";

type ProjectFormType = {
  id?: number;
  fullTitle: string;
  primaryTitleString: string;
  secondaryTitleString: string;
  cover: string;
  description: string;
};
const ProjectForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { projects, setProjects } = useProjectStore();
  useEffect(() => {
    const fecthData = async () => {
      const projectsFromDB = await getProjects();
      projectsFromDB && setProjects(projectsFromDB);

      setIsLoading(false);
    };
    fecthData();
  }, []);

  return isLoading ? <Loader /> : <div></div>;
};

export default ProjectForm;
