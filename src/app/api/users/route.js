import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {
  let users = [];

  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users !!",
      success: false,
    });
  }

  return NextResponse.json(users);
}
// -------------------------------
// ------CREATE USER----
export async function POST(request) {
  // FETCH USER DETAILS FROM REQUEST
  const { name, email, password, about, profileURL } = await request.json();
  console.log({ name, email, password, about, profileURL });

  // CREATE USER OBJECT WITH USER MODEL

  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });

  try {
    // SAVE OBJECT TO DB
    const crestedUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create user !!",
      status: false,
    });
  }
  // const body = request.body;
  // console.log(body);
  // console.log(request.method);
  // console.log(request.cookies);
  // console.log(request.headers);
  // const jsonData = await request.json();
  // console.log(jsonData);
  // const textData = await request.text()
  // console.log(textData)
  // return NextResponse.json({
  //   message: "posting user data",
  // });
}

// export function UPDATE() {}
