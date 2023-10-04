"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { httpAxios } from "@/helper/httpHelper";
import { currentUser } from "@/services/userService";
import { toast } from "react-toastify";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const handlecurrentUser = async () => {
    try {
      const logUser = await currentUser();
      console.log( logUser);
      setUser({ ...logUser });
    } catch (error) {
      console.log(error);
      // toast.error("error in loading current user");
        setUser(undefined);
    }
  };
  useEffect(() => {
    handlecurrentUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
