"use client";
import AppNavbar from "@/components/AppNavbar";
import { Input } from "@heroui/react";
import { Search } from "lucide-react";

export default function Dashboardpage(){
   return(
<>
<AppNavbar/>
<section className="bg-white">
    <p className="text-2xl text-gradient-r from-blue-700 to-purple-700 text-bold">Organize your work And Achieve More.</p>
    <div className="mt-9">
    <Input type="text" label="Search Tasks" placeholder="Search by title..." startContent={<Search size={18} className="text-gray-400" />}className="max-w-md"/>
    </div>
</section>
</>
   );
}