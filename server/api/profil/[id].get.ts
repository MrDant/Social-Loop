import { z, useValidatedParams, zh } from "h3-zod";
import profil from "../../models/profil";

export default defineEventHandler(async (event) => {
  await useAuth(event);
  const { id } = await useValidatedParams(event, {
    id: z.string(),
  });
  return await profil.findById(id);
});
