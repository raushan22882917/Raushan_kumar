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
        
        <Card className="mt-12 bg-card/50 backdrop-blur-sm border border-accent/20">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Passionate third-year Computer Science student at Sitare University with a focus on 𝗦𝗲𝗮𝗿𝗰𝗵 𝗘𝗻𝗴𝗶𝗻𝗲 𝗮𝗻𝗱 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗥𝗲𝘁𝗿𝗶𝗲𝗩𝗮𝗹, 𝗔𝗿𝘁𝗶𝗳𝗶𝗰𝗶𝗮𝗹 𝗜𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲, 𝗠𝗮𝗰𝗵𝗶𝗻𝗲 𝗟𝗲𝗮𝗿𝗻𝗶𝗻𝗴, and 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁. Dedicated to tackling real-world challenges with creative and forward-thinking technology solutions. Specializing in data structures, algorithms, and software engineering, with hands-on experience in Python, Java, JavaScript, React.js, Node.js, Next.js, Django, Flask, and Rest API.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Recently completed an internship as 𝗣𝘆𝘁𝗵𝗼𝗻 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗜𝗻𝘁𝗲𝗿𝗻 𝗮𝘁 𝗠𝗼𝗴𝗹𝗶𝘅, 𝗡𝗼𝗶𝗱𝗮 where I focused on automating software processes to enhance operational efficiency and streamline workflows. Currently working at 𝗣𝘆𝘁𝗵𝗼𝗻 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗜𝗻𝘁𝗲𝗿𝗻 at 𝗕𝘆𝘁𝗲𝗨𝗽 𝗔𝗜, 𝗠𝘂𝗺𝗯𝗮𝗶 (Remote), where I have gained hands-on experience that has strengthened my skills and broadened my technical knowledge, contributing to AI-driven projects that improve operational capabilities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Currently developing the Uranium Tracker API and a Data Dashboard to provide real-time market insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              𝗥𝗲𝗰𝗼𝗴𝗻𝗶𝗻𝗲𝗱 𝗳𝗼𝗿 𝗮𝗰𝗮𝗱𝗲𝗺𝗶𝗰 𝗲𝘅𝗰𝗲𝗹𝗹𝗲𝗻𝗰𝗲 𝗯𝘆 𝗦𝗶𝘁𝗮𝗿𝗲 𝗙𝗼𝘂𝗻𝗱𝗮𝘁𝗶𝗼𝗻, 𝗥𝗲𝗹𝗶𝗮𝗻𝗰𝗲 𝗙𝗼𝘂𝗻𝗱𝗮𝘁𝗶𝗼𝗻, 𝗮𝗻𝗱 𝗙𝗼𝘂𝗻𝗱𝗮𝘁𝗶𝗼𝗻 𝗳𝗼𝗿 𝗘𝘅𝗰𝗲𝗹𝗹𝗲𝗻𝗰𝗲.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Active member of the ACM Sitare University Chapter, where I serve as a Web Developer. In this role, I am responsible for managing the chapter's website, showcasing all activities, and ensuring the online presence accurately reflects our work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eager to connect with industry experts and fellow enthusiasts to discuss advancements in technology and AI. I aspire to build a career in software engineering, contributing to impactful, scalable solutions in Software Development, Data Structures and Algorithms, Search Engine and Information Retrieval, and AI/ML.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
