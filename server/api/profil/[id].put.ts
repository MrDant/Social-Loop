import { z, useValidatedParams, useValidatedBody, zh } from "h3-zod";
import Profil from "../../models/profil";
import { putSchema } from "../../../shared/zod/profil";

export default defineEventHandler(async (event) => {
  await useAuth(event);
  const { id } = await useValidatedParams(event, {
    id: z.string(),
  });
  const body = await useValidatedBody(event, putSchema);
  return await Profil.findOneAndUpdate({ _id: id }, body);
});
