import jwt from "jsonwebtoken";
import User from "../models/user";

export const jwtEncode = (data: any) => {
  return jwt.sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 60, data },
    useRuntimeConfig().jwtSecret
  );
};
export const jwtDecode = (token: string): { exp: any; data: any } | null => {
  // @ts-ignore
  return jwt.decode(token);
};

export async function jwtUser(token: string) {
  const decode = jwtDecode(token);
  if (!decode || decode.exp * 1000 < new Date().getTime()) {
    throw new Error("Not connected");
  }
  const user = await User.findOne({ token });
  if (!user) {
    throw new Error("Bad user");
  }
  return user.payload();
}
