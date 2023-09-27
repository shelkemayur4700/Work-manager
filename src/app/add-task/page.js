import React from "react";

export const metadata = {
  title: "Add Task: Work Manager",
};

const addTask = () => {
  return (
    <div className="grid grid-cols-12 justify-center ">
      <div className="p-5 col-span-6 col-start-4 ">
        <h1 className="text-3xl">Add Your Task Here..</h1>

        <form action="#!">
          <div>
            <label htmlFor="">title</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addTask;
