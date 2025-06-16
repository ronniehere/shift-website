
import { ArrowRight, CheckCircle, Zap, Shield, Users, Mail, Phone, MapPin, Building, Code, Database, Cloud, Lock, Smartphone, Globe, TrendingUp, Award, Target, Briefcase, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-blue-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">shift*</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#process" className="text-white/80 hover:text-white transition-colors">Process</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your 
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent"> Growth</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional marketing services for businesses that want to leverage technology for exponential results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
                GET STARTED
                <ArrowRight className="ml-2 h-5 w-5" />
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
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Lead Generation</h3>
                <p className="text-white/80">
                  Our proprietary algorithms identify and engage your ideal customers with precision targeting and personalized outreach.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Full-Funnel Paid Ad Campaigns</h3>
                <p className="text-white/80">
                  Strategic campaigns that guide prospects from awareness to conversion with optimized messaging at every touchpoint.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Conversion-Focused Landing Pages</h3>
                <p className="text-white/80">
                  High-performance landing pages designed to convert visitors into leads with persuasive copy and frictionless UX.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3">CRM & Email Automation Setup</h3>
                <p className="text-white/80">
                  Streamlined systems that nurture leads, automate follow-ups, and provide actionable insights for your sales team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-blue-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/30 backdrop-blur-md border-blue-500/30 hover:bg-black/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-4">01</div>
                <h3 className="text-xl font-semibold text-white mb-3">Audit</h3>
                <p className="text-white/80">
                  We analyze your current marketing efforts, identify opportunities, and pinpoint areas for improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-blue-500/30 hover:bg-black/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-4">02</div>
                <h3 className="text-xl font-semibold text-white mb-3">Strategy</h3>
                <p className="text-white/80">
                  We develop a tailored plan that aligns with your business goals and leverages the right channels.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-blue-500/30 hover:bg-black/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-4">03</div>
                <h3 className="text-xl font-semibold text-white mb-3">Scale</h3>
                <p className="text-white/80">
                  We execute, measure, and continuously optimize to drive sustainable growth for your business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Client Results</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">300%</div>
                <p className="text-white/80 text-sm">
                  Increase in qualified leads for TechNova's enterprise software
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">8.5x</div>
                <p className="text-white/80 text-sm">
                  ROAS for GrowthMax's e-commerce campaigns
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">65%</div>
                <p className="text-white/80 text-sm">
                  Reduction in cost per acquisition for SaaS clients
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">12+</div>
                <p className="text-white/80 text-sm">
                  Months of consistent growth for our average client
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Growth?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Schedule a free strategy call to discuss how we can help your business.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-black/50 backdrop-blur-md border-blue-500/30">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="block text-white font-medium mb-2">Your Name</Label>
                      <Input 
                        type="text" 
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-blue-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label className="block text-white font-medium mb-2">Your Email</Label>
                      <Input 
                        type="email" 
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-blue-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="block text-white font-medium mb-2">Company Name</Label>
                    <Input 
                      type="text" 
                      className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-blue-400"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <Label className="block text-white font-medium mb-2">Service Needed</Label>
                    <select className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400">
                      <option value="">Select a service</option>
                      <option value="lead-generation">AI-Powered Lead Generation</option>
                      <option value="paid-ads">Full-Funnel Paid Ad Campaigns</option>
                      <option value="landing-pages">Conversion-Focused Landing Pages</option>
                      <option value="crm-automation">CRM & Email Automation Setup</option>
                    </select>
                  </div>

                  <div>
                    <Label className="block text-white font-medium mb-2">Your Message</Label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-blue-400 resize-none"
                      placeholder="Tell us about your business goals..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    GET STARTED
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-blue-500/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">shift*</div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-white/70 hover:text-white transition-colors">About</a>
                <a href="#services" className="block text-white/70 hover:text-white transition-colors">Services</a>
                <a href="#process" className="block text-white/70 hover:text-white transition-colors">Process</a>
                <a href="#contact" className="block text-white/70 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Terms of Service</a>
              </div>
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

export default Index;
