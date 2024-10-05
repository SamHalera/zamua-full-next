"use client";
import { deleteProjectById, getProjects } from "@/actions/projects";
import Loader from "@/components/Loader";
import { useProjectStore } from "@/stores/projects";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import { Project, ProjectMember } from "@prisma/client";
import { ProjectType } from "@/types/types";
const ProjectsListTable = () => {
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

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Project</TableHead>

            <TableHead>Members</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects &&
            projects.length > 0 &&
            projects.map((item: ProjectType) => {
              return (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    {item.fullTitle}
                  </TableCell>

                  <TableCell>
                    {item.projectMember &&
                      item.projectMember.length > 0 &&
                      item.projectMember.map((member: ProjectMember, index) => {
                        return (
                          <span key={member.id}>
                            {member.name}
                            {index !== item.projectMember.length - 1 && ", "}
                          </span>
                        );
                      })}
                  </TableCell>
                  <TableCell className="flex  gap-4 justify-end">
                    <Link
                      href={`/admin/projects/${item.id}`}
                      className="text-green-600"
                    >
                      <SquarePen />
                    </Link>
                    <div
                      onClick={async () => {
                        await deleteProjectById(item.id);
                      }}
                      className="text-red-500 cursor-pointer"
                    >
                      <Trash2 />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectsListTable;
