import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Microscope, Dna, Search, Database } from 'lucide-react';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const projects = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Molecular Docking for SARS-CoV-2 Mpro",
      description: "Computational drug screening project targeting SARS-CoV-2 main protease using FDA-approved drugs for therapeutic repurposing.",
      methods: "PyRx, Discovery Studio, AutoDock, PubChem, Protein Data Bank",
      impact: "Identified 20 strong-binding candidates with binding affinities < -8.0 kcal/mol, contributing to antiviral drug repurposing research.",
      tags: ["Molecular Docking", "Drug Repurposing", "SARS-CoV-2", "Computational Biology"],
      color: "primary"
    },
    {
      icon: <Dna className="w-6 h-6" />,
      title: "Key DEG Identification in NSCLC",
      description: "Comprehensive analysis of differential gene expression in Non-Small Cell Lung Cancer using high-throughput RNA-seq data.",
      methods: "R Programming, GEO Datasets, GO/KEGG Enrichment Analysis",
      impact: "Discovered potential biomarkers for targeted therapy.",
      tags: ["RNA-seq", "Cancer Genomics", "Biomarkers", "Gene Expression"],
      color: "secondary"
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Host Response in Infectious Keratitis",
      description: "RNA-seq analysis investigating host immune responses and pathway alterations during infectious keratitis progression.",
      methods: "Galaxy Platform, KEGG Pathway Analysis",
      impact: "Provided insights for disease diagnosis and therapeutic research.",
      tags: ["Immune Response", "Infectious Disease", "Pathway Analysis", "Diagnostics"],
      color: "accent"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Lymphatic Filariasis Database Design",
      description: "Comprehensive biomedical database development with ER modeling for lymphatic filariasis research data management.",
      methods: "Database Design, ER Diagrams, Data Integration",
      tags: ["Database Design", "Biomedical Informatics", "Data Management"],
      color: "primary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Research <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive research portfolio spanning computational drug discovery, genomics analysis, 
              and biomedical database development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-500 hover:scale-[1.02] animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      project.color === 'primary' ? 'bg-gradient-primary text-primary-foreground' :
                      project.color === 'secondary' ? 'bg-gradient-secondary text-secondary-foreground' :
                      'bg-accent text-accent-foreground'
                    }`}>
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Methods */}
                  <div className="mb-4">
                    <h4 className="font-medium text-sm text-foreground mb-2">Methods & Tools:</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.methods}
                    </p>
                  </div>

                  {/* Impact */}
                  {project.impact && (
                    <div className="mb-6">
                      <h4 className="font-medium text-sm text-foreground mb-2">Key Impact:</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs px-2 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant={project.color === 'primary' ? 'scientific' : project.color === 'secondary' ? 'biotech' : 'default'} 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleProjectClick(project)}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project Details
                  </Button>
                </div>

                {/* Decorative Element */}
                <div className={`h-1 ${
                  project.color === 'primary' ? 'bg-gradient-primary' :
                  project.color === 'secondary' ? 'bg-gradient-secondary' :
                  'bg-accent'
                }`} />
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-6">
              Interested in collaborating on biotechnology research?
            </p>
            <Button variant="hero" size="lg" className="px-8">
              <ExternalLink className="w-5 h-5" />
              Let's Discuss Research Opportunities
            </Button>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ProjectsSection;