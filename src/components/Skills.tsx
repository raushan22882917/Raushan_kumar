import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Globe, Terminal, Laptop, Server, Brain, Wrench, Cloud, MessageSquare, BookOpen, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["Python (OOPs)", "JavaScript", "Java"],
  },
  {
    category: "Web Development",
    icon: <Globe className="w-6 h-6 text-primary" />,
    skills: ["REST API", "SEO", "FastAPI"],
  },
  {
    category: "Machine Learning & AI",
    icon: <Brain className="w-6 h-6 text-primary" />,
    skills: ["Machine Learning", "Deep Learning"],
  },
  {
    category: "Frameworks & Libraries",
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ["Bootstrap", "React.js", "Django", "Next.js", "Node.js", "Express.js"],
  },
  {
    category: "Cloud & Databases",
    icon: <Cloud className="w-6 h-6 text-primary" />,
    skills: ["MySQL", "PostgreSQL", "Google Cloud", "Microsoft Azure"],
  },
  {
    category: "Tools & Automation",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    skills: ["Selenium", "Playwright"],
  },
  {
    category: "Architecture & Design",
    icon: <Laptop className="w-6 h-6 text-primary" />,
    skills: ["MVC", "MVP"],
  },
  {
    category: "Soft Skills",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    skills: ["Effective Communication", "Team Collaboration"],
  },
  {
    category: "Coursework",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    skills: ["Data Structures", "Algorithms", "Database Management"],
  },
  {
    category: "Areas of Interest",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    skills: ["Machine Learning", "Software Development", "Automation"],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="animate-fade-up backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border border-accent/20 hover:border-accent/40 transition-all">
              <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <CardTitle className="text-xl font-bold text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-accent/10 hover:bg-accent/20 text-primary transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};