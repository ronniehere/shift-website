
import { ArrowRight, Code, Database, Zap, Gamepad2, Cog, CheckCircle, Rocket, Monitor, Smartphone, Cloud, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const SoftwareDevelopment = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/#contact');
  };

  const services = [
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Launch your startup idea fast with a Minimum Viable Product that validates your concept and attracts investors.",
      features: ["Rapid prototyping", "Core feature implementation", "User testing ready", "Scalable architecture"]
    },
    {
      icon: Monitor,
      title: "Custom Software Solutions",
      description: "Tailored software applications built to solve your specific business challenges and streamline operations.",
      features: ["Custom web applications", "Desktop software", "API integrations", "Database design"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Eliminate repetitive tasks and boost productivity with intelligent automation solutions.",
      features: ["Process automation", "Data synchronization", "Email automation", "Task scheduling"]
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Engaging games and interactive experiences for web, mobile, and desktop platforms.",
      features: ["Web-based games", "Interactive simulations", "Educational games", "Gamification systems"]
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Cross-platform mobile applications that work seamlessly across iOS and Android devices.",
      features: ["Progressive Web Apps", "Mobile-responsive design", "Offline functionality", "Push notifications"]
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Modern cloud-native applications with scalability, security, and performance built-in.",
      features: ["Cloud deployment", "Microservices architecture", "Real-time features", "Auto-scaling"]
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "AI/ML", icon: "🤖" },
    { name: "Database", icon: "🗄️" },
    { name: "Cloud", icon: "☁️" },
    { name: "Mobile", icon: "📱" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a detailed roadmap."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "We design the user experience and technical architecture for optimal performance."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your software using best practices with continuous testing and feedback."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your software and provide ongoing maintenance and feature updates."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate('/')}>
            shift*
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="/#services" className="text-white/80 hover:text-white transition-colors">Marketing</a>
            <span className="text-blue-400 font-medium">Software</span>
            <a href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</a>
            <a href="/#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex gap-4">
            <Button 
              asChild 
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              <a href="https://calendly.com/abe-sshift/15-minute-meeting-for-shift" target="_blank" rel="noopener noreferrer">
                Schedule a Call
              </a>
            </Button>
            <Button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build Your
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Software</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From MVPs to enterprise solutions - we develop custom software that drives your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
                START YOUR PROJECT
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-3"
              >
                <a href="https://calendly.com/abe-sshift/15-minute-meeting-for-shift" target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Software Development Services</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We build everything from simple automation tools to complex enterprise applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-white/80 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/70 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-blue-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-white/80 text-lg">
              Modern tech stack for reliable, scalable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-black/30 backdrop-blur-md border-blue-500/30 hover:bg-black/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <p className="text-white text-sm font-medium">{tech.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Development Process</h2>
            <p className="text-white/80 text-lg">
              Structured approach to deliver quality software on time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your Software?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
              START PROJECT
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-3"
            >
              <a href="https://calendly.com/abe-sshift/15-minute-meeting-for-shift" target="_blank" rel="noopener noreferrer">
                Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-blue-500/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4 cursor-pointer" onClick={() => navigate('/')}>
                shift*
              </div>
              <p className="text-white/70 text-sm">
                Transforming ideas into powerful software solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <a href="/#services" className="block text-white/70 hover:text-white transition-colors text-sm">Marketing</a>
                <span className="block text-blue-400 text-sm">Software Development</span>
                <a href="/#process" className="block text-white/70 hover:text-white transition-colors text-sm">Process</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="/blog" className="block text-white/70 hover:text-white transition-colors text-sm">Blog</a>
                <a href="/#contact" className="block text-white/70 hover:text-white transition-colors text-sm">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Get Started</h4>
              <Button 
                asChild 
                variant="outline" 
                size="sm"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                <a href="https://calendly.com/abe-sshift/15-minute-meeting-for-shift" target="_blank" rel="noopener noreferrer">
                  Schedule Call
                </a>
              </Button>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-blue-500/30">
            <div className="text-white/50 text-sm">
              © 2024 shift*. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SoftwareDevelopment;
