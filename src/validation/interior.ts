import { z } from "zod";

// zod category name, slug and description are required
export const interiorSchema = z.object({
  product_id: z.string().refine((val) => !Number.isNaN(Number(val)), {
    message: "Expected number, received a string"
  }),
  interior_type_id: z.string().refine((val) => !Number.isNaN(Number(val)), {
    message: "Expected number, received a string"
  }),
  interior_title: z.string().min(1).max(128),
  interior_description: z.string().min(1).max(256),
  interior_file: z.any(),
});

export type TInterior = z.infer<typeof interiorSchema>;
