import { z } from "zod";

// zod category name, slug and description are required
export const configurationSchema = z.object({
  section_name: z.string({
    required_error: "Section name is required",
  }).min(3).max(124),
  configuration_name: z.string({
    required_error: "Name is required",
  }).min(3).max(124),
  configuration_title: z.string({
    required_error: "Title is required",
  }).min(3).max(124),
  configuration_value: z.string({
    required_error: "Value is required",
  }).min(3).max(124),
});

export type TConfiguration = z.infer<typeof configurationSchema>;
