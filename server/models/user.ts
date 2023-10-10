import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    username: String,
    password: String,
    token: String,
    roles: { type: [String], default: [] },
  },
  {
    methods: {
      payload(obj = {}) {
        const user = Object.assign(
          { username: this.username, roles: this.roles },
          obj
        );
        return user;
      },
    },
  }
);

export default model("user", schema);
