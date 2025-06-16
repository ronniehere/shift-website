
import { ArrowRight, CheckCircle, Zap, Shield, Users, Mail, Phone, MapPin, Building, Code, Database, Cloud, Lock, Smartphone, Globe, TrendingUp, Award, Target, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-blue-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">shift*</div>
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="text-white/80 hover:text-white transition-colors">Solutions</a>
            <a href="#industries" className="text-white/80 hover:text-white transition-colors">Industries</a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#careers" className="text-white/80 hover:text-white transition-colors">Careers</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              We are 
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent"> shift*</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              shift* is a UK-based technology solutions provider specialising in digital transformation, 
              cloud migration, cybersecurity, and IT infrastructure optimisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="bg-white text-black text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Solutions</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We provide comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Cloud className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Solutions</h3>
                <p className="text-white/80">
                  Seamless cloud migration and optimisation services to modernise your infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-white/80">
                  Advanced security solutions to protect your digital assets and ensure compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Database className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Data & Analytics</h3>
                <p className="text-white/80">
                  Transform your data into actionable insights with our analytics platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 bg-blue-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We serve clients across various industry sectors with specialised expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-black/30 backdrop-blur-md border-blue-500/30 hover:bg-black/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Building className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Financial Services</h3>
                <p className="text-white/70 text-sm">Banking, insurance, and investment solutions</p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-blue-500/30 hover:bg-black/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Globe className="h-10 w-10 text-blue-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Healthcare</h3>
                <p className="text-white/70 text-sm">Digital health and medical technology</p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-blue-500/30 hover:bg-black/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-10 w-10 text-blue-200 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Retail</h3>
                <p className="text-white/70 text-sm">Modern retail and e-commerce platforms</p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-blue-500/30 hover:bg-black/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Code className="h-10 w-10 text-blue-100 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Manufacturing</h3>
                <p className="text-white/70 text-sm">Industry 4.0 and smart manufacturing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Comprehensive technology services to drive your business forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Digital Transformation</h3>
                <p className="text-white/80">
                  Strategic digital transformation to modernise your business operations and processes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Cloud className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
                <p className="text-white/80">
                  Seamless migration of your applications and data to cloud platforms with minimal downtime.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">IT Consulting</h3>
                <p className="text-white/80">
                  Expert guidance and strategic advice to optimise your technology investments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-blue-900/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About shift*</h2>
              <p className="text-white/90 text-lg mb-8">
                Based in the UK, shift* is your trusted partner for digital transformation. 
                We specialise in helping businesses navigate the complexities of modern technology 
                and achieve their digital goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <span className="text-white">UK-based technology expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <span className="text-white">Proven track record of success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <span className="text-white">Comprehensive support services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <span className="text-white">Industry-leading security standards</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80 mb-4">Client Satisfaction</div>
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-4"></div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-white/80">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Careers</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join our growing team and be part of the digital transformation revolution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-black/30 backdrop-blur-md border-blue-500/30 hover:bg-black/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-white/80">
                  Work with cutting-edge technologies and innovative solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-blue-500/30 hover:bg-black/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Growth</h3>
                <p className="text-white/80">
                  Continuous learning and professional development opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-blue-500/30 hover:bg-black/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Briefcase className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Balance</h3>
                <p className="text-white/80">
                  Flexible working arrangements and comprehensive benefits.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
              View Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Ready to start your digital transformation journey? Get in touch with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-white/80">hello@sshift.io</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-300" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-white/80">+44 (0) 20 7946 0958</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="text-white font-medium">Address</div>
                    <div className="text-white/80">London, United Kingdom</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-blue-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-blue-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-blue-400 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-blue-500/30">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">shift*</div>
          <p className="text-white/70 mb-6">UK-based technology solutions provider</p>
          <div className="text-white/50 text-sm">
            © 2024 shift*. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
