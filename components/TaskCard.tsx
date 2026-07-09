"use client";

import {Card,CardHeader,CardBody,CardFooter,Button,Chip,} from "@heroui/react";
import {Pencil,Trash2,CheckCircle,CalendarDays,} from "lucide-react";
import { Task } from "@/hooks/usetasks";

interface TaskCardProps {
  task: Task;
}
export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Card shadow="lg" className="rounded-3xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {task.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {task.description}
          </p>
        </div>
        <Chip
          color={task.completed ? "success" : "warning"} variant="flat">
          {task.completed ? "Completed" : "Pending"}
        </Chip>
      </CardHeader>

      <CardBody>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={16} />
          <span>
            {new Date(task.createdAt).toLocaleDateString()}
          </span>
        </div>
      </CardBody>

      <CardFooter className="flex justify-between gap-2">
        <Button color="primary" variant="flat" startContent={<Pencil size={18} />}>
          Edit 
        </Button>
        <Button
          color="danger" variant="flat" startContent={<Trash2 size={18} />}>
          Delete
        </Button>

      </CardFooter>
    </Card>
  );
}