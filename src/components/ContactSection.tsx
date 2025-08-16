import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "rasuti.22@st.niituniversity.in",
      href: "mailto:rasuti.22@st.niituniversity.in",
      color: "primary"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9648141241",
      href: "tel:+919648141241",
      color: "secondary"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/rasuti-1b60a9253",
      href: "https://linkedin.com/in/rasuti-1b60a9253",
      color: "accent"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "India",
      href: "#",
      color: "primary"
    }
  ];

  const collaborationAreas = [
    "Molecular Biology Research",
    "Computational Drug Discovery",
    "Bioinformatics Analysis", 
    "RNA-seq Data Analysis",
    "Biomarker Discovery",
    "Academic Collaborations"
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on biotechnology research or discuss opportunities? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Let's <span className="bg-gradient-secondary bg-clip-text text-transparent">Connect</span>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you're interested in research collaboration, academic discussions, 
                  or exploring opportunities in biotechnology, feel free to reach out. 
                  I'm always excited to connect with fellow researchers and industry professionals.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={index} 
                    className="p-4 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02]"
                  >
                    <a 
                      href={contact.href}
                      className="flex items-center gap-4 group"
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        contact.color === 'primary' ? 'bg-gradient-primary text-primary-foreground' :
                        contact.color === 'secondary' ? 'bg-gradient-secondary text-secondary-foreground' :
                        'bg-accent text-accent-foreground'
                      }`}>
                        {contact.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Collaboration Areas */}
              <div>
                <h4 className="font-heading text-lg font-semibold mb-4">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Research Collaboration Areas
                  </span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {collaborationAreas.map((area, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm rounded-full border border-accent/30"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-gradient-card border-0 shadow-soft animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder="Research collaboration, opportunity, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell me about your research interests, collaboration ideas, or opportunities..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;