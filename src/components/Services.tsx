
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Server, Shield, Headphones, Wrench, Cloud } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Technical Support",
    description: "Comprehensive technical assistance for all your IT needs, from troubleshooting to maintenance.",
  },
  {
    icon: Server,
    title: "System Administration",
    description: "Professional server management and network administration services to keep your systems running smoothly.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with our advanced security solutions and monitoring services.",
  },
  {
    icon: Headphones,
    title: "Help Desk Services",
    description: "24/7 help desk support to resolve user issues quickly and efficiently.",
  },
  {
    icon: Wrench,
    title: "Software Solutions",
    description: "Custom software development and integration to meet your specific business requirements.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, setup, and management to modernize your IT infrastructure.",
  },
];

export const Services = () => {
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
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
