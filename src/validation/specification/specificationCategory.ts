import { z } from "zod";

// zod specification category validation schema. name is required
export const specificationCategorySchema = z.object({
  name: z.string().min(1).max(255),
});

export type TSpecificationCategory = z.infer<typeof specificationCategorySchema>;
