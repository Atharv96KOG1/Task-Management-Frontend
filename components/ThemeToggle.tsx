"use client";

import { useTheme } from "next-themes";
import { useEffect,useState } from "react";
import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";



export default function ThemeToggle(){
    const {theme , setTheme} = useTheme();
    const [ mounted , setMounted] = useState(false);

     return(
     <Button isIconOnly variant="ghost" onPress={()=> setTheme(theme === "dark" ? "light": "dark")}>
        {theme === "dark" ? (
            <Sun size={20}/>
        ) : (
            <Moon size={20} />

        )}
     </Button>
     );
}