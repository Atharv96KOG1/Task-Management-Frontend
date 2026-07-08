"use client";

import { Spinner } from "@heroui/react";
import TaskCard from "./TaskCard";
import { useTasks } from "@/hooks/useTasks";
export default function TaskList() {
  const { tasks, loading, error } = useTasks();

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" color="primary" />
      </div>
    );
}
  if (error) {
    return (
      <div className="text-center text-red-500 text-lg">{error}</div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold">
          No Tasks Found
        </h2>
        <p className="text-gray-500 mt-2">
          Click "Add Task" to create your first task.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
        />
      ))}
    </div>
  );
}