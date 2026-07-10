"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Checkbox,
  Input,
  Textarea,
} from "@heroui/react";
import { Pencil, Trash2, CalendarDays, Check, X } from "lucide-react";
import { Task } from "@/hooks/usetasks";

interface TaskCardProps {
  task: Task;
  onEdit: (id: string, updates: Partial<Task>) => void;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

export default function TaskCard({ task, onEdit, onDelete, onComplete }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const isCompleted = !!task.completedAt;

  const handleSave = () => {
    onEdit(task._id, { title, description });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(task.title);
    setDescription(task.description);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Delete this task?")) {
      onDelete(task._id);
    }
  };

  return (
    <Card shadow="lg" className="rounded-3xl border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader className="flex justify-between items-start gap-2">
        {!isEditing && (
          <Checkbox
            isSelected={isCompleted}
            isDisabled={isCompleted}
            color="primary"
            className="mt-1"
            onValueChange={(checked) => {
              if (checked && !isCompleted) {
                onComplete(task._id);
              }
            }}
          />
        )}
        <div className="flex-1">
          {isEditing ? (
            <Input
              value={title}
              onValueChange={setTitle}
              size="sm"
              variant="bordered"
              className="mb-2"
            />
          ) : (
            <h2
              className={`text-xl font-bold ${
                isCompleted
                  ? "line-through text-blue-500/80 dark:text-blue-400/80"
                  : "text-gray-800 dark:text-white"
              }`}
            >
              {task.title}
            </h2>
          )}
          {isEditing ? (
            <Textarea
              value={description}
              onValueChange={setDescription}
              size="sm"
              variant="bordered"
              minRows={2}
            />
          ) : (
            <p
              className={`text-sm mt-1 ${
                isCompleted
                  ? "line-through text-blue-400/70 dark:text-blue-400/60"
                  : "text-gray-500 dark:text-slate-400"
              }`}
            >
              {task.description}
            </p>
          )}
        </div>
        <Chip
          color={isCompleted ? "success" : "warning"} variant="flat">
          {isCompleted ? "Completed" : "Pending"}
        </Chip>
      </CardHeader>

      <CardBody>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400">
          <CalendarDays size={16} />
          <span>
            {new Date(task.createdAt).toLocaleDateString()}
          </span>
        </div>
      </CardBody>

      <CardFooter className="flex justify-between gap-2">
        {isEditing ? (
          <>
            <Button color="success" variant="flat" startContent={<Check size={18} />} onPress={handleSave}>
              Save
            </Button>
            <Button color="default" variant="flat" startContent={<X size={18} />} onPress={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button color="primary" variant="flat" startContent={<Pencil size={18} />} onPress={() => setIsEditing(true)}>
              Edit
            </Button>
            <Button color="danger" variant="flat" startContent={<Trash2 size={18} />} onPress={handleDelete}>
              Delete
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
