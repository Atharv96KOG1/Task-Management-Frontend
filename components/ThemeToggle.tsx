"use client";

import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);
  if (!mounted) {
    return (
      <Button isIconOnly variant="ghost" isDisabled>
        <div className="w-5 h-5" />
      </Button>
    );
  }
  return (
    <Button isIconOnly variant="ghost" onPress={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? (
        <Sun size={20} />
      ) : (<Moon size={20} />)}
    </Button>
  );
}