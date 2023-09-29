import { NextResponse } from "next/server";
import { User } from "@/models/user";

export async function POST(request) {
  console.log("login");
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({
      email: email,
    });

    if (user == null) {
      throw new Error("user not found !");
    }
    return NextResponse.json({
      message: "logged in",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
