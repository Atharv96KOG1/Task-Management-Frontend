"use client";

import { Input } from "@heroui/react";
import { Search } from "lucide-react";

interface Searchbarprops {
  value?: string;
  onChange?: (value: string) => void;
}
export default function SearchBar({
    value = "",
   onChange,
}: Searchbarprops) {
  return (
    <div className="w-full lg:max-w-xl">
      <Input value={value} onValueChange={onChange} type="text" placeholder="Search by title..." size="lg" variant="bordered" radius="lg"
     startContent={<Search size={20} className="text-gray-400 pointer-events-none"/>}
    classNames={{
        label: "text-lg font-semibold text-gray-700",
          input: "text-gray-700 placeholder:text-gray-400",
        inputWrapper:
            "bg-white border border-gray-200 shadow-md hover:border-blue-500 focus-within:border-blue-600 transition-all duration-300",
        }}/>
        
      <p className="mt-2 text-sm text-gray-500">
        Search tasks by title
      </p>
    </div>
  );
}