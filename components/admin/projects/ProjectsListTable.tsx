"use client";
import { getProjects } from "@/actions/projects";
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
import { ProjectMember } from "@prisma/client";
import { ProjectType } from "@/types/types";
import { CldImage } from "next-cloudinary";
import { deleteProjectById } from "@/actions/admin/project";
const ProjectsListTable = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { projects, setProjects } = useProjectStore();
  useEffect(() => {
    const fecthData = async () => {
      const projectsFromDB = await getProjects();
      if (projectsFromDB) {
        setProjects(projectsFromDB);
      }

      setIsLoading(false);
    };
    fecthData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="my-9">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="">Project</TableHead>

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
                  <TableCell>
                    {item.cover && (
                      <CldImage
                        className="rounded-full"
                        width="100"
                        height="100"
                        src={item.cover}
                        sizes="100vw"
                        crop="fill"
                        alt="Description of my image"
                      />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">
                    {item.fullTitle}
                  </TableCell>

                  <TableCell className="">
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
