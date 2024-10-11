import * as z from "zod";

export const projectMemberSchema = z.object({
  projectMembers: z.array(
    z.object({
      name: z.string({ required_error: "This field is required!" }),
      features: z.string({ required_error: "features are required!" }),
    })
  ),
});
