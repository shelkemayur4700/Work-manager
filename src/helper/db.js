import mongoose from "mongoose";
import { User } from "../models/user";

export const connectDb = async () => {
  try {
    // console.log("hdhdhdhd", process.env.MONGO_DB_URL);

    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("db...connected..");
    // console.log("connectin wit db is....", connection);
    // TESTING AND CREATING NEW USER
    // const uuser = new User({
    //   name: "test name",
    //   email: "test@mail.com",
    //   password: "testpassword",
    //   about: "this is testing",
    // });

    // await uuser.save();
    // console.log("user is created..")
  } catch (error) {
    console.log("failed to connect with db");
    console.log(error);
  }
};
