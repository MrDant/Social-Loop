import { z } from "h3-zod";
export const profilSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  attributes: z.object({
    phone: z.string().optional(),
    address: z.object({
      city: z.string(),
      label: z.string(),
      postcode: z.string().optional(),
      street: z.string().optional(),
      x: z.number(),
      y: z.number(),
    }),
  }),
});
