"use client";

import React, { useState } from "react";

const Login = () => {
    const[loginData, setLoginData] = useState({
        email:"",
        password:""
    })

    const handlelogin = (e)=>{
        e.preventDefault();
        
    }
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
