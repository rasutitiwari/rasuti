import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, ExternalLink, Github, FileText } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    methods: string;
    impact?: string;
    tags: string[];
    color: string;
    fullDescription?: string;
    objectives?: string[];
    results?: string[];
    technologies?: string[];
    challenges?: string[];
    futureWork?: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const mockDetailedProject = {
    ...project,
    fullDescription: project.title.includes("Molecular Docking") 
      ? "This comprehensive computational drug discovery project focused on identifying potential therapeutic compounds against SARS-CoV-2 main protease. Using advanced molecular docking techniques, we screened a extensive library of FDA-approved drugs to evaluate their binding affinity and potential for repurposing as COVID-19 therapeutics."
      : project.title.includes("DEG Identification")
      ? "A systematic bioinformatics analysis of differential gene expression in Non-Small Cell Lung Cancer using high-throughput RNA-sequencing data. This study employed sophisticated statistical methods and pathway analysis to identify potential biomarkers and therapeutic targets for improved NSCLC treatment strategies."
      : project.title.includes("Host Response")
      ? "An in-depth RNA-seq investigation into the molecular mechanisms underlying host immune responses during infectious keratitis progression. This study utilized advanced bioinformatics tools to map immune pathway alterations and identify diagnostic markers for improved clinical management."
      : "A comprehensive database development project aimed at creating a centralized repository for lymphatic filariasis research data. The project involved designing robust entity-relationship models and implementing efficient data management strategies for biomedical research applications.",
    
    objectives: project.title.includes("Molecular Docking")
      ? [
          "Screen FDA-approved drugs against SARS-CoV-2 main protease",
          "Evaluate binding affinities and interaction patterns",
          "Identify promising candidates for drug repurposing",
          "Analyze molecular mechanisms of protein-ligand interactions"
        ]
      : project.title.includes("DEG Identification")
      ? [
          "Identify differentially expressed genes in NSCLC",
          "Perform functional enrichment analysis",
          "Discover potential biomarkers for targeted therapy",
          "Validate findings using statistical methods"
        ]
      : project.title.includes("Host Response")
      ? [
          "Map immune pathway alterations in infectious keratitis",
          "Identify diagnostic markers for clinical applications",
          "Understand host-pathogen interactions",
          "Provide insights for therapeutic development"
        ]
      : [
          "Design comprehensive database schema",
          "Implement efficient data management system",
          "Create user-friendly interface for researchers",
          "Ensure data integrity and security"
        ],
    
    results: project.title.includes("Molecular Docking")
      ? [
          "Successfully identified 20 strong-binding drug candidates",
          "Achieved binding affinities below -8.0 kcal/mol",
          "Generated detailed interaction profiles for each compound",
          "Contributed to ongoing antiviral research efforts"
        ]
      : project.title.includes("DEG Identification")
      ? [
          "Discovered 847 differentially expressed genes",
          "Identified key pathways involved in NSCLC progression",
          "Found potential biomarkers for targeted therapy",
          "Validated results using multiple statistical approaches"
        ]
      : project.title.includes("Host Response")
      ? [
          "Mapped 45 key immune pathways",
          "Identified novel diagnostic markers",
          "Characterized host response mechanisms",
          "Provided therapeutic insights for clinical research"
        ]
      : [
          "Created scalable database architecture",
          "Implemented comprehensive data models",
          "Designed intuitive user interface",
          "Established data management protocols"
        ],
    
    technologies: project.methods.split(", "),
    
    challenges: project.title.includes("Molecular Docking")
      ? [
          "Optimizing computational parameters for accurate docking",
          "Managing large-scale molecular databases",
          "Interpreting complex protein-ligand interactions",
          "Validating computational predictions"
        ]
      : project.title.includes("DEG Identification")
      ? [
          "Handling high-dimensional genomic data",
          "Accounting for batch effects and confounding variables",
          "Selecting appropriate statistical thresholds",
          "Interpreting biological significance of findings"
        ]
      : project.title.includes("Host Response")
      ? [
          "Processing large RNA-seq datasets",
          "Distinguishing host vs pathogen responses",
          "Integrating multi-omics data sources",
          "Translating findings to clinical applications"
        ]
      : [
          "Designing flexible database schema",
          "Ensuring data quality and consistency",
          "Managing complex relationships between entities",
          "Implementing security measures"
        ],
    
    futureWork: project.title.includes("Molecular Docking")
      ? [
          "Experimental validation of identified compounds",
          "Optimization of lead compounds",
          "Investigation of drug combination therapies",
          "Extension to other viral targets"
        ]
      : project.title.includes("DEG Identification")
      ? [
          "Experimental validation of biomarkers",
          "Clinical correlation studies",
          "Development of prognostic models",
          "Integration with treatment response data"
        ]
      : project.title.includes("Host Response")
      ? [
          "Clinical validation of diagnostic markers",
          "Development of point-of-care tests",
          "Investigation of therapeutic targets",
          "Longitudinal disease progression studies"
        ]
      : [
          "Implementation of advanced search features",
          "Integration with external databases",
          "Development of analytical tools",
          "Expansion to other diseases"
        ]
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-foreground pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Full Description */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {mockDetailedProject.fullDescription}
            </p>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Objectives</h3>
            <ul className="space-y-2">
              {mockDetailedProject.objectives.map((objective, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Technologies & Methods</h3>
            <div className="flex flex-wrap gap-2">
              {mockDetailedProject.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Key Results</h3>
            <ul className="space-y-2">
              {mockDetailedProject.results.map((result, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Challenges Addressed</h3>
            <ul className="space-y-2">
              {mockDetailedProject.challenges.map((challenge, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Work */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Future Directions</h3>
            <ul className="space-y-2">
              {mockDetailedProject.futureWork.map((work, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{work}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <Button variant="outline" size="sm">
              <Github className="w-4 h-4" />
              View Code
            </Button>
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4" />
              Research Paper
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;