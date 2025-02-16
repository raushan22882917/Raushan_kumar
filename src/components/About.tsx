import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Code2 className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
              <p className="text-muted-foreground">
                Experienced in building modern web applications with React, Python, and various frameworks.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Brain className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">AI/ML Enthusiast</h3>
              <p className="text-muted-foreground">
                Passionate about machine learning and artificial intelligence applications.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Rocket className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">Problem Solver</h3>
              <p className="text-muted-foreground">
                Skilled in developing efficient solutions and automating complex processes.
              </p>
            </CardContent>
          </Card>
        </div>
        


      </div>
    </section>
  );
};
