import * as z from "zod";

export const projectSchema = z.object({
  id: z.number(),
  fullTitle: z.string().min(1, { message: "Project name is required" }),
  primaryTitleString: z.string().min(1, { message: "This field is required" }),
  secondaryTitleString: z
    .string()
    .min(1, { message: "This field is required" }),
  description: z.string().nullable(),
  cover: z.string().nullable(),
  priority: z
    .string({ required_error: "Priority is required" })
    .min(1, { message: "Priority is required" })
    .refine((val) => val.search(/\D/) === -1, {
      message: "Only positive numbers",
    }),
  slug: z.string().min(1, { message: "Slug is required" }),
});

export const musicFeatureSchema = z.object({
  musicFeature: z.array(
    z.object({
      id: z.number(),
      title: z
        .string({ required_error: "Title is required" })
        .min(1, { message: "Title is required" }),
      subTitle: z.string().nullable(),
      iframe: z
        .string({ required_error: "Iframe field is required" })
        .min(1, { message: "Iframe is required" }),
      path: z
        .string({ required_error: "Path field is required" })
        .min(1, { message: "Path is required" }),
      priority: z
        .string({ required_error: "Priority is required" })
        .min(1, { message: "Priority is required" })
        .refine((val) => val.search(/\D/) === -1, {
          message: "Only positive numbers",
        }),
      cover: z.string().nullable(),
    })
  ),
});

export const showSchema = z.object({
  shows: z.array(
    z.object({
      id: z.number(),
      name: z.string().min(1, { message: "Show has to have a name" }),
      date: z
        .string({ required_error: "Date field is required" })
        .transform((str) => new Date(str)),
      venue: z.string().min(1, { message: "Venue is required" }),
      venueUrl: z
        .string()
        .min(0)
        .regex(/^(https:\/\/[^\s/$.?#].[^\s]*)?$/gm, {
          message: "Invalid url",
        })
        .nullable(),
      location: z.string().min(1, { message: "Location is required" }),
      locationUrl: z
        .string()
        .regex(/^(https:\/\/[^\s/$.?#].[^\s]*)?$/gm, {
          message: "Invalid url",
        })
        .nullable(),
      ticketsUrl: z
        .string()
        .regex(/^(https:\/\/[^\s/$.?#].[^\s]*)?$/gm, {
          message: "Invalid url",
        })
        .nullable(),
    })
  ),
});
export const creditSchema = z.object({
  credits: z.array(
    z.object({
      id: z.number(),
      name: z.string().min(1, { message: "Credit has to have a name" }),
      url: z
        .string()
        .min(0)
        .regex(/^(https:\/\/[^\s/$.?#].[^\s]*)?$/gm, {
          message: "Invalid url",
        })
        .nullable(),
    })
  ),
});
export const videoSchema = z.object({
  videos: z.array(
    z.object({
      id: z.number(),
      projectId: z.number().nullable(),
      iframe: z.string().min(1, { message: "Iframe is required" }),
      priority: z
        .string({ required_error: "Priority is required" })
        .min(1, { message: "Priority is required" })
        .refine((val) => val.search(/\D/) === -1, {
          message: "Only positive numbers",
        }),
    })
  ),
});

export const playlistSchema = z.object({
  playlists: z.array(
    z.object({
      id: z.number(),
      title: z.string().min(1, { message: "Title is required" }),
      description: z.string().nullable(),
      iframe: z.string().min(1, { message: "Iframe is required" }),
      path: z.string().min(1, { message: "Path is required" }),
      slug: z.string().min(1, { message: "Slug is required" }),
      priority: z
        .string({ required_error: "Priority is required" })
        .min(1, { message: "Priority is required" })
        .refine((val) => val.search(/\D/) === -1, {
          message: "Only positive numbers",
        }),
      cover: z.string().nullable(),
    })
  ),
});
