"use client";
import { useState } from "react";
import AppNavbar from "@/components/AppNavbar";
import SearchBar from "@/components/SearchBar";
import FilterButtons from "@/components/FilterButtons";
import TaskList from "@/components/TaskList";
import { Button } from "@heroui/react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-all duration-500">
      <AppNavbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Welcome Back...
          </h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300 transition-colors">
            Organize your work and achieve more.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SearchBar value={search} onChange={setSearch}/>
          <Button type="button" className="h-12 px-7 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300" onPress={() => router?.push("/Addtask")}>
            <div className="flex items-center gap-2">
              <Plus size={18} strokeWidth={2.5} />
              <span>Add Task</span>
            </div>
          </Button>
        </div>

        <div className="mt-10">
          <FilterButtons selected={filter} onSelect={setFilter}/>
        </div>
        <div className="mt-10">
          <TaskList search={search} filter={filter}/>
        </div>
      </div>
    </main>
  );
}