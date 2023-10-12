import profil from "../models/profil";

export default defineEventHandler(async (event) => {
  await useAuth(event);
  return await profil.find();
});
