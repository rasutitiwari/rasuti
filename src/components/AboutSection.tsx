import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Microscope, Dna, FlaskConical, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Molecular Biology",
      description: "Expertise in PCR, cell culture, and analytical techniques"
    },
    {
      icon: <Dna className="w-6 h-6" />,
      title: "Bioinformatics",
      description: "RNA-seq analysis, differential gene expression, pathway enrichment"
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Drug Discovery",
      description: "Computational screening and molecular docking expertise"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Research Focus",
      description: "Antiviral therapeutics and cancer biomarker discovery"
    }
  ];

  const achievements = [
    { number: "4+", label: "Major Research Projects", color: "primary" },
    { number: "2", label: "Industry Internships", color: "secondary" },
    { number: "5+", label: "Certifications in Bioinformatics & Research Tools", color: "accent" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Personal Story */}
            <div className="animate-slide-up">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground">
                Driven by Curiosity and Innovation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Driven by curiosity and innovation, I have worked across molecular biology, bioinformatics, 
                and computational drug discovery. My research spans antiviral drug screening, host immune 
                response studies, and biomarker discovery in cancer genomics.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I aim to contribute to impactful biotechnology and pharmaceutical research by bridging 
                the gap between wet-lab experimentation and computational analysis. My passion lies in 
                developing innovative solutions that can translate into real-world therapeutic applications.
              </p>
              
              {/* Achievement Badges */}
              <div className="grid grid-cols-1 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="p-4 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className={`text-2xl font-bold ${
                        achievement.color === 'primary' ? 'text-primary' :
                        achievement.color === 'secondary' ? 'text-secondary' :
                        'text-accent-foreground'
                      }`}>
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="animate-scale-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <Card 
                    key={index} 
                    className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4">
                        {highlight.icon}
                      </div>
                      <h4 className="font-heading font-semibold text-lg mb-2 text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div className="animate-fade-in">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
              Research <span className="bg-gradient-secondary bg-clip-text text-transparent">Interests</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Molecular Biology", "Computational Drug Discovery", "Bioinformatics", 
                "Antiviral Research", "Cancer Genomics", "RNA-seq Analysis", 
                "Biomarker Discovery", "Pathway Enrichment", "Host-Pathogen Interactions",
                "Therapeutic Target Identification"
              ].map((interest, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-gradient-secondary text-secondary-foreground hover:bg-secondary-light transition-all duration-300"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;