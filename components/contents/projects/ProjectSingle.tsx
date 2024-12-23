"use client";
import React from "react";

import Link from "next/link";
import { formatTitle, parseText } from "@/lib/utils";

import { ProjectMember } from "@prisma/client";
import { CldImage } from "next-cloudinary";
import { ProjectAndMediaType } from "@/types/types";
import MediaGallery from "../media/MediaGallery";

const ProjectSingle = ({ project }: { project: ProjectAndMediaType }) => {
  const parsedDescription = parseText(project.description ?? "");
  return (
    <>
      <div className="p-6 md:p-16">
        <Link
          className="mb-6 bg-primary text-black border-2 border-primary hover:bg-transparent hover:text-primary transition-all h-14 w-36 flex justify-center items-center "
          href={"/projects#toScroll"}
        >
          back to projects
        </Link>
        <div className="flex flex-col items-center w-full mx-auto gap-6">
          <h1
            className="text-5xl font-semibold text-center md:text-start"
            dangerouslySetInnerHTML={{
              __html: formatTitle(project.fullTitle.toUpperCase()),
            }}
          />

          <div className="flex flex-col md:flex-row gap-11 md:items-start items-center md:justify-center">
            {project.cover && (
              <CldImage
                width="300"
                height="300"
                src={project.cover}
                sizes="100vw"
                crop={"fill"}
                alt="Description of my image"
              />
            )}

            <div className="flex flex-col gap-7">
              <div className="px-4 border-l-4 border-primary">
                {project.projectMember.map((member: ProjectMember) => {
                  return (
                    <div key={member.id} className=" italic">
                      <span className="font-semibold">{member.name}</span>
                      <span> - {member.features}</span>
                    </div>
                  );
                })}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: parsedDescription ?? "" }}
              />
            </div>
          </div>
        </div>
      </div>
      {project.media?.length > 0 && (
        <div className=" flex justify-center">
          <div className=" ">
            <MediaGallery mediaGallery={project.media} layout="project" />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSingle;
