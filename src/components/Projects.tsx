import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link, Brain, Bot, Building, Code2, Terminal, ChartLine } from "lucide-react";

const projects = [

  {
    title: "Uranium Tracker API",
    description: "Created an API and dashboard for real-time uranium market data visualization.",
    impact: "Improved retrieval speed by 35%",
    tools: ["Python", "Django-REST", "BeautifulSoup", "React.js"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    github: "https://uranium-light.netlify.app/",
    icon: <ChartLine className="w-6 h-6 text-primary" />,
  },
  {
    title: "AI-Powered News Platform",
    description: "Developed an AI-based news platform with fake news detection (accuracy 90%) and article reframing. Automated news aggregation and credibility scoring, improving content discovery by 45%.",
    impact: "90% accuracy in fake news detection",
    tools: ["Python", "Flask", "OpenAI API", "Scikit-learn", "React.js"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600",
    github: "https://github.com/raushan22882917/News_plateform",
    icon: <Brain className="w-6 h-6 text-primary" />,
  },
  {
    title: "Board Student Chatbot",
    description: "Built an educational chatbot for 500+ students, improving learning outcomes and satisfaction. Implemented REAG pipeline for response accuracy, increasing relevance by 30%.",
    impact: "Served 500+ students",
    tools: ["Python", "NLP", "Flask", "SQL"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
    github: "https://github.com/raushan22882917/rag_chatbot",
    icon: <Bot className="w-6 h-6 text-primary" />,
  },
  {
    title: "Automated Government Project",
    description: "Automated processes for government registration and compliance using the Udyam Registration platform, reducing manual input time by 40%. Developed scripts to streamline the registration process.",
    impact: "40% reduction in processing time",
    tools: ["Python", "Selenium"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600",
    github: "https://github.com/raushan22882917/Gujarat-Udyam-Automation",
    icon: <Building className="w-6 h-6 text-primary" />,
    link: "https://udyamregistration.gov.in",
  },
  {
    title: "AI-Powered Interview Platform",
    description: "Developed an AI-driven interview platform integrating NLP, ML, automated coding assessments, and cheating detection.",
    impact: "Reduced evaluation time by 60%",
    tools: ["Python", "Flask", "React.js", "TensorFlow", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    github: "https://github.com/raushan22882917/Interview_platform",
    icon: <Code2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Trading Chatbot for Quotex",
    description: "Built a predictive trading bot with technical indicators for improved trade accuracy.",
    impact: "Improved accuracy by 25%",
    tools: ["Python", "Playwright", "REST API", "pandas"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600",
    github: "https://github.com/raushan22882917/quotex",
    icon: <Terminal className="w-6 h-6 text-primary" />,
  },
 
];

export const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/5" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="animate-fade-up backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border border-accent/20 hover:border-accent/40 transition-all overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    {project.icon}
                    {project.title}
                  </span>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                        <Link className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <p className="text-primary font-semibold mb-4">{project.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <Badge key={i} variant="secondary" className="bg-accent/10 hover:bg-accent/20 text-primary transition-colors">
                      {tool}
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