import { NextResponse } from "next/server";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";

export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  // console.log("token from cookies", authToken);
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data);
  await connectDb();
  const user = await User.findById(data._id).select("-password");
  console.log("user from current API", user);
  return NextResponse.json(user);
}
