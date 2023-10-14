import Profil from "../../models/profil";
import { useValidatedBody } from "h3-zod";
import { profilSchema } from "../../../shared/zod/profil";

export default defineEventHandler(async (event) => {
  await useAuth(event, "post_profil");
  const body = await useValidatedBody(event, profilSchema);
  const profil = new Profil(body);
  await modelSave(profil);
  return body;
});
