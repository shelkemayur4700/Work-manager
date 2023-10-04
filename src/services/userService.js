import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user) {
  // console.log("usekkdkdd",user);
  const result = await httpAxios
    .post("/api/users", user)
    .then((response) => response.data);
  return result;
}

export async function login(loginData) {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((res) => res.data);
  return result;
}

//CURRENT USER
export async function currentUser() {
  const result = await httpAxios
    .get("/api/current")
    .then((response) => response.data);
  // console.log("result of current API", result);
  return result;
}

//----------LOGOUT API----
export async function logout() {
  const result = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
  // console.log("result of current API", result);
  return result;
}
