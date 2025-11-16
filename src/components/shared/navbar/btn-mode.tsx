import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

function BtnMode() {
  const { theme, setTheme } = useTheme();
  const toggle = () => {
    const toggleTheme = theme === "dark" ? "light" : "dark";
    setTheme(toggleTheme);
  };
  return (
    <Button onClick={toggle} variant={"ghost"} className="size-12 rounded-full">
      {theme === "light" && (
        <motion.span
          initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
        >
          <Moon className="size-6" />
        </motion.span>
      )}
      {theme === "dark" && (
        <motion.span
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
        >
          <Sun className="size-6" />
        </motion.span>
      )}
    </Button>
  );
}

export default BtnMode;
