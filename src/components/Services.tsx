
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Monitor, Server, Shield, Headphones, Wrench, Cloud, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Technical Support",
    description: "Comprehensive 24/7 technical assistance for all your IT infrastructure needs.",
    details: "Our expert technical support team provides round-the-clock assistance for hardware troubleshooting, software issues, network problems, and system maintenance. We offer both remote and on-site support with guaranteed response times.",
    features: ["24/7 Remote Support", "On-site Technical Visits", "Hardware Troubleshooting", "Software Installation & Updates", "Network Problem Resolution"],
    pricing: "Starting at $99/month",
    popular: false
  },
  {
    icon: Server,
    title: "System Administration",
    description: "Professional server management and network administration to optimize performance.",
    details: "Complete server management including setup, configuration, monitoring, and maintenance. We handle Windows and Linux servers, network infrastructure, and ensure optimal performance with proactive monitoring.",
    features: ["Server Setup & Configuration", "Network Infrastructure Management", "Performance Monitoring & Optimization", "Automated Backup Solutions", "Security Updates & Patches"],
    pricing: "Starting at $199/month",
    popular: true
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your business from cyber threats.",
    details: "Comprehensive cybersecurity services including threat detection, vulnerability assessments, security audits, and implementation of security protocols to protect your business from evolving cyber threats.",
    features: ["Real-time Threat Detection", "Security Audits & Assessments", "Firewall Management", "Employee Security Training", "Compliance Management"],
    pricing: "Starting at $299/month",
    popular: false
  },
  {
    icon: Headphones,
    title: "Help Desk Services",
    description: "Multi-tiered help desk support to resolve user issues quickly and efficiently.",
    details: "Professional help desk support with ticketing system, remote assistance, and escalation procedures. We provide support via phone, email, chat, and remote desktop assistance.",
    features: ["Multi-tiered Support System", "Ticketing & Case Management", "Multi-channel Support (Phone, Email, Chat)", "SLA Guarantees", "Escalation Procedures"],
    pricing: "Starting at $149/month",
    popular: false
  },
  {
    icon: Wrench,
    title: "Software Solutions",
    description: "Custom software development and integration solutions for your business.",
    details: "Custom software development, legacy system integration, API development, and software consulting to streamline your business processes and improve efficiency.",
    features: ["Custom Software Development", "Legacy System Integration", "API Development & Integration", "Software Consulting", "Process Automation"],
    pricing: "Custom Pricing",
    popular: false
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, setup, and management to modernize your IT infrastructure.",
    details: "Complete cloud services including migration planning, cloud setup, ongoing management, and optimization for AWS, Azure, and Google Cloud platforms with cost optimization strategies.",
    features: ["Cloud Migration Planning", "Multi-platform Support (AWS, Azure, GCP)", "Cost Optimization", "24/7 Cloud Monitoring", "Disaster Recovery"],
    pricing: "Starting at $249/month",
    popular: false
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide scalable, reliable IT solutions tailored to your business needs. 
            From technical support to cybersecurity, we've got you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20 ${
                service.popular ? 'border-primary/30 shadow-lg' : 'hover:shadow-lg'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 ${
                  service.popular ? 'bg-primary/20' : 'bg-primary/10'
                } group-hover:bg-primary/20`}>
                  <service.icon className={`w-7 h-7 ${service.popular ? 'text-primary' : 'text-primary'}`} />
                </div>
                <CardTitle className="text-xl lg:text-2xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="flex items-center justify-between pt-2">
                  <span className={`text-lg font-bold ${service.popular ? 'text-primary' : 'text-primary'}`}>
                    {service.pricing}
                  </span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant={service.popular ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedService(service)}
                        className={`group-hover:bg-primary group-hover:text-white transition-colors ${
                          service.popular ? 'bg-primary text-white' : ''
                        }`}
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-3 text-2xl">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-primary" />
                          </div>
                          <span>{service.title}</span>
                        </DialogTitle>
                        <DialogDescription className="text-lg leading-relaxed">
                          {service.details}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6 mt-6">
                        <div>
                          <h4 className="font-semibold text-lg mb-4 text-gray-900">Key Features:</h4>
                          <div className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-6 border-t bg-gray-50 -mx-6 px-6 py-4">
                          <div>
                            <div className="text-sm text-gray-600">Starting from</div>
                            <div className="text-2xl font-bold text-primary">{service.pricing}</div>
                          </div>
                          <div className="space-y-2">
                            <Button className="w-full px-8" onClick={() => {
                              const element = document.getElementById("contact");
                              element?.scrollIntoView({ behavior: "smooth" });
                            }}>
                              Get Started
                            </Button>
                            <Button variant="outline" className="w-full" onClick={() => {
                              const element = document.querySelector('[data-section="tools"]');
                              element?.scrollIntoView({ behavior: "smooth" });
                            }}>
                              Get Quote
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Our Services?</h3>
            <p className="text-gray-600">Trusted by businesses worldwide</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="font-semibold text-gray-900">99.9% Uptime</div>
              <div className="text-sm text-gray-600">Guaranteed reliability</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">Certified Experts</div>
              <div className="text-sm text-gray-600">Industry professionals</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <div className="font-semibold text-gray-900">24/7 Support</div>
              <div className="text-sm text-gray-600">Always available</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-8 h-8 text-orange-600" />
              </div>
              <div className="font-semibold text-gray-900">&lt; 2hr Response</div>
              <div className="text-sm text-gray-600">Fast resolution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
