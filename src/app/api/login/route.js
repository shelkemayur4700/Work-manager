import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

connectDb();

export async function POST(request) {
  console.log("login api ---");
  const { email, password } = await request.json();

  try {
    // 1.GET USER
    const user = await User.findOne({
      email: email,
      // password: password,
    });
    if (user == null) {
      throw new Error("user not found !");
    }
    // 2. PASSWORD CHECK
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Password not matched");
    }

    // 3. GENERATE TOKEN

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );
    // console.log("here is token ", token);

    // 4. SETTING TOKEN IN COOKIE
    const response = NextResponse.json({
      message: "success",
      success: true,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    // console.log(user);
    return response;
  } catch (error) {
    console.log(error);
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
