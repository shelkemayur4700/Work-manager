//"Localhost:3000/api/users/[userId]/tasks"
//GET ALL TASKS OF SINGLE USER

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
      const { userid } = params;
  
      const UserTasks = await Task.find({ userId: userid });
      return NextResponse.json(UserTasks);
    } catch (error) {
      console.log(error);
      return getResponseMessage("Error in getting single user tasks", 404, false);
    }
  }
  