"use client";

import Task from "@/components/Task";
import UserContext from "@/context/userContext";
import { getTasksofUser } from "@/services/taskServices";
import React, { useContext, useEffect, useState } from "react";

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
  return (
    <div className="container grid mt-3 grid-cols-12 mb-2">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl text-center">Your Tasks ({tasks.length})</h1>
        {tasks.map((task) => {
          return <Task task={task} key={task._id} />;
        })}
      </div>
    </div>
  );
};

export default ShowTasksPage;
