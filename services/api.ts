const BASE_URl = "http://localhost:5000/api/tasks";

export interface Taskpayload{
    title:string;
    description:string;
    completed?:boolean;
}

export async function getTasks(){
    const response = await fetch(BASE_URl , {    method: "GET",cache: "no-store",});
    if(!response.ok){
    throw new Error("Failed to fetch tasks.");
    }
    return response.json();
}

export async function getTaskById(id: string) {
  const response = await fetch(`${BASE_URl}/${id}`, {
    method: "GET",cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Task not found");
  }

  return response.json();
}

export async function createTask(task:Taskpayload) {
  const response = await fetch(BASE_URl, {method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Failed to create task");
  }
  return response.json();
}

export async function updateTask(
  id: string,
  task: Partial<Taskpayload>
) {
  const response = await fetch(`${BASE_URl}/${id}`, {method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Failed to update task");
  }
  return response.json();
}

export async function deleteTask(id: string) {
  const response = await fetch(`${BASE_URl}/${id}`, {method: "DELETE",});
  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
  return response.json();
}

export async function completeTask(id: string) {
  const response = await fetch(`${BASE_URl}/${id}`, {method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({completed: true,}),
  });
  if (!response.ok) {
    throw new Error("Failed to complete task");
  }
  return response.json();
}