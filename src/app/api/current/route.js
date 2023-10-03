import { NextResponse } from "next/server";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";

await connectDb();

export async function GET(request) {
  
  const authToken = request.cookies.get("authToken")?.value;
  console.log("token from ", authToken);
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data);
  const user = await User.findById(data._id).select("-password");
  return NextResponse.json(user);
}
