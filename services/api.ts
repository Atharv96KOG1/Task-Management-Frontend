const BASE_URl = "http://localhost:5000/api/tasks";

export interface Taskpayload{
    title:string;
    description:string;
    completed?:boolean;
}

async function request(url: string, options: RequestInit = {}, errorMessage = "Request failed") {
    const response = await fetch(url, {
        ...options,
        headers: options.body ? { "Content-Type": "application/json" } : undefined,
    });
    if (!response.ok) {
        throw new Error(errorMessage);
    }
    return response.json();
}

export function getTasks() {
    return request(BASE_URl, { method: "GET", cache: "no-store" }, "Failed to fetch tasks.");
}

export function getTaskById(id: string) {
    return request(`${BASE_URl}/${id}`, { method: "GET", cache: "no-store" }, "Task not found");
}

export function createTask(task: Taskpayload) {
    return request(BASE_URl, { method: "POST", body: JSON.stringify(task) }, "Failed to create task");
}

export function updateTask(id: string, task: Partial<Taskpayload>) {
    return request(`${BASE_URl}/${id}`, { method: "PUT", body: JSON.stringify(task) }, "Failed to update task");
}

export function deleteTask(id: string) {
    return request(`${BASE_URl}/${id}`, { method: "DELETE" }, "Failed to delete task");
}

export function completeTask(id: string) {
    return updateTask(id, { completed: true });
}
