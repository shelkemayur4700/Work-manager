import mongoose from "mongoose";

const config = {
  isConnected: 0,
};

export const connectDb = async () => {
  if (config.isConnected) {
    return;
  }
  try {
    // console.log("hdhdhdhd", process.env.MONGO_DB_URL);
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
      // serverSelectionTimeoutMS: 100000,
    });
    console.log("db...connected..");
    console.log(connection.readyState)
    config.isConnected = connection.readyState
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
