import { Github, Linkedin, Mail, Phone, FileDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <Avatar className="w-40 h-40 border-4 border-primary/20 mx-auto relative">
              <AvatarImage src="profile.jpg" />
              <AvatarFallback>RK</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-4">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Raushan Kumar
            </h1>
            <p className="text-3xl text-muted-foreground">
              Computer Science Student & Software Developer
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <a href="mailto:raushan22882917@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <a href="tel:+919699234605" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Me
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1SL7LlAHNuXnW0Ps-mGHbwMdfexvEhqdA/view?usp=sharing",
                  "_blank"
                )
              }
            >
              <FileDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/raushan22882917"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/raushan2288/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
