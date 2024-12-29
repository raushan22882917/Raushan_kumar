import { Github, Linkedin, Mail, Phone, FileDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"; // Assuming Card component exists

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column (Details) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-8">
              {/* Avatar and Name in One Row */}
              <div className="flex items-center space-x-4">
                {/* Increased Avatar Size to 60x60 */}
                <Avatar className="w-60 h-60 border-4 border-primary/20">
                  <AvatarImage src="profile.jpg" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Raushan Kumar
                  </h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    Computer Science Student & Software Developer
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
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
            <div className="flex justify-center gap-6 mt-6">
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

          {/* Right Column (Floating Card - About Section) */}
          <div className="relative flex justify-center md:justify-start">
            <Card className="w-full max-w-md md:max-w-lg bg-card/50 backdrop-blur-sm border border-accent/20 shadow-xl transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I am a third-year Computer Science student at Sitare University, specializing in <span className="text-highlight">AI, Machine Learning, and Software Development</span>. Passionate about solving real-world challenges using technology.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently working as a <span className="text-highlight">Python Developer Intern at ByteUp AI</span>, building innovative solutions for AI-driven projects. I am also developing the <span className="text-highlight">Uranium Tracker API</span> for real-time market insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
