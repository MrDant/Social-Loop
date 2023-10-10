import userModel from "../../models/user";
import bcrypt from "bcrypt";
import { useValidatedBody } from "h3-zod";
import { loginSchema } from "../../../shared/zod/auth";

export default defineEventHandler(async (event) => {
  const body = await useValidatedBody(event, loginSchema);
  const user = await userModel.findOne({ username: body.username });
  // @ts-ignore
  if (!user || !(await bcrypt.compare(body.password, user.password))) {
    throw new Error("Les identifiants sont incorrects");
  }

  const token: string = await jwtEncode(user.payload());
  user.token = token;
  await user.save();
  return user.payload({ token });
});
