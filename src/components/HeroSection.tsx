import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/biotech-hero.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Biotechnology Research Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Biotech Enthusiast
              </span>
              <br />
              <span className="text-foreground">
                Molecular Biology &
              </span>
              <br />
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Computational Drug Discovery
              </span>
              <br />
              <span className="text-foreground">Researcher</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Final-year B.Tech Biotechnology student skilled in molecular biology, bioinformatics, 
              and computational drug discovery. Passionate about integrating wet-lab and computational 
              research to drive innovation in life sciences.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" 
               style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-3"
            >
              <ExternalLink className="w-5 h-5" />
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-3 hover:bg-accent/50"
            >
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </div>

          {/* Statistics */}
          <div className="animate-fade-in grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12" 
               style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Major Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">2</div>
              <div className="text-sm text-muted-foreground">Industry Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Scroll to About section"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;