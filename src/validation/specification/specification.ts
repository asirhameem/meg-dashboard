import { z } from "zod";

// zod specification category validation schema. name is required, and description is optional
export const specificationSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().optional(),
  specification_category_id: z.string().refine((val) => !Number.isNaN(Number(val)), {
    message: "Expected number, received a string"
  })
});

export type TSpecification = z.infer<typeof specificationSchema>;
