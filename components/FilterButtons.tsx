"use client";

import { Button } from "@heroui/react";
import { CheckCircle2, Clock3, ListTodo } from "lucide-react";

export type Filtertype = "all" | "pending" | "completed";
interface FilterButtonsProps {
  selected: Filtertype;
  onSelect: (filter: Filtertype) => void;
}
export default function FilterButtons({
  selected,
  onSelect,
}: FilterButtonsProps) {
  const filters = [
    {
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
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {filters.map((filter) => {
        const isSelected = selected === filter.id;

        return (
          <Button
            key={filter.id}
            startContent={filter.icon}
            radius="full"
            onPress={() => onSelect(filter.id)}
            className={`
              px-6 h-11 font-semibold flex
    items-center
    justify-center transition-all duration-300
              ${
                isSelected
                  ? "bg-blue-600 text-white shadow-lg scale-105 hover:bg-blue-700"
                  : "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:scale-105"
              }
            `}
          >
            {filter.label}
          </Button>
        );
      })}
    </div>
  );
}