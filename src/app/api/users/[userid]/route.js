import profile from "@/app/Profile/page";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

//GET SINGLE USER

export async function GET(request, { params }) {
  const { userid } = params;

  try {
    const singleUser = await User.findById(userid);
    return NextResponse.json({
      message: " get single user.!!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error to find single user.!!",
      success: false,
    });
  }
}

//DELETE USER
export async function DELETE(request, { params }) {
  const { userid } = params;

  try {
    await User.deleteOne({
      _id: userid,
    });
    return NextResponse.json({
      message: "user deleted..!!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error in deleting user..!!",
      success: false,
    });
  }
}

//UPDATE USER DETAILS.......

export async function PUT(request, { params }) {
  // const { name, password, about, profileURL } = await request.json();
  // console.log({ name, password, about, profileURL });
  try {
    const { userid } = params;

    let userData = await request.json();

    let user = await User.findById(userid);

    console.log("user", user);

    if (!user) {
      return NextResponse.json("user with given userid not found");
    }
    //THIS IS  ALSO THE WAY TO  WRITE UPDATE API AND FOR ANOTHER REFER TASKS [taskid] PUT CALL..
    const updateUser = await User.updateOne(
      { _id: userid }, // Replace userId with the actual user's _id
      { $set: userData }
    );

    return NextResponse.json(updateUser, {
      message: "user updated sucessfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to update user",
      success: false,
    });
  }
}

