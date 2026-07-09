"use client";

import { Spinner } from "@heroui/react";
import TaskCard from "./TaskCard";
import { useTasks } from "@/hooks/usetasks";

interface TaskListProps {
  search: string;
  filter: "all" | "pending" | "completed";
}
export default function TaskList({
  search,
  filter,
}: TaskListProps) {
  const { tasks, loading, error, editTask, removeTask } = useTasks();
  const filteredTasks = tasks.filter((task) => {
  const matchessearch = task.title.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? task.completed
        : !task.completed;

    return matchessearch && matchesFilter;
  });
  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" color="primary" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-red-500 text-lg">
        {error}
      </div>
    );
  }
  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold">
          No Tasks Found
        </h2>
      </div>
    );
  }
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {filteredTasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={editTask}
          onDelete={removeTask}
        />
      ))}
    </div>
  );
}