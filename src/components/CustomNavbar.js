"use client";

import Link from "next/link";
import React from "react";



const CustomNavbar = () => {
  return (
    <nav className="bg-red-500 w-full h-12 py-2 px-4  md:px-6 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-bold text-red-100">
            <a href="#">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="md:flex space-x-5 font-semibold hidden">
            <li className="hover:text-black hover:font-semibold">
                <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-black hover:font-semibold">
        <Link href={"/add-task"}>Add Task</Link>
            </li>
            <li className="hover:text-black hover:font-semibold">
              <Link href={"/show-tasks"} >Show Tasks</Link>
            </li>
        </ul>
      </div>
      <div>
        <ul className="md:flex space-x-3 font-semibold hidden px-2">
            <li className="hover:text-black hover:font-semibold">
            <Link href={"/login"}>Login</Link>
            </li>
            <li className="hover:text-black hover:font-semibold">
            <Link href={"/signup"}>SignUp</Link>
            </li>
        </ul>
        <div className="md:hidden ">
          <a className="" href="">&#8801;</a>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
