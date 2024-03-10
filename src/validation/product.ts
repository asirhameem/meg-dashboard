import { z } from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// zod login validation schema. email and password are required
export const productSchema = z.object({
  model: z.string().min(1).max(255),
  title: z.string().min(1).max(255),
  slug: z.string().min(1).max(255),
  description: z.string().min(1).max(255),
  production_cost: z.string().refine((val) => !Number.isNaN(Number(val)), {
    message: "Expected number, received a string"
  }),
  selling_cost: z.string().refine((val) => !Number.isNaN(Number(val)), {
    message: "Expected number, received a string"
  }),
  booking_cost: z.string().refine((val) => !Number.isNaN(Number(val)), {
    message: "Expected number, received a string"
  }),
  sorting_order: z.string().refine((val) => !Number.isNaN(Number(val)), {
    message: "Expected number, received a string"
  }),
  thumbnail_file: z
    .any()
  // .refine((files) => files?.length == 1, "Image is required.")
  // .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  // .refine(
  //   (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //   ".jpg, .jpeg, .png and .webp files are accepted."
  // )
  ,
  marketing_content_type: z.string().min(1).max(255),
  marketing_content_file: z
    .any()
  // .refine((files) => files?.length == 1, "Image is required.")
  // .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  // .refine(
  //   (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //   ".jpg, .jpeg, .png and .webp files are accepted."
  // )
  ,
  is_marketed: z.boolean(),
  is_active: z.boolean(),
  category_id: z.string().refine((val) => !Number.isNaN(Number(val)), {
    message: "Expected number, received a string"
  }),

});

export type TProduct = z.infer<typeof productSchema>;
