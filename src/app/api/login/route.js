import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs"

export async function POST(request) {
  console.log("login");
  const { email, password } = await request.json();

  try {
    // 1.GET USER 
    const user = await User.findOne({
      email: email,
    });
    console.log(user);
    if (user == null) {
      throw new Error("user not found !");
    }
    // 2. PASSWORD CHECK 
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Password not matched");
    }
    return NextResponse.json({
      message: "logged in",
    });
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
