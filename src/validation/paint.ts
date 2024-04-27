import { z } from "zod";

// zod category name, slug and description are required
export const paintSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }).min(3).max(124),
  hex: z.string({
    required_error: "Hex code is required",
  }).min(3).max(124),
  rgb: z.string({
    required_error: "RGB code is required",
  }).min(3).max(124),
  is_active: z.boolean().default(false),
});

export type TPaint = z.infer<typeof paintSchema>;
