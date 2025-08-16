import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Microscope, Code, BarChart3 } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Technical Proficiency",
      color: "primary",
      skills: [
        { name: "PCR & Gel Electrophoresis", level: 90 },
        { name: "Cell Culture Techniques", level: 85 },
        { name: "Spectrophotometry", level: 88 },
        { name: "Protein Analysis", level: 82 },
        { name: "Molecular Cloning", level: 80 }
      ]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software & Tools",
      color: "secondary",
      skills: [
        { name: "PyRx & Discovery Studio", level: 92 },
        { name: "R Programming", level: 88 },
        { name: "PubChem & NCBI Tools", level: 95 },
        { name: "KEGG Database", level: 90 },
        { name: "RNA-seq Analysis", level: 85 }
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytical Skills",
      color: "accent",
      skills: [
        { name: "Differential Gene Expression", level: 90 },
        { name: "GO/KEGG Enrichment", level: 88 },
        { name: "Database Design", level: 85 },
        { name: "Statistical Analysis", level: 87 },
        { name: "Data Visualization", level: 83 }
      ]
    }
  ];

  const technicalTools = [
    "PyRx", "Discovery Studio", "R Programming", "Python", "PubChem", "GEO Datasets",
    "NCBI Tools", "KEGG", "Cytoscape", "ImageJ", "GraphPad Prism", "SPSS",
    "ChemDraw", "VMD", "UCSF Chimera", "Galaxy", "Bioconductor", "DESeq2"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise spanning wet-lab techniques, computational tools, and analytical methodologies
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    category.color === 'primary' ? 'bg-gradient-primary text-primary-foreground' :
                    category.color === 'secondary' ? 'bg-gradient-secondary text-secondary-foreground' :
                    'bg-accent text-accent-foreground'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Technical Tools & Software */}
          <div className="animate-fade-in">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-center">
              Technical <span className="bg-gradient-secondary bg-clip-text text-transparent">Tools & Software</span>
            </h3>
            <div className="bg-gradient-card rounded-lg p-8 shadow-soft">
              <div className="flex flex-wrap justify-center gap-3">
                {technicalTools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Laboratory Equipment */}
          <div className="mt-12 animate-scale-in">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
              Laboratory <span className="bg-gradient-primary bg-clip-text text-transparent">Equipment</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "PCR Thermocycler", "Gel Electrophoresis System", "Spectrophotometer", "Centrifuge",
                "Microscopes", "Incubators", "Autoclave", "Laminar Flow Hood",
                "Cell Culture Equipment", "pH Meter", "Balance", "Pipettes"
              ].map((equipment, index) => (
                <Card 
                  key={index} 
                  className="p-4 text-center bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <span className="text-sm font-medium text-foreground">{equipment}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;