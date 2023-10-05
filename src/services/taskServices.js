import { httpAxios } from "@/helper/httpHelper";

export async function adDTask(task) {
  const result = await httpAxios
    .post("/api/tasks", task)
    .then((response) => response.data);
  return result;
}

//------GET TASK OF USER---------
export async function getTasksofUser(userid) {
  const result = await httpAxios
    .get(`/api/users/${userid}/task`)
    .then((response) => response.data);
  return result;
}

//----------DELETE TASK API------------------
export async function deleteTask(taskid) {
  const result = await httpAxios
    .delete(`/api/tasks/${taskid}`)
    .then((response) => response.data);
  return result;
}
