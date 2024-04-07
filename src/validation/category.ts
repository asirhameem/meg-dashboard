import { z } from "zod";

// zod category name, slug and description are required
export const categorySchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }).min(3).max(124),
  slug: z.string({
    required_error: "Slug is required",
  }).min(3).max(124),
  description: z.string({
    required_error: "Description is required",
  }).min(1),
  is_visible: z.boolean().default(true),
});

export type TCategory = z.infer<typeof categorySchema>;
