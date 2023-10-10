import { useValidatedBody } from "h3-zod";
import bcrypt from "bcrypt";
import userModel from "../../models/user";
import { loginSchema } from "../../../shared/zod/auth";
const saltRounds = 10;
export default defineEventHandler(async (event) => {
  try {
    const body = await useValidatedBody(event, loginSchema);
    const config = useRuntimeConfig();
    if (await userModel.findOne({ username: body.username })) {
      throw new Error("");
    }
    const user = new userModel(body);

    const hash = await new Promise((resolve, reject) => {
      bcrypt.hash(body.password, saltRounds, function (err, hash) {
        if (err) {
          return reject(err);
        }
        resolve(hash);
      });
    });
    if (!hash) {
      throw new Error("");
    }
    //@ts-ignore
    user.password = hash;
    await user.save();
    return null;
  } catch (error) {
    throw new Error("Erreur lors de l'inscription");
  }
});
