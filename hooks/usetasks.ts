"use client";

import { useEffect , useState  , useCallback} from "react";
import {getTasks , createTask, updateTask , deleteTask,} from "@/services/api";

export interface Task{
    _id:string;
    title:string;
    description:string;
    completed:boolean;
    createdAt:string;
    updatedAt:string;
}

export function useTasks(){
    const[tasks, setTasks] = useState<Task[]>([]);
    const [loading , setLoading] = useState(false);
    const [ error, setError] = useState("");

    const fetchTasks = useCallback(async ()=>{
        try{
            setLoading(true);
            const data = await getTasks();
            setTasks(data);
            setError("");
        } catch (err){
            console.error(err);
            setError("failed to load tasks.");
        }
       finally{
        setLoading(false);
       }
    },[]);

    const addTask = async (title:string , description:string)=>{
       await createTask({title,description});
      fetchTasks();
    };

    const removeTask = async(id:string)=>{
        await deleteTask(id);
        fetchTasks();
    };

    const editTask = async(id:string,updatedTask:Partial<Task>)=>{
        await updateTask(id,updatedTask);
        fetchTasks();
    };

    const completeTask = async(id:string)=>{
        await updateTask(id,{completed:true});
        fetchTasks();
    };

    useEffect(()=>{
      const init = async()=>{  fetchTasks(); };
      void init();
    },[fetchTasks]);
    return{tasks,loading,error,fetchTasks,addTask,editTask,removeTask,completeTask};
}