"use client";
import React, { useState } from "react";
import Image from "next/image";
import signupSvg from "../../assests/signupSvg.svg";
import { signUp } from "@/services/userService";
import { toast } from "react-toastify";
const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "uuyuyuyuyuyuyuy",
  });
  //   console.log(data);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp(data);
      //   console.log(response);
      toast.success("User added Successfully", {
        position: "top-center",
      });
      setData({ name: "", email: "", password: "", about: "", profileURL: "" });
    } catch (error) {
      //   console.log(error);
      toast.error("SignUp error..", {
        position: "top-center",
      });
    }
  };

  const resetForm = () => {
    setData({ name: "", email: "", password: "", about: "", profileURL: "" });
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="card">
          <div className="flex justify-center m-5">
            <Image alt="signup" style={{ width: "30%" }} src={signupSvg} />
          </div>
          <h1 className="text-3xl y text-center">SignUp Here</h1>
          <form action="\" onSubmit={handleSignup}>
            {/* -------NAME---------  */}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2 ps-5"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="w-full p-3  rounded bg-gray-800 focus:ring-gray-400 border border-gray-800"
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            </div>
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
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
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
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </div>
            {/* ------------ABOUT-----------  */}
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium mb-2 ps-5"
              >
                About
              </label>
              <textarea
                placeholder="Enter here"
                rows={8}
                className="w-full p-3  rounded  bg-gray-800 focus:ring-gray-400 border border-gray-800"
                value={data.about}
                onChange={(e) => {
                  setData({ ...data, about: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="mt-3 flex justify-center">
              <button
                type="submit"
                className="px-3 py-2 bg-green-600 rounded hover:bg-green-500"
              >
                SignUp
              </button>
              <button
                className="px-3 py-2 bg-orange-600 rounded hover:bg-orange-500 ms-3 "
                onClick={resetForm}
                type="button"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
