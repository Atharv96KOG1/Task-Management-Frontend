"use client";

import {useState} from "react";
import AppNavbar from "@/components/AppNavbar";
import SearchBar from "@/components/SearchBar";
import FilterButtons from "@/components/FilterButtons";
import TaskList from "@/components/TaskList";
import { Button } from "@heroui/react";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [filter , setfilter] = useState<"all" | "pending"|"completed">("all");
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <AppNavbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Welcome Back...
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Organize your work and achieve more.
          </p>
    </div>

        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <SearchBar  value={search} onChange={setSearch}/>
          <Button color="primary" size="lg" startContent={<Plus size={20} />} className="font-semibold shadow-lg hover:scale-105 transition">
            Add Task
          </Button>
        </div>
      <div className="mt-8">
          <FilterButtons selected={filter} onSelect={setfilter}/>
      </div>

      <div className="mt-10">
      <TaskList />
      </div>
      </div>
    </main>
  );
}