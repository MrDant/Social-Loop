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
      lat: z.number(),
      long: z.number(),
    }),
  }),
});

export const putSchema = z.object({
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  attributes: z
    .object({
      phone: z.string().optional(),
      address: z.object({
        city: z.string(),
        label: z.string(),
        postcode: z.string().optional(),
        street: z.string().optional(),
        lat: z.number(),
        long: z.number(),
      }),
    })
    .optional(),
});
