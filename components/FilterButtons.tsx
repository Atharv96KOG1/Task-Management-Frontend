"use client";
import { Button } from "@heroui/react";
import { CheckCircle2, Clock3, ListTodo } from "lucide-react";

export type Filtertype = "all" | "pending" | "completed";
interface Filterbuttonsprops {
  selected: Filtertype;
  onSelect: (filter: Filtertype) => void;
}
export default function FilterButtons({
  selected,
  onSelect,
}: Filterbuttonsprops) {
  const filters =[{
      id: "all" as Filtertype,
      label: "All",
      icon: <ListTodo size={18} />,
    },
    {
      id: "pending" as Filtertype,
      label: "Pending",
      icon: <Clock3 size={18} />,
    },
    {
      id: "completed" as Filtertype,
      label: "Completed",
      icon: <CheckCircle2 size={18} />,
    },];
    return (
    <div className="flex flex-wrap gap-4">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          startContent={filter.icon}
          radius="full"
          color={selected === filter.id ? "primary" : "default"}
          variant={selected === filter.id ? "solid" : "bordered"}
          onPress={() => onSelect(filter.id)}
          className={`font-semibold transition-all duration-300 ${
            selected === filter.id
              ? "shadow-lg scale-105"
              : "hover:scale-105"
          }`}>{filter.label}
        </Button>
      ))}
    </div>
  );
}