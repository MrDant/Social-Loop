import jwt from "jsonwebtoken";
import user from "server/models/user";

export const jwtEncode = (data: any) => {
  return jwt.sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 60, data },
    useRuntimeConfig().jwtSecret
  );
};
export const jwtDecode = () => {
  console.log(jwt);
  return null;
};

export const jwtVerify = (token: string) => {
  return false;
  return jwt.verify(token, useRuntimeConfig().jwtSecret);
};

export const decodeUser = async (token: string | null) => {
  if (token) {
    return await user.findOne({ token });
  }
  return null;
};
