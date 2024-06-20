import { z } from "zod";

// zod category name, slug and description are required
export const productSpecificationSchema = z.object({
  product_id: z.string().refine((val) => !Number.isNaN(Number(val)), {
    message: "Expected number, received a string"
  }),
  specification_category_id: z.string().refine((val) => !Number.isNaN(Number(val)), {
    message: "Expected number, received a string"
  }),
  specification_id: z.string().refine((val) => !Number.isNaN(Number(val)), {
    message: "Expected number, received a string"
  }),
  value: z.string().min(1).max(128),
});

export type TProductSpecification = z.infer<typeof productSpecificationSchema>;
