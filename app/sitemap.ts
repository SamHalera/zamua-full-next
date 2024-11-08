import { getPlaylists } from "@/actions/playlist";
import { getProjects } from "@/actions/projects";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_FRONT;
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/bio`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/music`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/shows`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/photos`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/videos`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/playlists`,
      lastModified: new Date(),
      priority: 1,
    },
  ];
  const projects = await getProjects();
  const projectRoutes = projects.map((item) => {
    return {
      url: `${baseUrl}/projects/${item.slug}`,
      lastModified: new Date(),
      priority: 1,
    };
  });
  const playlists = await getPlaylists();
  const playlistRoutes = playlists?.map((item) => {
    return {
      url: `${baseUrl}/playlists/${item.slug}`,
      lastModified: new Date(),
      priority: 1,
    };
  });

  return [...staticRoutes, ...projectRoutes, ...(playlistRoutes ?? [])];
}
