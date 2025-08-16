import { Mail, Phone, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:rasuti.22@st.niituniversity.in",
      label: "Email"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+919648141241",
      label: "Phone"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/rasuti-1b60a9253",
      label: "LinkedIn"
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Bio */}
            <div className="space-y-4">
              <div className="font-heading font-bold text-2xl bg-gradient-hero bg-clip-text text-transparent">
                Rasuti
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Final-year B.Tech Biotechnology student passionate about molecular biology, 
                bioinformatics, and computational drug discovery research.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground hover:scale-110 transition-all duration-300 hover:shadow-medium"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Research Focus */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">
                Research Focus
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Molecular Biology & Genetics</p>
                <p>• Computational Drug Discovery</p>
                <p>• Bioinformatics & Data Analysis</p>
                <p>• Antiviral Research</p>
                <p>• Cancer Biomarker Discovery</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Rasuti. All rights reserved.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for biotechnology research</span>
              </div>
              
              <p className="text-sm text-muted-foreground">
                B.Tech Biotechnology • NIIT University
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;