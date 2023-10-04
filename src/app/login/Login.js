"use client";

import UserContext from "@/context/userContext";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext);
  // console.log("login frontend", Login);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handlelogin = async (e) => {
    e.preventDefault();
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("invalid Data !!", {
        position: "top-center",
      });
      return;
    }
    try {
      const result = await login(loginData);
      // console.log("from login page", result);
      toast.success("Logged in", { position: "top-center" });
      //REDIRECT TO USER PAGE
      context.setUser(result.user);
      router.push("/Profile/User");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="card"></div>
        <h1 className="text-3xl y text-center">Login </h1>
        <form action="" onSubmit={handlelogin}>
          {/* ----------MAIL--------  */}
          <div className="mt-3">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium mb-2 ps-5"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter here"
              className="w-full p-3  rounded bg-gray-800 focus:ring-gray-400 border border-gray-800"
              value={loginData.email}
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
            />
          </div>
          {/* -----------PASSWORD--------------  */}
          <div className="mt-3">
            <label
              htmlFor="user_password"
              className="block text-sm font-medium mb-2 ps-5"
            >
              Password
            </label>
            <input
              type="Password"
              placeholder="Enter here"
              className="w-full p-3  rounded bg-gray-800 focus:ring-gray-400 border border-gray-800"
              value={loginData.password}
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
            />
          </div>
          <div className="mt-3 flex justify-center">
            <button
              type="submit"
              className="px-3 py-2 bg-green-600 rounded hover:bg-green-500"
            >
              Login
            </button>
            <button
              className="px-3 py-2 bg-orange-600 rounded hover:bg-orange-500 ms-3 "
              //   onClick={resetForm}
              type="button"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      {/* {
        JSON.stringify(loginData)
      } */}
    </div>
  );
};

export default Login;
