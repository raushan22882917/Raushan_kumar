import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "Dakshana Foundation Scholarship",
    description: "Full scholarship for IIT-JEE preparation",
    period: "2021 - 2022",
  },
  {
    title: "SITARE UNIVERSITY Scholarship",
    description: "Full Scholarship for B.Tech Program",
    period: "2022 - 2026",
  },
  {
    title: "Foundation for Excellence Scholarship",
    description: "Full scholarship for B.Tech",
    period: "2022 - 2026",
  },
  {
    title: "Reliance Foundation Scholarship",
    description: "Full Scholarship for B.Tech Degree",
    period: "2022 - 2026",
  },
];

export const Achievements = () => {
  return (
    <section className="py-20 bg-background" id="achievements">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="flex items-start p-6 animate-fade-up">
              <Award className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-secondary mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-1">{achievement.description}</p>
                <p className="text-sm text-gray-500">{achievement.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};