import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { strict: false }
);

schema.post("save", (error: any, _: any, next: any) => {
  if (error.name === "MongoServerError" && error.code === 11000) {
    next(new Error("Email déjà existant"));
  } else {
    next(error);
  }
});
export default model("profil", schema);
