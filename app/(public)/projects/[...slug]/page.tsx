import { getProjectBySlug } from "@/actions/projects";
import ProjectSingle from "@/components/contents/projects/ProjectSingle";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const project = await getProjectBySlug(slug);
  const title = "Zamua soul and folk song-writer";
  const description =
    project?.description ??
    "Zamua is an italian and burundian song-writer, singer and guitarist based in Paris. His music is a fusion between pop-folk and soul-jazz.";
  const url =
    project?.cover ?? `${process.env.NEXTAUTH_URL}/images/bg-home.jpg`;

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXTAUTH_URL}/projects/${slug}`,
      images: [
        {
          url,
          width: 800,
          height: 600,
        },
      ],
    },
  };

  return metadata;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const project = await getProjectBySlug(slug);
  if (!project) return;
  console.log("project==>", project);
  return (
    <div>
      <ProjectSingle project={project} />
    </div>
  );
};

export default page;
