"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter()
  console.log(context);

  async function dologout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/login")
    } catch (error) {
      console.log(error);
      toast.error("logout error");
    }
  }

  return (
    <nav className="bg-red-500 w-full h-12 py-2 px-4  md:px-6 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-bold text-red-100">
          <a href="#">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="md:flex space-x-5 font-semibold ">
          {context.user && (
            <>
              <li className="hover:text-black hover:font-semibold">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-black hover:font-semibold">
                <Link href={"/add-task"}>Add Task</Link>
              </li>
              <li className="hover:text-black hover:font-semibold">
                <Link href={"/show-tasks"}>Show Tasks</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="md:flex space-x-3 font-semibold  px-2">
          {context.user && (
            <>
              <li className="hover:text-black hover:font-semibold">
                <Link href={"/login"}>{context.user.name}</Link>
              </li>
              <li className="hover:text-black hover:font-semibold">
                <button onClick={dologout}>Logout</button>
              </li>
            </>
          )}
          {!context.user && (
            <>
              <li className="hover:text-black hover:font-semibold">
                <Link href={"/login"}>Login</Link>
              </li>
              <li className="hover:text-black hover:font-semibold">
                <Link href={"/signup"}>SignUp</Link>
              </li>
            </>
          )}
        </ul>
        {/* <div className="md:hidden ">
          <a className="" href="">&#8801;</a>
        </div> */}
      </div>
    </nav>
  );
};

export default CustomNavbar;
