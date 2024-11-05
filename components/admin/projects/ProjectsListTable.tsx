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
import { Eye, SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import { ProjectMember } from "@prisma/client";
import { ProjectType } from "@/types/types";
import { CldImage } from "next-cloudinary";
import { deleteProjectById } from "@/actions/admin/project";

import { useRouter } from "next/navigation";
const ProjectsListTable = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { projects, setProjects } = useProjectStore();
  const router = useRouter();
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
            <TableHead className="">Slug</TableHead>
            <TableHead className="">Order priority</TableHead>

            <TableHead>Members</TableHead>
            <TableHead>Public view</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects &&
            projects.length > 0 &&
            projects.map((item: ProjectType) => {
              return (
                <TableRow key={item.id} className="">
                  <TableCell>
                    {item.cover && (
                      <CldImage
                        className="rounded-full"
                        width="70"
                        height="70"
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
                  <TableCell className="font-medium">{item.slug}</TableCell>
                  <TableCell className="font-medium">{item.priority}</TableCell>

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
                  <TableCell>
                    <Link
                      href={`/projects/${item?.slug}`}
                      target="_blank"
                      className=" text-primary font-semibold"
                    >
                      <Eye className="size-7" />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-4 justify-end items-center">
                      <Link
                        href={`/admin/projects/${item.id}`}
                        className="text-green-600"
                      >
                        <SquarePen />
                      </Link>
                      <div
                        onClick={async () => {
                          await deleteProjectById(item.id);
                          router.push("/admin/projects");
                        }}
                        className="text-red-500 cursor-pointer"
                      >
                        <Trash2 />
                      </div>
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
