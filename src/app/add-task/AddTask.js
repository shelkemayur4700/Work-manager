"use client";
import React, { useState } from "react";
import loginSvg from "../../assests/loginSvg.svg";
import Image from "next/image";
import { adDTask } from "@/services/taskServices";
import { toast } from "react-toastify";

const AddTask = () => {
  // console.log("rhis is add task")

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "6511240c3b8e0643eb4673dd",
  });

  const handleAddTask = async (e) => {
    e.preventDefault();
    //Returns the form element
    // console.log(e.target
    //return values from input field
    console.log(task);
    try {
      const result = await adDTask(task);
      console.log(result);
      toast.success("your task is added !!", {
        position: "top-center",
      });
      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("task not added", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid grid-cols-12 mt-4 justify-center ">
      <div className="p-5 col-span-6 col-start-4 ">
        <div className="my-8 flex justify-center">
          <Image src={loginSvg} alt="login" style={{ width: "50%" }} />
        </div>
        <h1 className="text-3xl text-center">Add Your Task Here..</h1>

        <form action="#!" onSubmit={handleAddTask}>
          {/* Task Title  */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              title
            </label>
            <input
              type="text"
              className="w-full p-3  rounded-full bg-gray-800 focus:ring-gray-400 border border-gray-800"
              id="task_title"
              name="task_title"
              value={task.title}
              onChange={(e) => {
                setTask({ ...task, title: e.target.value });
              }}
            />
          </div>
          {/* Task Content  */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3  rounded bg-gray-800 focus:ring-gray-400 border border-gray-800"
              id="task_content"
              rows={5}
              name="task_content"
              value={task.content}
              onChange={(e) => {
                setTask({ ...task, content: e.target.value });
              }}
            />
          </div>
          {/* Task Status  */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-3  rounded bg-gray-800 focus:ring-gray-400 border border-gray-800"
              name="task_status"
              value={task.status}
              onChange={(e) => {
                setTask({ ...task, status: e.target.value });
              }}
            >
              <option value="none" disabled>
                ---Select Status---{" "}
              </option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>
          {/* Button actions  */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-700">
              Add Task
            </button>
            <button className="bg-red-500 py-2 px-3 rounded-lg hover:bg-red-600 ms-3">
              Clear
            </button>
          </div>
          {/* PRINTING THE VALUES CONVERTING OBJECT INTO STRING AND THEN PRININTG  */}
          {/* {
            JSON.stringify(task)
          } */}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
