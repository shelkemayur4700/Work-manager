import mongoose, { Schema } from "mongoose";

const Userschema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true, //to get user with only unique email id...
    required: [true, "Email Required !!"],
  },
  password: {
    type: String,
    required: [true, "password required !!"],
  },
  about: String,
  profileURL: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", Userschema);
