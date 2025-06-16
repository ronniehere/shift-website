
import { ArrowRight, CheckCircle, Zap, Shield, Users, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-blue-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">*shift.*</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
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
              Transform Your
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent"> Digital Future</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We help businesses shift into the digital age with cutting-edge solutions, 
              innovative strategies, and unparalleled expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Digital Transformation</h3>
                <p className="text-white/80">
                  Modernize your business processes and embrace digital innovation for sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity Solutions</h3>
                <p className="text-white/80">
                  Protect your digital assets with enterprise-grade security solutions and monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Consulting & Strategy</h3>
                <p className="text-white/80">
                  Expert guidance to develop and implement digital strategies that drive results.
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
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose *shift.*?</h2>
              <p className="text-white/90 text-lg mb-8">
                We're not just another tech company. We're your partners in digital transformation, 
                committed to delivering solutions that make a real difference to your business.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <span className="text-white">10+ Years of Industry Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <span className="text-white">500+ Successful Projects Delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <span className="text-white">24/7 Support & Maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <span className="text-white">Cutting-Edge Technology Stack</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-white/80 mb-4">Uptime Guarantee</div>
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-4"></div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-white/80">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Ready to start your digital transformation? Let's discuss how we can help your business grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-white/80">hello@shift.io</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-300" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-white/80">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="text-white font-medium">Address</div>
                    <div className="text-white/80">123 Innovation Drive, Tech City, TC 12345</div>
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
          <div className="text-2xl font-bold text-white mb-4">*shift.*</div>
          <p className="text-white/70 mb-6">Transforming businesses for the digital future</p>
          <div className="text-white/50 text-sm">
            © 2024 *shift.*. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
