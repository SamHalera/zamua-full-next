import * as z from "zod";

export const projectMemberSchema = z.object({
  projectMembers: z.array(
    z.object({
      name: z.string({ required_error: "This field is required!" }),
      features: z.string({ required_error: "features are required!" }),
    })
  ),
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
      // .min(1, { message: "Priority is required" }),
      cover: z.string().nullable(),
    })
  ),
});
