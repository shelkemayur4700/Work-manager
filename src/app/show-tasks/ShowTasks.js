"use client";

import Task from "@/app/show-tasks/Task";
import UserContext from "@/context/userContext";
import { deleteTask, getTasksofUser } from "@/services/taskServices";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ShowTasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);
  const loadTasks = async (userid) => {
    try {
      const tasks = await getTasksofUser(userid);
      setTasks([...tasks].reverse());
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  //----------DELETE TASK METHOD-----------
  async function deleteTaskParent(taskid) {
    try {
      const result = await deleteTask(taskid);
      console.log(result);
      // if (result) {
      //   toast.success("Your Task is deleted !!", {
      //     position: "top-center",
      //   });
      // }
      const newTasks = tasks.filter((item) => item._id != taskid);
      setTasks(newTasks);
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting task !!", {
        position: "top-center",
      });
    }
  }
  return (
    <div className="container grid mt-3 grid-cols-12 mb-2">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl text-center">Your Tasks ({tasks.length})</h1>
        {tasks.map((task) => {
          return (
            <Task
              task={task}
              key={task._id}
              deleteTaskParent={deleteTaskParent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowTasksPage;
