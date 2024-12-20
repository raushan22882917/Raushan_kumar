import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export const Resume = () => {
  return (
    <section className="py-10 text-center">
      <Button 
        variant="outline" 
        className="group"
        onClick={() => window.open("https://drive.google.com/file/d/1SL7LlAHNuXnW0Ps-mGHbwMdfexvEhqdA/view?usp=sharing", "_blank")}
      >
        <FileDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
        Download Resume
      </Button>
    </section>
  );
};