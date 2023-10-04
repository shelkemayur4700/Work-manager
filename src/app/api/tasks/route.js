//tasks

import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDb();

//GET ALL TASKS
export async function GET(request) {
  try {
    const tasks = await Task.find();

    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("error to get task", 404, false);
  }
}

//CREATE ALL TASKS

export async function POST(request) {
  const { title, content, userId, status } = await request.json();

  const authToken = request.cookies.get("authToken")?.value;
  // console.log("token from cookies", authToken);
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data._id);

  try {
    const task = new Task({
      title,
      content,
      userId: data._id,
      status,
    });
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201,
      message: "task added...",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create task",
      success: false,
    });
  }
}
