//api/tasks/taskid

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//GET SINGLE TASKS
export async function GET(request, { params }) {
  try {
    const { taskid } = params;
    const singletask = await Task.findById(taskid);
    return NextResponse.json(singletask);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting in single task", 404, false);
  }
}

export async function POST() {}

//UPDATE SINGLE TASKS
export async function PUT(request, { params }) {
  try {
    //THIS IS  ALSO THE WAY TO  WRITE UPDATE API AND FOR ANOTHER REFER USER [userid] PUT CALL..
    const { taskid } = params;

    const { title, content, status } = await request.json();

    let task = await Task.findById(taskid); //we are using let bcz we are updating data and const cannot be changebale..

    (task.title = title), (task.content = content), (task.status = status);

    const updatedTask = await task.save();
    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in updating task", 500, false);
  }
}

//DELETE TASKS..
export async function DELETE(request, { params }) {
  try {
    const { taskid } = params;

    await Task.deleteOne({
      _id: taskid,
    });

    return getResponseMessage("Task Deleted...", 200, true);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in deleting task", 500, false);
  }
}
