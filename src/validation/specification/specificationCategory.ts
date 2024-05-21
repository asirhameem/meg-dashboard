import { z } from "zod";

// zod specification category validation schema. name is required
export const specificationCategorySchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1).max(255),
  is_active: z.boolean().default(true),
});

export type TSpecificationCategory = z.infer<typeof specificationCategorySchema>;
