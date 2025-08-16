import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech Biotechnology",
      institution: "NIIT University",
      period: "2022 – 2026",
      status: "Final Year",
      type: "Undergraduate",
      description: "Comprehensive biotechnology program with focus on molecular biology, genetic engineering, and bioinformatics applications.",
      modules: [
        "Molecular Biology", "Genetic Engineering", "Bioinformatics", "Analytical Techniques",
        "Cell Biology", "Microbiology", "Biochemistry", "Bioprocess Engineering",
        "Immunology", "Research Methodology"
      ],
      achievements: [
        "Final-year research project on computational drug discovery",
        "Active participation in research internships and projects",
        "Member of organizing committee for university events"
      ],
      color: "primary"
    },
    {
      degree: "Class XII (ICSE)",
      institution: "CMS",
      period: "2022",
      status: "Completed",
      type: "Higher Secondary",
      description: "Completed higher secondary education with focus on science subjects including Biology, Chemistry, Physics, and Mathematics.",
      subjects: ["Biology", "Chemistry", "Physics", "English", "Biotechnology"],
      achievements: [
        "Strong foundation in core science subjects",
        "Developed analytical and problem-solving skills",
        "Participated in science competitions and projects"
      ],
      color: "secondary"
    },
    {
      degree: "Class X (ICSE)",
      institution: "CMS",
      period: "2020",
      status: "Completed",
      type: "Secondary",
      description: "Foundational education with comprehensive curriculum covering science, mathematics, and liberal arts.",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi", "Computer Applications"],
      achievements: [
        "Solid academic foundation across multiple disciplines",
        "Early interest in biological sciences",
        "Active participation in extracurricular activities"
      ],
      color: "accent"
    }
  ];

  const academicHighlights = [
    {
      title: "Research Excellence",
      description: "Completed 4+ major research projects during undergraduate studies",
      icon: "🔬"
    },
    {
      title: "Industry Exposure",
      description: "2 professional internships in biotechnology and research organizations",
      icon: "🏢"
    },
    {
      title: "Technical Proficiency",
      description: "Certified in bioinformatics tools and computational biology methods",
      icon: "💻"
    },
    {
      title: "Leadership",
      description: "Active member in organizing committees and university events",
      icon: "👥"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Academic <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strong educational foundation in biotechnology and life sciences with emphasis on research and innovation
            </p>
          </div>

          {/* Academic Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {academicHighlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="p-6 text-center bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="text-3xl mb-3">{highlight.icon}</div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-500 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Institution Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          edu.color === 'primary' ? 'bg-gradient-primary text-primary-foreground' :
                          edu.color === 'secondary' ? 'bg-gradient-secondary text-secondary-foreground' :
                          'bg-accent text-accent-foreground'
                        }`}>
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-medium">{edu.institution}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            {edu.type}
                          </Badge>
                          <Badge 
                            variant={edu.status === 'Final Year' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Education Details */}
                    <div className="lg:w-2/3">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Modules/Subjects */}
                      <div className="mb-6">
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          {edu.modules ? 'Key Modules:' : 'Subjects:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(edu.modules || edu.subjects || []).map((module, moduleIndex) => (
                            <Badge 
                              key={moduleIndex} 
                              variant="outline" 
                              className="text-xs"
                            >
                              {module}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`h-1 ${
                  edu.color === 'primary' ? 'bg-gradient-primary' :
                  edu.color === 'secondary' ? 'bg-gradient-secondary' :
                  'bg-accent'
                }`} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;