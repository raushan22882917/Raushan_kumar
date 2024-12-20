import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const experiences = [
  {
    company: "Moglix",
    logo: "moglix.jpg",
    position: "Catalog Intern",
    period: "June 2024 – August 2024",
    location: "Noida, Uttar Pradesh",
    achievements: [
      "Developed a custom e-commerce scraper tool, increasing catalog accuracy by 90%",
      "Built an OCR tool for automated text extraction",
      "Automated tasks using Python, reducing manual workload by 70%",
      "Created image processing tools for background removal and batch operations",
    ],
  },
  {
    company: "ByteUp AI",
    logo: "byteup.png",
    position: "Python Development Intern",
    period: "August 2024 – December 2024",
    location: "Mumbai, India",
    achievements: [
      "Enhanced Python-based applications, achieving a 80% performance boost",
      "Optimized web scraping with Playwright and BeautifulSoup",
      "Automated tasks, improving operational efficiency by 70%",
      "Developed data extraction tools, improving accuracy by 95%",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="py-20 bg-light-gray" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="animate-fade-up">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={exp.logo} alt={exp.company} />
                  <AvatarFallback>{exp.company[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl font-bold text-primary">{exp.company}</CardTitle>
                  <p className="text-gray-600">{exp.position}</p>
                  <p className="text-sm text-gray-500">{exp.period} | {exp.location}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600">{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};