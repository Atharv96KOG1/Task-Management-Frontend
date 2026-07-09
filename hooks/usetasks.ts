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
            if(!Array.isArray(data)){
                console.error("Unexpected /api/tasks response shape:", data);
                setTasks([]);
                setError("failed to load tasks.");
                return;
            }
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
       const newTask = await createTask({title,description});
       setTasks((prev)=>[...prev,newTask]);
    };

    const removeTask = async(id:string)=>{
        await deleteTask(id);
        setTasks((prev)=>prev.filter((task)=>task._id!==id));
    };

    const editTask = async(id:string,updatedTask:Partial<Task>)=>{
        const savedTask = await updateTask(id,updatedTask);
        setTasks((prev)=>prev.map((task)=>(task._id===id?savedTask:task)));
    };

    const completeTask = async(id:string)=>{
        const savedTask = await updateTask(id,{completed:true});
        setTasks((prev)=>prev.map((task)=>(task._id===id?savedTask:task)));
    };

    useEffect(()=>{
      const init = async()=>{  fetchTasks(); };
      void init();
    },[fetchTasks]);
    return{tasks,loading,error,fetchTasks,addTask,editTask,removeTask,completeTask};
}