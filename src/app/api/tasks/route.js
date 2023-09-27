//tasks

import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

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
  const { title, content, userId } = await request.json();

  try {
    const task = new Task({
      title,
      content,
      userId,
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
