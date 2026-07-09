"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchBar({
  value = "",
  onChange,
}: SearchBarProps) {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        Search Tasks
      </h2>

      <div className="flex items-center gap-3 bg-slate-800 rounded-full px-5 h-12 shadow-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
        <Search className="w-5 h-5 text-slate-400" />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="Search by title..."
          className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-400 text-sm"
        />
      </div>
    </div>
  );
}