
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Monitor, Server, Shield, Headphones, Wrench, Cloud, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Technical Support",
    description: "Comprehensive technical assistance for all your IT needs, from troubleshooting to maintenance.",
    details: "Our technical support team provides 24/7 assistance for hardware troubleshooting, software issues, network problems, and system maintenance. We offer remote and on-site support with guaranteed response times.",
    features: ["24/7 Remote Support", "On-site Visits", "Hardware Troubleshooting", "Software Installation"],
    pricing: "Starting at $99/month"
  },
  {
    icon: Server,
    title: "System Administration",
    description: "Professional server management and network administration services to keep your systems running smoothly.",
    details: "Complete server management including setup, configuration, monitoring, and maintenance. We handle Windows and Linux servers, network infrastructure, and ensure optimal performance.",
    features: ["Server Setup & Config", "Network Management", "Performance Monitoring", "Backup Solutions"],
    pricing: "Starting at $199/month"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with our advanced security solutions and monitoring services.",
    details: "Comprehensive cybersecurity services including threat detection, vulnerability assessments, security audits, and implementation of security protocols to protect your business.",
    features: ["Threat Detection", "Security Audits", "Firewall Management", "Employee Training"],
    pricing: "Starting at $299/month"
  },
  {
    icon: Headphones,
    title: "Help Desk Services",
    description: "24/7 help desk support to resolve user issues quickly and efficiently.",
    details: "Multi-tiered help desk support with ticketing system, remote assistance, and escalation procedures. We provide support via phone, email, and chat.",
    features: ["Ticketing System", "Multi-channel Support", "SLA Guarantees", "Escalation Procedures"],
    pricing: "Starting at $149/month"
  },
  {
    icon: Wrench,
    title: "Software Solutions",
    description: "Custom software development and integration to meet your specific business requirements.",
    details: "Custom software development, legacy system integration, API development, and software consulting to streamline your business processes.",
    features: ["Custom Development", "Legacy Integration", "API Development", "Consulting Services"],
    pricing: "Custom Pricing"
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, setup, and management to modernize your IT infrastructure.",
    details: "Complete cloud services including migration planning, cloud setup, ongoing management, and optimization for AWS, Azure, and Google Cloud platforms.",
    features: ["Cloud Migration", "Multi-platform Support", "Cost Optimization", "24/7 Monitoring"],
    pricing: "Starting at $249/month"
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive support solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{service.pricing}</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedService(service)}
                        className="group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-3">
                          <service.icon className="w-6 h-6 text-primary" />
                          <span>{service.title}</span>
                        </DialogTitle>
                        <DialogDescription className="text-base">
                          {service.details}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-lg font-semibold text-primary">{service.pricing}</span>
                          <Button className="px-6">Get Started</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
