import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/Rx";
import Swal from "sweetalert2";

const Task = ({ task, deleteTaskParent }) => {
  const { user } = useContext(UserContext);

  
  function deletetask(taskid) {
    deleteTaskParent(taskid);
  }
  const handledelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletetask(task._id);
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
    });
  };
  return (
    <div
      className={` shadow-lg mt-2 rounded-md 
    ${task.status == "completed" ? "bg-green-800" : "bg-gray-800"} `}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>
          <span
            // onClick={() => {
            //   deletetask(task._id);
            // }}
            onClick={handledelete}
            className=" bg-gray-950 cursor-pointer hover:bg-gray-900 rounded-full flex w-9 h-9 justify-center items-center"
          >
            <RxCross2 />
          </span>
        </div>
        <p className="mt-2 font-normal">{task.content}</p>
        <div className="flex justify-between mt-3">
          {" "}
          <p className="text-right">
            Author: <span className="font-bold">{user?.name}</span>{" "}
          </p>
          <p className="text-left">
            Status: <span className="font-bold">{task.status}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
