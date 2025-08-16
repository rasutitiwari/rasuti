import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Summer Intern",
      company: "Biotech Park",
      location: "Lucknow, India",
      period: "2025",
      type: "Internship",
      description: "Conducted comprehensive antiviral drug screening against SARS-CoV-2 main protease (Mpro), focusing on FDA-approved drug repurposing strategies for COVID-19 therapeutics.",
      responsibilities: [
        "Performed molecular docking studies using PyRx and Discovery Studio",
        "Analyzed binding affinities and interaction patterns of potential antiviral compounds",
        "Collaborated with research team on drug repurposing methodologies",
        "Contributed to research publications and technical reports"
      ],
      skills: ["Molecular Docking", "Drug Repurposing", "PyRx", "Discovery Studio"],
      color: "primary"
    },
    {
      title: "Research & Development Intern",
      company: "RAAV Techlabs",
      location: "Remote",
      period: "2024",
      type: "Internship",
      description: "Applied Near Infrared Spectroscopy (NIRS) technology for non-destructive fruit quality analysis, developing innovative solutions for agricultural biotechnology applications.",
      responsibilities: [
        "Implemented NIRS techniques for fruit ripeness and quality assessment",
        "Analyzed spectral data to determine fruit composition and maturity levels",
        "Compiled comprehensive findings and recommendations for The Fruit Project"
      ],
      skills: ["Near Infrared Spectroscopy", "Data Analysis", "Agricultural Biotech", "Quality Assessment"],
      color: "secondary"
    }
  ];

  const certifications = [
    {
      title: "Bioinformatics Training",
      organization: "Biotech Park Lucknow",
      year: "2025",
      type: "Professional Training"
    },
    {
      title: "Machine Learning & Bioinformatics Workshop",
      organization: "NIIT University",
      year: "2025",
      type: "Workshop"
    },
    {
      title: "Google Ads Creative Certificate",
      organization: "Google",
      year: "2025",
      type: "Certification"
    },
    {
      title: "Google Display Certificate",
      organization: "Google",
      year: "2025",
      type: "Certification"
    }
  ];

  const leadership = [
    {
      role: "Member, Organizing Team",
      event: "ENTENTE 2024",
      organization: "NIIT University",
      description: "Contributed to the planning and execution of the university's flagship cultural and technical event."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-500 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Company Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          exp.color === 'primary' ? 'bg-gradient-primary text-primary-foreground' :
                          'bg-gradient-secondary text-secondary-foreground'
                        }`}>
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="lg:w-2/3">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <h4 className="font-medium text-foreground mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2 mb-6">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-medium text-foreground mb-3">Skills Applied:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`h-1 ${
                  exp.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                }`} />
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="animate-scale-in">
              <h3 className="font-heading text-2xl font-semibold mb-6">
                <span className="bg-gradient-secondary bg-clip-text text-transparent">Certifications</span>
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index} 
                    className="p-4 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{cert.title}</h4>
                        <p className="text-sm text-primary font-medium mb-1">{cert.organization}</p>
                        <Badge variant="outline" className="text-xs">
                          {cert.type}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="animate-scale-in">
              <h3 className="font-heading text-2xl font-semibold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Leadership</span>
              </h3>
              <div className="space-y-4">
                {leadership.map((leader, index) => (
                  <Card 
                    key={index} 
                    className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <h4 className="font-medium text-foreground mb-2">{leader.role}</h4>
                    <p className="text-primary font-medium mb-2">{leader.event}</p>
                    <p className="text-sm text-muted-foreground mb-3">{leader.organization}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {leader.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;