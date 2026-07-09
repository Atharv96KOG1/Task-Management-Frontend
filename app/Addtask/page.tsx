"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Textarea } from "@heroui/react";
import { ArrowLeft, ListTodo } from "lucide-react";
import AppNavbar from "@/components/AppNavbar";
import { useTasks } from "@/hooks/usetasks";

export default function Addtask() {
  const router = useRouter();
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    try {
      setSubmitting(true);
      setError("");
      await addTask(title.trim(), description.trim());
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Failed to create task. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-all duration-500">
      <AppNavbar />
      <div className="max-w-2xl mx-auto px-6 py-10">
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-6">
          <ArrowLeft size={18} />
          <span>Back to Dashboard</span>
        </button>

        <div className="bg-gray-100 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 dark:border-slate-700/40 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
              <ListTodo size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                Add New Task
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Fill in the details below to create a task.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
            className="w-full size={lg}"
              label="Title"
              placeholder="Enter task title"
              value={title}
              onValueChange={setTitle}
              isRequired
              variant="bordered"
            />
            <Textarea
              label="Description"
              placeholder="Enter task description"
              value={description}
              onValueChange={setDescription}
              variant="bordered"
              minRows={4}
            />

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
            <div className="flex justify-end gap-3 pt-2">
              <Button
              className="h-10 hover:bg-gray-300 rounded-md"
                type="button"
                variant="flat"
                onPress={() => router.push("/dashboard")} >
                Cancel
              </Button>
              <Button
                type="submit"
                isLoading={submitting}
                className=" px-2 h-10 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold">
                Create Task
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
