import { Moon, Sun, User, Briefcase, FolderKanban, Lightbulb } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Raushan Kumar
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="#about" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-all transform hover:scale-105"
          >
            <User className="w-4 h-4" />
            About
          </a>
          <a 
            href="#experience" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-all transform hover:scale-105"
          >
            <Briefcase className="w-4 h-4" />
            Experience
          </a>
          <a 
            href="#projects" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-all transform hover:scale-105"
          >
            <FolderKanban className="w-4 h-4" />
            Projects
          </a>
          <a 
            href="#skills" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-all transform hover:scale-105"
          >
            <Lightbulb className="w-4 h-4" />
            Skills
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground hover:text-primary"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};