import { z } from "h3-zod";
export const loginSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(4),
});
